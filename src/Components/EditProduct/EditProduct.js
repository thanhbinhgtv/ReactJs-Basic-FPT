import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import firebase from '../../Firebase/Firebase';

const EditProduct = ({editProduct}) => {
    const inputEl = useRef(null);

    let { id } = useParams();
    const [product, setproduct] = useState({});
    const API_PRODUCT = "http://localhost:3000/product";

    // Hiện Chi Tiết Sản Phẩm
    useEffect(() => {
        fetch(`${API_PRODUCT}/${id}`)
            .then(Response => Response.json())
            .then((data) => setproduct(data));
    }, []);
    //
    const hamChange = (e) => {
        const {name, value} = e.target;
        setproduct({
            ...product,
            [name] : value,
            // image : url,
        })
    }
    const hamSubmit = (e) => {
        e.preventDefault();
        let file = inputEl.current.files ?  inputEl.current.files[0] : '';
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
          storageRef.getDownloadURL().then((url) => {
             console.log(url);
             // Tạo object mới chứa toàn bộ thông tin từ input
             const newData = {
                 id: Math.random().toString(36).substr(2, 9),
                 ...product,
                 image: url
             }
             // // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
             editProduct(newData)
         })
     });
    }
    // const hamSubmit = (e) => {
    //     e.preventDefault();
    //     editProduct(product);
    // }
    return (
        <div>
            <div className="AddProduct-container">
                <div className="login-form">
                    <form action="" onSubmit={hamSubmit}>
                        <h2 className="text-center">Sửa Sản Phẩm</h2>
                        <div className="form-group has-error">
                            <input type="text" className="form-control" name="id" defaultValue={product.id} placeholder="ID" disabled="disabled"/>
                        </div>
                        <div className="form-group has-error">
                            <input type="text" className="form-control" name="name" onChange={hamChange} defaultValue={product.name} placeholder="Tên Sản Phẩm" required="required"/>
                        </div>
                        <div className="form-group has-error">
                            <input type="text" className="form-control" name="price" onChange={hamChange} defaultValue={product.price} placeholder="Giá Tiền" required="required"/>
                        </div>
                        <div className="form-group has-error">
                            <input type="text" className="form-control" name="desc" onChange={hamChange} defaultValue={product.desc} placeholder="Mô Tả" required="required"/>
                        </div>
                        <div className="form-group has-error">
                            <input type="file" className="form-control" name="image" ref={inputEl}  placeholder="Hình Ảnh" required="required" />
                            <img src={product.image} alt="" className="Edit-img2" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sửa</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
