"use client";

import { useState } from "react";
import { WorkflowStepCard } from "./WorkflowStepCard";
import { workflowEfficiencyContent } from "@/features/workflow-efficiency/workflowEfficiency.constants";

type Step = {
  id: string;
  title: string;
  description: string;
  variant: "maroon" | "blue" | "yellow";
};

type WorkflowStackedCardsProps = {
  steps?: Step[];
};

export function WorkflowStackedCards({ steps }: WorkflowStackedCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const displaySteps =
    steps && steps.length > 0
      ? steps
      : (workflowEfficiencyContent.steps as Step[]);

  const CARD_WIDTH = 390;
  const CARD_OVERLAP = 85;
  const CARD_HEIGHT = 300;
  const SLIDE_LEFT = 75;

  const CARD_COUNT = displaySteps.length;

  const totalWidth = CARD_COUNT * (CARD_WIDTH - CARD_OVERLAP) + CARD_OVERLAP;

  const getLeft = (index: number): number => {
    return index * (CARD_WIDTH - CARD_OVERLAP);
  };

  const getTransform = (index: number): string => {
    if ((index === 0 || index === 1) && hovered === index) {
      return `translateX(-${SLIDE_LEFT}px)`;
    }

    return "translateX(0)";
  };

  const getZIndex = (index: number): number => {
    return index + 1;
  };

  return (
    <>
      <div className="flex md:hidden w-full flex-col gap-4">
        {displaySteps.map((step) => (
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
      <div className="hidden md:flex w-full justify-center overflow-visible">
        <div
          className="relative"
          style={{
            width: totalWidth,
            height: CARD_HEIGHT,
          }}
        >
          {displaySteps.map((step, index) => {
            const isAnimatedCard = index === 0 || index === 1;

            return (
              <div
                key={step.id}
                className="absolute top-0 h-full"
                style={{
                  left: getLeft(index),
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  zIndex: getZIndex(index),
                  transform: getTransform(index),
                  transition: isAnimatedCard
                    ? "transform 350ms cubic-bezier(0.4, 0, 0.2, 1)"
                    : "none",

                  willChange: isAnimatedCard ? "transform" : "auto",
                }}
                onMouseEnter={() => {
                  if (isAnimatedCard) {
                    setHovered(index);
                  }
                }}
                onMouseLeave={() => {
                  if (isAnimatedCard) {
                    setHovered(null);
                  }
                }}
              >
                <WorkflowStepCard
                  id={step.id}
                  title={step.title}
                  description={step.description}
                  variant={step.variant}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
