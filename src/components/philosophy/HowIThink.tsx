"use client";

import React from "react";
import { PROFILE } from "@/data/profile";

export function HowIThink() {
  const { approach } = PROFILE;

  return (
    <section id="approach" className="py-16 sm:py-20 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            How I Approach Engineering
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Practical tenets that govern daily implementation, system exploration, and repository maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {approach.map((item) => (
            <div
              key={item.number}
              className="p-5 rounded border border-white/[0.07] bg-white/[0.015] space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>{item.number}</span>
                <span className="text-neutral-300 font-medium tracking-wide">{item.title}</span>
              </div>
              <p className="text-sm text-neutral-200 font-normal leading-relaxed">
                {item.principle}
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
