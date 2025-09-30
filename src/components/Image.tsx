import { Image } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

export default function CustomImage({
  path,
  w,
  h,
  alt,
  className,
  tr,
}: ImageType) {
  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={path}
      width={w}
      height={h}
      {...(tr ? { transformation: [{ width: w, height: h }] } : {})}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}
