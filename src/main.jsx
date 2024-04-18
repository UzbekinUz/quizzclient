import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Register from "./pages/register";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Add from "./static/addTest";

function Main() {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState({ auth: false });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/auth/check`, {
        headers: {
          "x-auth-token": localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        const { success, userInfo } = res.data;
        if (success) {
          setRefresh(!refresh);
          setUser({ auth: true, ...userInfo });
        } else {
          setUser({ auth: false });
        }
      });
  }, [refresh]);
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={<Register setRefresh={setRefresh} refresh={refresh} />}
          path="/autorization"
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        closeButton={false}
        style={{ zIndex: "99999999999" }}
      />
      <Add open={open} handleOpen={handleOpen} />
      <button className="flex items-center justify-center fixed right-2 bottom-2 w-[60px] h-[60px] rounded-full outline-none bg-blue-gray-500" onClick={handleOpen}>
        <i className="fas fa-plus text-[yellow] text-[20px]"></i>
      </button>
      <Footer />
    </>
  );
}

export default Main;
