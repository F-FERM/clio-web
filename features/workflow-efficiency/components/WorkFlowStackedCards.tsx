"use client";

import { useRef, useState } from "react";
import { WorkflowStepCard } from "./WorkflowStepCard";
import { workflowEfficiencyContent } from "@/features/workflow-efficiency/workflowEfficiency.constants";

export function WorkflowStackedCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  const CARD_WIDTH_DEFAULT = 260;
  const CARD_WIDTH_EXPANDED = 340;
  const CARD_OVERLAP = 85; // how much each card overlaps the previous

  // Calculate left position for each card based on which is hovered
  const getLeft = (index: number): number => {
    if (hovered === null) {
      return index * (CARD_WIDTH_DEFAULT - CARD_OVERLAP);
    }

    const defaultPos = index * (CARD_WIDTH_DEFAULT - CARD_OVERLAP);
    const expandedPos = hovered * (CARD_WIDTH_DEFAULT - CARD_OVERLAP);
    const expandDelta = CARD_WIDTH_EXPANDED - CARD_WIDTH_DEFAULT;

    if (index <= hovered) {
      return defaultPos;
    } else {
      return defaultPos + expandDelta;
    }
  };

  const getWidth = (index: number): number => {
    return hovered === index ? CARD_WIDTH_EXPANDED : CARD_WIDTH_DEFAULT;
  };

  const getZIndex = (index: number): number => {
    const baseZ = workflowEfficiencyContent.steps.length - index;
    if (hovered === index) return 10;
    return baseZ;
  };

  return (
    <div className="relative h-[300px]">
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
  );
}