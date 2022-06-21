import { Outlet } from 'react-router-dom';
import Allproducts from '../../Components/Items/all-items.components';

const Home = () => {
  return (
    <div>
      <Allproducts></Allproducts>
      <Outlet />
    </div>
  );
};

export default Home;
