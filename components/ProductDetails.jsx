import '../styles/ProductDetails.css'
import Image from 'next/image';

const ProductDetails = (props) => {
  return (
    <div className='productDetails'>
        <Image src={props.src} alt='icon' height={32} width={32}/>
        <div>
            <input type="text" value={props.name} />
            <p>{props.des}</p>
        </div>
    </div>
  )
}

export default ProductDetails;