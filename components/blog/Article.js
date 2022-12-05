import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';
import moment from "moment";
import cx from 'classnames'
import CodeSnippet from "../entries/CodeSnippet";

function Article({ post }) {
    const { headline, thumbnail, tags, description, content, references } = post.fields

    const options = {
        /* renderMark: {
            [MARKS.CODE]: text => <CodeSnippet text={text} />,
        }, */
        renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: ({ data: { target } }) => {
                const entryType = target.sys.contentType.sys.id

                if(entryType === 'snippet'){
                    return <CodeSnippet snippet={target.fields} />
                }

            },
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target } }) => (
                <figure className="article-figure">
                    <Image
                        className={
                            cx(
                                "article__image",
                                { 'article__image--shrink': target.fields.file.details.image.width < 800 })
                        }
                        key={target.sys.id}
                        src={`https:${target.fields.file.url}`}
                        width={target.fields.file.details.image.width}
                        height={target.fields.file.details.image.height}
                        alt={target.fields.title}
                    />
                    {
                        target.fields.description && <figcaption className="article-figure__caption">{target.fields.description}</figcaption>
                    }
                </figure>
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
            <figure className="article-figure">
                <Image
                    className="article__thumbnail"
                    alt={headline}
                    src={`https:${thumbnail.fields.file.url}`}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
            </figure>
            <p className="article__description">{description}</p>
            <div>
                <p><b>Tags:</b> {tags.join(', ')}</p>
                <p><b>Autor:</b> Seb Méndez</p>
                <p><b>Fecha de publicación:</b> <time dateTime={moment(post.sys.createdAt).format('YYYY-MM-DD')}>{moment(post.sys.createdAt).format('dddd, MMMM Do YYYY')}</time></p>
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