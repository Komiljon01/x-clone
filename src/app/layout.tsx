import { LeftBar, RightBar } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="xxl:max-w-screen-xxl mx-auto flex max-w-screen-md justify-between lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="xsm:px-4 xxl:px-8 px-2">
            <LeftBar />
          </div>
          <div className="border-borderGray flex-1 border-x-[1px] lg:min-w-[600px]">
            {children}
          </div>
          <div className="ml-4 hidden flex-1 md:ml-8 lg:flex">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
