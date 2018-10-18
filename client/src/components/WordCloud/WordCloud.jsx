import React from "react";
import { TagCloud } from "react-tagcloud";

const data = [
  { value: "Water Bottle", count: 38 },
  { value: "Steam Iron", count: 33 },
  { value: "Storage Container", count: 35 },
  { value: "Extension Cord", count: 30 },
  { value: "Step Stool", count: 28 },
  { value: "Dental Floss", count: 25 },
  { value: "Dinner Plate", count: 33 },
  { value: "Dinnerware Set", count: 20 },
  { value: "Toaster", count: 36 },
  { value: "Mixing Bowl Set", count: 16 },
  { value: "Electric Skillet", count: 25 },
  { value: "Hangers", count: 38 },
  { value: "Ironing Board", count: 17 },
  { value: "Dish Drainer Rack", count: 20 },
  { value: "Umbrellas", count: 30 },
  { value: "Chair Pads", count: 19 },
  { value: "Tumbler Cups", count: 24 },
  { value: "Salad Plate", count: 11 },
  { value: "Aluminum Casserole", count: 25 },
  { value: "Industrial Surge Protector", count: 13 }
];

export const WordCloud = () => (
  <div>
    <TagCloud minSize={10} maxSize={35} tags={data} className="simple-cloud" />
  </div>
);
