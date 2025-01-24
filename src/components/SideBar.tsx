
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SideBar() {

    return [
        <>
            <nav className="bg-arch z-10 w-52 m-0 p-0 fixed h-screen text-white">
                <a href="" className="float-right mr-4 mt-3">
                    <FontAwesomeIcon icon="fa-brand fa-youtube"/>
                </a>
                <h2 className="m-3 ml-9">Finance</h2>
                <ul className="ul mt-8">
                    {/* <h1>Plans</h1> */}
                    <li ><a className="a1 active" href=""><i>||| </i>Dashboard</a></li>
                    <li ><a className="a2" href=""><i>||| </i>Expense</a></li>
                    <li ><a className="a3" href=""><i>||| </i>Income</a></li>
                    <li ><a className="a4" href=""><i>||| </i>Budget</a></li>
                    <li ><a className="a5" href=""><i>||| </i>Savings</a></li>
                    <li ><a className="a6" href=""><i>||| </i>Report</a></li>
                    <li ><a className="a7" href=""><i>||| </i>Settings</a></li>
                </ul>
                <a className="logout" href=""><i>|||</i>Logout</a>
           </nav>
        </>
    ];
  
}

export default SideBar;