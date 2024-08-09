import EditTopicListItem from "../../componenets/EditTopicListItem";
import { staticTopics } from "../../data/topics";
import { Reorder } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function EditPage() {
  const [topics, setTopics] = useState(staticTopics);

  function updateTopicSelection(id: number, chosen: boolean) {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id ? { ...topic, added: chosen } : topic
      )
    );
    // reorderTopics(() => 

    // );

  }

  return (
    <main className="pt-10 px-6 bg-black-800 flex flex-col justify-center h-full">
      <Link to="/" className="text-white">Back</Link>
      <p className="text-white self-center my-4">Edit items</p>

      <Reorder.Group
        values={topics}
        onReorder={setTopics}
        className="grid gap-4 grid-cols-2"
      >
        {topics.map((topic) => (
          <Reorder.Item value={topic} key={topic.id} drag>
            <EditTopicListItem
              topic={topic}
              key={topic.id}
              onChooseChange={updateTopicSelection}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <p className="text-xs text-black-400 text-center mb-6">
        Note! We are using AI to create your morning audio, please check the
        validity of the information before making any decisions based on what
        you hear.
      </p>
    </main>
  );
}

export default EditPage;

// gradient
// <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-yellow to-brand-green font-bol">
