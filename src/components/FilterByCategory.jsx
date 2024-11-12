import { Link } from "react-router-dom";
function FilterByCategory(){
  return (
    <>
     <div className="container bg-[#F0E8D9] w-[45%] h-[70vh] ">
        <h3 className="text-center text-[1.2rem] font-bold">Filter Books through Category</h3>
        <div className="h-[90%] flex flex-col justify-center">
          <div className="catg1 text-center m-3">
              <Link to='/category/sci-fi'><button className="border bg-[#49392C] border-white  text-white  p-1 pr-7  w-[30%] pl-7 hover:text-[#49392C] hover:bg-[#FFF] hover:font-bold    hover:border-[#49392C]">Sci-Fi</button></Link>
          </div>
          <div className="catg2 text-center m-3 ">
              <Link to='/category/fiction'><button className="border bg-[#49392C] border-white text-white  p-1 pr-7 w-[30%] pl-7 hover:text-[#49392C] hover:bg-[#FFF] hover:font-bold  hover:border-[#49392C]">Fiction</button></Link>
          </div>
          <div className="catg3 text-center m-3 ">
          <Link to='/category/romance'><button className="border bg-[#49392C] border-white text-white  p-1 pr-7 w-[30%] pl-7 hover:text-[#49392C] hover:bg-[#FFF] hover:font-bold  hover:border-[#49392C]">Romance</button></Link>
          </div>
          <div className="catg4 text-center m-3">
          <Link to='/category/fantasy'><button className="border bg-[#49392C] border-white  text-white  p-1 w-[30%] pr-7 pl-7 hover:text-[#49392C] hover:bg-[#FFF] hover:font-bold  hover:border-[#49392C]">Fantasy</button></Link>
          </div>
          <div className="catg5 text-center m-3">
          <Link to='/category/historical'><button className="border bg-[#49392C] border-white text-white  p-1 w-[30%] pr-7 pl-7 hover:text-[#49392C] hover:bg-[#FFF] hover:font-bold hover:border-[#49392C]">Historical</button></Link>
          </div>
          </div>
     </div>
   

    </>
  )
}

export default FilterByCategory;