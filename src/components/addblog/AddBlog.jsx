import { useState } from "react";
import { useBlogContext } from "../providers/BlogProvider";
import InfoModal from "../modal/InfoModal";

const AddBlog = () => {
    const { addBlog } = useBlogContext();
    const [blog, setBlog] = useState({ title: undefined, author: undefined, description: undefined, imageCover: undefined, date: undefined});
    const [postResult, setPostResult] = useState();

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.name === "file" ? event.target.files[0] : event.target.value;

        setBlog(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const handleSubmit = async () => {
            const result = await addBlog(blog);
            setPostResult(result);
            event.target.reset();
            document.getElementById("infoModalButton").click();
        }

        handleSubmit();
    }

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col">
                        <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" name="title" id="title" required />
                                <div id="titleHelp" className="form-text">The title of the blog.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="author" className="form-label">Author</label>
                                <input type="text" className="form-control" name="author" id="author" required />
                                <div id="authorHelp" className="form-text">The author of the blog.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" name="description" id="description" rows={6} required ></textarea>
                                <div id="descriptionHelp" className="form-text">The description of the blog.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input type="file" className="form-control" accept="image/*" id="image" name="file" required></input>
                                <div id="imageHelp" className="form-text">The image of the blog.</div>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Save</button>
                        </form>
                    </div>
                </div>
            </section>
            <InfoModal title="Blog Added" message={`The Blog: "${postResult?.title}" has been added.`} />
        </>

    );
};

export default AddBlog;