import { Post } from ".";

export default function Comments() {
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
      
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
