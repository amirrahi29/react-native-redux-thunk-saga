import axios from "axios";

export const loadPostsApi =async()=>
    await axios.get("https://jsonplaceholder.typicode.com/posts");
