
import './App.css';
import Banner from './Components/Banner/Banner';
import { Footer } from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { useEffect } from 'react';
import React, { useState } from 'react';
import swal from 'sweetalert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GioiThieu from './Components/GioiThieu/GioiThieu';
import TrangChu from './Components/TrangChu/TrangChu';
import ChiTietSP from './Components/ChiTietSP/ChiTietSP';
import SanPham from './Components/SanPham/SanPham';
import LienHe from './Components/LienHe/LienHe';
import AddProduct from './Components/AddProduct/AddProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import Login from './Components/Login/Login';
import DangKy from './Components/DangKy/DangKy';
import GioHang from './Components/GioHang/GioHang';

function App() {
  const [user, setUser] = useState({});
  const [products, setproducts] = useState([]);
  const API_PRODUCT = "http://localhost:3000/product";

  useEffect(() => {
    if (localStorage && localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    } 
    if (localStorage && localStorage.getItem('user') && localStorage.getItem(`${JSON.parse(localStorage.getItem('user')).name}`)) {
      setItems(JSON.parse(localStorage.getItem(`${JSON.parse(localStorage.getItem('user')).name}`)));
    }
  }, [])

  // Hiện Tất Cả Sản Phẩm
  useEffect(() => {
    fetch(API_PRODUCT)
      .then(Response => Response.json())
      .then((data) => setproducts(data));
  },[]);

  // Thêm Sản Phẩm
  const onAddPost = (post) => {
    fetch(API_PRODUCT, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(response => response.json())
      .then(() => swal("Thêm File thành công !"))
      .then(() => { window.location = "http://localhost:3001/SanPham"; });
    // api
    setproducts([
      ...products,
      post
    ])
  }

  //Sửa
  const onEditProduct = (newPost) => {
    console.log(newPost);
    fetch(`${API_PRODUCT}/${newPost.id}`, {
        method: 'PUT', // or PATCH
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
    })
        .then(response => response.json())
        .then(() => swal("Bạn đã sửa thành công"))
        .then(() => { window.location = "http://localhost:3001/SanPham"; });
    // api
    const newPosts = products.map(post => {
        if (post.id === newPost.id) {
            return newPost;
        } else {
            return post
        }
    })
    setproducts(newPosts)
}

  //Xóa
  const onDeletePost = (id) => {
    swal({
      title: "Bạn Chắc Muốn Xóa?",
      text: "Sau khi xóa, Không thể khôi phục !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`${API_PRODUCT}/${id}`, {
            method: 'DELETE', // or 'PUT'
          })
            .then(response => response.json())
            .then(swal("Xóa File thành công !", {
              icon: "success",
            }));
          const newPosts = products.filter(post => post.id !== id);
          setproducts(newPosts);
        } else {
          swal("File của bạn an toàn !");
        }
      });
  }
  

  //Dang Nhap
  const API_USER = "http://localhost:3000/login";

  const onDangNhap = (newUser) => {
    fetch(`${API_USER}?name=${newUser.name}`)
      .then(response => response.json())
      .then(data => {
        if (data !== null && data !== undefined && data.length > 0) {
          if (data[0].pass === newUser.pass) {
            setUser(data[0]);
            localStorage.setItem('user', JSON.stringify(data[0]));
            swal("Đăng nhập thành công", { icon: "success" });
            window.location = "http://localhost:3001/";
          } else {
            swal("Sai mật khẩu");
          }
        } else {
          swal("Tài khoản không tồn tại");
        }
      });
  }
  //Dang Xuat
  const onHamDangXuat = () => {
    swal({
      title: "Xác nhận",
      text: "Bạn có muốn đăng xuất hay không",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          setUser({});
          localStorage.setItem('user', JSON.stringify({}));
          swal("Đăng xuất thành công.", { icon: "success", })
          window.location = "http://localhost:3001/";
        } else {
          swal("Hủy đăng xuất, bạn vẫn chưa đăng xuất.");
        }
      });
  }
  //Dang Ky
  const onDangKyUser = (newUser) => {
    console.log(newUser);
    fetch(API_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
        },
        body: JSON.stringify(newUser),
      })
      .then(response => response.json())
      .then(() => swal("Đăng ký thành công", {
        icon: "success",
      }));
      //.then(() => { window.location = "http://localhost:3001/DangNhap"; });
  }
  //Gio Hang
  const [items, setItems]=useState([]);

  const onMuaProduct=(item)=>{
    if (user.name !== undefined) {
      items.push(item);
      // setItems(
      //   [...items,item]
      //   )
      setItems(items.filter(bien=>bien));
      localStorage.setItem(`${user.name}`, JSON.stringify(items));
      swal("Mua hàng thành công", { icon: "success", });

    } else {
      swal("Bạn phải đăng nhập mới mua hàng được.")
    }
  }
  //Xoa Item Gio Hang
  const xoaItem=(id)=>{
    var mang=items.filter(bien=>bien.id!==id )
    setItems(mang);
    localStorage.setItem(`${user.name}`, JSON.stringify(mang));
  }
  return (
    <Router>
      <Header user={user} hamDangXuat={onHamDangXuat} />
      <Banner />
      <Switch>
        <Route exact path="/">
            <TrangChu posts={products} onDelete={onDeletePost} />
        </Route>
        <Route path="/SanPham">
            <SanPham posts={products} onDelete={onDeletePost} />
        </Route>
        <Route path="/GioiThieu">
            <GioiThieu />
        </Route>
        <Route path="/ChiTiet/:id">
            <ChiTietSP muaProduct={onMuaProduct} />
        </Route>
        <Route path="/AddProduct">
            <AddProduct onAdd={onAddPost} />
        </Route>
        <Route path="/EditProduct/:id">
            <EditProduct editProduct={onEditProduct}/>
        </Route>
        <Route path="/LienHe">
            <LienHe />
        </Route>
        <Route path="/GioHang">
            <GioHang posts={items} onDelete={xoaItem}/>
        </Route>
        <Route path="/DangNhap">
            <Login dangNhap={onDangNhap}/>
        </Route>
        <Route path="/DangKy">
          <DangKy dangKyUser={onDangKyUser} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
