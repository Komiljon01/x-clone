import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import InfiniteFeed from "./InfiniteFeed";

export default async function Feed({
  userProfileId,
}: {
  userProfileId?: string;
}) {
  const { userId } = await auth();

  if (!userId) return;

  const whereCondition = userProfileId
    ? { userId: userProfileId, parentPostId: null }
    : {
        parentPostId: null,
        userId: {
          in: [
            userId,
            ...(
              await prisma.follow.findMany({
                where: { followerId: userId },
                select: { followingId: true },
              })
            ).map((follow) => follow.followingId),
          ],
        },
      };

  const posts = await prisma.post.findMany({
    where: whereCondition,
    include: {
      user: { select: { username: true, displayName: true, img: true } },
      rePost: {
        include: {
          user: { select: { username: true, displayName: true, img: true } },
          _count: { select: { likes: true, comments: true, rePosts: true } },
          likes: { where: { userId: userId }, select: { id: true } },
          rePosts: { where: { userId: userId }, select: { id: true } },
          saves: { where: { userId: userId }, select: { id: true } },
        },
      },
      _count: { select: { likes: true, comments: true, rePosts: true } },
      likes: { where: { userId: userId }, select: { id: true } },
      rePosts: { where: { userId: userId }, select: { id: true } },
      saves: { where: { userId: userId }, select: { id: true } },
    },
    take: 3,
    skip: 0,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      <InfiniteFeed userProfileId={userProfileId} />
    </div>
  );
}
