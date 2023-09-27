import React from 'react';
import swal from 'sweetalert';

const DonateCard = ({ donate }) => {
  const {
    id,
    Card_bg,
    Picture,
    Category_bg,
    Category,
    Title,
    Description,
    Price,
    Text_button_bg,
  } = donate || {};

  const handleAddToDonates = () =>{
    const addedDonatesArray = [];
    const donateItems = JSON.parse(localStorage.getItem('donates'))
    if (!donateItems){
         addedDonatesArray.push(donate)
         localStorage.setItem('donates', JSON.stringify(addedDonatesArray))
         swal("Good job!", "Product Added Successfully!", "success");
    }
    else{
         
        const isExits = donateItems.find(donate => donate.id == id)
        if (!isExits){
            addedDonatesArray.push(...donateItems, donate)
            localStorage.setItem('donates', JSON.stringify(addedDonatesArray))
            swal("Good job!", "Product Added Successfully!", "success");
        }
        else{
            swal("Warning!", "No Duplicate!", "error");
        }
    }
  }
  return (
    <div className="my-[100px] w-[1280px] m-auto">
      <div className="">
        <div className="relative flex w-full flex-col bg-clip-border text-gray-700">
          <img
            src={Picture}
            alt="Background Image"
            className="w-full h-full md:h-auto lg:h-[500px] relative z-1 rounded-[20px]"
          />
          <div className="bg-black bg-opacity-50 -mt-32 z-0 flex items-center w-full h-[128px] rounded-bl-[20px] rounded-br-[20px]">
            <button onClick={handleAddToDonates}
              style={{ backgroundColor: Category_bg, color: Text_button_bg }}
              className="mt-2 ml-6 py-4 px-8 rounded-[5px] text-white font-semibold xl:text-[20px] md:text-base"
            >
              Donate ${Price}
            </button>
          </div>

          <div className="p-6 flex flex-col justify-end">
            <h1 className="md:text-2xl lg:text-3xl lg:block md:block font-sans font-bold max-w-full text-black">
              {Title}
            </h1>
            <p className="mt-3 lg:block md:block font-sans lg:text-xl md:text-xl max-w-full text-gray-700">
              {Description}
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;




