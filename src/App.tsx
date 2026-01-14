import Navbar from "./components/Navbar";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-full  flex flex-col items-center gap-10 mt-[100px]">
        <h1 className="text-center text-4xl font-bold mt-8 uppercase px-10 major-mono-display-regular ">
          Wellcome To My <span className="text-green-900 font-bold text-6xl">ToDO</span> App
        </h1>
        
        
          <ToDoInput/>
        
        
      </div>
      <ToDoList />
    </div>
  );
};

export default App;
