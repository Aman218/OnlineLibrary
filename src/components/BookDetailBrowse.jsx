import {useParams} from 'react-router-dom';
import books from '../utils/books';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function BookDetailBrowse(){
    const book=useParams()
    console.log(book)
    const books = useSelector((state) => state.books);
    const filteredBook=books.filter((bookD)=>{
        if(bookD.id==book.id){
            return true;
        }
    })
    console.log(filteredBook)
    return (
        <>
            <div className='font-bold text-center w-[100%] '><Link to=
            '/browsebooks'><button className=' text-[1.1rem] bg-[#49392C] text-white m-2 p-2 rounded-lg hover:text-white
            hover:bg-[#D37C3D]'> <ArrowBackIcon/> Back to Browse</button></Link></div>
        < div className='flex w-[85%] mx-auto h-[80vh]  items-center mt-2 rounded-xl bg-[#F0E8D9] justify-center mb-2 '>
           {filteredBook.map((book)=>{
           return( <>
              <div className='w-[30%] h-[50vh] relative'>
                <img src={book.image} alt="" className='absolute w-[100%] h-[100%]' />
              </div>
              <div className='w-[50%] flex flex-col m-3 bg-[#49392C] h-[50vh] p-4 justify-center'>
                  <h1 className='text-center font-bold underline text-2xl text-white'>{book.title}</h1>
                  <h3 className='text-center font-bold text-[#D37C3D]'>{book.year}</h3>
                  <h4 className='text-center text-white'>{book.moreInfo} {book.description}</h4>
                  <h4 className='text-center text-[#D37C3D]'> <GradeIcon/> {book.rating}</h4>
                  <h4 className='text-center text-white font-bold'> Genre: <span className='text-[#D37C3D] underline'>{book.category}</span></h4>
                  <h4 className='text-center text-white font-bold'> Author-Name: <span className='text-[#D37C3D] underline'>{book.author}</span></h4>
              </div>
              </>
           )
           })}
        </div>
    
        </>
    )
}
export default BookDetailBrowse;