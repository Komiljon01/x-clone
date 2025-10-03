import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import CustomImage from "./Image";

export default async function Recommendations() {
  const { userId } = await auth();

  if (!userId) return;

  const follwingIds = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });

  const followedUserIds = follwingIds.map((c) => c.followingId);

  const friendRecommendations = await prisma.user.findMany({
    where: {
      id: { not: userId, notIn: followedUserIds },
      followings: { some: { followerId: { in: followedUserIds } } },
    },
    take: 3,
    select: { id: true, img: true, displayName: true, username: true },
  });

  return (
    <div className="border-borderGray flex flex-col gap-4 rounded-2xl border-[1px] p-4">
      {friendRecommendations.map((person) => (
        <div key={person.id} className="flex items-center justify-between">
          {/* IMAGE AND USER INFO */}
          <div className="flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-blue-200 text-white">
              <CustomImage
                path={person.img || "xclone/general/no-avatar.webp"}
                alt={person.displayName + " avatar"}
                w={100}
                h={100}
                tr={true}
              />
            </div>
            <div className="">
              <h1 className="text-md font-bold">
                {person.displayName || person.username}
              </h1>
              <span className="text-textGray text-sm">@{person.username}</span>
            </div>
          </div>
          {/* BUTTON */}
          <button className="cursor-pointer rounded-full bg-white px-4 py-1 font-semibold text-black">
            Follow
          </button>
        </div>
      ))}

      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
}
