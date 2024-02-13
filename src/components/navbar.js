
export default function Navbar(){

    return ( 
    <nav className="nav">
    <a href="/" className="Home">
        Etusivu</a>
    <ul>
        <li>
            <a href="/Recipes" className="Recipes">Reseptit</a>
            </li>
            <li>
            <a href="/About" className="About">Tietoja</a>
        </li>
    </ul>
    </nav>
    )
}

