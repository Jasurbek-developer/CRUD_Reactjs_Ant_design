import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Edit from './admin/Edit';
import Deatils from './admin/Deatils';
import Create from './admin/Create';
import Choose from './Choose';
import TableList from './admin/TableList';
import Client from "./client/Clinet"
import CreateClient from './client/CreateClient';
import DetailsClient from './client/DetailsClient';
import EditClient from './client/EditClient';

function App() {
  return (
    <div className="App">
      <h1>ReactJS CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Choose/>}/>
          <Route path='/admin' element={<TableList/>}/>
          <Route path='/client' element={<Client/>}/>
          <Route path='/admin/create' element={<Create/>}/>
          <Route path='/admin/details/:empid' element={<Deatils/>}/>
          <Route path='/admin/edit/:empid' element={<Edit/>}/>
          <Route path='/client/create' element={<CreateClient/>}/>
          <Route path='/client/details/:empid' element={<DetailsClient/>}/>
          <Route path='/client/edit/:empid' element={<EditClient/>}/>
          {/* <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:empid' element={<Edit/>}/>
          <Route path='/details/:empid' element={<Deatils/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
