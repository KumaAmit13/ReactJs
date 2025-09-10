import React, { useEffect, useState } from 'react'
import service, { Service } from '../appwrite/config'
import { data, Link } from 'react-router-dom'
import { Heart, Share2 } from "lucide-react"
import { useDispatch, useSelector } from 'react-redux';
import { ID } from 'appwrite';
import authService from '../appwrite/auto';

function PostCard({ $id, title, content, featuredImages, $createdAt })//all parameters {$id,title, featuredImage} connected appwriteService appwriteService id ver written as allways $id
{

    const [postIds, setPostIds] = useState([]);
    const dispatch = useDispatch();
    const [userId, setUserId] = useState();
    const [continue1, setContinue] = useState(true);
    const [loginUserId, setLoginUserId] = useState();
    const [photoIds, setPhotoIds] = useState([]);
    const [photoId, setPhotoId] = useState();
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [liked, setLiked] = useState(false)
    const [likedUaser, setLikedUaser] = useState([])
    const [currentLikedCount, setCurrentLikedCount] = useState("0");
    const [hovered, setHovered] = useState(false);
    const [featuredImage, setfeaturedImage] = useState("");
    const defalutImg = "https://www.vhv.rs/dpng/d/509-5097256_new-svg-image-login-logo-user-icon-hd.png";


    // const isAuthor = post && userData ? post.userId === userData.$id : false;
    const date = new Date($createdAt);
    const CreateionDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    // console.log(CreateionDate);


    //formet like count k,m,b 
    // function formatNumber(num, precision = 1) {
    //     const map = [
    //       { suffix: 'T', threshold: 1e12 },
    //       { suffix: 'B', threshold: 1e9 },
    //       { suffix: 'M', threshold: 1e6 },
    //       { suffix: 'K', threshold: 1e3 },
    //       { suffix: '', threshold: 1 },
    //     ];

    //     const found = map.find((x) => Math.abs(num) >= x.threshold);
    //     console.log("found",found);
    //     if (found) {
    //       const formatted = found.threshold>999 ? (num / found.threshold).toFixed(precision) + found.suffix :(num / found.threshold).toFixed(0) + found.suffix ;
    //       return formatted;
    //     }

    //     return num;
    //   }

    //profile image seting
    useEffect(() => {
        service.getPosts().then((data) => {
            // console.log("all users", data, $id);
            // data.documents.forEach((e) => (console.log(e.title, "like ", e.like)));


            setPostIds(data.documents.map((e) => e.userId))
        })
        service.getProfilePhotos().then((data) => {
            setPhotoIds(data.documents.map((e) => e.$id))
        })
        authService.getCurrentUser().then((loginUser) => {
            setLoginUserId(loginUser.$id)

        });


        // service.updatePostLikedUsers($id,"chai or code2").then((data)=>{
        // //     console.log("updated array",data)
        // // });
    }, []);

    useEffect(() => {
        if (postIds.length > 0) {
            // console.log("Updated postId:", postIds); // This logs the updated state correctly
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
            service.getPost($id).then((data) => {
                // console.log("1 post data", data.featuredImages);//we are going to use post featuredImages 
                setfeaturedImage(data.featuredImages)
                const userid = data.userId;
                setUserId(data.userId);

                //check user liked this post or not
                const array = data.LikedUser
                setLikedUaser(data.LikedUser)
                authService.getCurrentUser().then((loginUser) => {
                    setContinue(false);
                    if ((data.LikedUser).includes(loginUserId)) {
                        setLiked(true);
                    }
                    console.log("liked refresh", array);
                });




                photoIds.forEach((photoid) => {
                    if (photoid === userid) {
                        service.getProfilePhoto(userid).then((data) => {
                            // console.log("profile dtata ",data)

                            if (data?.profilePhoto) {
                                setProfilePhoto(data.profilePhoto);
                                // console.log("profile photo slug", profilePhoto);

                            }
                        });
                        setPhotoId(photoId)

                    }
                })

            })
            // dispatch((userLike([$id,currentLikedCount])));

            // serProfilephotot();

            // console.log("featuredImage", featuredImage)



        }
    }, [postIds, photoId, userId]);


    useEffect(() => {
        service.getPost($id).then((data) => {
            const likeCount = data.like;
            setCurrentLikedCount(likeCount)
            // console.log("dekh edhsr aaray", data.LikedUser);
            // console.log("LikedUser field type:", typeof data.LikedUser);
        })


    }, [liked])


    


    //like handle

    const debounce=(fn, delay)=> {
    let timer;
  return function (...args) {
    clearTimeout(timer);         // clear previous timer
    timer = setTimeout(() => {
      fn.apply(this, args);      // run function after delay
    }, delay);
  };
}
    const likeHandler = async () => {
        // console.log("likehandler onclick")
        // console.log("id of post ", $id);


        const likes = liked ? currentLikedCount - 1 : currentLikedCount + 1;
        setCurrentLikedCount(likes)


        if (!liked) {
            try {
                // console.log(loginUserId)
                await service.updatePostLikedUsers($id, loginUserId);

            } catch (error) {
                console.log("error when user tried to liked post", error)
            }
        }
        else {
            try {
                // console.log(likedUaser)
                const afterDislikeUserIds = likedUaser.filter((userid) => userid !== loginUserId);
                setLikedUaser.length > 0 &&
                    await service.updatePostUnlikedUser($id, afterDislikeUserIds);
                console.log("dislike successfull new user ids", afterDislikeUserIds)
            } catch (error) {
                alert("errors whille like or dislike post", error);

            }
        }
        //    console.log("user id card",userId)

        // console.log("login user", loginUserId)
        //  const currentLike=Number(document.getElementById($id).textContent);
        //  console.log("currentLike",currentLike)
        await service.updateLikeCount($id, likes);
        setLiked(!liked);


    }

    const debounceLikeHandler=debounce(likeHandler,550)





    //shareBtn
     const handleShare = async () => {
  const shareData = {
    title: title,
    text: "Check My New Post",
    url: `${window.location.href}post/${$id}`,  // ✅ now it's the real URL
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log("Share cancelled or failed:", err);
    }
  } else {
    // fallback: copy link
    await navigator.clipboard.writeText(`${window.location.href}/post/${$id}`);
    alert("🔗 Link copied to clipboard!");
  }
};




    if ((photoId === userId && continue1)) {
        return (
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
        <>

            <div className='hover:scale-105'>

                <Link to={`/post/${$id}`}>
                    <div className='box max-w-full max-h-[365px] bg-red-100 rounded-xl p-4 flex gap-x-1 overflow-hidden transform  transition duration-300'>
                        <div className='w-1/5 '>
                            <img
                                loading="lazy"
                                src={profilePhoto ? service.getPhotoPreview(profilePhoto) : defalutImg}
                                alt='User profile'
                                className='h-8 rounded-full border-2  border-red-200 shadow-2xl '
                            />
                        </div>
                        <div className='box w-4/5 flex flex-col justify-start overflow-y-auto '>
                            <div className='flex items-center gap-x-4 '>
                                <h2 className='text-xl text-black font-bold'>{title}</h2>
                                <p className='font-light text-gray-700'>{CreateionDate}</p>
                            </div>

                            <p className='text-black text-start p-0 m-0 font-light font-serif' dangerouslySetInnerHTML={{ __html: content }} />
                            <img
                                loading="lazy"
                                src={service.getFilePreview(featuredImages)}
                                alt={title}
                                className='rounded-xl w-auto max-h-[600px] object-cover'
                            />
                        </div>

                    </div>
                </Link>
                <div
                    onClick={() => debounceLikeHandler()}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="flex  flex-row items-center  space-x-2 px-2 rounded-lg justify-between p-1 pl-3 pr-3  cursor-pointer  transition "
                >

                    <span className='flex gap-0.5'>

                        <Heart
                            // size={hovered ? 30 : 24}

                            className={`${liked ? "text-red-500 fill-red-500" : "text-gray-500 "} hover:scale-110 `}
                        />
                        <span className="text-gray-700 " id={$id}>{currentLikedCount}</span>
                        {/* <span> */}
                    </span>


                    <span className='hover:scale-110'>
                        <Share2
                            size={24}
                            onClick={handleShare}
                            className='text-gray-500 '

                        />
                    </span>

                    {/* </span> */}

                </div>
            </div>

        </>

    );

}

export default PostCard
