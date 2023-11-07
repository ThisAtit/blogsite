import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { baseImgUrl, useBlogContext } from "../providers/BlogProvider";


const BlogDetails = () => {
    const { blogId } = useParams();
    const { findBlogById } = useBlogContext();
    const [blog, setBlog] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setBlog(await findBlogById(blogId));
        }
        fetchData();
    }, [])

    return (
        <article className="container">
            <article className="row p-5" key={blog?.id}>
                <figure className="col-4">
                    <img className="w-100" style={{ borderRadius: "10px" }} src={`${baseImgUrl}/${blog?.imageCover}`} alt="Blog" />
                </figure>
                <section className="col-8">
                    <h2 className="m-0">{blog?.title}</h2>
                    <p><i>{blog?.author}</i></p>
                    <p>{blog?.description}</p>
                </section>
            </article>
        </article>


    );
};

export default BlogDetails;