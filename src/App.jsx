import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "./components/providers/UserProvider";
import { BlogProvider} from "./components/providers/BlogProvider";

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import BlogDetails from "./components/addblog/BlogDetails";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <BlogProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/blog/details/:blogId" element={<BlogDetails />} />
            </Routes>
          </Layout>
        </BlogProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
