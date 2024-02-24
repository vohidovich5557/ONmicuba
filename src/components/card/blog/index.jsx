import React from "react";



export const BlogCard = ({img, desc, data, title}) => {


    return (
        <>
         <div className="flex flex-col items-center">
            <img src={img} alt="img" className="w-[164px] h-[218px] mb-[12px]" />
            <div className="flex items-center gap-[8px] mb-[8px]">
                <p className="text-sm font-normal">{desc}</p>
                <p className="text-sm font-normal">{data}</p>
            </div>
            <h3 className="w-[183px] text-center">{title}</h3>
         </div>
        </>
    )
}