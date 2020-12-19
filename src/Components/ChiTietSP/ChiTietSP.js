
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ChiTietSP = ({muaProduct}) => {
    let { id } = useParams();
    const [product, setproduct] = useState([])
    const API_PRODUCT = "http://localhost:3000/product";

    // Hiện Chi Tiết Sản Phẩm
    useEffect(() => {
        fetch(`${API_PRODUCT}/${id}`)
            .then(Response => Response.json())
            .then((data) => setproduct(data));
    }, []);
    return (
        <div>
            <main className="ChiTietSP-container">
                {/* Left Column / Headphones Image */}
                <div className="left-column">
                    <img data-image="black" src={product.image} alt="" />
                </div>
                {/* Right Column */}
                <div className="right-column">
                    {/* Product Description */}
                    <div className="product-description">
                        <span>Thông Tin</span>
                        <h1>{product.name}</h1>
                        <p>{product.desc} - The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                        <h3>{product.price} VNĐ</h3>
                    </div>
                    {/* Product Configuration */}
                    <div className="product-configuration">
                        {/* Product Color */}
                        <div className="product-color">
                            <span>Color</span>
                            <div className="color-choose">
                                <div>
                                    <input data-image="red" type="radio" id="red" name="color" defaultValue="red" defaultChecked />
                                    <label htmlFor="red"><span /></label>
                                </div>
                                <div>
                                    <input data-image="blue" type="radio" id="blue" name="color" defaultValue="blue" />
                                    <label htmlFor="blue"><span /></label>
                                </div>
                                <div>
                                    <input data-image="black" type="radio" id="black" name="color" defaultValue="black" />
                                    <label htmlFor="black"><span /></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product Pricing */}
                    <div className="product-price">
                        <span>{product.mieuta}</span>
                        <button  className="cart-btn" type='submit' onClick={()=> muaProduct(product)}>Thêm Vào Giỏ Hàng</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ChiTietSP
