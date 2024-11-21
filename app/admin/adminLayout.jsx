import SideBar from '@/components/SideBar';
import NavBar from '@/components/NavBar';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <NavBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
