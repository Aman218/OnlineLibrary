import popularBooks from '../utils/popularBooks';
import { Link } from 'react-router-dom';
function PopularBooks(){
     console.log(popularBooks)
     
    return (
        <>
        <div className='flex flex-col bg-[#49392C] p-2 h-[70vh] overflow-y-scroll '>
            <h1 className='text-center text-[1.3rem] font-bold'>Showing Popular Books</h1>
         {popularBooks.map((book)=>{
            return (
                <div className='border-2 border-red-200 m-2 p-3'>
                    <h1 className='text-center text-[1.1rem]  text-white font-bold'>{book.title}</h1>
                    <h2 className='text-center text-white'>{book. description}</h2>
                    <h2 className='text-center font-bold'>{book.year}</h2>
                    <div className='text-center'> <Link to={`/book/${book.id}`}><button className='border text-white border-white p-2 pr-4 pl-4 hover:text-[#49392C] hover:bg-[#FFF] hover:font-bold'>View More</button></Link> </div>
                </div>
            )
         })}
         </div>
        </>
    )
}
export default PopularBooks;