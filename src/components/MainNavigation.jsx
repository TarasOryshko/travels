import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainNavigation({ children }) {
  const [login, setLogin] = useState(false);
  const [enterForm, setEnterForm] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const formAdmin = () => {
    setLogin(false);
    setEnterForm(true);
  };
  return (
    <div
      className=""
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Header login={login} setLogin={setLogin} setShowBurger={setShowBurger} />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
      {login && (
        <div
          onClick={() => setLogin(false)}
          className="w-full h-full bg-yellow-100/80 z-50 absolute top-0 left-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed w-[30%] top-1/2 left-[35%] mx-auto p-10 shadow-lg shadow-blue-800/50  border-solid border-cyan-500 border-2 rounded-2xl bg-gray-500"
          >
            <p className="pb-2 text-white text-center">Do you want visit us?</p>
            <div className="text-center">
              <button onClick={formAdmin} className="mr-4">
                Yes
              </button>
              <button onClick={() => setLogin(false)}>No</button>
            </div>
          </div>
        </div>
      )}
      {enterForm && (
        <div
          onClick={() => setEnterForm(false)}
          className="absolute top-0 left-0 z-20 w-full h-full bg-black/50"
        >
          <form
            className="flex flex-col  min-h-dvh  justify-center items-center"
            action=""
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="border-8 rounded-3xl w-1/4 border-red-600 p-4 bg-green-500"
            >
              <h2 className="text-center text-4xl">Enter your info</h2>
              <div className="grid ">
                <label htmlFor="name">Name:</label>
                <input
                  className="p-2"
                  id="name"
                  type="text"
                  placeholder="login"
                />
                <label htmlFor="password">Password:</label>
                <input
                  className="p-2"
                  id="password"
                  type="text"
                  placeholder="password"
                />
                <div className="mt-4 flex gap-4 justify-end">
                  <button>Enter</button>
                  <button onClick={() => setEnterForm(false)}>Close</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {showBurger && (
        <div className="absolute top-0 left-0 w-full h-full bg-blue-800/40 z-20">
          <nav className="flex flex-col  min-h-dvh  justify-center items-center">
            <li className="p-4" onClick={() => setShowBurger(false)}>
              To home
            </li>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MainNavigation;
