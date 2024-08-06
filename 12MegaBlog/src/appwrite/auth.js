import conf from "../conf/conf.js";
import {Client, Account , ID} from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            // i have not used the ID from appwrite so the error is thrown regarding invlid id
            const userAccount = await this.account.create(ID.unique(),email, password , name)
            if (userAccount) {
                // create a new method that create "login"
                return this.logIn({email, password});
            } else{
                return userAccount;
                // frontend will handle this
            }
        } catch (error) {
            throw error;
        }
    }

    async logIn({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`APPwrite server :: getCurrentUser Error :: `, error);
        }

        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(`APPwrite server :: getCurrentUser Error :: `, error);
        }
    }
}
// we create a class and with the help of it anyone can create a instance and use it so we export it 
// and create a contructor function and it intialise when creating a instance and set some variables for better syntax 
//used async and await to create a Account and pass some parameter and ID from appwrite

// create different method to Login , createAccoutn , logout , get current user 
const authservice = new AuthService()

export default authservice