import {styled} from "styled-components";
import {Link, NavLink} from "react-router-dom";
import {usePostContext} from "../../contexts/PostContext.tsx";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useAuth} from "../../hooks/useAuth.tsx";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const {handleUpdateSearch} = usePostContext();
    const {account} = useAuth();

    useEffect(() => {
        document.body.addEventListener("click", () => {
            setShowMenu(false);
        });
    }, [showMenu]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        handleUpdateSearch(e.target.value);
    };

    const handleOnClick = (e: FormEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

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
                        <NavLink to="/dd">
                            <i className="fa-solid fa-users"></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div
                className="navbar-right"
                onClick={handleOnClick}
            >
                <div className="profil-picture">
                    <img
                        src="assets/images/default-profil.jpg"
                        alt=""
                    />
                </div>
                {showMenu && (
                    <nav onClick={(e) => e.stopPropagation()}>
                        <Link
                            className="profil-details"
                            to="/profil"
                            onClick={() => setShowMenu(false)}
                        >
                            <img
                                src="assets/images/default-profil.jpg"
                                alt=""
                            />
                            <span>{account.pseudo}</span>
                        </Link>

                        <div className="separator"></div>

                        <Link
                            className="profil-details"
                            to="#"
                        >
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <span>Se déconnecter</span>
                        </Link>

                    </nav>
                )}

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
    //margin-bottom: 1rem;
    position: relative;
    height: 56px;
    padding: 0 1rem;

    .navbar-left {
        display: flex;
        gap: 0.5rem;

        .input-groups {
            display: flex;
            justify-content: center;
            background-color: #3A3B3C;
            gap: 0.5rem;
            padding: 0 1rem;
            border-radius: 30px;


            input {
                border: none;
                outline: none;
                background-color: #3A3B3C;
                color: white;

                &::placeholder {
                    color: #B0B3B8;
                }
            }

            i {
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

            li {
                //border: 1px solid blue;
                height: 100%;

            }

            a {
                //border: 1px solid red;
                width: 130px;
                //height: calc(100% - (0.3rem * 2));
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.2rem;
                justify-content: center;
                border: 3px solid transparent;
                color: #242526;


            }

            i {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 26px;
                color: #B0B3B8;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #3A3B3C;
                }
            }

            a.active i {
                &:hover {
                    background-color: transparent;
                }
            }
        }
    }

    .navbar-right {
        display: flex;
        position: relative;

        .profil-picture {
            display: flex;
            cursor: pointer;

            img {
                border-radius: 50%;
                width: 40px;
            }
        }

        nav {
            width: 300px;
            border-radius: 5px;

            padding: 0.5rem;
            background-color: #242526;
            position: absolute;
            right: 0;
            top: 130%;
            color: #eee;

            .separator {
                border-bottom: 1px solid #3E4042;
                margin: 0.5rem 0;
            }

            .profil-details {
                text-decoration: none;
                border-radius: 5px;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem;
                color: #fff;
                cursor: pointer;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #3A3B3C;
                }

                img {
                    border-radius: 50%;
                    width: 30px;
                }

                i {
                    background-color: #3A3B3C;
                    padding: 0.5rem;
                    border-radius: 50%;
                }
            }
        }
    }
`;