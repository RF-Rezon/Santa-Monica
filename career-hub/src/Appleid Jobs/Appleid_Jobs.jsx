import React, { useState } from "react";
import AppliedJobSingleCard from "../Applied Job Single Card/AppliedJobSingleCard";

  const Applied_jobs = () => {
    const [bookmark, setBookmark] = useState([]);
   
    

   const getData =  window.localStorage.getItem("fetchedData");

   let eU = JSON.parse(getData);

    const exitId = bookmark.find(e=> e.id == eU.id);
    if(exitId) { 
    //   {toast("You Have Already Bookmarked This Blog")} 
    }else{
      let newBookMark = [...bookmark, eU];
      setBookmark(newBookMark);
    }
//    {bookmark.map(single_bookMark => component)}
  
//   const { id, image, title, company, location, min_salary, max_salary, jobType} = bookmark[0];
  return (
    <div>
        
      {/* <div className="mb-20">
        <p className="bt">Applied Jobs</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
           <div className='h-[40px] w-[140px]'><img className='min-h-full min-w-full' src={image} alt="google" /></div>
          <div>
              <p className="bt-1">{title}</p>
              <p className="gg">{company}</p>
              <div className="flex space-x-5">
                <button className="p-border">{jobType.half}</button>
                <button className="p-border">{jobType.full}</button>
              </div>
              <div className="gg py-3">
                <span>
                  logo {location.city}, {location.country} logo Salary : {min_salary} to {max_salary}
                </span>
              </div>
            </div>
        </div>
        <div>
          <Link to={`/details/${id}`}>
            <button className="p-b">View Details</button>
          </Link>
        </div>
      </div> */}
      <div className="mb-20">
        <p className="bt">Applied Jobs</p>
      </div>
     {bookmark &&
     (bookmark.map(single_bookMark => <AppliedJobSingleCard key={single_bookMark.id} single_bookMark={single_bookMark}/> ))
     }
    </div>
  );
};

export default Applied_jobs;

