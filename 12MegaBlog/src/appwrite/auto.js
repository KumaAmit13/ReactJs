import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
   client = new Client();
   accoutn;
   constructor() {
      this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
      this.accoutn = new Account(this.client);
   }

   async createAccount({ email, password, name, }) {
      try {
         const userAccount = await this.accoutn.create(ID.unique(), email, password, name);
         if (userAccount) {
            alert("Account created successfully!");

            // call another method
            return this.login({ email, password });
         } else {
            return userAccount;
         }
      } catch (error) {
         if (error.code === 409) {
            alert("User already exists. Try logging in instead.");
         }
         else {
            throw error;

         }
      }
   }

   async login({ email, password }) {
      try {
         return await this.accoutn.createEmailPasswordSession(email, password);
      } catch (error) {
         throw error;
      }
   }

   async getCurrentUser() {
      try {
         return await this.accoutn.get();

      } catch (error) {
         console.log("Appwrite Service :: getcurrentUser :: error ", error);

      }
      return null;

   }

   async logout() {
      try {
         await this.accoutn.deleteSessions();

      } catch (error) {
         console.log("Appwrite Service :: Logout :: error ", error);

      }
   }

   async createRecovery(email,url){
      try {
         await this.accoutn.createRecovery(email,url)

      } catch (error) {
         console.log("Appwrite Service :: CreateRecovery :: error ", error);
      }
   }
   async passwordRecovery(UserID,secret,password,confirmPassword){
      try {
         await this.accoutn.updateRecovery(UserID,secret,password);
      } catch (error) {
         console.log("Appwrite Service :: PassworedRecovery :: error ", error);

      }
   }

   async updatePassword(newPassword,oldPassword=null){
      try {
         await this.accoutn.updatePassword(newPassword,oldPassword);
      } catch (error) {
         console.log("Appwrite Service :: PassworedRecovery :: error ", error);

      }
   }

   async updateEmail(newEmail,password){
      try {
         await this.accoutn.updateEmail(newEmail,password)
      } catch (error) {
         console.log("Appwrite Service ::updateEmail  :: error ", error);

      }
   }
   async updateName(newEmail,password){
      try {
         await this.accoutn.updateName(newName)
      } catch (error) {
         console.log("Appwrite Service ::updateName  :: error ", error);

      }
   }
 
   async updatePhone(newPhone,password){
      try {
         await this.accoutn.updatePhone(newPhone,password)
      } catch (error) {
         console.log("Appwrite Service ::  :: error ", error);

      }
   }
  
  



}
const authService = new AuthService();
export default authService
