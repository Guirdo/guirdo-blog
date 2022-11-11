import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';
import moment from "moment";
import CodeSnippet from "../CodeSnippet";

function Article({ post }) {
    const { headline, tags, description, content, references } = post.fields

    const options = {
        renderMark: {
            [MARKS.CODE]: text => <CodeSnippet text={text} />,
        },
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target } }) => (
                <div className="article__figure">
                    <Image
                        className="article__image"
                        key={target.sys.id}
                        src={`https:${target.fields.file.url}`}
                        width={target.fields.file.details.image.width}
                        height={target.fields.file.details.image.height}
                        alt={target.fields.title}
                    />
                </div>
            ),
            [BLOCKS.LIST_ITEM]: (node, children) => (
                <li className="article__list-item">{children}</li>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
                <h2 className="article__subtitle">{children}</h2>
            ),
            [INLINES.HYPERLINK]: ({ data: { uri } }, text) => <a className="article__link" href={uri}>{text}</a>
        }
    }

    return (
        <article className="article">
            <h1 className="article__headline">{headline}</h1>
            <p className="article__description">{description}</p>
            <div>
                <p>Tags: {tags.join(', ')}</p>
                <p>Autor: Seb Méndez</p>
                <p>Publicado el: <time dateTime={moment(post.sys.createdAt).format('YYYY-MM-DD')}>{moment(post.sys.createdAt).format('dddd, MMMM Do YYYY')}</time></p>
            </div>

            <hr />
            <div className="article__content">
                {documentToReactComponents(content, options)}
            </div>
            <hr />
            {
                references && <div className="article__references">
                    <h2>Referencias</h2>
                    {documentToReactComponents(references, options)}
                </div>
            }
        </article>
    );
}

export default Article;