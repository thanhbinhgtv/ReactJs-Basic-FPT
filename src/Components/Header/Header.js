import React from 'react'
import { Link } from 'react-router-dom'
import DangNhap from '../DangNhap/DangNhap'
import DangXuat from '../DangXuat/DangXuat'


const Header = ({ user, hamDangXuat }) => {
    const onDangXuat = () => {
        hamDangXuat();
    }
    return (
        <div>
            <header id="header">
                <div className="inner">
                    <Link to="/" className="logo">Thanh Bình</Link>
                    <nav id="nav">
                        <Link to="/">Trang Chủ</Link>
                        {/* <Link to="/SanPham">Sản Phẩm</Link> */}
                        {user.status !== undefined && user.status === "1" ?<Link to="/SanPham">Sản Phẩm</Link> : ""}
                        <Link to="/LienHe">Liên Hệ</Link>
                        <Link to="/GioiThieu">Giới Thiệu</Link>
                        <Link to="/GioHang">Giỏ Hàng</Link>
                    </nav>
                </div>
                <span>
                    {user.name !== undefined && user.name.length > 0 ? <DangXuat user={user} dangXuat={onDangXuat}/> : <DangNhap />}
                </span>
            </header>
        </div>
    )
}

export default Header
