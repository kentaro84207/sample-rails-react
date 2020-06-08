import { useEffect, useState } from "react";
import { Post } from "services/models/post";
import axios from "axios";

const url = "http://localhost:3000/api/v1/posts";

const useLoadPosts = () => {
  const [initPosts, setInitPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        const items: Post[] = res.data.data;
        setInitPosts(items);
        setError(null);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    load();
  }, []);

  return { initPosts, loading, error };
};

export default useLoadPosts;
