import React from "react";
import {
  ShieldCheck,
  Lock,
  User,
  Bell,
  Globe,
  RefreshCcw,
  Info,
} from "lucide-react";

const sections = [
  {
    icon: <Info className="text-amber-600 w-6 h-6" />,
    title: "Introduction",
    content:
      "Welcome to Game ONN. This Privacy Policy explains how we collect, use, and protect your personal data when you book sports venues through our platform.",
  },
  {
    icon: <User className="text-amber-600 w-6 h-6" />,
    title: "Information We Collect",
    content: (
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        <li>Name, email, and phone number</li>
        <li>Venue booking history and preferences</li>
        <li>Location and device information</li>
      </ul>
    ),
  },
  {
    icon: <Bell className="text-amber-600 w-6 h-6" />,
    title: "How We Use Your Information",
    content:
      "We use your information to manage bookings, notify you of updates, and improve your experience using Game ONN.",
  },
  {
    icon: <Lock className="text-amber-600 w-6 h-6" />,
    title: "Data Security",
    content:
      "We take industry-standard precautions to protect your personal data, but no system is completely secure.",
  },
  {
    icon: <Globe className="text-amber-600 w-6 h-6" />,
    title: "Third-Party Sharing",
    content:
      "We only share your data with trusted services essential for the operation of Game ONN, like payment providers.",
  },
  {
    icon: <ShieldCheck className="text-amber-600 w-6 h-6" />,
    title: "Your Rights",
    content:
      "You can request access to, correction, or deletion of your data at any time by contacting our support team.",
  },
  {
    icon: <RefreshCcw className="text-amber-600 w-6 h-6" />,
    title: "Policy Updates",
    content:
      "We may revise this policy from time to time. Changes will be posted on this page with a revised effective date.",
  },
];

export default function PrivacyPolicies() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-extrabold text-center text-amber-600 mb-12">
        Privacy Policy
      </h1>
      <div className="space-y-10">
        {sections.map((section, index) => (
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
            <div className="text-gray-600 text-base leading-relaxed">
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
