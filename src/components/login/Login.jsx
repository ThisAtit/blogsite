import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";

const Login = () => {
    const { handleLogin } = useUserContext();
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState();

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setLoginInfo(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const handleSubmit = async () => {
            const success = handleLogin(loginInfo);
            if (success) {
                navigate("/");
            }
        }
        handleSubmit();
    }
    
    return (
        <>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
                            <h1>Login</h1>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" />
                            </div> <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password" />
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;
