
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Dashboard(){
    return[
        <>
            <div className="ml-56 mr-5 pt-10 h-full">
                <h1 className="my-9 font-bold">Dashboard</h1>
                <div className="flex gap-10 ">
                    <div className="bg-white w-48 h-full rounded-md shadow-md">
                        <a href="" className="bg-twitter-blue">
                            <div className="flex justify-around p-2">
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                                <p>$300k</p>
                            </div>
                            <hr/>
                            <div className="range flex justify-center py-2">
                                <p className=''>Expense track</p>
                                <p className="rate text-red rounded-sm mr-1 bg-lightred">high</p>
                            </div>
                        </a>
                    </div>

                    <div className="bg-white w-48 h-full rounded-md shadow-md">
                        <a href="" className="bg-twitter-blue">
                            <div className="flex justify-around p-2">
                                <i>|||</i>
                                <p>$30k</p>
                            </div>
                            <hr/>
                            <div className="range flex justify-center py-2">
                                <p className=''>Income track</p>
                                <p className="rate text-green rounded-sm m-0 p-0 bg-lightgreen">low</p>
                            </div>
                        </a>
                    </div>

                    <div className="bg-white w-48 h-full rounded-md shadow-md">
                        <a href="" className="bg-twitter-blue">
                            <div className="flex justify-around p-2">
                                <i>|||</i>
                                <p>$300k</p>
                            </div>
                            <hr/>
                            <div className="range flex justify-center py-2">
                                <p className=''>Expense track</p>
                                <p className="rate text-red rounded-sm mr-1 bg-lightred">high</p>
                            </div>
                        </a>
                    </div>
                    <div className="bg-white w-48 h-full rounded-md shadow-md">
                        <a href="" className="bg-twitter-blue">
                            <div className="flex justify-around p-2">
                                <i>|||</i>
                                <p>$300k</p>
                            </div>
                            <hr/>
                            <div className="range flex justify-center py-2">
                                <p className=''>Expense track</p>
                                <p className="rate text-red rounded-sm mr-1 bg-lightred">high</p>
                            </div>
                        </a>
                    </div>

                    <div className="bg-white w-48 h-full rounded-md shadow-md">
                        <a href="" className="bg-twitter-blue">
                            <div className="flex justify-around p-2">
                                <i>|||</i>
                                <p>$30k</p>
                            </div>
                            <hr/>
                            <div className="range flex justify-center py-2">
                                <p className=''>Income track</p>
                                <p className="rate text-green rounded-sm m-0 p-0 bg-lightgreen">low</p>
                            </div>
                        </a>
                    </div>
                </div>   


                <div className='mb-7'>
                    <h1 className="my-5 font-bold">Overall Balance</h1>
                    <div className="flex justify-between ">
                        <div className="bg-white w-3/5 p-4 h-72 rounded-xl shadow-sha shadow-lg">
                            <div className="flex justify-between">
                                <p>payment mode</p>
                                    <select name="" id="" className='month-dropdown'>
                                        <option value="" >Last month</option>
                                        <option value="">Jan</option>
                                        <option value="">Feb</option>
                                        <option value="">Mar</option>
                                        <option value="">Apr</option>
                                        <option value="">May</option>
                                    </select>     
                            </div>

                            <div className='range flex mt-2 ml-5 gap-12 '>
                                <div className='flex'>
                                    <div className='bg-blue  h-2 w-2 rounded-full'></div>
                                    <div>Wallet</div>
                                    </div>
                                <div className='flex'>
                                    <div className='bg-green h-2 w-2 rounded-full'></div>
                                    <div>Card</div>
                                    </div>
                            </div>

                            <div className='range ml-5'>
                                <div className='flex m-2 gap-3'>
                                    <div>$6k</div>
                                    <div><hr className='w-96 mt-3' /></div>
                                </div>
                                <div className='flex m-2 gap-3'>
                                    <div>$5k</div>
                                    <div><hr className='w-96 mt-3' /></div>
                                </div>
                                <div className='flex m-2 gap-3'>
                                    <div>$4k</div>
                                    <div><hr className='w-96 mt-3' /></div>
                                </div>
                                <div className='flex m-2 gap-3'>
                                    <div>$3k</div>
                                    <div><hr className='w-96 mt-3' /></div>
                                </div>
                                <div className='flex m-2 gap-3'>
                                    <div>$2k</div>
                                    <div><hr className='w-96 mt-3' /></div>
                                </div>
                                <div className='flex m-2 gap-3'>
                                    <div>$1k</div>
                                    <div><hr className='w-96 mt-3' /></div>
                                </div>
                            </div>
                            <div className='flex gap-8 ml-10 range'>
                                <div>0</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thur</div>
                                <div>Fri</div>
                                <div>Sat</div>
                                <div>sun</div>
                            </div>
                        </div>

                        <div className="bg-white w-1/3 p-4 rounded-xl shadow-sha shadow-lg">
                            <div>
                                <p>Performance</p>
                            </div>
                            <div className="range flex justify-center gap-10 bg-sha rounded-md p-1">
                                <p>Daily</p>
                                <p className="bg-white rounded-sm ">Monthly</p>
                                <p>Yearly</p>
                            </div>
                            <div className='bg-red h-28 w-28 rounded-full relative flex justify-center items-center mt-5 ml-28 '>
                                <div className='bg-green h-24 w-24 rounded-full absolute flex justify-center items-center '>
                                    <div className='bg-white h-20 w-20 rounded-full absolute'></div>
                                </div>
                                
                            </div>
                            <div className='range flex justify-around mt-10 '>
                                <div className='flex'>
                                    <div className='bg-red  h-2 w-2 rounded-full'></div>
                                    <div>money spent</div>
                                    </div>
                                <div className='flex'>
                                    <div className='bg-green h-2 w-2 rounded-full'></div>
                                    <div>money left</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' p-4 pr-20 w-fit h-fit bg-white rounded-xl shadow-sha shadow-lg flex relative'>
                    <p>All rate</p>
                     <div className='flex gap-12 ml-52 mt-6 absolute '>
                        <div className='h-60 w-10 bg-blue'></div>
                        <div className='h-10 w-10 bg-red'></div>
                        <div className='h-80 w-10 bg-green'></div>
                        <div className='h-52 w-10 bg-yellow'></div>
                    </div>

                    <div className='range ml-10 pt-1 '>
                    <ul >
                        <li className='m-4'>10%</li>
                        <li className='m-4'>20%</li>
                        <li className='m-4'>30%</li>
                        <li className='m-4'>40%</li>
                        <li className='m-4'>50%</li>
                        <li className='m-4'>60%</li>
                        <li className='m-4'>70%</li>
                        <li className='m-4'>80%</li>
                        <li className='m-4'>90%</li>
                        <li className='m-4'>100%</li>
                        
                    </ul>
                    </div>
                   
                    <div className='range ml-10 mt-82 inline-flex '>
                      
                        <p>Expense</p>
                        <p>Income</p>
                        <p>Budget</p>
                        <p>Savings</p>
                        
                    </div>
                </div>

                <div className='p-5'>
                    <h1>knevdnv</h1>
                    <h1>knevdnv</h1>
                    <h1>knevdnv</h1>
                    <h1>knevdnv</h1>
                    <h1>knevdnv</h1>
                    <h1>knevdnv</h1>
                </div>


            </div>
        </>
    ]
}
export default Dashboard;