import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import Post from "./Post";

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

  const posts = await prisma.post.findMany({ where: whereCondition });

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
