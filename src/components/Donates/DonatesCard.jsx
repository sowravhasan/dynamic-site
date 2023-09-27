import React from 'react';
import { Link } from 'react-router-dom';
const DonatesCard = ({donate}) => {
    const {id, Card_bg, Picture, Category_bg, Category, Title, Description, Prize, Text_button_bg} = donate || {}
    return (
      <div>
        <div className="courses-content">
          <Link to={`/donates/${id}`}>
            <div
              className="rounded-lg overflow-hidden shadow-lg "
              style={{ backgroundColor: Card_bg }}
            >
              <div className="mb-[20px] relative">
                <img
                  src={Picture}
                  alt=""
                  className="max-w-full w-full xl:h-[200px]"
                />
              </div>
              <button
                className="text-[14px] ml-4 px-3 py-1 rounded text-white font-semibold mb-2"
                style={{ backgroundColor: Category_bg, color: Text_button_bg }}
              >
                {Category}
              </button>
              <h2
                className="text-xl font-semibold ml-4 mb-4"
                style={{ color: Text_button_bg }}
              >
                {Title}
              </h2>
            </div>
          </Link>
        </div>
      </div>
    );
};

export default DonatesCard;