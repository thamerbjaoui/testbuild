import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import { useSelector } from 'react-redux';
// ==============================|| MENU ITEMS ||============================== //


const MenuItems = () => {
  const access = useSelector((state) => state.customization.access);

  let menuItems={};

  if (access === 'admin') {
      menuItems = {
      items: [dashboard, pages,  other]
    };
  } else if (access === 'superuser') {
    menuItems = {
      items: [pages]
    };
  } else if(access==='user') {
    
    menuItems = {
      items: [utilities]
    };
  }

  return menuItems;
};

export default MenuItems;
