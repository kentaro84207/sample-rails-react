import { Post } from "services/models/post";
export const LOAD_POST = "LOAD_POST";
export const CREATE_POST = "CREATE_POST";
export const REMOVE_POST = "REMOVE_POST";

interface LoadPostAction {
  type: typeof LOAD_POST;
  payload: Post[];
}
interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post | { title: string };
}

interface RemovePostAction {
  type: typeof REMOVE_POST;
  payload: Post;
}

export type PostActionTypes =
  | CreatePostAction
  | RemovePostAction
  | LoadPostAction;
