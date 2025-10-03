import Link from "next/link";
import PostInteractions from "./PostInteractions";
import PostInfo from "./PostInfo";
import { Post as PostType } from "@prisma/client";
import { format } from "timeago.js";
import CustomImage from "./Image";

type UserInfo = {
  displayName: string | null;
  username: string;
  img: string | null;
};

type TInteractions = { likes: number; comments: number; rePosts: number };

type PostWithDetails = PostType & {
  user: { displayName: string | null; username: string; img: string | null };
  rePost?:
    | (PostType & {
        user: UserInfo;
        _count: TInteractions;
        likes: { id: number }[];
        rePosts: { id: number }[];
        saves: { id: number }[];
      })
    | null;
  _count: TInteractions;
  likes: { id: number }[];
  rePosts: { id: number }[];
  saves: { id: number }[];
};

export default function Post({
  type,
  post,
}: {
  type?: "status" | "comment";
  post: PostWithDetails;
}) {
  const originalPost = post.rePost || post;

  return (
    <div className="border-borderGray border-y-[1px] p-4">
      {/* POST TYPE */}
      {post.rePostId && (
        <div className="text-textGray from-bold mb-2 flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#71767b"
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>
          <span>{post.user.displayName} reposted</span>
        </div>
      )}

      {/* POST CONTENT */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* AVATAR */}
        <div
          className={`${
            type === "status" && "hidden"
          } text-md relative flex h-10 w-10 overflow-hidden rounded-full bg-yellow-400 text-white`}
        >
          <CustomImage
            path={originalPost.user.img || "xclone/general/no-avatar.webp"}
            alt=""
            w={100}
            h={100}
            tr={true}
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col gap-2">
          {/* TOP */}
          <div className="flex w-full justify-between">
            <Link
              href={`/${originalPost.user.username}`}
              className="flex gap-4"
            >
              <div
                className={`${
                  type !== "status" && "hidden"
                } relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white`}
              >
                <CustomImage
                  path={
                    originalPost.user.img || "xclone/general/no-avatar.webp"
                  }
                  alt="image"
                  w={80}
                  h={80}
                />
              </div>
              <div
                className={`flex flex-wrap items-center gap-2 ${
                  type === "status" && "flex-col !items-start gap-0"
                }`}
              >
                <h1 className="text-md font-bold">
                  {originalPost.user.displayName}
                </h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @{originalPost.user.username}
                </span>
                {type !== "status" && (
                  <span className="text-textGray">
                    {format(originalPost.createdAt)}
                  </span>
                )}
              </div>
            </Link>

            <PostInfo />
          </div>

          {/* TEXT & MEDIA */}
          <Link
            href={`/${originalPost.user.username}/status/${originalPost.id}`}
          >
            <p className={`${type === "status" && "text-lg"}`}>
              {originalPost.desc}
            </p>
          </Link>

          {/* <CustomImage
            path={post.img || "xclone/general/no-avatar.webp"}
            alt="img"
            w={600}
            h={600}
          /> */}

          {type === "status" && (
            <span className="text-textGray">9:29 PM · Sep 29, 2025</span>
          )}

          <PostInteractions
            count={originalPost._count}
            isLiked={!!originalPost.likes.length}
            isRePosted={!!originalPost.rePosts.length}
            isSaved={!!originalPost.saves.length}
          />
        </div>
      </div>
    </div>
  );
}
