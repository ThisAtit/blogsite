import { Link } from "react-router-dom";
import { baseImgUrl, baseUrl, useBlogContext } from "../providers/BlogProvider";
import { useState } from "react";
import AddBlog from "../addblog/AddBlog";
import ConfirmationModal from "../modal/ConfirmationModal";
import { useUserContext } from "../providers/UserProvider";

const Home = () => {
    const { blogs, removeBlog } = useBlogContext();
    const { user } = useUserContext
    const [blogId, setBlogId] = useState();

    const handleDeleteItemSelected = (event) => {
        const blogId = event.target.dataset.blogId;
        setBlogId(blogId)
        document.getElementById("confirmationModalButton").click();
    }

    const handleDeleteBlog = () => {
        const handleDelete = async () => {
            const result = await removeBlog(blogId);
        }
        handleDelete();
    }

    return (
        <article className="container p-5">
            <section className="text-center mb-5">
                <h1>All Blogs</h1>
            </section>
            <article className="row">
                {
                    blogs?.map(b => (
                        <article className="row mt-5" key={b.id}>
                            <figure className="col-4">
                                <Link className="btn" to={`/blog/details/${b.id}`}>
                                    <img className="w-100" style={{ borderRadius: "10px" }} src={`${baseImgUrl}/${b.imageCover}`} alt="Blog" />
                                </Link>
                            </figure>
                            <section className="col-7">
                                <h2 className="m-0">{b.title}</h2>
                                <p><i>{b.author}</i></p>
                                <p>{b.description}</p>
                            </section>
                            <section className="col-1 ">
                                <Link className="btn btn-outline-primary mt-4 p-3 h-25" to={`/blog/details/${b.id}`}>Details</Link>
                                {/* {user?.token === undefined ? <></> : */}
                                <button className="btn btn-outline-danger mt-4 p-3 h-25" data-blog-id={b.id} onClick={handleDeleteItemSelected}>Delete</button>
                                {/* } */}
                            </section>

                        </article>
                    ))
                }
            </article>
            <section className="mt-5">
                <h1 className="text-center m-5">Create your own Blog</h1>
                <AddBlog />
            </section>
            <ConfirmationModal title="Delete Blog" message={`Are you sure you wish to delete the blog with an id: ${blogId} ?`} onConfirm={handleDeleteBlog} />
        </article>
    );
};

export default Home;