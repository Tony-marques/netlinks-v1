import {styled} from "styled-components";
import {Link, NavLink} from "react-router-dom";
import {usePostContext} from "../../contexts/PostContext.tsx";
import {ChangeEvent} from "react";

const Navbar = () => {
    const {handleUpdateSearch} = usePostContext()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        handleUpdateSearch(e.target.value)
    }

    return (
        <NavbarStyled>
            <div className="navbar-left">
                <div className="logo">N</div>

                <div className="input-groups">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Rechercher sur Netlinks"
                        onChange={handleSearch}
                    />
                </div>

            </div>
            <div className="navbar-middle">
                <ul>
                    <li>
                        <NavLink to="/">
                        <i className="fa-solid fa-house"></i>
                        </NavLink>
                    </li>
                    <li>
                        <Link to="/connexion">
                            <i className="fa-solid fa-house"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="profil-picture">
                    <img
                        src="assets/images/default-profil.jpg"
                        alt=""
                    />
                </div>
            </div>
        </NavbarStyled>
    );
};

export default Navbar;

const NavbarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #242526;
    margin-bottom: 1rem;
    position: relative;
    height: 56px;
    padding: 0 1rem;

    .navbar-left {
        display: flex;
        gap: 0.5rem;
        
        .input-groups{
            display: flex;
            justify-content: center;
            background-color: #3A3B3C;
            gap: 0.5rem;
            padding: 0 1rem;
            border-radius: 30px;
            
            input{
                border: none;
                outline: none;
                background-color: #3A3B3C;
                color: white;
              
                &::placeholder{
                    color: #B0B3B8;
                }
            }
            i{
                color: #B0B3B8;
                display: flex;
                align-items: center;
            }
        }
        
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            height: 40px;
            width: 40px;
            font-size: 1.5rem;
            font-weight: 700;
            background-color: #0866FF;
            border-radius: 50%;
        }
    }

    .navbar-middle {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        //border: 1px solid red;
        width: 600px;
        height: 100%;

        ul {
            list-style: none;
            display: flex;
            height: 100%;
            
            li{
                height: 100%;
            }

            a {
                width: 130px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 3px solid transparent;
                color: #242526;
                
            }

            i {
                font-size: 26px;
                color: #B0B3B8;
            }
        }
    }

    .navbar-right {
        .profil-picture {
            display: flex;
            img {
                border-radius: 50%;
                width: 40px;
            }
        }
    }
`;