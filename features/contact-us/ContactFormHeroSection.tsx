import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const contactCards = [
  { icon: Mail, title: "Email", value: "info@clioship.com" },
  { icon: MapPin, title: "Office Location", value: "Dubai, UAE" },
  { icon: Phone, title: "Phone Number", value: "00971 4 3702800" },
  { icon: Clock3, title: "Working Hours", value: "Monday - Saturday | 9:00 AM - 6:00 PM" },
] as const;

export function ContactFormHeroSection() {
  return (
    <section className="w-full px-6 pt-10 lg:px-12 lg:pt-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[14px]">
          <Image
            src="/images/home.jpg"
            alt="Contact maritime operations"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/52" />

          <div className="relative z-10 grid gap-6 p-5 md:grid-cols-[1fr_1fr] md:p-6">
            <div>
              <div className="max-w-[470px] rounded-[12px] bg-[#bfc4c8]/36 p-4">
                <h2 className="text-[54px] leading-[1.02] font-bold tracking-[-0.03em] text-[#9a1131]">
                  Let&apos;s Navigate Success Together
                </h2>
                <p className="mt-2 text-[12px] leading-normal text-white/90">
                  Whether you need vessel management, technical support, or global
                  maritime solutions, the Clio team is here to help. Reach out and
                  let&apos;s discuss how we can support your operations.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={card.title}
                      className="rounded-[10px] bg-white px-4 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#9a1131]" />
                        <h3 className="text-[27px] leading-none font-semibold text-[#20242c]">
                          {card.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[10px] leading-normal text-[#555b64]">
                        {card.value}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <form className="rounded-[12px] bg-[#bfc4c8]/36 p-4">
              <h3 className="text-[39px] leading-none font-bold tracking-[-0.02em] text-[#9a1131]">
                Send Message
              </h3>
              <div className="mt-3 space-y-2">
                <label className="block">
                  <span className="text-[12px] font-medium text-white">Name</span>
                  <input
                    type="text"
                    placeholder="Your Name..."
                    className="mt-1 h-9 w-full rounded-[6px] bg-white px-3 text-[12px] text-[#222] outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-medium text-white">
                    Company Name
                  </span>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="mt-1 h-9 w-full rounded-[6px] bg-white px-3 text-[12px] text-[#222] outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-medium text-white">Email</span>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="mt-1 h-9 w-full rounded-[6px] bg-white px-3 text-[12px] text-[#222] outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-medium text-white">
                    Service Required
                  </span>
                  <input
                    type="text"
                    placeholder="Title..."
                    className="mt-1 h-9 w-full rounded-[6px] bg-white px-3 text-[12px] text-[#222] outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-medium text-white">Message</span>
                  <textarea
                    placeholder="Type Here..."
                    className="mt-1 h-[70px] w-full rounded-[6px] bg-white px-3 py-2 text-[12px] text-[#222] outline-none"
                  />
                </label>
              </div>
              <button
                type="button"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#9a1131] px-5 py-2 text-[12px] font-semibold text-white"
              >
                <span>Send now</span>
                <span className="text-[13px]">↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
