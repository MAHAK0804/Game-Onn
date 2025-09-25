import React from "react";
import { Cookie, Eye, Settings2, ShieldCheck, Ban, Clock3 } from "lucide-react";

const cookiesSections = [
  {
    icon: <Cookie className="text-amber-600 w-6 h-6" />,
    title: "What Are Cookies?",
    content:
      "Cookies are small text files stored on your device to enhance your browsing experience. They help Game ONN remember your preferences and improve performance.",
  },
  {
    icon: <Eye className="text-amber-600 w-6 h-6" />,
    title: "How We Use Cookies",
    content:
      "We use cookies to keep you signed in, remember your venue preferences, analyze traffic, and improve site functionality.",
  },
  {
    icon: <Settings2 className="text-amber-600 w-6 h-6" />,
    title: "Types of Cookies",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>
          <strong>Essential Cookies</strong>: Required for core functionality.
        </li>
        <li>
          <strong>Analytics Cookies</strong>: Help us understand usage patterns.
        </li>
        <li>
          <strong>Preference Cookies</strong>: Store your choices and settings.
        </li>
      </ul>
    ),
  },
  {
    icon: <ShieldCheck className="text-amber-600 w-6 h-6" />,
    title: "Data Protection",
    content:
      "Cookies do not give us access to your device or sensitive information. All collected data is anonymized and secured.",
  },
  {
    icon: <Ban className="text-amber-600 w-6 h-6" />,
    title: "Disabling Cookies",
    content:
      "You can manage or disable cookies via your browser settings. Disabling essential cookies may affect site functionality.",
  },
  {
    icon: <Clock3 className="text-amber-600 w-6 h-6" />,
    title: "Policy Updates",
    content:
      "We may update our cookie policy periodically. All changes will be posted on this page with a revised date.",
  },
];

export default function Cookies() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-extrabold text-center text-amber-600 mb-12">
        Cookies Policy
      </h1>

      <div className="space-y-10">
        {cookiesSections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {section.icon}
              <h2 className="text-2xl font-semibold text-gray-800">
                {section.title}
              </h2>
            </div>
            <div className="text-gray-600 leading-relaxed text-base">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 text-center mt-16">
        Last updated: May 20, 2025
      </p>
    </div>
  );
}
