import '../styles/productCard.css'
import Image from 'next/image';

const ProductCard = (props) => {
  return (
    <div className='productCard'>
        <Image src={props.src} alt='product' height={50} width={50}/>
        <p>{props.description}</p>
        <h2>{props.name}</h2>
    </div>
  )
}

export default ProductCard;