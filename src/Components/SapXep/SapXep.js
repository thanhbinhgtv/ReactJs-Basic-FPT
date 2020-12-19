import React from 'react'
import { Link } from 'react-router-dom'

const SapXep = ({ hamSort }) => {
    return (
        <section className="page-section pb-0 pt-5" id="contact">
            <div className="container">
                {/* Contact Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">BỘ LỌC - TÌM KIẾM</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Contact Section Form*/}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="form-group">
                            <Link to='/list-products/sap-xep'><button type="button" className="btn btn-success mr-2">Xắp xếp</button></Link>
                            <Link to='/list-products/tim-kiem'><button type="button" className="btn btn-success mr-2">Tìm kiếm</button></Link>
                            <Link to='/list-products/nho-hon'><button type="button" className="btn btn-success mr-2">Lọc theo giá</button></Link>
                            <Link to='/list-products/vi-tri'><button type="button" className="btn btn-success">Lọc theo vị trí</button></Link>
                        </div>
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                        <div className="form-group">
                            <button type="button" className="btn btn-success mr-2" onClick={() => hamSort(1)}>Xếp theo A-Z</button>
                            <button type="button" className="btn btn-success mr-2" onClick={() => hamSort(2)}>Xếp theo Z-A</button>
                            <button type="button" className="btn btn-success mr-2" onClick={() => hamSort(3)}>Xếp theo giá tăng dần</button>
                            <button type="button" className="btn btn-success" onClick={() => hamSort(4)}>Xếp theo giá giảm dần</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SapXep
