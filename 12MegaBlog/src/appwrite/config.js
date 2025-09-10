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
            console.log("name : ", title, ": Slug : ", slug, " : content :  ", content, " : featuredImages : ", featuredImages, " : sataus : ", status, " : userId : ", userId)
            console.log("Appwrite Service :: createPost :: error ", error);
            throw new Error("Failed to create post");


        }
    }


    async updateProfilePhoto(slug, profilePhoto) {
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
    updateLikeCount = async (slug, likes) => {//slug means post/document id
        try {

            // Increment like count
            // const updatedLikes = isliked ? currentLikes - 1 : currentLikes + 1;

            console.log("config like is working")
            // Update the document
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    like: likes,
                }
            );

            console.log("Like count updated successfully!");
        } catch (error) {
            console.error("Error updating like count:", error);
        }
    };

    async updatePostLikedUsers(slug, userId) {
        try {
            const document = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                 slug);    
            console.log("Fetched document:", document);
            console.log("is array document:", Array.isArray(document.LikedUser));
    
            let likedUsersArray = [];
    
            // Ensure LikedUser is an array
            if (Array.isArray(document.LikedUser)) {
                likedUsersArray = document.LikedUser;
            }
             else if (document.LikedUser && typeof document.LikedUser === "object") {
                likedUsersArray = Object.values(document.LikedUser); // Convert object to array
                console.log("is likeduser document:", Array.isArray(likedUsersArray));

            }
    
            // Prevent duplicate likes
            if (!likedUsersArray.includes(userId)) {
                likedUsersArray.push(userId);
            }
            else{
                return false
                
            }
    
            // Update the document
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    LikedUser: likedUsersArray,
                }
            );
    
            console.log("Updated document:", likedUsersArray);
            return likedUsersArray;
    
        } catch (error) {
            console.log("Error while updating PostLikedUsers:", error);
            return false;
        }
    }

    async updatePostUnlikedUser(slug,userIds){
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    LikedUser: userIds,
                }
            );
            console.log("updatePostUnlikedUser with new user ids array",userIds);
        } catch (error) {
            console.log("error while user dislike method updatePostUnlikedUser",error)
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
        return this.bucket.getFileView(
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
        return this.bucket.getFileView(
            conf.appwritebucketId,
            fileId,
        )
    }

    // Service method
   getFileView(fileId) {
    return this.bucket.getFileView(
        conf.appwritebucketId,
        fileId
    );
 }


    

}

const service = new Service();
export default service;