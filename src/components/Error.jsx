import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
function Error(){
    return (
        <>
          <div className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-5xl font-bold">Error Page not Found, 404</h1>
            <Link to='/' className="text-blue-500 text-[1.3rem] font-bold m-4 flex items-center"> <HomeIcon/> Go back</Link>
          </div>
        </>
    )
}
export default Error;