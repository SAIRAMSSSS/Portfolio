"use client";

import React from "react";
import { PROFILE } from "@/data/profile";

export function BuildingTowardSection() {
  const { buildingToward } = PROFILE;

  return (
    <section id="building" className="py-16 sm:py-20 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            What I&apos;m Building Toward
          </h2>
        </div>

        <div className="text-sm sm:text-base text-neutral-300 leading-relaxed space-y-4 max-w-3xl">
          <p>
            My current priority is to become internship- and job-ready for{" "}
            <strong className="text-neutral-100 font-semibold">
              DevOps, Cloud, Infrastructure, or Platform Engineering
            </strong>{" "}
            roles, while building a strong foundation in AI systems and GPU computing.
          </p>

          <p className="text-neutral-400">
            The next portfolio milestone is a{" "}
            <span className="text-neutral-200">reproducible infrastructure project</span>{" "}
            demonstrating a complete workflow: containerization, automated testing, deployment,
            monitoring, and documented failure recovery.
          </p>

          <p className="text-neutral-400">
            Alongside that, I want to measure how software performs on CPUs and GPUs, moving from
            experiments toward a deeper understanding of PyTorch, CUDA, and low-level computing.
          </p>
        </div>

        {/* 2 Clean Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 sm:p-5 rounded border border-white/[0.07] bg-white/[0.015] space-y-2 text-xs sm:text-sm">
            <span className="text-xs font-mono text-neutral-400 block font-medium">
              MILESTONE 01
            </span>
            <h3 className="font-medium text-neutral-200 text-sm sm:text-base">
              {buildingToward.milestone1.title}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {buildingToward.milestone1.summary}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded border border-white/[0.07] bg-white/[0.015] space-y-2 text-xs sm:text-sm">
            <span className="text-xs font-mono text-neutral-400 block font-medium">
              MILESTONE 02
            </span>
            <h3 className="font-medium text-neutral-200 text-sm sm:text-base">
              {buildingToward.milestone2.title}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {buildingToward.milestone2.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
