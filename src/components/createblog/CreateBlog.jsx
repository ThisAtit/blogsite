import AddBlog from "../addblog/AddBlog";
import { useUserContext } from "../providers/UserProvider";

const CreateBlog = () => {
    const { user } = useUserContext();

    return (
        <article className="container p-5">
            {/* {
                user?.token === undefined ? <></> : */}
                    <section className="mt-5">
                        <h1 className="text-center m-5">Create your own blog</h1>
                        <AddBlog />
                    </section>
            {/* } */}
        </article>
    );
};

export default CreateBlog;