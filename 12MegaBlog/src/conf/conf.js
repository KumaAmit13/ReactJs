const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITER_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITER_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITER_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITER_COLLECTION_ID),
    appwritebucketId:String(import.meta.env.VITE_APPWRITER_BUCKET_ID),
    appwriteProfilBucketId:String(import.meta.env.VITE_APPWRITER_profilBUCKET_ID),
    appwriteProfilCOLLECTIONId:String(import.meta.env.VITE_APPWRITER_profilePhotoCOLLECTION_ID),
    
};

export default conf;