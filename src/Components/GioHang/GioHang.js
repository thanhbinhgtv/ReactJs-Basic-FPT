import React from 'react'
import { Link } from 'react-router-dom'

const GioHang = ({posts, onDelete}) => {
    return (
        <div>
            <section id="two">
                <div className="inner">
                    <div className="container-xl">
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-6"><h2><b>Thông Tin Giỏ Hàng</b></h2></div>
                                        <div className="col-sm-3">
                                            <Link className="Link" to="/TrangChu">
                                                <button className="AddSP-btnadd" onClick={()=>console.log(posts)}></button>
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
        </div>
    )
}

export default GioHang
