import React from 'react'
import { Link } from 'react-router-dom'
import Clock from '../Clock/Clock'
const Banner = () => {
    return (
        <div>
            <section id="banner">
                <div className="inner">
                    <h1>Phụ Kiện Chính Hãng : <span>Iphone - Ipad - Macbook<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Chất Lượng Tạo Nên Thương Hiệu</span>
                    </h1>
                    <ul className="actions">
                        <li><a href=" #" className="button alt"><Link to="/SanPham"><div className="clock"><Clock /></div></Link></a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Banner
