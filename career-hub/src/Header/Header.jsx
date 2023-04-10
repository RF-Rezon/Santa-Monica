import React from 'react';
import FeaturedJobs from '../UnderHeader/FeaturedJobs';
import JobCategolyList from '../UnderHeader/JobCategolyList';

const Header = () => {
    return (
        <div>
            <div className='p-bg rounded-lg'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='space-y-1'>
                                <p className='text-5xl font-bold text-gray-900'>One Step<br/>
                                Close To Your<br /></p>
                                <p className='text-5xl font-bold text-purple-400'>Dream Job</p>
                            </div>
                            <p className='gg my-5'>
                            Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all<br/> your job application from start to finish.
                            </p>
                            <button className='p-b mb-10'>Get Started</button>
                        </div>
                        <div>
                            <img src="../../assets/All Images/P3OLGJ1 copy 1.png" alt="heder img" />
                        </div>
                    </div>
                </div>
            </div>
            <JobCategolyList/>
            <FeaturedJobs/>
        </div>
    );
};

export default Header;