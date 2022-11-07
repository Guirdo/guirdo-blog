import Link from "next/link";
import cx from 'classnames'
import { useState } from "react";
import { Cancel, Menu } from "iconoir-react";

function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const itemClasses = cx("navbar__item", { "navbar__item--active": isActive })

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar__brand">
                    <Link
                        className="navbar__link navbar__link--no-deco"
                        href="/"
                    >
                        Seb Méndez
                    </Link>
                </li>
                <li className={itemClasses}>
                    <Link
                        href="/projects"
                    >
                        Proyectos
                    </Link>
                </li>
                <li className={itemClasses}>
                    <Link
                        href="/blog"
                    >
                        Blog
                    </Link>
                </li>
                <li className={itemClasses}>
                    <Link
                        href="/contact"
                    >
                        Contacto
                    </Link>
                </li>

                <li
                        className="navbar__toggle"
                        onClick={() => setIsActive(!isActive)}
                    >
                        {
                            !isActive ? (
                                <span><Menu strokeWidth={2}/></span>
                            ) : (
                                <span><Cancel strokeWidth={2}/></span>
                            )
                        }
                    </li>
            </ul>
        </nav>
    );
}

export default Navbar;