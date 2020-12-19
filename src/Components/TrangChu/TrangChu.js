import React from 'react'
import { Link } from 'react-router-dom'

const TrangChu = ({ posts }) => {
    return (
        <div>
            {/* Two */}
            <section id="two">
                <div className="inner">
                    <article>
                        <div className="content">
                            <header>
                                <h3>Đồng Hồ Thông Minh Apple Watch</h3>
                            </header>
                            <div className="image fit">
                                <img src="images/pic01.jpg" alt="" />
                            </div>
                            <p>Nhờ có bộ xử lý S6 hoàn toàn mới, đồng hồ đạt hiệu năng cao hơn 20% so với dòng chip S5 thế hệ trước, đây được coi là bước nhảy vọt về phần cứng của dòng Apple Watch.</p>
                        </div>
                    </article>
                    <article className="alt">
                        <div className="content">
                            <header>
                                <h3>Tai Nghe Không Dây AirPods 2</h3>
                            </header>
                            <div className="image fit">
                                <img src="images/tainghe2.png" alt="" />
                            </div>
                            <p>Mỗi tai nghe đều có một microphone giúp bạn đàm thoại hoặc ra lệnh cho Siri bằng giọng nói, không cần phải chạm vào tai nghe
                                Chip Apple H1 hoàn toàn mới, đem lại kết nối tốt hơn.</p>
                        </div>
                    </article>
                </div>
            </section>
            {/* Danh Sach SP */}
            <section id="three">
                <div className="h1"><a href=" #">Tất Cả Sản Phẩm :</a></div><hr/><br/>
                <div className="grid grid-cols-4 gap-8">
                    {posts.map((post, index) => (
                        <article key={index}>
                            <div className="content">
                                {/* <span className="icon fa-laptop" /> */}
                                <Link to={`/ChiTiet/${post.id}`}><img className="img1" src={post.image} alt="" /></Link>
                                <header>
                                    <h3>{post.name}</h3>
                                </header>
                                <div className="Info1">{post.price} $</div>
                                <div className="Info2">{post.desc}</div>
                                <ul className="actions">
                                    <li><Link to={`/ChiTiet/${post.id}`} className="button">Chi Tiết</Link></li>
                                    {/* <li><button className="button alt" onClick={() => onDelete(post.id)}>Xóa</button></li> */}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default TrangChu
