"use client";

import { ChangeEvent, useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";

type SettingsType = {
  type: "original" | "wide" | "square";
  sensitive: boolean;
};

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<SettingsType>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  console.log(media);

  return (
    <form
      className="flex gap-4 p-4"
      action={(formData) => shareAction(formData, settings)}
    >
      {/* AVATAR */}
      <div className="text-md relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-green-800 text-white">
        K
      </div>

      {/* OTHERS */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="placeholder:text-textGray bg-transparent text-xl outline-none"
        />

        {media?.type.includes("image") && previewURL && (
          <div className="relative overflow-hidden rounded-xl">
            <NextImage src={previewURL} alt="" width={600} height={600} />

            <div
              className="absolute top-2 left-2 cursor-pointer rounded-full bg-black/50 px-4 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-black"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="bg-opacity-50 absolute top-2 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 text-sm font-bold text-white transition-colors duration-200 hover:bg-black"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}

        {media?.type.includes("video") && previewURL && (
          <div className="relative">
            <video src={previewURL} controls />
            <div
              className="bg-opacity-50 absolute top-2 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black text-sm font-bold text-white"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}

        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <input
              type="file"
              name="file"
              id="file"
              className="hidden"
              onChange={handleMediaChange}
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="xclone/icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="xclone/icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="xclone/icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="xclone/icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="xclone/icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="xclone/icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="cursor-pointer rounded-full bg-white px-4 py-2 font-bold text-black">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
