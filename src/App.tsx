// import { Reorder } from "framer-motion";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <div>
      <Outlet />
    </div>

    // <main className="pt-10 px-6 bg-black-800 flex flex-col justify-center  h-full">
    //   <img src="images/Morning!.png" className="w-3/12 self-center"/>
    //   <div className="text-white max-w-lg mx-auto mb-12">
    //     <div className="my-2 flex flex-nowrap flex-row justify-between ">
    //       <p>You will hear...</p>
    //       <p className="text-brand-green font-bold text-sm align-text-bottom" >Edit</p>
    //     </div>
    //     <div className="grid gap-4 grid-cols-2">
    //       {topics.map((topic, index:number) => (
    //         <TopicItem topic={topic} index={index} key={topic.id}/>
    //         // <p key={topic.id}>{topic.title}</p>
    //       ))}
    //     </div>

    //     {/* Editing section will be moved to new page later */}

    //     <div className="my-4">
    //       <p>Edit items</p>
    //     </div>

    //       <Reorder.Group values={topics} onReorder={(e) => console.log(e)} className="grid gap-4 grid-cols-2">
    //       {topics.map((topic) => (
    //         <Reorder.Item value={topic} key={topic.id}>
    //         <EditTopicListItem topic={topic} key={topic.id} onChooseChange={updateTopicSelection}/>
    //         </Reorder.Item>
    //       ))}
    //       </Reorder.Group>

    //       {/* End of - Editing section will be moved to new page later */}

    //   </div>
    //   <p className="text-xs text-black-400 text-center mb-6">Note! We are using AI to create your morning audio, please check the validity
    //     of the information before making any decisions based on what you hear.</p>
    // </main>
  );
}

export default App;

// gradient
// <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-yellow to-brand-green font-bol">
