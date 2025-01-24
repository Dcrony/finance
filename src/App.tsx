
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';




function App(){
  return (
    <>
      <div className='m-0 p-0 bg-bground'>
       
        <NavBar/>
        <SideBar/>
        <Dashboard/>
      </div>
      <div>
       
      </div>
    </>
  );
}

export default App;
