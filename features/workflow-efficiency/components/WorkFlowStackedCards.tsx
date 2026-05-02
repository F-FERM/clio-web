"use client";

import { useState } from "react";
import { WorkflowStepCard } from "./WorkflowStepCard";
import { workflowEfficiencyContent } from "@/features/workflow-efficiency/workflowEfficiency.constants";

export function WorkflowStackedCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  const CARD_WIDTH_DEFAULT = 360;
  const CARD_WIDTH_EXPANDED = 440;
  const CARD_OVERLAP = 85;
  const CARD_COUNT = workflowEfficiencyContent.steps.length;

  const totalWidth =
    CARD_COUNT * (CARD_WIDTH_DEFAULT - CARD_OVERLAP) + CARD_OVERLAP;
  const totalWidthExpanded =
    totalWidth + (CARD_WIDTH_EXPANDED - CARD_WIDTH_DEFAULT);

  const getLeft = (index: number): number => {
    const defaultPos = index * (CARD_WIDTH_DEFAULT - CARD_OVERLAP);
    if (hovered === null || index <= hovered) return defaultPos;
    return defaultPos + (CARD_WIDTH_EXPANDED - CARD_WIDTH_DEFAULT);
  };

  const getWidth = (index: number): number =>
    hovered === index ? CARD_WIDTH_EXPANDED : CARD_WIDTH_DEFAULT;

  const getZIndex = (index: number): number => {
    if (hovered === index) return 10;
    return CARD_COUNT - index;
  };

  return (
    <>
      {/* ── Mobile: vertical stack ── */}
      <div className="flex md:hidden flex-col gap-4 w-full">
        {workflowEfficiencyContent.steps.map((step) => (
          <div key={step.id} className="w-full">
            <WorkflowStepCard
              id={step.id}
              title={step.title}
              description={step.description}
              variant={step.variant}
            />
          </div>
        ))}
      </div>

      {/* ── Desktop: horizontal overlap ── */}
      <div className="hidden md:flex justify-center w-full">
        <div
          className="relative h-[300px]"
          style={{
            width: hovered !== null ? totalWidthExpanded : totalWidth,
            transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {workflowEfficiencyContent.steps.map((step, index) => (
            <div
              key={step.id}
              className="absolute top-0 h-full"
              style={{
                left: getLeft(index),
                width: getWidth(index),
                zIndex: getZIndex(index),
                transition:
                  "left 0.4s cubic-bezier(0.4,0,0.2,1), width 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <WorkflowStepCard
                id={step.id}
                title={step.title}
                description={step.description}
                variant={step.variant}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}