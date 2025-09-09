"use client";

import React, { useState } from "react";
import { faqs } from "@/lib/data";
import { Minus, Plus } from "lucide-react";

const FAQs = () => {
  const [openId, setOpenId] = useState(1);

  const handleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="my-[20px] bg-lightblue scroll-mt-20">
      <div className="max-w-screen-xl mx-auto flex sm:flex-row flex-col gap-[10px] sm:p-[50px] p-[20px]">
        <div className="sm:w-[35%] w-full flex flex-col justify-center items-center text-center">
          <h3 className="headings text-[#edeef2]">
            Frequently asked questions
          </h3>
          <p className="text-[#edeef2]/70 sm:text-[15px] text-[13px]">
            Have questions? Here you'll find answers and clarification. If you
            don’t see what you’re looking for, feel free to reach out to us
            directly.
          </p>
        </div>

        <div className="sm:w-[65%] w-full p-[20px] flex flex-col justify-center items-center bg-[#505e7d] divide-[#7a7a7a] divide-y-[1px]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="w-full flex flex-col py-2">
                <div className="flex justify-between items-center text-[#edeef2] font-semibold sm:text-[16px] text-[14px]">
                  <h3>{faq.question}?</h3>
                  <button
                    onClick={() => handleAnswer(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.id}`}
                  >
                    {isOpen ? <Minus /> : <Plus />}
                  </button>
                </div>
                {isOpen && (
                  <div className="mt-[10px] text-[#edeef270] sm:text-[15px] text-[13px] text-justify">
                    {faq.answer}.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQs);
