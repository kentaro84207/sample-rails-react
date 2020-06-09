import { Post } from "services/models/post";
export const CREATE_POST = "CREATE_POST";
export const REMOVE_POST = "REMOVE_POST";

interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post;
}

interface RemovePostAction {
  type: typeof REMOVE_POST;
  payload: Post;
}

export type PostActionTypes = CreatePostAction | RemovePostAction;
