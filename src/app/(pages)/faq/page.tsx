"use client"
import { useState } from "react";
import { motion } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "What is included in your tour packages?",
      answer: "Our packages include accommodation, meals, guided tours, transportation, and entry fees to attractions.",
    },
    {
      question: "Do you offer custom tour packages?",
      answer: "Yes, we can tailor packages based on your preferences and budget.",
    },
    {
      question: "How can I make a booking?",
      answer: "You can book through our website by filling out the booking form, or contact us directly via email or phone.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and mobile money platforms such as M-Pesa.",
    },
    {
      question: "Is there a cancellation policy?",
      answer: "Yes, cancellations made 7 days before the tour are eligible for a full refund. Conditions apply for later cancellations.",
    },
    {
      question: "Do you provide airport transfers?",
      answer: "Yes, we offer airport pickup and drop-off as part of our packages.",
    },
    {
      question: "Are your guides experienced?",
      answer: "Our guides are highly experienced and certified, with deep knowledge of East African sceneries and culture.",
    },
    {
      question: "What is the best time to visit East Africa?",
      answer: "The best time to visit is during the dry seasons, from June to October and December to February.",
    },
    {
      question: "Are children allowed on your tours?",
      answer: "Yes, we have family-friendly packages that cater to children of all ages.",
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we provide discounts for groups of 5 or more. Please contact us for details.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex justify-between items-center w-full py-3 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500"
              >
                ▼
              </motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="py-2 text-gray-700">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
