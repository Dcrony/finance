

function NavBar() {
    const name = 'Dcrony';
    return [
        <>
            <div className="z-10 bg-white py-3 fixed w-full">
                <div className="flex justify-end pr-5">
                    <a href="" className="py-1 px-2"><i>|||</i></a>
                    <label className="text-sm my-2 mx-2" htmlFor="">Hi `${name}` </label>
                <ul>
                    <li className="nav-dropdown">
                        <a href="" ><img src="src/image/profile.jpg" /></a>
                        <ul className=" bg-white w-fit p-3 right-1 text-center flex">
                            <li><a href="" className="range rounded-md px-1 text-center bg-light-blue">Profile</a></li>
                            <hr className="w-full"/>
                            <li><a href="" className="range bg-red rounded-md px-1 ">Logout</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </>
    ]   
}

export default NavBar;