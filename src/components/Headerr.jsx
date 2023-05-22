import { useState , useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import Modal from "../components/Modal";
import { connect } from "react-redux";
function Header({basket}) {
    const [modalShown, setModalShown] = useState(false);
    const [data, setData] = useState([])
    const [showSearch, setShowSearch] = useState(false); 
    const [item,setItem]=useState("")
    const [filter, setFilter] = useState("")
    useEffect(() => {
        fetch("http://localhost:1313/products")
            .then((a) => a.json())
            .then((a) => setData(a))
    }, []);
    let f = data.filter(a => a.name.toLowerCase().includes(filter.toLowerCase()))

    const handleChange = (e) => {

        setFilter(e)
        let f = data.filter(a => a.name.toLowerCase().includes(filter.toLowerCase()))
        console.log(f)
    }

    return (
        <>
            <header>
                <div className="header">
                    <div className="header_main">
                        <div className="logo_menu">
                            <a href="#" className="header_logo">
                                <img src="/organic_logo.svg" />
                            </a>
                            <input type="checkbox" id="menu_bar_input" />
                            <ul className="menu">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop">Shop</NavLink>
                                </li>
                                <li className="has_dropdown">
                                    <a>
                                        Pages<i className="fa-solid fa-chevron-down"></i>
                                    </a>
                                    <ul className="dropdown">
                                        <li>
                                            <NavLink to="/services">Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/service-single">Service Single</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/portfolio">Portfolio</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/team">Our Team</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/blog">Blog</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/contact-us">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="search_cart position">

                            <div onClick={() => setShowSearch(!showSearch)} className="input position">
                                <input onChange={(e) => handleChange(e.target.value)} value={item} type="text" className="search"></input>
                        {showSearch && <ul className="scroll" >
                            {f.map(item => (
                                <li onClick={(e)=>setItem(e.target.textContent)}>
                                    <Link to={`shop-single/${item.id}`}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>}
                                <div className="search_icon">
                                    <i className="fa-solid fa-magnifying-glass fa-beat-fade"></i>
                                </div>
                            </div>
                            <div className="header_search"></div>
                            <a onClick={() => setModalShown(!modalShown)} className="header_cart">
                                <div className="cart_image">
                                    <img src="/Cart Icon.png"/>
                                </div>
                                <div className="cart_text">Cart</div>
                                <div className="cart_count">{basket? `(${basket.length})` : 0}</div>
                            </a>
                            <label className="hamburger_menu_icon" htmlFor="menu_bar_input">
                                <i className="fa-solid fa-bars"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </header>
            {modalShown && <Modal modalShown={modalShown} setModalShown={setModalShown} />}
        </>
    );
}
const t =(a)=>a
export default connect(t)(Header);





