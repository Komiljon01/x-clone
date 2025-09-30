import { Feed, Image } from "@/components";
import Link from "next/link";

export default function UserPage() {
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="sticky top-0 z-10 flex items-center gap-8 bg-[#00000084] p-4 backdrop-blur-md">
        <Link href="/">
          <Image path="xclone/icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="text-lg font-bold">Komiljon</h1>
      </div>

      {/* INFO */}
      <div className="">
        {/* COVER & AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="relative aspect-[3/1] w-full">
            <Image
              path="xclone/general/post.jpeg"
              alt=""
              w={600}
              h={200}
              tr={true}
            />
          </div>

          {/* AVATAR */}
          <div className="absolute left-4 flex aspect-square w-1/5 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-black bg-green-800 text-4xl">
            K
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500">
            <Image path="xclone/icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500">
            <Image path="xclone/icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-gray-500">
            <Image path="xclone/icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="rounded-full bg-white px-4 py-2 font-bold text-black">
            Follow
          </button>
        </div>

        {/* USER DETAILS */}
        <div className="flex flex-col gap-2 p-4">
          {/* USERNAME & HANDLE */}
          <div className="">
            <h1 className="text-2xl font-bold">Komiljon</h1>
            <span className="text-textGray text-sm">@komiljon22</span>
          </div>
          <p>Frontend developer</p>

          {/* JOB & LOCATION & DATE */}
          <div className="text-textGray flex gap-4 text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                path="xclone/icons/userLocation.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span>Uzbekistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Image path="xclone/icons/date.svg" alt="date" w={20} h={20} />
              <span>Joined May 2025</span>
            </div>
          </div>

          {/* FOLLOWINGS & FOLLOWERS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">45</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">81</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEED */}
      <Feed />
    </div>
  );
}
