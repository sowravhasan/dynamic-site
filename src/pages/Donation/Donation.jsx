import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noFound, setNoFound] = useState("")
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donates'))
        if(donateItems){
            setDonation(donateItems)
        }
        else{
            setNoFound("No Data Found")
        }
        console.log(noFound);
    }, [noFound])
    return (
      <div>
        <div>
          {noFound ? (
            <p className="w-[1280px] m-auto h-screen flex justify-center items-center text-6xl">
              {noFound}
            </p>
          ) : (
            <div className="w-[1280px] m-auto mt-[100px]">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                { 
                  isShow ? donation.map((donate) => (
                    <DonationCard key={donate.id} donate={donate}></DonationCard>
                  )) : donation.slice(0, 4).map((donate) => (
                    <DonationCard key={donate.id} donate={donate}></DonationCard>
                  ))
                }
              </div>
            </div>
          )}
        </div>

        <div className='flex justify-center my-[50px]'>
          <button onClick = {() => setIsShow(!isShow)} className="text-[18px]  px-5 py-2 rounded text-white font-semibold bg-[#FF444A] text-center">
            {isShow ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    );
};

export default Donation;