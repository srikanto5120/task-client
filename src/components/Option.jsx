 import React from 'react';
 
 const Option = ({currentOption,changeOption}) => {
  return (
    <div className='flex     mt-3'>
    <label>Sectors:</label>
    
            
    <select 
      className="   bg-[#2e3d55] appearance-none ml-2  rounded  relative    h-8 px-3   border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm "
      onChange={(event) => changeOption(event.target.value)}
      value={currentOption}
      placeholder="chose y"
    >
       <option>chose your sector</option>
      <option value="Manufacturing">Manufacturing</option>
      <option value="Construction materials">
        &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
      </option>
      <option value="Electronics and Optics">
        &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
      </option>
      <option value="Food and Beverage">
        &nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage
      </option>
      <option value="Bakery &  confectionery products">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &
        confectionery products
      </option>
      <option value="Beverages">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
      </option>
      <option value="Fish &  fish products">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish & fish
        products{" "}
      </option>
      <option value="Meat  meat products">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat meat products
      </option>
      <option value="Milk  dairy products">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk dairy
        products{" "}
      </option>
      <option value="Other">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
      </option>
      <option value="Sweets & snack food">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets & snack
        food
      </option>
      <option value="Furniture">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
      <option value="Bathroom/sauna">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna{" "}
      </option>
      <option value="Bedroom">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom
      </option>
      <option value="Childrenâ€™s room">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Childrenâ€™s room{" "}
      </option>
      <option value="Kitchen">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen{" "}
      </option>
      <option value="Living room">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room{" "}
      </option>
      <option value="Office">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office
      </option>
      <option value="Other (Furniture)">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)
      </option>
      <option value="Outdoor">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor{" "}
      </option>
      <option value="Project furniture">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture
      </option>
      <option value="Machinery">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
      <option value="Machinery components">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
        components
      </option>
      <option value="Machinery equipment/tools">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
        equipment/tools
      </option>
      <option value="Manufacture of machinery">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of
        machinery{" "}
      </option>
      <option value="Maritime">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime
      </option>
      <option value="Aluminium and steel workboats">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium
        and steel workboats{" "}
      </option>
      <option value="Boat/Yacht building">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht
        building
      </option>
      <option value="Ship repair and conversion">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship
        repair and conversion
      </option>
      <option value="Metal structures">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures
      </option>
      <option value="508">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
      </option>
      <option value="227">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and
        maintenance service
      </option>
      <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
      <option value="67">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of
        metal structures
      </option>
      <option value="263">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and
        buildings
      </option>
      <option value="267">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products
      </option>
      <option value="542">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works
      </option>
      <option value="75">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining
      </option>
      <option value="62">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings,
        Fasteners{" "}
      </option>
      <option value="69">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas,
        Plasma, Laser cutting
      </option>
      <option value="66">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG,
        TIG, Aluminum welding
      </option>
      <option value="9">
        &nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber
      </option>
      <option value="54">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging
      </option>
      <option value="556">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods
      </option>
      <option value="559">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing
        technology
      </option>
      <option value="55">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing
      </option>
      <option value="57">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding
      </option>
      <option value="53">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics
        welding and processing
      </option>
      <option value="560">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles
      </option>
      <option value="5">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
      <option value="148">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising
      </option>
      <option value="150">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals
        printing
      </option>
      <option value="145">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and
        packaging printing
      </option>
      <option value="7">
        &nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing
      </option>
      <option value="44">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing
      </option>
      <option value="45">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile
      </option>
      <option value="8">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
      <option value="337">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)
      </option>
      <option value="51">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building
        materials
      </option>
      <option value="47">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses
      </option>
      <option value="3">Other</option>
      <option value="37">
        &nbsp;&nbsp;&nbsp;&nbsp;Creative industries
      </option>
      <option value="29">
        &nbsp;&nbsp;&nbsp;&nbsp;Energy technology
      </option>
      <option value="33">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
      <option value="2">Service</option>
      <option value="25">
        &nbsp;&nbsp;&nbsp;&nbsp;Business services
      </option>
      <option value="35">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
      <option value="28">
        &nbsp;&nbsp;&nbsp;&nbsp;Information Technology and
        Telecommunications
      </option>
      <option value="581">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing,
        Web portals, E-marketing
      </option>
      <option value="576">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming,
        Consultancy
      </option>
      <option value="121">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware
      </option>
      <option value="122">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
      </option>
      <option value="22">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
      <option value="141">
        &nbsp;&nbsp;&nbsp;&nbsp;Translation services
      </option>
      <option value="21">
        &nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics
      </option>
      <option value="111">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air
      </option>
      <option value="114">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail
      </option>
      <option value="112">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road
      </option>
      <option value="113">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water
      </option>
    </select>
  </div>
  );
 };
 
 export default Option;