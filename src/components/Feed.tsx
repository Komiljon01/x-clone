import { prisma } from "@/prisma";
import Post from "./Post";

export default async function Feed() {
  const posts = await prisma.post.findMany();
  console.log(posts);

  return (
    <div className="">
      {posts.map((post) => (
        <div key={post.id}>
          <Post />
        </div>
      ))}
    </div>
  );
}
