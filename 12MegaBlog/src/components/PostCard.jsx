import React, { useEffect, useState } from 'react'
import service, { Service } from '../appwrite/config'
import { data, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ID } from 'appwrite';

function PostCard({ $id, title, content, featuredImages, $createdAt })//all parameters {$id,title, featuredImage} connected appwriteService appwriteService id ver written as allways $id
{

    const[postIds,setPostIds]=useState([]);    
    const[userId,setUserId]=useState();    
    const[photoIds,setPhotoIds]=useState([]);    
    const[photoId,setPhotoId]=useState();    
    const[profilePhoto,setProfilePhoto]=useState(null);
    const defalutImg="https://www.vhv.rs/dpng/d/509-5097256_new-svg-image-login-logo-user-icon-hd.png";

    // const isAuthor = post && userData ? post.userId === userData.$id : false;
    const date = new Date($createdAt);
    const CreateionDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    // console.log(CreateionDate);
    

    //profile image seting
    useEffect(()=>{
        service.getPosts().then((data)=>{
          console.log("all users",data);
        
        setPostIds(data.documents.map((e) => e.userId))
        })    
        service.getProfilePhotos().then((data)=>{
          setPhotoIds(data.documents.map((e)=>e.$id))
        })
      },[]);

      useEffect(() => {
       if (postIds.length>0) {
         console.log("Updated postId:", postIds); // This logs the updated state correctly
        //  console.log("photo ids",photoIds)
        

        //  service.getProfilePhoto(userId).then((data)=>{
        //     if(data?.profilePhoto){
        //         setProfilePhoto(data.profilePhoto);
        //         dispatch(userPhoto(data.profilePhoto));
        //         localStorage.setItem("profilePhoto",data.profilePhoto);
        //         // console.log("local storege",localStorage.getItem("profilePhoto"))
        //         console.log("ii am working hard", data.profilePhoto)
        //         //getting null/old value because React's state updates asynchronously,
        //         // setProfilePhoto(data.profilePhoto) updates the state, 
        //         console.log("setProfilePhoto ",profilePhoto1)//but React doesn’t apply the change immediately. runs before the state has been updated, so it still logs the old value instead of the new one.
        //     }
        // });

            // let condition=false;
            service.getPost($id).then((data)=>{
                const userid=data.userId;
                setUserId(userid);

                photoIds.forEach((photoid)=>{
                    if(photoid===userid){
                        service.getProfilePhoto(userid).then((data)=>{
                            // console.log("profile dtata ",data)

                            if(data?.profilePhoto){
                                setProfilePhoto(data.profilePhoto);
                                console.log("profile photo slug",profilePhoto);
                               
                            }
                        });
                        setPhotoId(photoId)

                    }
                })
    
            })
    
        // serProfilephotot();

        

       }
    }, [postIds,photoId,userId]);

   

   




    if((photoId===userId)){
        return(
            <div className="box max-w-full  max-h-[365px] bg-red-100 rounded-xl p-4 flex gap-x-1 overflow-hidden overflow-y-scroll">
            <div className="w-1/5">
                <div className="h-8 w-8 rounded-full bg-gray-300 animate-pulse"></div>
            </div>
            <div className="w-4/5 flex flex-col justify-start">
                <div className="flex items-center gap-x-4">
                    <div className="h-6 w-32 bg-gray-300 animate-pulse rounded"></div>
                    <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
                </div>
    
                <div className="h-20 w-full bg-gray-300 animate-pulse rounded my-2"></div>
    
                <div className="w-full h-40 bg-gray-300 animate-pulse rounded-xl"></div>
            </div>
        </div>
        );
       

    }
    return (
        <Link to={`/post/${$id}`}>
            <div className='box max-w-full max-h-[365px] bg-red-100 rounded-xl p-4 flex gap-x-1 overflow-hidden '>
                <div className='w-1/5 '>
                    <img
                        src={profilePhoto ? service.getPhotoPreview(profilePhoto) : defalutImg}
                        alt='User profile'
                        className='h-8 rounded-full border-2  border-red-200 shadow-2xl '
                    />
                </div>
                <div className='box w-4/5 flex flex-col justify-start overflow-y-auto'>
                    <div className='flex items-center gap-x-4'>
                        <h2 className='text-xl text-black font-bold '>{title}</h2>
                        <p className='font-light text-gray-700'>{CreateionDate}</p>
                    </div>
    
                    <p className='text-black text-start p-0 m-0 font-light font-serif' dangerouslySetInnerHTML={{ __html: content }} />
                    <img
                        src={service.getFilePreview(featuredImages)}
                        alt={title}
                        className='rounded-xl w-auto max-h-[600px] object-cover'
                    />
                </div>
            </div>
        </Link>
    );
    
}

export default PostCard
