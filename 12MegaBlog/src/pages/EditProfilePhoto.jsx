import React, { useState } from 'react'
import { Input, Button } from '../components'
import { useController, useForm } from 'react-hook-form'
import service from '../appwrite/config'
import { useDispatch } from 'react-redux'
import { userPhoto } from '../store/authSlice'
import authService from '../appwrite/auto'



function EditProfilePhoto() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [photoID, setPhotoID] = useState(null);


    const onUpload = async (data) => {
        const filePath = data.photo[0];
        console.log("i am here",data.photo[0])
        try {
            if (!filePath) {
                console.error("no file selected");
                return
            }

            //upload in storage
            const userData=await authService.getCurrentUser();
            // const imgData={
            //     slug:userData.email,
            //     profilePhoto:filePath
            // }
            const uploadResponse = await service.uploadProfilePhoto(filePath);
            console.log(" file uploaded : ", uploadResponse);

            //update in db
            const updatedProfile = await service.updateProfilePhoto(userData.$id,uploadResponse.$id);
            console.log("Profile updated:", updatedProfile);

            alert("Profile photo updated successfully!");

        } catch (error) {
            console.error("Error uploading profile photo:", error);
            alert("Failed to upload profile photo. Please try again.");
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onUpload)}>
                <div className='flex justify-center items-center'>
                    <Input
                        label="Featured Image :"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("photo", { required: true })}
                    />
                    {errors.photo?.type === "required" && (<h3 className='text-red-300'>upload a valid profile Photo...</h3>)}
                    <Button type='submit'>upload</Button>
                </div>
            </form>
        </>
    )
}

export default EditProfilePhoto
