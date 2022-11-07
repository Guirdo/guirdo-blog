import Link from "next/link";
import Layout from "../components/Layout";

function CreditsPage() {
    return (
        <Layout pageTitle="Credits">
            <section className="credits-section">
                <div className="credits">
                    <Link href="/" className="credits__link">
                        {'<-'}Back to home
                    </Link>
                    <ul className="credits-list">
                        <li className="credits__list-item">
                            <b>Background photo: </b>
                            <a
                                href="https://www.instagram.com/diana.vzqx/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Dianini</a>
                        </li>
                        <li className="credits__list-item">
                            <b>Social networks icons:</b>{' '}
                            <a
                                href="https://www.flaticon.es/packs/social-network-3"
                                title="Social network | Filled"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Freepik - Flaticon</a>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
}

export default CreditsPage;