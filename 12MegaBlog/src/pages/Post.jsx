import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { Heart } from "lucide-react";
import service from "../appwrite/config";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const[likeCount,setLikeCount]=useState(null);

    const userData = useSelector((state) => state.auth.userData);

    
   // formet like count k,m,b 
    function formatNumber(num, precision = 0) {
        const map = [
          { suffix: 'T+', threshold: 1e12 },
          { suffix: 'B+', threshold: 1e9 },
          { suffix: 'M+', threshold: 1e6 },
          { suffix: 'K+', threshold: 1e3 },
          { suffix: ' ', threshold: 1 },
        ];

        const found = map.find((x) => Math.abs(num) >= x.threshold);
        console.log("found",found);
        if (found) {
          const formatted = found.threshold>999 ? (num / found.threshold).toFixed(precision) + found.suffix :(num / found.threshold).toFixed(0) + found.suffix ;
          return formatted;
        }

        return num;
      }


    const isAuthor = post && userData ? post.userId === userData.$id : false;
    useEffect(()=>{
        useEffect ? service.getPost(slug).then((data) => {
            const likeCount = data.like;
            setLikeCount(formatNumber(likeCount))
            console.log("dekh edhsr aaray", likeCount);
            console.log("LikedUser field type:", typeof data.LikedUser);
        }):null;
    },[])

    useEffect(() => {
        if (slug) {

            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImages);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex-row   mb-4 relative border-0 rounded-xl p-2">
                    <img
                        src={post.featuredImages ? appwriteService.getFilePreview(post.featuredImages) : "https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain"}  // Fallback image
                        alt={post.title}
                        className="rounded-xl  w-auto  max-h-[550px] object-cover  m-auto"
                    />


                    {isAuthor && (
                        <div className="mt-4 ">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className=" flex justify-center p-0 m-0">
                    <span className="font-extralight font-serif">liked by</span>
                    <Heart

                        className={"text-red-500 fill-red-500 ml-1 mr-1"}
                    />
                    <div className="font-stretch-150% text-xl  font-serif"> {likeCount} users</div>
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}