export interface PostType {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface CreatePostType {
  user_id: number;
  title: string;
  body: string;
}
