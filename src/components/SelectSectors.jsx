import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SelectSectors = () => {
  const [sectors, setSectors] = useState([]);
  
  const delate=(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/sectors/${id}`,{
        method:'DELATE'
    }).then((res) => res.json())
    .then((result) => {console.log(result)});
  }

  useEffect(() => {
    fetch("http://localhost:5000/sectors")
      .then((response) => response.json())
      .then((data) => setSectors(data));
  }, [sectors]);
  
  return (
    <div className="   flex   justify-center items-center h-secreen mt-10">
        
      <div className="shadow-2xl font-[poppines] border border-gray-300 w-[500px]   overflow-hidden  ">
      
        <div className="flex justify-between px-10  bg-[#2e3d55] ">
          <p className="py-3    ">Name</p>
          <p className="py-3 ">Sectors</p>
          
        </div>
        {sectors.map(sector=>  (
            
            <div className="flex justify-between items-center px-10 border bg-[#0f172a] hover:bg-slate-600 hover:scale-105  ">
            <p className="py-3    ">{sector.name}</p>
            <p className="py-3 "> {sector.currentOption}</p>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectSectors;
