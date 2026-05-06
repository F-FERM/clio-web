"use client";

import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import ContactUs from "../../public/images/contact/ContactUs.jpg";
import { ListContactApi, CreateContactApi } from "@/app/api/contact/contact";

const iconMap = {
  Email: Mail,
  "Office Location": MapPin,
  "Phone Number": Phone,
  "Working Hours": Clock3,
};

export function ContactFormHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    serviceRequired: "",
    message: "",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["contact-section"],
    queryFn: () => ListContactApi({}),
  });

  const mutation = useMutation({
    mutationFn: CreateContactApi,
    onSuccess: () => {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        companyName: "",
        email: "",
        serviceRequired: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to send message");
    },
  });

  const contactData = Array.isArray(data) ? data[0] : data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) {
    return (
      <section className="w-full px-6 pt-10 lg:px-20 lg:pt-12 animate-pulse">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="h-[500px] rounded-[14px] bg-gray-200" />
        </div>
      </section>
    );
  }

  const heading = contactData?.heading || "Let's Navigate Success Together";
  const description =
    contactData?.description ||
    "Whether you need vessel management, technical support, or global maritime solutions, the Clio team is here to help. Reach out and let's discuss how we can support your operations.";
  const contactInfo = contactData?.contactInfo || [
    { title: "Email", value: "info@clioship.com" },
    { title: "Office Location", value: "Dubai, UAE" },
    { title: "Phone Number", value: "00971 4 3702800" },
    {
      title: "Working Hours",
      value: "Monday - Saturday | 9:00 AM - 6:00 PM",
    },
  ];
  const formTitle = contactData?.formTitle || "Send Message";
  const buttonText = contactData?.buttonText || "Send now";
  const backgroundImage = contactData?.backgroundImage || ContactUs;

  return (
    <section className="w-full px-6 pt-10 lg:px-20 lg:pt-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[14px]">
          <Image
            src={backgroundImage}
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
                  {heading}
                </h2>
                <p className="mt-3 text-[14px] leading-normal text-white/90 ">
                  {description}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contactInfo.map((card: any) => {
                  const Icon = (iconMap as any)[card.title] || Mail;
                  return (
                    <article
                      key={card._id || card.title}
                      className="rounded-[10px] bg-white/80 p-5"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-8 w-8 text-[#9a1131]" />
                        <h3 className="text-[27px] leading-none font-semibold text-[#20242c]">
                          {card.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[15px] leading-normal text-[#555b64]">
                        {card.value}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[12px] bg-[#bfc4c8]/36 p-4"
            >
              <h3 className="text-[39px] leading-none font-bold tracking-[-0.02em] text-[#9a1131]">
                {formTitle}
              </h3>
              <div className="mt-3 space-y-2">
                <label className="block">
                  <span className="text-[15px] font-medium text-white">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name..."
                    className="mt-1 h-9 w-full rounded-[6px] bg-white/80 px-3 text-[12px] text-[#222] outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[15px]font-medium text-white">
                    Company Name
                  </span>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Company Name"
                    className="mt-1 h-9 w-full rounded-[6px] bg-white/80 px-3 text-[12px] text-[#222] outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[15px] font-medium text-white">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="mt-1 h-9 w-full rounded-[6px] bg-white/80 px-3 text-[12px] text-[#222] outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[15px] font-medium text-white">
                    Service Required
                  </span>
                  <input
                    type="text"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    required
                    placeholder="Title..."
                    className="mt-1 h-9 w-full rounded-[6px] bg-white/80 px-3 text-[12px] text-[#222] outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[15px] font-medium text-white">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type Here..."
                    className="mt-1 h-[70px] w-full rounded-[6px] bg-white/80 px-3 py-2 text-[12px] text-[#222] outline-none"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={mutation.isPending}
                className="mt-3 inline-flex items-center cursor-pointer gap-2 rounded-full bg-[#9a1131] px-5 py-2 text-[14px] font-semibold text-white disabled:opacity-50"
              >
                <span>{mutation.isPending ? "Sending..." : buttonText}</span>
                {!mutation.isPending && <span className="text-[14px]">↗</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
