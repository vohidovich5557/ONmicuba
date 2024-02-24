import React from "react";



export const HelpCard = ({ img, title, text, text2}) => {
    return (
        <>
         <div className="flex flex-col items-center">
           <div className="w-[57px] h-[58px] rounded-[100px] bg-white mb-[16px] pt-[13px] pb-[13px] pl-[13px] pr-[12px] justify-center">
           <img src={img} alt="img" className="w-[32px] h-[32px]" />
           </div>
            <p className="text-sm font-normal mb-[8px]">{title}</p>
            <p className="text-sm font-normal mb-[14px] w-[307px] text-center">{text}</p>
            <p className="text-sm font-normal">{text2}</p>
         </div>
        </>
    )
}