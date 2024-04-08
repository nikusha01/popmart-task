import { Link } from 'react-router-dom'

import './Navbar.css'
import Searchbar from '../SearchBar/Searchbar'
import { useSearch } from '../../context/Appcontext';


export default function Navbar() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='brand'>
                <h1>Popmart Posts</h1>
            </Link>
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </nav>
    </div>
  )
}
