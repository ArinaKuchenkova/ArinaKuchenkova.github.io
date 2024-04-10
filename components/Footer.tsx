import { ComponentPropsWithoutRef } from "react"
import Typography, { TypographyLink } from "./Typography"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Footer: React.FC<ComponentPropsWithoutRef<'footer'>> = ({ className, ...props }) => (
  <footer className={cn("flex flex-col gap-3 py-6", className)} {...props}>
    <Typography size="title4" family="mak" className="text-brown font-bold">@rina</Typography>
    <div className="flex justify-between items-center">
      <Typography size="body2" className="text-brown">
        Designed with ❤️ by me. Developed by <TypographyLink href="https://zhenya.dev/" target="_blank">Zhenya</TypographyLink>.
      </Typography>
      <Typography size="body2" className="text-brown opacity-60">
        © Кученкова Арина, {new Date(Date.now()).getFullYear()}
      </Typography>
    </div>
  </footer>
)

export default Footer
