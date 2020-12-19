import React, { useState } from 'react'
import swal from 'sweetalert';

const DangKy = ({ dangKyUser }) => {
    const [user, setUser] = useState({});
    const hamChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
        console.log(user);
    }
    const hamSubmit = (e) => {
        e.preventDefault();
        if (user.status === null || user.status === "3" || user.status === undefined) {
            swal("Vui lòng chọn vai trò.");
            return;
        }
        dangKyUser(user);
    }
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Đăng Ký</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    <form onSubmit={hamSubmit}>
                        <div className="form-group">
                            <label htmlFor="user">Username</label>
                            <input type="text" className="form-control" name="name" placeholder="Enter username" onChange={hamChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">Password</label>
                            <input type="password" className="form-control" name="pass" placeholder="Password" onChange={hamChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Status</label>
                            <select className="form-control" id="status" name="status" onChange={hamChange} defaultValue="3">
                                <option value="3" >Chưa chọn</option>
                                <option value="1" >Admin</option>
                                <option value="0" >Khách hàng</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Đăng kí</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default DangKy
