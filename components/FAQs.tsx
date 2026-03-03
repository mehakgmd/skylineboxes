"use client";

import { useState } from "react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "Can you design my custom boxes?",
        answer:
            "Definitely! Our in-house graphic designers are ready to listen to your packaging and marketing goals. They can help you decide on an appropriate structure, exterior print, unique unboxing experience guidance, and finishing for the customized box that will safely house your product. This service is available 100% free as part of our continued commitment to quality and unsurpassed customer satisfaction.",
    },
    {
        id: 2,
        question: "Do you offer discounts for large bulk orders? How can I reduce my unit price?",
        answer:
            "Yes! We offer tiered pricing based on order quantity. The more you order, the lower your per-unit cost. Contact our sales team for a custom quote tailored to your volume needs.",
    },
    {
        id: 3,
        question: "When will I receive my order? What is your typical turnaround time?",
        answer:
            "Standard production time is 10–14 business days after artwork approval. Rush options are available. Shipping times vary by location but typically range from 3–7 business days.",
    },
    {
        id: 4,
        question: "Can you print artwork on the inside and outside of my packaging box?",
        answer:
            "Absolutely! We offer full-color printing on both the interior and exterior of your boxes. Interior printing is a great way to enhance the unboxing experience and surprise your customers.",
    },
    {
        id: 5,
        question: "How do I get a quote for my project? How long will it take to get a quote?",
        answer:
            "You can request a quote through our online form, live chat, or by calling us. Most quotes are delivered within 1–2 business days, and our team is happy to walk you through all options.",
    },
    {
        id: 6,
        question:
            "How will I know what my custom box will look like before finalizing my order? Will I get a proof before printing?",
        answer:
            "Yes! We provide a digital proof for your review and approval before we begin production. You can request revisions until you're completely happy with the design.",
    },
];

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

function FAQCard({ item }: { item: FAQItem }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${!open ? "border-gray-200 hover:border-[#e0c112] hover:shadow-sm" : ""
                }`}
            style={
                open
                    ? {
                        borderColor: "#e0c112",
                        boxShadow: "0 4px 20px 0 rgba(224,193,18,0.15)",
                    }
                    : undefined
            }
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 lg:px-6 py-4 sm:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e0c112] focus-visible:ring-offset-1 rounded-xl sm:rounded-2xl"
                aria-expanded={open}
            >
                <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-[#1a2e44] leading-snug">
                    {item.question}
                </span>
                <span
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                        backgroundColor: open ? "#e0c112" : "#fdf9d6",
                        color: open ? "#fff" : "#b89e00",
                    }}
                >
                    <ChevronIcon open={open} />
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 text-[13px] sm:text-[14px] lg:text-[14.5px] text-gray-500 leading-relaxed">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const left = faqData.filter((_, i) => i % 2 === 0);
    const right = faqData.filter((_, i) => i % 2 !== 0);

    return (
        <section className="bg-[#f8fafa] min-h-screen py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">

            {/* ── Header ── */}
            <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-center mb-8 sm:mb-10 lg:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blackPrimary mb-3 sm:mb-4 lg:mb-5 tracking-tight leading-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                    Got a question?{" "}
                    <a href="#" className="text-gold hover:underline font-medium">
                        Take a look at our FAQs
                    </a>{" "}
                    about the custom packaging process. If you can&apos;t find the answer you&apos;re looking
                    for, don&apos;t hesitate to contact us through live chat,{" "}
                    <a href="#" className="hover:underline font-medium text-gold">
                        one of our online forms
                    </a>
                    , or give us a call at{" "}
                    <a href="tel:18007259660" className="text-gold font-semibold hover:underline">
                        1&nbsp;(800)&nbsp;725-9660
                    </a>{" "}
                    to speak with a custom box packaging expert now.
                </p>
            </div>

            {/* ── Mobile: single column (< md) ── */}
            <div className="md:hidden max-w-xl mx-auto flex flex-col gap-3 sm:gap-4">
                {faqData.map((item) => (
                    <FAQCard key={item.id} item={item} />
                ))}
            </div>

            {/* ── Tablet / Desktop: two columns (md+) ── */}
            <div className="hidden md:grid max-w-5xl lg:max-w-6xl mx-auto grid-cols-2 gap-4 lg:gap-5 items-start">
                <div className="flex flex-col gap-4 lg:gap-5">
                    {left.map((item) => (
                        <FAQCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="flex flex-col gap-4 lg:gap-5">
                    {right.map((item) => (
                        <FAQCard key={item.id} item={item} />
                    ))}
                </div>
            </div>

        </section>
    );
}