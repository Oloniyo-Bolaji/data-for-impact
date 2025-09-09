"use client";

import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "inputs"; // centralize shared styles (Tailwind already handles focus, padding, etc.)

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:p-8 p-4 shadow-[2px_2px_6px_#00274d40] bg-white rounded-2xl"
      aria-busy={status === "loading"}
    >
      <h2 className="text-2xl font-semibold text-[#00274d]">
        Send us a message
      </h2>
      <p className="text-[#7a7a7a] text-sm">
        Together, we can turn data into action. Get in touch with us to discuss
        how we can create lasting impact.
      </p>

      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium text-sm">
          Name *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-medium text-sm">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-medium text-sm">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
          className={inputClass}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`px-4 py-2 rounded w-fit transition-colors ${
          status === "loading"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#00274d] text-white hover:bg-[#004080]"
        }`}
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {/* Status Message */}
      <div className="text-sm mt-2" aria-live="polite">
        {status === "success" && (
          <p className="text-green-600">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">❌ Failed to send. Please try again.</p>
        )}
      </div>
    </form>
  );
};

export default Form;
