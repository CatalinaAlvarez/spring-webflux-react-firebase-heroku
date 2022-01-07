import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = ({elements}) => {
    return (
        <nav>
        <section >
           <img className="logo" src={logo} alt="logo"/>
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={element.url}>{element.titulo}</Link>)
               })
           }
        </section>
        </nav>
    )
}

export default Navbar
