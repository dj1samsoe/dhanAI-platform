"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex",
    avatar: "A",
    title: "AI Developer",
    description: "This AI platform is a game-changer for the industry!",
  },
  {
    name: "Sophia",
    avatar: "S",
    title: "Graphic Designer",
    description:
      "The image generator is a creative designer's dream come true!",
  },
  {
    name: "Ethan",
    avatar: "E",
    title: "Content Creator",
    description:
      "I've never seen a video generator this powerful and versatile!",
  },
  {
    name: "Lily",
    avatar: "L",
    title: "Music Producer",
    description:
      "The music generator opens up endless possibilities for music composition!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
