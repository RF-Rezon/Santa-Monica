import React, { useState } from "react";
import AppliedJobSingleCard from "../Applied Job Single Card/AppliedJobSingleCard";


  const Applied_jobs = () => {

    const [bookmark, setBookmark] = useState([]);

   let eU = JSON.parse(window.localStorage.getItem("fetchedData"));
   
    const exitId = bookmark.find(e=> e.id == eU.id);

    if(!exitId){

      let newBookMark = [...bookmark, eU];
      setBookmark(newBookMark);
    }


  return (
    <div>
     
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

