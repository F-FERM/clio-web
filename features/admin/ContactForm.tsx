"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import ImageUpload from "./ImageUpload";

interface ContactInfoItem {
  _id?: string;
  title: string;
  value: string;
}

interface ContactSection {
  _id?: string;
  heading: string;
  description: string;
  backgroundImage: string;

  contactInfo: ContactInfoItem[];

  formTitle: string;
  buttonText: string;

  bottomTitle: string;
  bottomDescription: string;
  bottomImage: string;
}

type Props = {
  initialData?: Partial<ContactSection>;
  onSubmit: (data: Partial<ContactSection>) => Promise<void>;
};

const defaultContact = (): ContactInfoItem => ({
  title: "",
  value: "",
});

export default function ContactSectionForm({
  initialData,
  onSubmit,
}: Props) {
  const [form, setForm] = useState<Partial<ContactSection>>(
    initialData || {
      heading: "",
      description: "",
      backgroundImage: "",

      contactInfo: [defaultContact()],

      formTitle: "",
      buttonText: "",

      bottomTitle: "",
      bottomDescription: "",
      bottomImage: "",
    }
  );

  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof ContactSection, value: any) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // CONTACT INFO
  const addContactInfo = () => {
    set("contactInfo", [
      ...(form.contactInfo || []),
      defaultContact(),
    ]);
  };

  const removeContactInfo = (i: number) => {
    set(
      "contactInfo",
      (form.contactInfo || []).filter((_, idx) => idx !== i)
    );
  };

  const updateContactInfo = (
    i: number,
    key: keyof ContactInfoItem,
    value: string
  ) => {
    const updated = (form.contactInfo || []).map((item, idx) =>
      idx === i ? { ...item, [key]: value } : item
    );

    set("contactInfo", updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const {
        _id,
        __v,
        createdAt,
        updatedAt,
        ...payload
      } = form as any;

      await onSubmit(payload);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-4xl"
    >
      {/* HERO */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          Contact Hero Section
        </h2>

        <input
          className="input"
          placeholder="Heading"
          value={form.heading || ""}
          onChange={(e) =>
            set("heading", e.target.value)
          }
        />

        <textarea
          className="input min-h-[120px]"
          placeholder="Description"
          value={form.description || ""}
          onChange={(e) =>
            set("description", e.target.value)
          }
        />

        <ImageUpload
          label="Background Image"
          value={form.backgroundImage || ""}
          onChange={(url: string) =>
            set("backgroundImage", url)
          }
        />
      </div>

      {/* CONTACT INFO */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Contact Information
          </h2>

          <button
            type="button"
            onClick={addContactInfo}
            className="flex items-center gap-2 text-blue-600"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        {(form.contactInfo || []).map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_1fr_auto] gap-3 border rounded-lg p-4"
          >
            <input
              className="input"
              placeholder="Title"
              value={item.title}
              onChange={(e) =>
                updateContactInfo(
                  i,
                  "title",
                  e.target.value
                )
              }
            />

            <input
              className="input"
              placeholder="Value"
              value={item.value}
              onChange={(e) =>
                updateContactInfo(
                  i,
                  "value",
                  e.target.value
                )
              }
            />

            <button
              type="button"
              onClick={() => removeContactInfo(i)}
              className="p-2 text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          Contact Form
        </h2>

        <input
          className="input"
          placeholder="Form Title"
          value={form.formTitle || ""}
          onChange={(e) =>
            set("formTitle", e.target.value)
          }
        />

        <input
          className="input"
          placeholder="Button Text"
          value={form.buttonText || ""}
          onChange={(e) =>
            set("buttonText", e.target.value)
          }
        />
      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          Bottom Section
        </h2>

        <input
          className="input"
          placeholder="Bottom Title"
          value={form.bottomTitle || ""}
          onChange={(e) =>
            set("bottomTitle", e.target.value)
          }
        />

        <textarea
          className="input min-h-[120px]"
          placeholder="Bottom Description"
          value={form.bottomDescription || ""}
          onChange={(e) =>
            set("bottomDescription", e.target.value)
          }
        />

        <ImageUpload
          label="Bottom Image"
          value={form.bottomImage || ""}
          onChange={(url: string) =>
            set("bottomImage", url)
          }
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-60"
      >
        {submitting
          ? "Saving..."
          : "Save Contact Section"}
      </button>
    </form>
  );
}
