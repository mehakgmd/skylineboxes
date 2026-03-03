// "use client";

// import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// export function InfiniteMovingCardsDemo() {
//     return (
//         <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//             <InfiniteMovingCards
//                 items={testimonials}
//                 direction="right"
//                 speed="slow"
//             />
//         </div>
//     );
// }

// const testimonials = [
//     {
//         quote:
//             "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//         name: "Charles Dickens",
//         title: "A Tale of Two Cities",
//     },
//     {
//         quote:
//             "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//         name: "William Shakespeare",
//         title: "Hamlet",
//     },
//     {
//         quote: "All that we see or seem is but a dream within a dream.",
//         name: "Edgar Allan Poe",
//         title: "A Dream Within a Dream",
//     },
//     {
//         quote:
//             "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//         name: "Jane Austen",
//         title: "Pride and Prejudice",
//     },
//     {
//         quote:
//             "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//         name: "Herman Melville",
//         title: "Moby-Dick",
//     },
// ];



"use client";

import React from "react";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden py-10">
            {/* Heading Section */}
            <div className="text-center px-6 mb-8">
                <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
                    What Our Customers Say About Us
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    Read our customer's reviews, which makes Custom Box Makers a
                    trustworthy box manufacturer to rely on.
                </p>
            </div>

            {/* Infinite Moving Cards */}
            <div className="w-full overflow-hidden">
                <div className="flex gap-6 animate-scroll w-max px-4">
                    {[...testimonials, ...testimonials].map((item, idx) => (
                        <div key={idx} className="moving-border-card w-[350px] shrink-0">
                            <div className="moving-border-inner flex flex-col gap-4">
                                {/* Top row: avatar + name */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-sm text-black dark:text-white">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-gray-400">{item.title}</p>
                                    </div>
                                </div>

                                {/* Quote */}
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {item.quote}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Platform Logos Row */}
            <div className="flex flex-row items-center justify-center gap-10 mt-10 flex-wrap px-6">
                {/* Google */}
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl font-bold tracking-tight">
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                    </span>
                    <div className="flex gap-0.5 text-yellow-400 text-sm">★★★★★</div>
                </div>

                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

                {/* Clutch */}
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl font-bold text-black dark:text-white tracking-tight">
                        Clutch
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">4.9/5.0</span>
                        <span className="text-yellow-400 text-xs">★★★★★</span>
                    </div>
                </div>

                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

                {/* Trustpilot */}
                <div className="flex flex-row items-center gap-2">
                    <span className="text-[#00B67A] text-2xl">★</span>
                    <span className="text-2xl font-bold text-black dark:text-white tracking-tight">
                        Trustpilot
                    </span>
                </div>

                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

                {/* Bark */}
                <div className="flex flex-row items-center gap-1">
                    <span className="text-black dark:text-white text-2xl font-bold">◀</span>
                    <span className="text-2xl font-bold text-black dark:text-white tracking-tight">
                        bark
                    </span>
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 50s linear infinite;
                }

                @property --angle {
                    syntax: "<angle>";
                    inherits: false;
                    initial-value: 0deg;
                }

                @keyframes rotateBorder {
                    to { --angle: 360deg; }
                }

                .moving-border-card {
                    position: relative;
                    border-radius: 2rem;
                    padding: 2px;
                    background: conic-gradient(
                        from var(--angle),
                        transparent 0%,
                        transparent 30%,
                        #e0c112 45%,
                        #FFF4B0 50%,
                        #C9A100 55%,
                        transparent 70%,
                        transparent 100%
                    );
                    animation: rotateBorder 3s linear infinite;
                }

                .moving-border-inner {
                    background: white;
                    border-radius: calc(1rem - 2px);
                    padding: 1.5rem;
                    height: 100%;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}

const testimonials = [
    {
        quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune.",
        name: "William Shakespeare",
        title: "Hamlet",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
        image: "https://i.pravatar.cc/150?img=4",
    },
    {
        quote: "Call me Ishmael. Some years ago, having little or no money in my purse, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
        image: "https://i.pravatar.cc/150?img=5",
    },
];