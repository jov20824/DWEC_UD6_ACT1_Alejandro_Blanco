import ButtonAppBar from './ButtonAppBar';
import DataTable from './UserList';
import UserCreate from './UserCreate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>

      <Router>
        <ButtonAppBar />
        <Routes>
          <Route path='/' element={<DataTable />} />
          <Route path='/create' element={<UserCreate />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
