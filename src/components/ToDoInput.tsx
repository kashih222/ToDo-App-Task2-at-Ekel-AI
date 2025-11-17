import { useContext } from "react";
import { Context } from "../Context/StateContext";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";

const ToDoInput = () => {
  const context = useContext(Context);
  if (!context) return null;

  const { input, setInput, openEdit, openDelete } = context;

   const handleSubmit = () => {
    if (!input.trim()) {
      toast.error("Input cannot be empty!");
      return;
    }
    context.addTodo(input);
    setInput("");
  };
  
  return (
    <div className="w-full flex items-center justify-center gap-2 ">
      {!openEdit && !openDelete && (
         <div className="flex gap-2">
          <Box sx={{ width: 500, maxWidth: "100%", background: "white" }}>
          <TextField
            fullWidth
            label="Enter Here What You want to Do NEXT"
            id="fullWidth"
            className="pr-22"
            value={input}
              onChange={(e) => setInput(e.target.value)}
          />
        </Box>
        <Button
          sx={{
            width: 100,
            maxWidth: "100%",
            background: "white",
            fontWeight: "bold",
            height: "55px",
          }}
          className="h-full"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        </div>
     
      )}
       
    </div>
  );
};

export default ToDoInput;
