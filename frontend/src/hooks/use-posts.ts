import { useEffect, useState } from 'react';
import { Post } from 'services/models/post';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/posts';

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        const items: Post[] = res.data.data;
        setPosts(items);
        setError(null);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    load();
  }, []);

  return { posts, loading, error };
};

export default usePosts;
