import { createContext, useContext, useEffect, useState } from "react";

export const baseUrl = "https://localhost:7116/api";
export const baseImgUrl = "https://localhost:7116";

const BlogContext = createContext();

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    return context;
};

const getBlogs = async () => {
    const result = await fetch(`${baseUrl}/blog`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    });
    return await result.json();
}

const getBlogById = async (id) => {
    const result = await fetch(`${baseUrl}/blog/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    });
    return await result.json();
}

const postBlog = async (blog) => {
    const form = new FormData();
    for (const [key, value] of Object.entries(blog)) {
        form.append(key, value);
    }

    const result = await fetch(`${baseUrl}/blog`, {
        method: "POST",
        headers: {
            "authorization": `bearer ${localStorage.getItem("token")}`
        },
        body: form
    });

    return await result.json();
}

const deleteBlog = async (id) => {
    const result = await fetch(`${baseUrl}/blog/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    });
    return await result.json();
}

export const BlogProvider = ({children}) => {
    const [blogs, setBlogs] = useState();

    const findBlogById = async (id) => {
        return await getBlogById(id);
    }

    const addBlog = async (blog) => {
        const newBlog = await postBlog(blog);
        setBlogs (prevValue => ([
            ...prevValue,
            newBlog
        ]));

        return newBlog;
    }

    const removeBlog = async (id) => {
        const deletedBlog = await deleteBlog(id);
        setBlogs (prevValue => prevValue.filter(b => b.id !== deletedBlog.id));
        return deleteBlog;
    }

    useEffect (() => {
        const fetchData = async () => {
            setBlogs (await getBlogs());
            
        }

        fetchData();
    }, [])

    return (
        <BlogContext.Provider value={{blogs, findBlogById, addBlog, removeBlog}}>
            {children}
        </BlogContext.Provider>
    )
    
}