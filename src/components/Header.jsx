import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
function Header(){


    return (
        <>
          <div className="nav-sec flex justify-between w-[100%] bg-[#49392C] p-5 text-[#FFFFFF] ">
              <div className="left-sec mt-2">
              <a href="" className=' mr-4 rounded-lg border-2 p-2 border-white'>Library System <LibraryBooksIcon/></a>
              </div>
              <div className="right-sec flex ">
                  <Link to="/" className='mr-4 flex rounded-lg items-center border-2 p-2 border-white hover:text-[#49392C] hover:bg-[#FFF]'> <HomeIcon/> Home</Link>
                  <Link to="/browsebooks" className=' hover:text-[#49392C] hover:bg-[#FFF] mr-4 flex items-center rounded-lg border-2 p-2 border-white' > <MenuBookIcon/> Browse Books</Link>
                  <Link to="/addBooks" className=' hover:text-[#49392C] hover:bg-[#FFF] mr-4 flex items-center rounded-lg border-2 p-2 border-white' > <AddIcon/> Add Books</Link>

              </div>
          </div>
          
        </>

    )
}
export default Header;