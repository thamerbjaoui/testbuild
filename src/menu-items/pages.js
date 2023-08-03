// assets
//import { IconKey } from '@tabler/icons';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactsIcon from '@mui/icons-material/Contacts';
// constant
// const icons = {
//   IconKey
// };

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
        {  
         id: 'listemployee',
        title: ' Employee List',
         type: 'item',
         url: '/main/pages/listemployee',
         icon: BadgeIcon
        },
        {
          id: 'listcontact',
         title: 'Contact List',
          type: 'item',
          url: '/main/pages/listcontact',
          icon: ContactsIcon
         }

    // {
    //   id: 'authentication',
    //   title: 'Authentication',
    //   type: 'collapse',
    //   icon: icons.IconKey,

    //   children: [
    //     {
    //       id: 'login3',
    //       title: 'Login',
    //       type: 'item',
    //       url: '/pages/login/login3',
    //       target: true
    //     },
    //     {
    //       id: 'register3',
    //       title: 'Register',
    //       type: 'item',
    //       url: '/pages/register/register3',
    //       target: true
    //     }
    //   ]
    // }
  ]
};

export default pages;
