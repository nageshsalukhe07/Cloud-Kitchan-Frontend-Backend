import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Layout/Header';
import Registration from './Logregi/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Layout/Login';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Loginn from './Layout/Loginn';
import Footer from './Layout/Footer';
import MenuItem from './Pages/MenuItem';
import Dashboard from './AdminControl/Dashboard';
import AdminDashboard from './AdminControl/AdminDashboard';
import Order from './Pages/Order';
import AdminDash from './AdminControl/AdminDash';
import AddMenuItem from './Adminpages/AddMenuItem';
import ViewMenuItem from './Adminpages/ViewMenuItem';
import UpdateMenuItem from './Adminpages/UpdateMenuItem';
import Adash from './AdminControl/Adash';
import ViewOrders from './Adminpages/ViewOrders';
import OrderHistory from './Pages/OrderHistory';
import Bill from './Pages/Bill';

function App() {
  return (
    <div >
     
      
      
      <BrowserRouter>
      {/* <Header></Header> */}
      <Routes>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/' element={<Loginn/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/menuitem' element={<MenuItem/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
        <Route path='/adviewmenuitem' element={<AdminDash/>}></Route>
        <Route path='/addmenuitem' element={<AddMenuItem/>}></Route>
        <Route path='/viewmenuitem' element={<ViewMenuItem/>}></Route>
        <Route path='/updatemenuitem/:id' element={<UpdateMenuItem/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/adash' element={<Adash/>}></Route>
        <Route path='/vieworder' element={<ViewOrders/>}></Route>
        <Route path='/orderhistory' element={<OrderHistory/>}></Route>
        <Route path="/bill" element={<Bill/>} />


      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
