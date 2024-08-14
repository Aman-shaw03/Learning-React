import conf from "../conf/conf.js"

/* 1 */
// here we are creating service ..which is like a setup for our functions 
// which we will export after creating to use separately with appwrite or any other BaaS or DB

import { Client, Account, ID} from 'appwrite';

export class AuthServices {
    client = new Client()
    account;

    /* 3 */
    // in docs they have created the client and account , but we didn't as thinking beind this is 
    // we someone create a Object with new => a function creates this client and account , so we setup our 
    //constructor which create this client and account (everytime some create a object with new keyword)
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    /* 4 */
    // now we have to create a function for login .why?(so we write such code that it does not depend on any 1 service 
    // but rather our code creates a wrapper for the service , so in future we change from Appwrite to firebase => can easily change it )

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email , password, name)

            if (userAccount) {
                // we will call some other function here => already details DB me hai to Login krwa do
                return this.logIn({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
            //specifically throw error , so we can show it on Component
            
        }
    }

    async logIn({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    // suppose user gets on the Home page directly , and we have to check if the user details we have or not 
    // we will deal with it in the frontend part

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log(`APPwrite server :: getCurrentUser Error :: `, error);
        }
        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(`APPwrite server :: logOut Error :: `, error);
        }
    }


}

/* 2 */
// export default AuthServices
// since we exporting a class , so first we have to create a object with this class => so we can access all function inside it 

const authservices = new AuthServices()
export default authservices
// here we solved the above problem
