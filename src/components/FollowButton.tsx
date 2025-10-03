"use client";

export default function FollowButton({
  userId,
  isFollowed,
}: {
  userId: string;
  isFollowed: boolean;
}) {
  return (
    <button className="cursor-pointer rounded-full bg-white px-4 py-2 font-bold text-black transition-colors hover:bg-white/90">
      {isFollowed ? "Unfollow" : "Follow"}
    </button>
  );
}
