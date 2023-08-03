// import { lazy } from 'react';

// // project imports
// import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';
// import Timesheet from 'views/utilities/Timesheet';
// import Listemployee from 'views/pages/List-Employee';
// import Addemployee from 'views/addemployee/Addemployee';
// import Addproject from 'views/addproject/Addproject';
// import PropTypes from 'prop-types';
// // dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// // utilities routing
// // const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// // const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// // const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// // const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// // const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
// // const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
// // sample page routing
// //const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// // ==============================|| MAIN ROUTING ||============================== //
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Route, Navigate, Routes } from 'react-router-dom';


// const CanAccessTimesheet = () => {
//   const access =  useSelector((state) => state.customization.access);
//   return access === 'user';
// };




// const SecureRoute = ({ path, element }) => {
 
//   const isAuthorized = CanAccessTimesheet();

 
//   return !isAuthorized ? <Routes><Route path={`${path}/*`} element={element} /> </Routes>  : <Navigate to="/restricted" />;
// };
// SecureRoute.propTypes = {
//   path: PropTypes.string.isRequired,
//   element: PropTypes.element.isRequired
// };
// // Your MainRoutes configuration
// const MainRoutes = {
//   path: '/main',
//   element: <MainLayout />,
//   children: [
//     // ... (Other routes)
//     {
//       path: '/main/utils',
//       children: [
//         {
//           path: 'timesheet',
//           element: <Timesheet />
//         }
//       ]
//     },
//     {
//       path: '/main/dashboard',
//       children: [
//         {
//           path: 'default',
//           element: <SecureRoute path="/main/dashboard/default" element={<DashboardDefault />} />
//         }
//       ]
//     },
//     {
//       path: 'main/addemployee',
//       element: <SecureRoute path="/main/addemployee" element={<Addemployee />} />
//     },
//     {
//       path: 'main/addproject',
//       element: <SecureRoute path="/main/addproject" element={<Addproject />} />
//     },
//     {
//       path: '/main/pages',
//       children: [
//         {
//           path: 'listemployee',
//           element: <SecureRoute path="/main/pages/listemployee" element={<Listemployee />} />
//         }
//       ]
//     }
//   ]
// };

// export default MainRoutes;


import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Timesheet from 'views/utilities/timesheet/Timesheet';
import Listemployee from 'views/pages/List-Employee';
import Addemployee from 'views/addemployee/Addemployee';
import Addproject from 'views/addproject/Addproject';
import Addclient from 'views/addclient/Addclient';
import Listcontact from 'views/pages/List-contact';

import Addcontact from 'views/addcontact/Addcontact';
import Adddivision from 'views/adddivision/Adddivision';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
// sample page routing
//const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //
 
const MainRoutes = {
  path: '/main',
  element: <MainLayout />,
  children: [
    
    {
      path: '/main/dashboard',
      children: [
        {
          path: 'default',
          element:<DashboardDefault /> 
        }
      ]
    },
    
    {path:'/main/utils',
     children : [
      {
         path: 'timesheet',
         element: <Timesheet />
    }
     ]
    },
   
    {
      path:'/main',
      children :[
        {
          path:'/main/addemployee',
          element:<Addemployee/>
        }
      ]
    },
    {
       path:'/main',
      children :[
      {
      path:'addclient',
      element:<Addclient/>
      }
    ]
    },
    {
      path:'/main',
      children :[
      {
      path:'addDivision',
      element:<Adddivision/>
    }
  ]
    },
    {
      path:'/main',
      children :[
      {
      path:'/main/addcontact',
      element: <Addcontact/>
    }
  ]
    },
    {
      path:'/main/addproject',
      element:<Addproject/>
    },
    {
      path:'/main/pages',
      children: [
        {
          path:'listemployee',
          element: <Listemployee />
        },
        {
          path:'listcontact',
          element: <Listcontact  />
        }
      ]
    }
  ]
};

export default MainRoutes;