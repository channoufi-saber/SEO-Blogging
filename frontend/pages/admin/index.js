import Link from "next/link";
import Admin from "../../components/auth/Admin";
import Layout from "../../components/Layout";

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group" >
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    Create Category
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/admin/crud/blog">
                                    Create Blog
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    <a>Create Tag</a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link href="/admin/crud/blogs">
                                    <a>Update/Delete Blog</a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link href="/user/update">
                                    <a>Update Profile</a>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminIndex;