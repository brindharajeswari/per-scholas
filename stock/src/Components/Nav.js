//it should contains links to home and about pages
import { Link } from 'react-router-dom';


function Nav(){
    return(
        <div className='nav'>
           
            <Link to="/">
                <div> Home </div>
            </Link>
            <Link to="/about">
                <div> About </div>
            </Link>
            {/* <Link to="/stocks/:symbol">
                <div> Stock </div>
            </Link> */}
            <Link to="/stocks">
                <div> Dashboard </div>
            </Link>

        </div>
    );
}

export default Nav;
