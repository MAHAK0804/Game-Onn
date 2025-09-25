import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ } from "@/constants/app.constants";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto mt-24 mb-20 px-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-14 tracking-tight">
        🏀 Frequently Asked Questions
      </h2>
      <div className="space-y-5">
        {FAQ.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border border-gray-200 bg-white rounded-2xl shadow-md overflow-hidden transition-all`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-bold text-gray-800 hover:bg-amber-50 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-basketball-ball text-amber-600 text-xl"></i>
                  <span>{faq.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-amber-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out text-gray-600 text-base leading-relaxed ${
                  isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
                } overflow-hidden`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
