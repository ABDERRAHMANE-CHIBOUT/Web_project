'use client'
import '../styles/ProductDetails.css'
import { useState } from 'react';
import Image from 'next/image';

const ProductDetails = (props) => {
  const [input,setInput] = useState(props.name)
  return (
    <div className='productDetails'>
        <Image src={props.src} alt='icon' height={32} width={32}/>
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <p>{props.des}</p>
        </div>
        <Image src={props.icon} alt='icon1' height={16} width={16}
        className='productDetailsIcon'/>
    </div>
  )
}

export default ProductDetails;