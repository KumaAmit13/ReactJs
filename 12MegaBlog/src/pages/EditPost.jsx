import React,{useEffect,useState} from 'react'
import { Container,PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post,setPosts]=useState(null);
    
    
    const {slug}=useParams();
    const navigate=useNavigate();
     console.log("checking slug ",slug);
     console.log("checking post ",post);


    useEffect(()=>{
        if(slug){
            console.log("checking slug ",slug);
            
            appwriteService.getPost(slug).then((post)=>{
                console.log(post);

                if (post) {
                    setPosts(post);
                    console.log(post);
                    
                }
            })
        }
        else{
            navigate("/");
        }
    },[slug,navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPost
