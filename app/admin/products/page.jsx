'use client'
import '../../../styles/products.css';
import ProductCard from '@/components/ProductCard';
import productsData from '@/utils/productsData';
import ProductDetails from '@/components/ProductDetails';
import Image from 'next/image';
import { useState,useRef } from 'react';

const Page = () => {
  const [productDis1,setProductDis1] = useState(false);
  const [productDis2,setProductDis2] = useState(false);
  const [productInx,setProductInx] = useState(0);
  return (
    <section className="products">
      <div className="productsHead">
        <div className="productsSearchContainer">
          <Image src='/search.svg' alt='search' height={24} width={24}/>
          <input type="text" className='productsSearch' placeholder='search'/>
          </div>
        <button className='addProduct' onClick={()=>{setProductDis2(!productDis2)}}>
          <Image src='/addProduct.svg' alt='add' height={16} width={16} className='addProductIcon'/>
          Add Product
        </button>
        <button className='addProduct1' onClick={()=>{setProductDis2(!productDis2)}}>
          <Image src='/add.svg' alt='add' height={16} width={16} className='addProductIcon'/>
          Add
        </button>
      </div>
      <div className={`${productDis1 ? 'productsDetailsOverlay1' : 'productsDetailsOverlay'}`}>
        <div className="productsDetails">
          <div className="productsDetailsHead">
            <h2>{productsData[productInx].name}</h2>
            <Image src='/close.svg' alt='close' height={24} width={24}
            onClick={()=>setProductDis1(!productDis1)}/>
          </div>
          <ProductDetails src='/product1.svg' name='Tshirt' des='product name' />
          <ProductDetails src='/info.svg' name='loading tshirt' des='description' />
          <ProductDetails src='/category.svg' name='shirts' des='category' />
          <ProductDetails src='/quantity.svg' name='15' des='quantity' />
          <ProductDetails src='/stock.svg' name='30 000' des='stock value' />
          <ProductDetails src='/money.svg' name='1 000' des='buying price' />
          <ProductDetails src='/money1.svg' name='2 000' des='selling price' />
          <ProductDetails src='/profit.svg' name='22 000' des='profit' />
          <div className='productOverAllBalance'>
            <Image src='/scale.svg' alt='icon' height={32} width={32}/>
            <div>
              <h4>58 000</h4>
              <p>money generated</p>
            </div>
            <div className="productOverAllBalanceColor"></div>
          </div>
        </div>
      </div>
      <div className={`${productDis2 ? 'productsDetailsOverlay1' : 'productsDetailsOverlay'}`}>
        <div className="productsDetails">
          <div className="productsDetailsHead">
            <h2>Add Product</h2>
            <Image src='/close.svg' alt='close' height={24} width={24}
            onClick={()=>setProductDis2(!productDis2)}/>
          </div>
          <form action="/upload" method="post" encType="multipart/form-data" className='addProductForm'>
            <div className='uploadImageContainer'>
              <Image src='/upload.svg' alt='close' height={32} width={32}/>
              <label htmlFor="file">
                Click to upload 
                <span> or drag and drop SVG,PNG,JPG or GIF(400x800px)</span>
              </label>
              <input type="file" id="file" name="file" accept="image/*"/>
              {/* <button type="submit">Upload</button> */}
            </div>
            
          </form>
        </div>
      </div>
      <div className="productsContainer">
        {productsData.map((p,i)=>(
          <div key={i} onClick={()=>{
            setProductDis1(!productDis1);
            setProductInx(i);
          }}>
            <ProductCard src={p.src} name={p.name} description={p.description} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page;