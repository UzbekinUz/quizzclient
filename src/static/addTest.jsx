import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { pass, user_name } from "../cfg";
import { LogAd } from "./loginA";
function Add({ open, handleOpen }) {
  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => setOpen2(!open);
  const style =
    "w-[300px] h-[45px] px-6 pr-10 my-4 outline-none bg-[#383838ef] text-[white]";
  const [state, setState] = useState({
    password: "",
    username: "",
    all: false,
  });
  function Submit() {
    const { username, password } = state;
    if (username.length < 1 || password.length < 1) {
      toast.error("Qatorlarni to'ldiring!");
    } else {
      if (username !== user_name || password !== pass) {
        toast.error("Xato!");
      } else {
        toast.success("Barchasi to'g'ri!");
        setState({ ...state, all: true });
        setOpen2(true);
      }
    }
  }
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-center">
          Kirish faqat adminlar uchun.
        </DialogHeader>
        <DialogBody>
          <Typography>
            Iltimos agar parolni bilmasangiz kirishga urunmang!
          </Typography>
          <div className="flex flex-col justify-center items-center phone:items-center w-[100%]  phone:w-full min-h-[400px] p-4 phone:p-1">
            <div className="flex relative justify-center items-center p-0 ">
              <input
                type="text"
                placeholder="Username..."
                className={style}
                onChange={(e) =>
                  setState({ ...state, username: e.target.value })
                }
              />
              <i className="fas fa-user absolute right-5 text-[yellow]"></i>
            </div>
            <div className="flex relative justify-center items-center  p-0 ">
              <input
                type="password"
                placeholder="Parolingiz"
                className={style}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
              <i className="fas fa-lock absolute right-5 text-[yellow]"></i>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <div className="w-full flex justify-end phone:justify-center items-center ">
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              color="yellow"
              className="w-[300px]"
              onClick={() => {
                Submit();handleOpen()
              }}
            >
              Kirish
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
      <LogAd open2={open2} handleOpen2={handleOpen2} setOpen2={setOpen2}/>
    </>
  );
}
export default Add;
