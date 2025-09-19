"use client";

import { useState } from "react";
import { toast } from "react-toastify";

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
        toast.success("Email sent successfully");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
        toast.error("Error is Sendug mail. Try again later!");
      }
    } catch {
      setStatus("error");
      toast.error("Error is Sendug mail. Try again later!");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputClass = "inputs";

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
        {status === "loading" ? (
          <p className="inline-flex items-center">
            <svg
              className="mr-2 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Sending...
          </p>
        ) : (
          "Send"
        )}{" "}
      </button>
    </form>
  );
};

export default Form;
