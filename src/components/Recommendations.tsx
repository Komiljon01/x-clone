import Link from "next/link";

export default function Recommendations() {
  return (
    <div className="border-borderGray flex flex-col gap-4 rounded-2xl border-[1px] p-4">
      {/* USER CARD */}
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-blue-800 text-xl text-white">
            A
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="cursor-pointer rounded-full bg-white px-4 py-1 font-semibold text-black">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-800 text-xl text-white">
            J
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="cursor-pointer rounded-full bg-white px-4 py-1 font-semibold text-black">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-yellow-800 text-xl text-white">
            B
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="cursor-pointer rounded-full bg-white px-4 py-1 font-semibold text-black">
          Follow
        </button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
}
