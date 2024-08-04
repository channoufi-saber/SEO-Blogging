import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import renderHTML from 'react-render-html';
import { singleTag } from '../../actions/tag';
import Card from '../../components/blog/Card';
import Layout from '../../components/Layout';
import { API, APP_NAME, DOMAIN } from '../../config';

const Tag = ({ tag, blogs, query }) => {
    const head = () => (
        <Head>
            <title>
                {tag.name} | {APP_NAME}
            </title>
            <meta name="description" content={`Best programming tutorials on ${tag.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Best programming tutorials on ${tag.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
        </Head>
    );

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="container-fluid text-center">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="display-4 font-weight-bold">{tag.name}</h1>
                                {blogs.map((b, i) => (
                                    <div key={i}>
                                        <Card key={i} blog={b} />
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </header>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Tag.getInitialProps = ({ query }) => {
    return singleTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { tag: data.tag, blogs: data.blogs, query };
        }
    });
};

export default Tag;
