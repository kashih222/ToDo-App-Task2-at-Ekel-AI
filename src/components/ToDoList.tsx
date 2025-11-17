import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Context } from "../Context/StateContext";

const ToDoList = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [openDelete, setOpenDelete] = useState(false);

  const context = useContext(Context);
  if (!context) return null;

  const {
    todos,
    updateTodo,
    deleteTodo,
    toggleComplete,
    openEdit,
    setOpenEdit,
    open,
  } = context;

  const openEditModal = (index: number) => {
    setSelectedIndex(index);
    setEditValue(todos[index].text);
    setOpenEdit(true);
  };

  const handleUpdate = () => {
    if (selectedIndex === null) return;
    updateTodo(selectedIndex, editValue);
    setOpenEdit(false);
  };

  const openDeleteModal = (index: number) => {
    setSelectedIndex(index);
    setOpenDelete(true);
  };

  const confirmDelete = () => {
    if (selectedIndex === null) return;
    deleteTodo(selectedIndex);
    setOpenDelete(false);
  };

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <div className="w-full flex p-10 relative">
      {!open && (
        <div className="grid grid-cols-1 min-[300px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {todos.map((todo, index) => (
            <div className="" key={index}>
              <Card className="h-48">
                <div className="relative h-48  ">
                  <CardContent sx={{ height: "100%", width: "100%" }}>
                    <Typography component="div">
                      <div className="flex items-center justify-between w-full">
                        <span className="bg-gray-200 rounded text-2xl font-bold delius-swash-caps-regular">
                          ToDo
                        </span>

                        {/* Show Date Here */}
                        <div>{todo.date}</div>
                      </div>
                    </Typography>

                    <div
                      color="text.secondary"
                      className={`
    ${todo.completed ? "line-through text-red-700" : "text-black"}
    text-sm sm:text-base md:text-lg lg:text-xl h-16 mt-2 overflow-y-auto
  `}
                    >
                      {todo.text}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex gap-2">
                        <Button
                          variant="outlined"
                          color="success"
                          size="small"
                          onClick={() => openEditModal(index)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          onClick={() => openDeleteModal(index)}
                        >
                          Delete
                        </Button>
                      </div>

                      <div className="flex items-center gap-1 font-bold text-green-800">
                        DONE
                        <Checkbox
                          {...label}
                          checked={todo.completed}
                          onChange={() => toggleComplete(index)}
                          color="success"
                        />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}

      {openEdit && (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[330px] h-60 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit ToDo</h2>

            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full border px-3 py-2 rounded-md mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenEdit(false)}
                className="px-3 py-1 rounded-md border"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-1 bg-indigo-600 text-white rounded-md"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {openDelete && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg h-60 w-[330px] shadow-lg">
            <h2 className="text-xl font-bold mb-4">Delete ToDo?</h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this item?
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenDelete(false)}
                className="px-3 py-1 rounded-md border"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-1 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
