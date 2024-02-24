import React from "react";




export const SellerCard = ({img, title, price}) => {


    return (
        <>
         <div className="flex flex-col items-center">
            <img src={img} alt="img" className="w-[164px] h-[218px] mb-[12px]" />
            <h2 className="text-sm font-normal mb-[6px]">{title}</h2>
            <p className="text-sm font-normal">{price}</p>
         </div>
        </>
    )
}