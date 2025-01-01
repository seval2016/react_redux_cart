import React, { useState } from 'react';
import ProductCart from '../components/ProductCart';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
import { createDataFunc } from '../redux/dataSlice';
import Input from '../components/Input';
import Button from '../components/Button';
import { modalFunc } from '../redux/modalSlice';

const Products = () => {
  const { modal } = useSelector(state => state.modal || { modal: false }); 
  const {data} =useSelector(state => state.data )
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  console.log(data,"data")

  const buttonFunc = () => {
    dispatch(createDataFunc(productInfo));
    dispatch(modalFunc());
  };

  const contentModal = (
    <>
      <Input type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={(e) => onChangeFunc(e, "name")} />
      <Input type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={(e) => onChangeFunc(e, "price")} />
      <Input type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} />
      <Button btnText="Ürün Oluştur" onClick={buttonFunc} />
    </>
  );

  return (
    <div>   
      <div>
        {
          data.map((dt, i) => {
          <ProductCart  key={i} dt={dt} />
          })
        }
        </div>   
      <ProductCart />
      {modal && <Modal title={"Ürün Oluştur"} btnText={"Oluştur"} btnFunc={buttonFunc} />}
    </div>
  );
};

export default Products;
