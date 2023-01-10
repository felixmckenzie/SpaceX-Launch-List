import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LaunchList from "./LaunchList";
import Details from "./Details";

function App() {
  return (
    <div className="m-0 p-0">
       <BrowserRouter>
      <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500">
        <Link className="text-6xl text-white hover:text-gray-200" to="/">
         SpaceX Launch List
        </Link>
      </header>
      <div className="display my-0 mx-auto w-10/12">
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<LaunchList />} />
          </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}
export default App;
