import React from 'react';
import DonatesCard from './DonatesCard';

const Donates = ({donates}) => {
    return (
      <>
        <div className ='w-[1280px] mx-auto flex my-[100px]'>
               <div className="w-[100%] mx-auto">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto gap-6"> 
                      {
                      donates?.map(donate => <DonatesCard key={donate.id} donate={donate}></DonatesCard>)
                      }              
                </div>
            </div> 
         </div>
      </>
    );
};

export default Donates;

