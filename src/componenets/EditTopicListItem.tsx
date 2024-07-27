import { Topic } from "../types/topic";
// import calendarIcon from "../assets/icons/calendar.svg";

interface EditTopicListItemProps {
  topic: Topic;
  onChooseChange: (id: number, chosen: boolean) => void;
}

export default function EditTopicListItem({
  topic,
  onChooseChange,
}: EditTopicListItemProps) {
  // const icon = import(`../assets/icons/${topic.icon}}`);
  // console.log(icon)
  return (
    <label>
      <div
        className={
          "bg-black-700 p-px rounded-2xl bg-gradient-to-tl from-black-600 to-black-750 aspect-square cursor-pointer " +
          (topic.added ? "opacity-100" : "opacity-35")
        }
      >
        <div className="bg-black-700 p-4 rounded-2xl h-full">
          <div className="flex flex-nowrap flex-row justify-between mb-4">
            <label>
              <input
                type="checkbox"
                checked={topic.added}
                onChange={(e) => onChooseChange(topic.id, e.target.checked)}
                className="scale-125 appearance-none w-4 h-4 border-2 border-black-550 rounded-sm bg-black-700 mt-1 shrink-0 checked:bg-brand-green checked:border-2"
              />
            </label>
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
