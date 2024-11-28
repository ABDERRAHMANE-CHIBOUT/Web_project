import '../styles/sideBar.css';
import Link from 'next/link'
import Image from 'next/image'

const SideBar = ({open,toggleSideBar}) => {
  return (
    <div className={`${open ? 'sideBar1' : 'sideBar'}`}>
      <div className='sideBarHead'>
        <h1 className='sideBarLogo'>Admin</h1>
        <Image src='/close.svg' alt='close' height={32} width={32}
        onClick={toggleSideBar}/>
      </div>
      <nav className='sideBarLinks'>
        <Link href='/admin/' className='sideBarLink' onClick={toggleSideBar}>
          <Image src='/dashboard.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          Dashboard
        </Link>
        <Link href='/admin/products' className='sideBarLink' onClick={toggleSideBar}>
          <Image src='/product.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          products
        </Link>
        <Link href='/admin/users' className='sideBarLink' onClick={toggleSideBar}>
          <Image src='/users.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          users
        </Link>
        <Link href='/admin/orders' className='sideBarLink' onClick={toggleSideBar}>
          <Image src='/orders.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          orders
        </Link>
        <Link href='/admin/analytics' className='sideBarLink' onClick={toggleSideBar}>
          <Image src='/analytics.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          analytics
        </Link>
        <Link href='/admin/checkout' className='sideBarLink' onClick={toggleSideBar}>
          <Image src='/checkout.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          check out
        </Link>
      </nav>
      <Link href='/' className='sideBarLink' style={{height:'1.8em'}} onClick={toggleSideBar}>
          <Image src='/logout.svg' alt='icon' height={20} width={20} className='sideBarIcon'/>
          log out
        </Link>
    </div>
  )
}

export default SideBar