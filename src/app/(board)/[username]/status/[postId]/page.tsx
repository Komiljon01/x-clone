import { Comments, Image } from "@/components";
import Post from "@/components/Post";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function StatusPage({
  params,
}: {
  params: Promise<{ username: string; postId: string }>;
}) {
  const { postId } = await params;
  const { userId } = await auth();

  if (!userId) return;

  const post = await prisma.post.findFirst({
    where: { id: Number(postId) },
    include: {
      user: { select: { username: true, displayName: true, img: true } },
      _count: { select: { likes: true, comments: true, rePosts: true } },
      likes: { where: { userId: userId }, select: { id: true } },
      rePosts: { where: { userId: userId }, select: { id: true } },
      saves: { where: { userId: userId }, select: { id: true } },
      comments: {
        include: {
          user: { select: { username: true, displayName: true, img: true } },
          _count: { select: { likes: true, comments: true, rePosts: true } },
          likes: { where: { userId: userId }, select: { id: true } },
          rePosts: { where: { userId: userId }, select: { id: true } },
          saves: { where: { userId: userId }, select: { id: true } },
        },
      },
    },
  });

  if (!post) return notFound();

  return (
    <div className="">
      <div className="sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md">
        <Link href="/">
          <Image path="xclone/icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="text-lg font-bold">Post</h1>
      </div>
      <Post type="status" post={post} />
      <Comments
        comments={post.comments}
        postId={post.id}
        username={post.user.username}
      />
    </div>
  );
}
