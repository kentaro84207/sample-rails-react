import { Post } from "services/models/post";
import { CREATE_POST, REMOVE_POST, PostActionTypes } from "types/post";

const postReducer: React.Reducer<Post[], PostActionTypes> = (posts, action) => {
  switch (action.type) {
    case CREATE_POST:
      const post = { title: action.payload.title };
      const length = posts.length;
      const id = length === 0 ? 1 : posts[length - 1].id + 1;
      return [...posts, { id, ...post }];
    case REMOVE_POST:
      return {
        ...posts,
        title: action.payload.title,
      };
    default:
      throw new Error();
  }
};

export default postReducer;
