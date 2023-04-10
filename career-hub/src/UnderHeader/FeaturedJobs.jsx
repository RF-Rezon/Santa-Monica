import React from 'react';

const FeaturedJobs = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <p className='bt'>Featured Jobs</p>
                <p className='gg text-center mb-20'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
                    <div className="h-[392px] w-[648px] flex flex-col justify-evenly border border-gray-400 pl-10 rounded-md">
                        <img className='h-[39.98px] w-[116.69px]' src="../../assets/All Images/google-1-1 1.png" alt="google" />
                        <div>
                            <p className='bt-1'>Technical Database Engineer</p>
                            <p className='gg'>Google LLC</p>
                            <div className='flex space-x-5'>
                            <button className='p-border'>Remote</button>
                            <button className='p-border'>Full Time</button>
                            </div>
                            <div className='gg py-3'>
                                <span>logo Dhaka, Bangladesh logo Salary : 100K - 150K</span>
                            </div>
                            <div><button className='p-b'>View Details</button></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center my-20'><button className='p-b'>See All Jobs</button></div>
            </div>
        </div>
    );
};

export default FeaturedJobs;