
"use client";
import React from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { SiTypescript } from "react-icons/si";
import { Card } from "@/components/ui/card"
import { FaGolang, FaJava, FaJs, FaPhp, FaReact } from "react-icons/fa6";

export function Experience() {
  return (
    <>
      <div className="mt-8 xl:mt-12 gap-4 mx-auto px-8 ">
        <span className="text-white text-3xl font-bold">Programing Languages</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-8">
        <Card title="Javascript" icon={<FaJs size={90} />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Golang" icon={<FaGolang size={90} />}>
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
        <Card title="PHP" icon={<FaPhp size={90} />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="React" icon={<FaReact size={90} />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="Typescript" icon={<SiTypescript size={90} />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[
              [125, 211, 252],
              [232, 122, 121],
            ]}
          />
        </Card>

        <Card title="Java/Kotlin" icon={<FaJava size={90} />}>
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
