import React from 'react';
import { Link } from 'react-router-dom';
const DonationCard = ({donate}) => {
    const {id, Card_bg, Picture, Category_bg, Category, Title, Description, Price, Text_button_bg} = donate || {}
    return (
        <div className="courses-content">
  <div className="rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] overflow-hidden shadow-lg" style={{ backgroundColor: Card_bg }}>
    <div className="flex">
      <div className="relative">
        <img src={Picture} alt="" className="max-w-full w-[250px] xl:h-[200px]" />
      </div>
      <div className="pl-4 flex-1 pt-6 pr-4">
        <button className="text-[14px] px-3 py-1 rounded text-white font-semibold mb-2" style={{ backgroundColor: Category_bg, color: Text_button_bg }}>
          {Category}
        </button>
        <h2 className="text-2xl font-medium mb-1">{Title}</h2>
        <h2 className="text-xl font-semibold mb-4" style={{ color: Text_button_bg }}>
          ${Price}
        </h2>
        
        <Link to={`/donates/${id}`}>
          <button className="text-[18px] px-5 py-2 rounded text-white font-medium mb-2" style={{ backgroundColor: Text_button_bg }}>
            View Details
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>


      
    );
};


export default DonationCard;