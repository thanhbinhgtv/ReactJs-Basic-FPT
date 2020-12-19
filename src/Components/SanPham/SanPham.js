import React from 'react'
import { Link } from 'react-router-dom'

const SanPham = ({ posts, onDelete }) => {

    return (
        <div>
            {/* One */}
            {/* <section id="one">
                <div className="inner">
                    <header>
                        <h2>Magna Etiam Lorem</h2>
                    </header>
                    <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante.</p>
                    <ul className="actions">
                        <li><a href=" #" className="button alt">Xem Thêm</a></li>
                    </ul>
                </div>
            </section> */}
            {/* Bảng SP */}
            <section id="two">
                <div className="inner">
                    <div className="container-xl">
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-6"><h2><b>Thông Tin Sản Phẩm</b></h2></div>
                                        <div className="col-sm-3">
                                            <Link className="Link" to="/AddProduct">
                                                <button className="AddSP-btnadd">Thêm Sản Phẩm</button>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="search-box">
                                                <i className="material-icons"></i>
                                                <input type="text" className="form-control" placeholder="Search…" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-striped table-hover table-bordered">
                                    <thead>
                                        <tr className="abc">
                                            <th>ID</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Giá Tiền</th>
                                            <th>Mô Tả</th>
                                            <th className="img3">Hình Ảnh</th>
                                            {/* <th>Country <i className="fa fa-sort" /></th> */}
                                            <th>Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map((post, index) => (
                                            <tr key={index}>
                                                <td>{post.id}</td>
                                                <td>{post.name}</td>
                                                <td>{post.price} $</td>
                                                <td>{post.desc}</td>
                                                <td><img className="img2" src={post.image} alt="" /></td>
                                                <td>
                                                    <Link to={`/ChiTiet/${post.id}`}><button className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></button></Link>
                                                    <Link to={`/EditProduct/${post.id}`}>
                                                        <button className="edit" title="Edit" data-toggle="tooltip">
                                                            <i className="material-icons"></i>
                                                        </button>
                                                    </Link>
                                                    <button className="delete" onClick={() => onDelete(post.id)} title="Delete" data-toggle="tooltip"><i className="material-icons"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="clearfix">
                                    <div className="hint-text">Hiển thị <b>5</b> trong số <b>25</b> mục nhập</div>
                                    <ul className="pagination">
                                        <li className="page-item disabled"><a href=" #"><i className="fa fa-angle-double-left" /></a></li>
                                        <li className="page-item"><a href=" #" className="page-link">1</a></li>
                                        <li className="page-item"><a href=" #" className="page-link">2</a></li>
                                        <li className="page-item"><a href=" #" className="page-link">3</a></li>
                                        <li className="page-item"><a href=" #" className="page-link">4</a></li>
                                        <li className="page-item"><a href=" #" className="page-link">5</a></li>
                                        <li className="page-item"><a href=" #" className="page-link"><i className="fa fa-angle-double-right" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Table */}
            <section id="main">
                <div class="inner">
                    <section>
                        <h1 className="h1bgsp">Bảng Giá Sản Phẩm</h1>
                        <hr /><br />
                        <h4>Iphone</h4>
                        <div className="table-wrapper">
                            <table className="alt">
                                <thead>
                                    <tr>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Mô Tả</th>
                                        <th>Giá Tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Iphone 12</td>
                                        <td>Nguyên Seal, đầy đủ phụ kiện.</td>
                                        <td>29.99</td>
                                    </tr>
                                    <tr>
                                        <td>Iphone 11</td>
                                        <td>Like new, gồm sạc, tai nghe, hộp.</td>
                                        <td>19.99</td>
                                    </tr>
                                    <tr>
                                        <td>Iphone XS</td>
                                        <td>Nguyên Seal, đầy đủ phụ kiện.</td>
                                        <td>29.99</td>
                                    </tr>
                                    <tr>
                                        <td>Iphone 8</td>
                                        <td>Like new, máy trần.</td>
                                        <td>19.99</td>
                                    </tr>
                                    <tr>
                                        <td>Iphone 7</td>
                                        <td>Nguyên Seal, đầy đủ phụ kiện.</td>
                                        <td>29.99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Macbook</h4>
                        <div className="table-wrapper">
                            <table className="alt">
                                <thead>
                                    <tr>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Mô Tả</th>
                                        <th>Giá Tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SamSung A20</td>
                                        <td>Nguyên Seal, đầy đủ phụ kiện.</td>
                                        <td>29.99</td>
                                    </tr>
                                    <tr>
                                        <td>SamSung A19 Pro</td>
                                        <td>Like new, gồm sạc, tai nghe, hộp.</td>
                                        <td>19.99</td>
                                    </tr>
                                    <tr>
                                        <td>SamSung A18 Mini</td>
                                        <td>Nguyên Seal, đầy đủ phụ kiện.</td>
                                        <td>29.99</td>
                                    </tr>
                                    <tr>
                                        <td>SamSung A19</td>
                                        <td>Like new, gồm sạc, tai nghe, hộp.</td>
                                        <td>19.99</td>
                                    </tr>
                                    <tr>
                                        <td>SamSung A10</td>
                                        <td>Like new, gồm sạc, tai nghe, hộp.</td>
                                        <td>29.99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default SanPham
