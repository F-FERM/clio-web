import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function FooterSocials() {
  return (
    <div className="flex items-center gap-5 text-white/90">
      <a
        href="https://www.facebook.com/profile.php?id=61589708378407"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:text-white transition-colors"
      >
        <IconBrandFacebook className="h-7 w-7 cursor-pointer" />
      </a>

      <a
        href="https://www.instagram.com/clio.ship.management/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-white transition-colors"
      >
        <IconBrandInstagram className="h-7 w-7 cursor-pointer" />
      </a>

      <a
        href="https://www.linkedin.com/company/112750616/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-white transition-colors"
      >
        <IconBrandLinkedin className="h-7 w-7 cursor-pointer" />
      </a>
    </div>
  );
}
