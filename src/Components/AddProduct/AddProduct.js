import React, { useState, useRef } from 'react';
import firebase from '../../Firebase/Firebase';

const AddProduct = ({onAdd}) => {
    const inputEl = useRef(null);
    /*
    - Lấy giá trị của input (onchange) và gán giá trị vào state
    - Bắt sự kiện submit và bắn dữ liệu từ con lên cha
    - Dựa vào data thằng con thêm dữ liệu vào mảng
    */
   const [post, setPost] = useState({});
   const hamChange = (e) => {
       const { name, value } = e.target;
       setPost({
           ...post,
           [name]: value
       });
   }
   const hamSubmit = (e) => {
       e.preventDefault();
       let file = inputEl.current.files ?  inputEl.current.files[0] : '';
       // tạo reference chứa ảnh trên firesbase
       let storageRef = firebase.storage().ref(`images/${file.name}`);
       console.log(file.name)
       storageRef.put(file).then(function () {
         storageRef.getDownloadURL().then((url) => {
            console.log(url);
            // Tạo object mới chứa toàn bộ thông tin từ input
            const newData = {
                id: Math.random().toString(36).substr(2, 9),
                ...post,
                image: url
            }
            // // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
            onAdd(newData)
        })
    });
   }
    return (
        <div className="AddProduct-container">
            <div className="login-form">
                <form action="" onSubmit={hamSubmit}>
                    <h2 className="text-center">Thêm Sản Phẩm</h2>
                    <div className="form-group has-error">
                        <input type="text" className="form-control" name="id" onChange={hamChange} placeholder="ID" disabled="disabled"/>
                    </div>
                    <div className="form-group has-error">
                        <input type="text" className="form-control" name="name" onChange={hamChange} placeholder="Tên Sản Phẩm" required="required"/>
                    </div>
                    <div className="form-group has-error">
                        <input type="text" className="form-control" name="price" onChange={hamChange} placeholder="Giá Tiền" required="required"/>
                    </div>
                    <div className="form-group has-error">
                        <input type="text" className="form-control" name="desc" onChange={hamChange} placeholder="Mô Tả" required="required"/>
                    </div>
                    <div className="form-group has-error">
                        <input type="file" className="form-control" name="image" ref={inputEl} placeholder="Hình Ảnh" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Thêm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
