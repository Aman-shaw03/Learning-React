import conf from "../conf/conf";
// now we want to create some more service so it can handle our project main Operations 
// since our Project is a Blog APP , so getpost , createpost, editPost , deletePost will needed in this service

import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Services{
    client = new Client()
    databases;
    bucket;
    // storage is Bucket

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, userId, status}){
        try {
            // this whole dbID and CollectionID is mentioned in DOcs , so i given it, Check DOCS
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log(`APPwrite server :: createPost Error :: `, error);
        }
    }

    async updatePost( slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(`APPwrite server :: updatePost Error :: `, error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true // we will handle this true in frontend
        } catch (error) {
            console.log(`APPwrite server :: deletePost Error :: `, error);
            return false  // we will handle this true in frontend
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(`APPwrite server :: getPost Error :: `, error);
            return false // frontend will handle
        }
    }

    // now since in appwrite setup , i have created indexes (with Status) i can use them to query a array to list them
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log(`APPwrite server :: getPosts Error :: `, error);
            return false // frontend will handle
        }
    }

    // now create some service to handle actual file

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(`APPwrite server :: uploadFile Error :: `, error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
                // where we gonna get the fileID? when we upload file , we send id.unique() 
                //that we will use it frontend to pass it to featuredImage => watch it out , when creating FE
            )
        } catch (error) {
            console.log(`APPwrite server :: deleteFile Error :: `, error);
            return false
        }
    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
        
    }
    // we didnt create this file previewer with async await , just because its fast and in DOCS its mention to use it without promise / async await
}

const services = new Services()
export default services