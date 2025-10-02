"use client";

import CustomImage from "@/components/Image";
import { useRouter } from "next/navigation";

export default function PostModal() {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  return (
    <div className="absolute top-0 left-0 z-20 flex h-screen w-screen justify-center bg-[#293139a6]">
      <div className="mt-12 h-max w-[600px] rounded-xl bg-black px-8 py-4">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={closeModal}>
            X
          </div>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>
        {/* CENTER */}
        <div className="flex gap-4 py-8">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-green-800 text-xl">
            K
          </div>
          <input
            className="flex-1 bg-transparent text-lg outline-none"
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        {/* BOTTOM */}
        <div className="border-borderGray flex flex-wrap items-center justify-between gap-4 border-t pt-4">
          <div className="flex flex-wrap gap-4">
            <CustomImage
              path="xclone/icons/image.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <CustomImage
              path="xclone/icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <CustomImage
              path="xclone/icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <CustomImage
              path="xclone/icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <CustomImage
              path="xclone/icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <CustomImage
              path="xclone/icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="rounded-full bg-white px-5 py-2 font-bold text-black">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
