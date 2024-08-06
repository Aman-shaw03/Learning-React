import conf from "../conf/conf.js";
import {Client, ID, Databases, Storage, Query} from "appwrite"


export class Service {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
    // there is some error here
    // Appwrite serive :: createPost :: error AppwriteException: Invalid `documentId` param:
    //  Parameter must contain at most 36 chars. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. 
    //  Can't start with a special char on line 23
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
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
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage, 
                    status
                }
            )
        } catch (error) {
            console.log(`APPwrite server :: updatePost Error :: `, error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug  
            )
            return true;
        } catch (error) {
            console.log(`APPwrite server :: deletePost Error :: `, error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(`APPwrite server :: getPost Error :: `, error);
            return false
        }
    }
    
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log(`APPwrite server :: getPosts Error :: `, error);
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(`APPwrite server :: uploadFile Error :: `, error);
            return false
        }
    }
    // from upload file we create our file ID which we use to delete file and create 

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log(`APPwrite server :: deleteFile Error :: `, error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}
const service = new Service()
export default service