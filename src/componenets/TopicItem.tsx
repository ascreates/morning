import { Topic } from "../types/topic";
// import calendarIcon from "../assets/icons/calendar.svg";

interface TopicItemProps {
  topic: Topic;
  index: number;
}

export default function TopicItem({ topic, index }: TopicItemProps) {
  // const icon = import(`../assets/icons/${topic.icon}}`);
  // console.log(icon

  return (
    <label>
      <div className="bg-black-700 p-px rounded-2xl bg-gradient-to-tl from-black-600 to-black-750 aspect-square">
        <div className="bg-black-700 p-4 rounded-2xl h-full">
          <div className="flex flex-nowrap flex-row justify-between mb-4">
            <p className="font-lato text-3xl font-extrabold text-black-400">
              {index + 1}
            </p>
            {/* <img src={icon} alt="" /> */}
          </div>
          <div>
            <p className="mb-1 text-black-150 font-semibold text-sm">
              {topic.title}
            </p>
            <p className="text-xs text-black-400 font-semibold">
              {topic.duration}
            </p>
          </div>
        </div>
      </div>
    </label>
  );
}
