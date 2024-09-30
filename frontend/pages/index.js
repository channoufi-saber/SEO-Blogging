import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCookie } from '../actions/auth';
import { getCategories } from '../actions/category';
import Layout from '../components/Layout';

const Index = () => {


    const [values, setValues] = useState({
        name: '',
        description: '',
        error: false,
        success: false,
        categories: [],
        removed: false,
        reload: false
    });

    const { name, description, error, success, categories, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadCategories();
    }, [reload]);

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, categories: data });
            }
        });
    };

    const showCategories = () => {
        return categories.map((c, i) => {
            return (

                <div className="CategoryMainn" key={i}>
                    <div className="container">

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">{c.name}</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href={`/categories/${c.name}`}>
                                        <a>
                                            <h3 className="h1">{c.name}</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">{c.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>
 
                </div>
                    
                   
            );
        });
    };;


    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                PROGRAMMING & WEB DEVELOPMENT BLOGS/TUTORIALS
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best programming and web development blogs. The World belongs to you. 
                            </p>
                        </div>

                    </div>

                </div>


            </article>
            <div className="container">
                {showCategories()}

            </div>
        </Layout>
    );
};

export default Index;
