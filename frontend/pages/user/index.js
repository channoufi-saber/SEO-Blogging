import Private from "../../components/auth/Private";
import Layout from "../../components/Layout";

const UserIndex = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>User Dashboard</h2>
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="/user/crud/blog">Create Blog</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/user/crud/blogs">Update/Delete Blog</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/user/update">Update profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    )
}

export default UserIndex;