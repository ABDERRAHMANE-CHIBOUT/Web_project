import '../../styles/dashboard.css';
import BarChart from '@/components/BarChart';
import BData from '@/utils/BarData';
import Curve from '@/components/Curve';
import CData from '@/utils/CurveData';
import Circle from '@/components/Circle';
import CrData from '@/utils/CircleData';
import Order from '@/components/Order';
import ordersData from '@/utils/ordersData';

const page = () => {
  return (
    <section className='dashboard'>
        <div className="dashboardSales">
          <div className="dashboardCardHead">
            <h2 className='dashboardCardTitle'>sales</h2>
            <p className='dashboardCardduration'>week</p>
          </div>
          <div className="dashboardSalesStats">
            <p><span>15%</span> since last week</p>
            <h1>150 000 DA</h1>
          </div>
        </div>
        <div className="dashboardProfit">
          <div className="dashboardCardHead">
            <h2 className='dashboardCardTitle'>Profit</h2>
            <p className='dashboardCardduration'>week</p>
          </div>
          <div className='chartsContainer'>
          <BarChart data={BData[0]} />
          </div>
        </div>
        <div className="dashboardTrafic">
         <div className="dashboardCardHead">
            <h2 className='dashboardCardTitle'>Trafic</h2>
            <p className='dashboardCardduration'>week</p>
          </div>          
          <div className='chartsContainer'>
          <Curve data={CData.data}/>
          </div>
        </div>
        <div className="dashboardOrders">
          <div className="dashboardCardHead">
            <h2 className='dashboardCardTitle'>Orders</h2>
            <p className='dashboardCardduration'>week</p>
          </div>
          <div className="dashboardOrdersTableHead">
              <p className="dashboardOrdersname">client full Name</p>
              <p className="dashboardOrdersnumber">client Number</p>
              <p className="dashboardOrdersproducts">products</p>
              <p className="dashboardOrdersamount">amount</p>
              <p className="dashboardOrderssince">since</p>
              <p className="dashboardOrdersstatus"
              style={{paddingLeft : '0.2em'}}>status</p>
            </div>
          <div className="dashboardOrdersTable">
            {ordersData.map((data) =>(
              <Order key ={data.name}
              name ={data.name}
              number ={data.number}
              amount ={data.amount}
              date ={data.date}
              />
            ))}
          </div>
        </div>
        <div className="dashboardStockValue">
          <div className="dashboardCardHead">
            <h2 className='dashboardCardTitle'>Stock</h2>
            <p className='dashboardCardduration'>week</p>
          </div>
          <div style={{ width: '220px', height: '220px', zIndex: 1 }}>
            <Circle data={CrData.data} options={CrData.options}/>
          </div>
          <div className="dashboardStockValueStats">
            <h1>+13%</h1>
            <p>since last week</p>
          </div>
        </div>
    </section>
  )
}

export default page;