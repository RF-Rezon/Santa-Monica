import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center justify-between py-5'>
                            <p className='text-3xl font-bold'>Santa Monica</p>
                            <div className='flex items-center justify-between space-x-6 gg my-4'>
                                <Link to= "/"><p>Home</p></Link>
                                <Link to= "/statistics"><p>Statistics</p></Link>
                                <Link to= "/applied_jobs"><p>Applied Jobs</p></Link>
                                <Link to= "/blog"><p>Blog</p></Link>

                            </div>
                            <button className="p-b">
                                Start Applying
                            </button>
                        </div>
            </div>
        </div>
    );
};

export default Nav;