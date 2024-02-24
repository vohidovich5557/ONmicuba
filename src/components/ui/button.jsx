import React from "react";
import clsx from "clsx";



export const Button = ({ variant, children }) => {

    return (
        <button className={clsx("", {
            "w-[94px] h-[36px] text-center bg-black text-white hover:text-black hover:bg-transparent hover:border border-black transition-all": variant == "primary",
            "w-[94px] h-[36px] border border-black text-center bg-transparent text-black hover:text-white hover:bg-black": variant == "secondary",
            "w-[122px] h-[36px] border border-black text-center bg-transparent text-black hover:text-white hover:bg-black": variant == "third",
            " w-[190px]  h-[40px] border border-black text-center bg-transparent text-black whitespace-nowrap hover:text-white hover:bg-black": variant == "fourth",
            "w-[360px] h-[56px] text-center bg-black text-white text-md font-normal mt-[40px]":variant == "fifth"
        })}>
            {children}
        </button>
    )
}