import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function FooterSocials() {
  return (
    <div className="flex items-center gap-5 text-white/90">
      <IconBrandFacebook className="h-7 w-7" />
      <IconBrandInstagram className="h-7 w-7" />
      <IconBrandTwitter className="h-7 w-7" />
    </div>
  );
}
