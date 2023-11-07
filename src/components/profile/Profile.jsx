import { Navigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import { Link } from "react-router-dom";
import { baseImgUrl, baseUrl, useBlogContext } from "../providers/BlogProvider";
import { useState } from "react";
import AddBlog from "../addblog/AddBlog";
import ConfirmationModal from "../modal/ConfirmationModal";

const Profile = () => {
    const { user, handleLogout } = useUserContext();
    const { blogs, removeBlog } = useBlogContext();
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

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <article className="row mt-3">
            <section className="col-12">
            </section>
            <section className="col-md-4">
                <img src="https://picsum.photos/300/300" className="img-fluid rounded-circle" alt="User Profile Picture" />
            </section>
            <section className="col-md-8">
                <h1>{user.user.email}</h1>
                <hr />
                <p><strong>Email: <span className="text-info">{user.user.email}</span></strong></p>
            </section>
            <section className="d-flex justify-content-end mb-5">
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
            </section>


            <article className="container p-5">
                <section className="text-center mb-5">
                    <h1>My Blogs</h1>
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
                                    <button className="btn btn-outline-danger mt-4 p-3 h-25" data-blog-id={b.id} onClick={handleDeleteItemSelected}>Delete</button>
                                </section>
                            </article>
                        ))
                    }
                </article>
                <section className="mt-5">
                    <h1 className="text-center m-5">Create Blog</h1>
                    <AddBlog />
                </section>
                <ConfirmationModal title="Delete Blog" message={`Are you sure you wish to delete the blog with an id: ${blogId} ?`} onConfirm={handleDeleteBlog} />
            </article>
        </article>
    );
};

export default Profile;