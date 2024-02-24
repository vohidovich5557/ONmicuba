import React from "react";



export const ServiceCard = ({img, title, text}) => {


    return (
        <>
        <div className="h-[85px] flex flex-col items-center mt-[60px]">
        <img src={img} alt="img" className="w-[30px] h-[30px] mb-[16px]" />
         <h3 className="text-sm font-normal mb-[8px]">{title}</h3>
         <p className="text-sm font-normal">{text}</p>
        </div>
        </>
    )
}