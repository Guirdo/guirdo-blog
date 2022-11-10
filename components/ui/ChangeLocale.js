import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";

function ChangeLocale() {
    const { locale, asPath: currentPath } = useRouter()

    const changeLocale = (loc) => {
        Cookies.set('NEXT_LOCALE', loc)
    }

    return (
        <>
            <small>
                {
                    locale === 'en' ?
                        'EN 🇺🇸 ' :
                        <Link href={currentPath} locale="en" onClick={() => changeLocale('en')}>
                            EN 🇺🇸
                        </Link>
                }
            </small>
            <span> | </span>
            <small>
                {
                    locale === 'es' ?
                        'ES 🇲🇽' :
                        <Link href={currentPath} locale='es' onClick={() => changeLocale('es')}>
                            ES 🇲🇽
                        </Link>
                }
            </small>

        </>
    );
}

export default ChangeLocale;