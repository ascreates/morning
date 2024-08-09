import { Link } from "react-router-dom";
import TopicItem from "../../componenets/TopicItem";
import { staticTopics } from "../../data/topics";
import { useState } from "react";

export default function HomePage() {
  const [topics] = useState(staticTopics);

  return (
    <main className="pt-10 px-6 bg-black-800 flex flex-col justify-center h-full">
      <img src="images/Morning!.png" className="w-3/12 self-center" />
      <div className="text-white  mx-auto mb-12">
        <div className="my-2 flex flex-nowrap flex-row justify-between ">
          <p>You will hear...</p>
          <Link to="/edit">
            <p className="text-brand-green font-bold text-sm align-text-bottom">
              Edit
            </p>
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-2">
          {topics.map((topic, index: number) => (
            // topic.added ? <TopicItem topic={topic} index={index} key={topic.id} /> : ""
            <TopicItem topic={topic} index={index} key={topic.id} />
            // <p key={topic.id}>{topic.title}</p>
          ))}
        </div>
      </div>
      <p className="text-xs text-black-400 text-center mb-6">
        Note! We are using AI to create your morning audio, please check the
        validity of the information before making any decisions based on what
        you hear.
      </p>
    </main>
  );
}

// gradient
// <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-yellow to-brand-green font-bol">
