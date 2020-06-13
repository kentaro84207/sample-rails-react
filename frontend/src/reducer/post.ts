import { Post } from "services/models/post";
import {
  CREATE_POST,
  REMOVE_POST,
  PostActionTypes,
  LOAD_POST,
} from "types/post";

const getMaxId = (arr: Post[]): number => {
  return arr.reduce((a, b) => a.id > b.id ? a : b).id;
};

const postReducer: React.Reducer<Post[], PostActionTypes> = (posts, action) => {
  switch (action.type) {
    case LOAD_POST:
      return action.payload;
    case CREATE_POST:
      const post = { title: action.payload.title };
      const length = posts.length;
      const id = length === 0 ? 1 : getMaxId(posts) + 1;
      return [...posts, { id, ...post }];
    case REMOVE_POST:
      return [];
    default:
      throw new Error();
  }
};

export default postReducer;
