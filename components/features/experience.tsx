
"use client";
import React from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AceternityIcon } from "../icons/aceternity";
import { Card } from "@/components/ui/card"

export function Experience() {
  return (
    <>
      <div className="mt-8 xl:mt-12 gap-4 mx-auto px-8 ">
        <span className="text-white text-3xl font-bold">Programing Languages</span>
      </div>
      <div className="py-12 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Javascript" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Golang" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
              [232, 20, 121],
            ]}
            dotSize={2}
          />
        </Card>
        <Card title="PHP" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="React" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="Typescript" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[
              [125, 211, 252],
              [232, 122, 121],
            ]}
          />
        </Card>
      </div>
    </>
  );
}
