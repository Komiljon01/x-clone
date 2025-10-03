import { Post as PostType } from "@prisma/client";
import { Post } from ".";

type TPost = PostType & {
  user: { displayName: string | null; username: string; img: string | null };
  _count: { likes: number; comments: number; rePosts: number };
  likes: { id: number }[];
  rePosts: { id: number }[];
  saves: { id: number }[];
};

type TComments = {
  comments: TPost[];
  postId: number;
  username: string;
};

export default function Comments({ comments, postId, username }: TComments) {
  return (
    <div className="">
      <form className="flex items-center justify-between gap-4 p-4">
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-green-800 text-xl">
          K
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent p-2 text-xl outline-none"
          placeholder="Post your reply"
        />
        <button className="rounded-full bg-white px-4 py-2 font-bold text-black">
          Reply
        </button>
      </form>

      {comments.map((comment) => (
        <Post key={comment.id} post={comment} type="comment" />
      ))}
    </div>
  );
}
