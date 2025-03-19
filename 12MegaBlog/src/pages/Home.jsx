import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { userPhoto } from '../store/authSlice';
import service from '../appwrite/config';
import authService from '../appwrite/auto';

function Home() {
    const [posts, setPosts] = useState([]);
    const[userId,setUserId]=useState("");
    const[profilePhoto1,setProfilePhoto]=useState(null);
    const [loading, setLoading] = useState(true);
    const status = useSelector((state) => (state.auth.status))
    const dispatch=useDispatch();

    console.log("math")
   
    useEffect(() => {
        if (status) {
            authService.getCurrentUser().then((data) => {
                if (data) setUserId(data.$id);
            });
        }
    }, [status]); 
    
    useEffect(()=>{

        if(userId){
            service.getProfilePhoto(userId).then((data)=>{
                if(data?.profilePhoto){
                    setProfilePhoto(data.profilePhoto);
                    dispatch(userPhoto(data.profilePhoto));
                    localStorage.setItem("profilePhoto",data.profilePhoto);
                    // console.log("local storege",localStorage.getItem("profilePhoto"))
                    console.log("ii am working hard", data.profilePhoto)
                    //getting null/old value because React's state updates asynchronously,
                    // setProfilePhoto(data.profilePhoto) updates the state, 
                    console.log("setProfilePhoto ",profilePhoto1)//but React doesn’t apply the change immediately. runs before the state has been updated, so it still logs the old value instead of the new one.
                }
            });
        }
        
    },[userId,dispatch])

   
       
        

    console.log(status)


   
    useEffect(() => {
        try {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
                setLoading(false);
            });
        } catch (error) {
            alert("post not fatch from server",error)
        }

        //profile img
        
    }, []);

    if (posts.length === 0 && status && !loading) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        no posts available
                    </h1>
                </Container>
            </div>
        )
    }
    if (!status) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        login to see the Post
                    </h1>
                </Container>
            </div>
        )
    }

    if (loading) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className="mx-auto w-full h-screen max-w-sm rounded-md border border-blue-300 p-4">
                        <div className="flex animate-pulse space-x-4">
                            <div className="size-10 rounded-full bg-gray-200"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 rounded bg-gray-200"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                                        <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                                    </div>
                                    <div className="h-2 rounded bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
