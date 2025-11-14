import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const ToDoInput = () => {
  const [input] = useState<string>("")

  const  handleSbmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Input:", input);
  }
  return (
    <div className="w-full flex items-center justify-center gap-2 px-10">
      <form action="" className="flex  h-full items-center justify-center gap-2 px-10 lg:flex-col"
      onSubmit={handleSbmit}
      >
        <Box sx={{ width: 500, maxWidth: "100%", background:"white" }}>
        <TextField fullWidth label="Enter Here What You want to Do NEXT" id="fullWidth"
        className="pr-22" />
      </Box>
      <Button sx={{ width: 100, maxWidth: "100%", background:"white", fontWeight:"bold" }}
      className="h-full"
      >Submit</Button>
      </form>
    </div>
  );
};

export default ToDoInput;
