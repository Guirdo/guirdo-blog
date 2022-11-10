import Link from "next/link";
import cx from 'classnames'
import { useState } from "react";
import { Cancel, Menu } from "iconoir-react";
import ChangeLocale from "./ui/ChangeLocale";
import { useTranslation } from "next-i18next";

function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const itemClasses = cx("navbar__item", { "navbar__item--active": isActive })
    const { t } = useTranslation('navbar')

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
                        {t('projects')}
                    </Link>
                </li>
                <li className={itemClasses}>
                    <Link
                        href="/blog"
                    >
                        {t('blog')}
                    </Link>
                </li>
                <li className={itemClasses}>
                    <Link
                        href="/contact"
                    >
                        {t('contact')}
                    </Link>
                </li>

                <li className={itemClasses}>
                    <ChangeLocale />
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