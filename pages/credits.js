import Link from "next/link";
import Layout from "../components/Layout";

function CreditsPage() {
    return (
        <Layout pageTitle="Credits">
            <div className="credits-section">
                <div className="credits-body">
                    <h3 className="credits__title">Créditos</h3>
                    <ul className="credits-list">
                        <li className="credits__list-item">
                            <b>Imagen de fondo: </b>
                            <a
                                href="https://www.instagram.com/diana.vzqx/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Dianini</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default CreditsPage;