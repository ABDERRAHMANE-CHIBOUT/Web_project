import '../styles/Order.css'
const Order = (props) => {
  return (
    <div className='order'>
        <div className="orderName">
            <div className="orderNameAvatar" style={{backgroundImage : `url(/avatar.jpg)`}}></div>
            {props.name}
        </div>
        <p className="orderNumber">{props.number}</p>
        <div className="orderProducts">
            Products
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <p className="orderAmount">{props.amount}DA</p>
        <p className="orderDate">{props.date}</p>
        <p className="orderStatus">paid</p>
    </div>
  )
}

export default Order;