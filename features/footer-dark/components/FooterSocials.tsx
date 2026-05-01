import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function FooterSocials() {
  return (
    <div className="flex items-center gap-5 text-white/90">
      <IconBrandFacebook className="h-7 w-7 cursor-pointer hover:text-white transition-colors" />
      <IconBrandInstagram className="h-7 w-7 cursor-pointer hover:text-white transition-colors" />
      <IconBrandTwitter className="h-7 w-7 cursor-pointer hover:text-white transition-colors" />
    </div>
  );
}
