import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Route} from 'react-router-dom'
import ProductContainer from "./components/Product/ProductContainer";
import EditContainer from "./components/Edit/EditContainer";


function App() {
  return (
    <div className="lol">
        <Header/>
        <Route  path='//' render={ ()=><Main/>}/>
        <Route path='/product/:id' render={ ()=><ProductContainer/>}/>
        <Route path='/edit/:id' render={()=><EditContainer/>}/>
    </div>
  );
}


export default App;
