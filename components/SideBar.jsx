import '../styles/sideBar.css';
import Link from 'next/link'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <h1 className='sideBarLogo'>Admin</h1>
      <nav className='sideBarLinks'>
        <Link href='/admin/' className='sideBarLink'>
          <Image src='/dashboard.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          Dashboard
        </Link>
        <Link href='/admin/products' className='sideBarLink'>
          <Image src='/product.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          products
        </Link>
        <Link href='/admin/users' className='sideBarLink'>
          <Image src='/users.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          users
        </Link>
        <Link href='/admin/orders' className='sideBarLink'>
          <Image src='/orders.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          orders
        </Link>
        <Link href='/admin/analytics' className='sideBarLink'>
          <Image src='/analytics.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          analytics
        </Link>
        <Link href='/admin/checkout' className='sideBarLink'>
          <Image src='/checkout.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          check out
        </Link>
      </nav>
      <Link href='/' className='sideBarLink' style={{height:'1.8em'}}>
          <Image src='/logout.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          log out
        </Link>
    </div>
  )
}

export default SideBar