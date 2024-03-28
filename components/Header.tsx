"use client"
import { usePathname } from "next/navigation"
import Typography from "./Typography";

const Header = () => {
  const pathname = usePathname();

  return <header className="container w-full mx-auto py-6 px-4 h-[100px] flex items-center">
    <Typography size="title4" family="mak" className="text-brown font-bold">@rina</Typography>
  </header>
}

export default Header
