import './App.css';
import Nav from './componets/Header/Header';
import 'antd/dist/antd.css';
import Main from './Pages/Main/Main';
import { Route } from 'react-router';
import Footer from './componets/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/Profile';
import Category from './componets/Category/Category';
import Info from './componets/Products/Info/Info';
import Try from './Try';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/' exact >
      <Main/>
      </Route>
      <Route path='/cart'>
    <Cart/>
      </Route>
      <Route path='/profile'>
        <Profile/>
      </Route>
      <Route path='/try'>
        <Try/>
      </Route>
      
     <Category/>
     <Route path='/info'>
       <Info/>
     </Route>
      <Footer/>
    </div>
  );
}

export default App;
