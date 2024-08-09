import { Topic } from "../types/topic";

export const staticTopics: Topic[] = [
  {
    id: 1,
    title: "Good morning inspirational quote.",
    added: false,
    icon: "lightening.svg",
    duration: "15 sec",
    order: 1
  },
  {
    id: 2,
    title: "Day’s weather.",
    added: true,
    icon: "weather.svg",
    duration: "15 sec",
    order: 2
  },
  {
    id: 3,
    title: "Planned events.",
    added: true,
    icon: "calendar.svg",
    duration: "1 min",
    order: 3
  },
  {
    id: 4,
    title: "News.",
    added: false,
    icon: "loudspeaker.svg",
    duration: "3 min",
    order: 4
  },
];
