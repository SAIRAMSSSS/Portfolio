"use client";

import React from "react";
import { PROFILE } from "@/data/profile";

export function CurrentDirectionSection() {
  const { currentDirection } = PROFILE;

  return (
    <section id="direction" className="py-16 sm:py-20 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            Current Direction
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 leading-relaxed">
            {currentDirection.objective}
          </p>
        </div>

        {/* Clean, editorial list of tracks */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.08] text-sm">
          {currentDirection.tracks.map((item) => (
            <div
              key={item.tier}
              className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
            >
              <div className="sm:col-span-3 font-mono text-xs text-neutral-400">
                <span className="text-neutral-200 font-medium">{item.tier}</span>
              </div>
              <div className="sm:col-span-9 space-y-1">
                <div className="text-neutral-100 font-medium">
                  {item.track}
                </div>
                <div className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {item.focus}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
