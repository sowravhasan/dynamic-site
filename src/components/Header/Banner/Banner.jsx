import React from 'react';

const Banner = () => {
    return (
      <div>
        <div className="relative h-[600px] mt-[-100px] ">
          {/* Background Image */}
          <div className="absolute inset-0 z-[-10]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://i.ibb.co/DYt5Bgn/banner.png")' }}
            ></div>
            <div className="absolute inset-0 bg-white opacity-90"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full">
            {/* Title */}
            <h1 className="text-black text-2xl xl:text-5xl font-bold mb-6 px-4 xl:px-0">I Grow By Helping People In Need</h1>

            {/* Search Input Field and Button */}
            <div className="relative xl:w-[500px] flex mt-3 px-4 xl:px-0 z-[100]">
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full px-[20px] py-[10px] bg-white bg-opacity-50 focus:outline-none border-2 rounded-l-[10px]"
              />
              <button className="px-4 py-2 rounded-r-[10px] bg-[#FF444A] text-white hover:bg-[#FF444A] focus:outline-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
