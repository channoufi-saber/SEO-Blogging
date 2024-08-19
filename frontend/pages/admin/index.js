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
                    <div className="col-md-4">
                        <ul className="list-group" >
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    <a>Create Category</a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <a href="/admin/crud/blog" >Create Blog</a>
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
                                    <a>Update</a>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="col-md-8">right</div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminIndex;