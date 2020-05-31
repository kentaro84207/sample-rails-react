import { createContext } from "react";
import { Post } from "services/models/post";

type PostsContextValue = {
  posts: Post[];
  loading: boolean;
};

export const PostsContext = createContext<PostsContextValue>({
  posts: [],
  loading: true,
});
