"use client";

import { Video } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

type VideoTypes = {
  path: string;
  className?: string;
};

export default function CustomVideo({ path, className }: VideoTypes) {
  return (
    <Video
      urlEndpoint={urlEndpoint}
      src={path}
      className={className}
      transformation={[{ width: "1920", height: "1080", quality: 90 }]}
      controls
    />
  );
}
