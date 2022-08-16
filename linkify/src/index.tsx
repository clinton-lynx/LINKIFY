import React from 'react';
import ReactDOM from 'react-dom/client'
import AddLinkForm from'./components/AddLinkForm';
// import App from './App'
// import AddTab from './pages/addTab'










const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   {/* <AddTab/> */}
   <AddLinkForm />  
  </React.StrictMode>
);

