import { Link } from "react-router-dom";
import { baseImgUrl, baseUrl, useBlogContext } from "../providers/BlogProvider";


const Home = () => {
    const { blogs } = useBlogContext();


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
                            </section>
                        </article>
                    ))
                }
            </article>
            
        </article>
    );
};

export default Home;