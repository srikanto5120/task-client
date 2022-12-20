import React, { useState } from "react";
import Option from "./components/Option";
import SelectSectors from "./components/SelectSectors";
 
 

const App = () => {
    const [name, setName] = useState("");  

    const [currentOption, setCurrentFruit] = useState("oranges");
  
    const changeOption = (newFruit) => {
      setCurrentFruit(newFruit);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch("http://localhost:5000/sectors", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, currentOption }),
      })
        .then((res) => res.json())
        .then((result) => {});
         
    };
  return (
    <div className="bg-[#0f172a]   h-screen text-white">
      <div>
        <h1 className=" text-2xl text-center ">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h1>
      </div>
      <div className="flex justify-center sm: gap-10 mt-10">
        <form  onSubmit={handleSubmit}>
          <div className="flex mt-10">
            <label>Name:</label>
            <input
              required
              className=" ml-4 bg-[#2e3d55] text-white  rounded  relative w-full   h-8 px-3 py-2 border border-gray-300 placeholder-white   rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
              placeholder="white your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Option  changeOption={changeOption}/>
          <label >
        
            <input type="checkbox" className="mt-8 mr-5 " required />
            Agree to terms
          </label>
          <button
            type="submit"
            className="group relative mt-2  w-full    flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Save
          </button>
        </form>
        <SelectSectors />
      </div>
    </div>
  );
};

export default App;
