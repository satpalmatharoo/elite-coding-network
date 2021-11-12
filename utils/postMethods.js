import axios from "axios";
import mainUrl from "./mainUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const Axios = axios.create({
  mainUrl: `${mainUrl}/api/posts`,
  headers: { Authorization: cookie.get("token") },
});

export const submitNewPost = async (
    text,
    location,
    picUrl,
    setPosts,
    setNewPost,
    setError
  ) => {
    try {
      const res = await Axios.post("/", { text, location, picUrl });
  
      setPosts((prev) => [res.data, ...prev]);
      setNewPost({ text: "", location: "" });
    } catch (error) {
      const errorMsg = catchErrors(error);
      setError(errorMsg);
    }
  };