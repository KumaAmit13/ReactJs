import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm({ post }) {
    console.log("post from .jsx", post)
    const [date, setDate] = useState();
    // const updatedDate = new Date(post.$updatedAt);
    // const indiaTime = updatedDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric',
    //     month: 'long',
    //     day: 'numeric' });

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id|| "",
            content: post?.content || "kabhi nhi",
            status: post?.status || "active",
        }
    });

    const navigate = useNavigate();
    const userData = useSelector(state => state.auth.userData);
    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null;
            console.log("imgae , ", post.featuredImages)
            const updatedDate = new Date(post.$updatedAt);
            const indiaTime = updatedDate.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata', year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            setDate(indiaTime);


            if (file) {
                console.log("imgae , ", post.featuredImages)
                appwriteService.deleteFile(post.featuredImages)
            }
            const dbPost = await appwriteService.updatePost(post.$id,
                { ...data, featuredImages: file ? file.$id : undefined });
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }

        }

        else {
            const file = await appwriteService.uploadFile(data.image[0]);
            console.log("i am here",data.image[0]);

            if (file) {
                // const fileId=file.$id;
                data.featuredImages = file.$id;
                console.log("user data ",userData);
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }


    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') /*return value
        .trim()
        .toLocaleLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g,'-')
        .replace(/\s/g,'-')*/
        // return ""
        {
            const slug = value.toLocaleLowerCase().replace(/ /g, '-')
            setValue('slug', slug)
            return slug
        }


    }, []);

    useEffect(() => {

        const subscription = watch((value, { name }) => {
            //https://www.react-hook-form.com/api/useform/watch/
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        });

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (


        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">

            <div className="w-2/3 px-2">
                {date}

                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImages)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
