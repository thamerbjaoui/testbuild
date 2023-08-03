// assets
//import { IconBrandChrome, IconHelp } from '@tabler/icons';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import ContactPageIcon from '@mui/icons-material/ContactPage';
// constant
//const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  title:'Utilities',
  type: 'group',
  children: [
    {
      id: 'addemployee',
      title: 'Add Employee',
      type: 'item',
      url: '/main/addemployee',
      icon: PersonAddIcon,
      breadcrumbs: false
    },
    {
      id: 'addproject',
      title: 'Add Project',
      type: 'item',
      url: '/main/addproject',
      icon:CreateNewFolderIcon,
      breadcrumbs: false
    },
    {
      id: 'addcontact',
      title: 'Add Contact',
      type: 'item',
      url: '/main/addcontact',
      icon: ContactPageIcon,
      
    },
    {
      id: 'aboutclient',
      title: 'About Client & Division',
      type: 'collapse',
      
      children : [
        {
          id: 'addclient',
          title: 'Add Client',
          type: 'item',
          url: '/main/addclient',
          
          
        },
        {
          id: 'adddivision',
          title: 'Add Division',
          type: 'item',
          url: '/main/adddivision',
          
          
        },
       
      ]
    },
   
    
    

    // {
    //   id: 'sample-page',
    //   title: 'Sample Page',
    //   type: 'item',
    //   url: 'main/sample-page',
    //   icon: icons.IconBrandChrome,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/berry/',
    //   icon: icons.IconHelp,
    //   external: true,
    //   target: true
    // }
  ]
};

export default other;
