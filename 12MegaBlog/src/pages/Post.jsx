import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Heart } from "lucide-react";
import parse from "html-react-parser";

import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";

export default function Post() {
    const [post, setPost] = useState(null);
    const [likeCount, setLikeCount] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData)?.userData;
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    const formatNumber = (num, precision = 0) => {
        const map = [
            { suffix: 'T+', threshold: 1e12 },
            { suffix: 'B+', threshold: 1e9 },
            { suffix: 'M+', threshold: 1e6 },
            { suffix: 'K+', threshold: 1e3 },
            { suffix: '', threshold: 1 },
        ];
        const found = map.find((x) => Math.abs(num) >= x.threshold);
        return found
            ? (num / found.threshold).toFixed(precision) + found.suffix
            : num;
    };

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((data) => {
                if (data) {
                    setPost(data);
                    setLikeCount(formatNumber(data.like));
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
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
        <div className="py-10 px-4 bg-gray-50 text-[#1a1a1a]">
            <Container>
                {/* Post Header */}
                <div className="max-w-4xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center">
                        {post.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-between mb-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <span>Author:</span>
                            <span className="font-semibold">{post.username || "Unknown"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            <span>{likeCount} likes</span>
                        </div>
                    </div>

                    {post.featuredImages && (
                        <img
                            src={appwriteService.getFilePreview(post.featuredImages)}
                            alt={post.title}
                            className="w-full max-h-[450px] object-cover rounded-xl shadow-md"
                        />
                    )}
                </div>

                {/* Author controls */}
                {isAuthor && (
                    <div className="max-w-4xl mx-auto flex justify-end gap-4 mb-6">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                                <FaEdit />
                                Edit
                            </Button>
                        </Link>
                        <Button
                            className="flex items-center gap-2 text-red-600 hover:text-red-800"
                            onClick={deletePost}
                        >
                            <FaTrash />
                            Delete
                        </Button>
                    </div>
                )}

                {/* Post Body */}
                <div className="max-w-4xl mx-auto prose prose-lg prose-p:leading-relaxed prose-img:rounded-md prose-headings:font-semibold">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
