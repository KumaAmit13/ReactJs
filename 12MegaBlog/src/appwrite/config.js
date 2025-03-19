import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImages, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//slug unique id
                {
                    title,
                    content,
                    featuredImages,
                    status,
                    userId,
                    
                }
            )
        } catch (error) {
            console.log("name : ", title,": Slug : ", slug," : content :  ", content," : featuredImages : " ,featuredImages," : sataus : " ,status," : userId : ", userId)
            console.log("Appwrite Service :: createPost :: error ", error);
            throw new Error("Failed to create post");


        }
    }


    async updateProfilePhoto(slug, profilePhoto ) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProfilCOLLECTIONId,
                slug,//slug unique id
                {
                    profilePhoto,
                }
            )
        } catch (error) {
            console.log("profilePhoto : ", profilePhoto)
            console.log("Appwrite Service :: updateProfilePhoto :: error ", error);
            throw new Error("Failed to create post");


        }
    }
    async getProfilePhoto(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProfilCOLLECTIONId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite Service :: getProfilePhoto :: error ", error);
            throw new Error("Failed to create post");


        }
    }

    async getProfilePhotos() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProfilCOLLECTIONId,
                
            )

        } catch (error) {
            console.log("Appwrite Service :: getPsot :: error ", error);
            return false

            // throw new Error("Failed to fetch posts");
        }

    }

    // async updateProfilePhoto

    async updatePost(slug, { title, content, featuredImages, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//slug unique id
                {
                    title,
                    content,
                    featuredImages,
                    status
                }

            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error ", error);
            // throw new Error("Failed to update post");


        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;

        } catch (error) {
            console.log("Appwrite Service :: deletePsot :: error ", error);
            return false;

        }

    }

    async getPost(slug) {
        try {
            return this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

        } catch (error) {
            console.log("Appwrite Service :: getPsot :: error ", error);
            return null;

        }

    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )

        } catch (error) {
            console.log("Appwrite Service :: getPsot :: error ", error);
            return false

            // throw new Error("Failed to fetch posts");
        }

    }

    //file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwritebucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error ", error);
            return false;

        }
    }
    async uploadProfilePhoto(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteProfilBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error ", error);
            return false;

        }
    }
    getPhotoPreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteProfilBucketId,
            fileId,
        )
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwritebucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error ", error);
            return false;

        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwritebucketId,
            fileId,
        )
    }

}

const service = new Service();
export default service;