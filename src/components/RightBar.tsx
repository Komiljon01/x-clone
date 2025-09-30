import Link from "next/link";
import { Search, PopularTags, Recommendations } from ".";

export default function RightBar() {
  return (
    <div className="sticky top-0 flex h-max flex-col gap-4 pt-4">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="text-textGray flex flex-wrap gap-x-4 text-sm">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>© 2025 L Corp.</span>
      </div>
    </div>
  );
}
