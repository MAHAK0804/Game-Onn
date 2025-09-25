import React from "react";
import {
  ScrollText,
  Handshake,
  Shield,
  Banknote,
  Ban,
  Timer,
  Info,
} from "lucide-react";

const terms = [
  {
    icon: <Info className="text-amber-600 w-6 h-6" />,
    title: "Introduction",
    content:
      "By using Game ONN, you agree to the following Terms of Service. These terms govern your use of our platform to book sports venues.",
  },
  {
    icon: <Handshake className="text-amber-600 w-6 h-6" />,
    title: "User Agreement",
    content:
      "You must be at least 13 years old and agree to provide accurate information during sign-up. You are responsible for all activity under your account.",
  },
  {
    icon: <ScrollText className="text-amber-600 w-6 h-6" />,
    title: "Booking Policy",
    content:
      "All bookings are subject to venue availability. Cancellation policies vary by venue and will be clearly mentioned at the time of booking.",
  },
  {
    icon: <Banknote className="text-amber-600 w-6 h-6" />,
    title: "Payments",
    content:
      "Payments are securely processed through our trusted payment partners. Game ONN does not store card details.",
  },
  {
    icon: <Shield className="text-amber-600 w-6 h-6" />,
    title: "Liability",
    content:
      "Game ONN is a booking platform and is not responsible for injuries, losses, or issues that occur at the venue.",
  },
  {
    icon: <Ban className="text-amber-600 w-6 h-6" />,
    title: "Account Suspension",
    content:
      "We reserve the right to suspend accounts for misuse, false information, or violations of terms without prior notice.",
  },
  {
    icon: <Timer className="text-amber-600 w-6 h-6" />,
    title: "Changes to Terms",
    content:
      "We may modify these terms occasionally. Continued use of the platform means you accept the updated terms.",
  },
];

export default function TermsServices() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-extrabold text-center text-amber-600 mb-12">
        Terms of Service
      </h1>

      <div className="space-y-10">
        {terms.map((term, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {term.icon}
              <h2 className="text-2xl font-semibold text-gray-800">
                {term.title}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
              {term.content}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 text-center mt-16">
        Last updated: May 20, 2025
      </p>
    </div>
  );
}
