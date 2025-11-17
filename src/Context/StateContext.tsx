import { createContext, useState, useEffect, type ReactNode } from "react";
import { toast } from "react-toastify";

export interface TodoItem {
  text: string;
  date: string;
  completed: boolean;
  toast?: ReturnType<typeof toast>;
}

interface ContextProps {
  todos: TodoItem[];
  addTodo: (text: string) => void;
  updateTodo: (index: number, text: string) => void;
  deleteTodo: (index: number) => void;
  toggleComplete: (index: number) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  openEdit: boolean;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openDelete: boolean;
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
  
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<ContextProps | null>(null);

const StateContext = ({ children }: { children: ReactNode }) => {

  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");
    const [openEdit, setOpenEdit] = useState(false);

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const now = new Date();
    const dateString = now.toLocaleDateString() + " " + now.toLocaleTimeString();

    const newTodo: TodoItem = {
      text,
      date: dateString,
      completed: false,
      toast: toast.success("Todo Added Successfully!"),
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (index: number, newText: string) => {
    const updated = [...todos];
    updated[index].text = newText;
    setTodos(updated);
    toast.success("Todo Updated Successfully!");
  };

  const deleteTodo = (index: number) => {
    toast.success("Todo Deleted Successfully!");
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index: number) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <Context.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        input,
        setInput,
        openEdit, 
        setOpenEdit,
        open,
        setOpen,
        openDelete, 
        setOpenDelete
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;
