import { createContext } from "react";
import { Post } from "services/models/post";

type PostsContextValue = {
  posts: Post[];
  loading: boolean;
  // FIXME
  dispatch: any;
};

export const PostsContext = createContext<PostsContextValue>({
  posts: [],
  loading: true,
  dispatch: () => true,
});
