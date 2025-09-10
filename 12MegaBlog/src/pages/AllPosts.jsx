import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard, Container } from '../components'


function AllPosts() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPost(posts.documents.reverse())
                console.log("alii post ", posts);
            } 
        }).catch()
    }, [])
    return (
        <div className='py-8 w-full'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.length > 0 ? post.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    )): (
                        <p className="text-center w-full">No posts available.</p>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
