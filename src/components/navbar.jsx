import { Avatar, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  return (
    
    <>
      <div className="flex phone:h-[70px] items-center justify-between px-10 w-full h-[90px] bg-[#383838ef]">
        <Typography className="text-[color] text-[38px]">
          VM<span className="text-[yellow] text-[38px]">Quiz</span>
        </Typography>
        <div className="flex items-center justify-center p-2 overflow-hidden">
          {!user.auth ? (
            <>
              <Button className="hidden phone:flex">
                <Link to={"/autorization"}>
                  <i className="fa-solid fa-right-to-bracket text-[20px] "></i>{" "}
                </Link>
              </Button>
              <Button
                variant="outlined"
                color="yellow"
                className="w-[130px] h-[45px] rounded-sm mr-5 border-[4px] outline-[none] phone:hidden"
              >
                <Link to={"/autorization"}>Sign Up</Link>
              </Button>
              <Button className="w-[130px] h-[45px] rounded-sm phone:hidden">
                <Link to={"/autorization"}>Sign Up</Link>
              </Button>
            </>
          ) : (
            <>
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                withBorder={true}
                className="p-0.5"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
