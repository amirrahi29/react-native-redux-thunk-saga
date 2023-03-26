import axios from "axios";

export const loadUsersApi =async()=>
    await axios.get("https://jsonplaceholder.typicode.com/posts");
