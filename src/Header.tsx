import './Header.css'
import { Link } from 'react-router-dom'



export default function Header() {
    return (
        <>
            <div className="Nav">
                <a className='blink' style={{cursor: "default", textDecoration: "none"}}>&#x3E;</a>

                <Link to="/" className='navbtn' data-text="Home">Home</Link>
                <Link to="/About" className='navbtn' data-text="About">About</Link>
                <Link to="/" className='navbtn' data-text="MyWork">My Work</Link>
            </div>
        </>
    );
}