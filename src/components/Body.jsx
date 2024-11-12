import FilterByCategory from "./FilterByCategory";
import PopularBooks from "./PopularBooks";
function Body(){
    return (
        <>
           <h1 className="text-center m-2 font-bold text-[1.3rem]">Welcome to Online Library System</h1>
           <div className="flex w-[85%] mx-auto bg-white-100 [box-shadow:rgba(0,0.25)_0px_30px_10px_-300px,_rgba(0,0,0,0.1)_0px_30px_10px_-10px] ">
                 <FilterByCategory/>
                 <PopularBooks/>
           </div>
          

        </>

    )
}
export default Body;