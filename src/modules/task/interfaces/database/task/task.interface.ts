export type CommentType = {
  author: string;
  likes: number;
  dislikes: number;
  date: Date;
  replies: {
    author: string;
    likes: number;
    dislikes: number;
    date: Date;
  }[];
};

export interface ITask {
  _id?: string;
  title: string;
  subject: string;
  description: string;
  document?: ArrayBuffer;
  userCreatedId: string;
  userAttachedId?: string;
  dueDate: Date;
  difficulty?: number;
  estimatedTime: number;
  createdAt: String;
  comments?: {
    author: string;
    likes: number;
    dislikes: number;
    date: Date;
    replies: CommentType[];
  }[];
}
