import { useParams } from "react-router-dom";
import popularBooks from "../utils/popularBooks";
import { Link } from "react-router-dom";
function GenreFiltering(){
    const data=useParams();
    const filteredBook=popularBooks.filter((bookD)=>{
        if(bookD.category.toLowerCase()==data.ct.toLowerCase()){
            return true;
        }
    })
    console.log(filteredBook)
    return (
        <>
        <div className='grid mx-auto grid-cols-3 w-[85%] text-center mt-4 '>
          {filteredBook.map((book)=>{
            return (
                <>
                  <div className='border-2 bg-[#F0E8D9] border-black-300  m-1  rounded-lg p-4'>
                     <h1 className=' underline text-[#D37C2D] font-bold'>{book.title}</h1>
                     <h2>{book.description}</h2>
                     <h3 className="text-[#D37C2D] font-bold">{book.year}</h3>
                     <Link to={`/book/${book.id}`}><button className='border p-1 pr-3 pl-3 text-[#ffffff] bg-[#49392C] hover:text-[#D37C3D]'>View More</button></Link>
                  </div>
                
                </>
            )
          })}
          </div>
        </>
    )
}
export default GenreFiltering;