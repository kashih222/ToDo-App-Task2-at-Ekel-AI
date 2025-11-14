import { toast } from "react-toastify";

const Toaster = () => {
  return (
    <>
      <div className="flex justify-between major-mono-display-regular">
        <button
          onClick={() => {
            toast("You are Login Successfully");
          }}
          className="major-mono-display-regular"
        >
          Toaster
        </button>
      </div>
    </>
  );
};

export default Toaster;
