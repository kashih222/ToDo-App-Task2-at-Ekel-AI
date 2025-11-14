import Navbar from "./components/Navbar";
// import ToDoInput from './components/ToDoInput'
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  flex flex-col items-center gap-10 mt-[100px]">
        <h1 className="text-center text-4xl font-bold mt-8 uppercase px-10 major-mono-display-regular">
          Wellcome To My Smartest ToDO App
        </h1>
        
        {/* <ToDoInput/> */}
        
      </div>
      <ToDoList />
    </>
  );
};

export default App;
