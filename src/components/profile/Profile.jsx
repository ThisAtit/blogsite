import { Navigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";

const Profile = () => {
    const {user, handleLogout} = useUserContext();

    if (!user){
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
    </article>
    );
};

export default Profile;