import { createContext } from "react";
import { Post } from "services/models/post";
import { PostActionTypes } from "types/post";

type PostsContextValue = {
  posts: Post[];
  loading: boolean;
  dispatch: React.Dispatch<PostActionTypes>;
};

export const PostsContext = createContext<PostsContextValue>({
  posts: [],
  loading: true,
  dispatch: () => true,
});
