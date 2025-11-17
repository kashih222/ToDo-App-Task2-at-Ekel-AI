// src/components/Navbar.tsx
import { useContext } from "react";
import { Context } from "../Context/StateContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const context = useContext(Context);
  if (!context) return null;

  const { input, setInput, addTodo, open, setOpen } = context;

  const handleSubmit = () => {
    if (!input.trim()) {
      toast.error("Input cannot be empty!");
      return;
    }
    addTodo(input);
    setOpen(false);
  };

  return (
    <div className="flex h-[90px] w-full justify-between items-center bg-white shadow-md px-3 fixed top-0 z-50">
      <div className="logo text-3xl font-bold  text-black  text-start major-mono-display-regular width-[200px]">
        TODO
      </div>

      <div>
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 px-6 py-4 text-nowrap text-white font-bold rounded-md hover:bg-indigo-700 major-mono-display-regular"
        >
          Add Todo +
        </button>
      </div>

      {open && (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg  h-60 w-[330px]">
            <h2 className="text-xl font-semibold mb-4">Enter Todo</h2>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border px-3 py-2 rounded-md mb-4"
              placeholder="Type here..."
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded-md border"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
