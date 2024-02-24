import React from "react";
import BlackLogo from "../../assets/logo_black.svg"



export const Footer = () => {


    return (
        <>
       <div className="w-full bg-black">
        <div className="container h-[379px] pt-[64px] pb-[32px] px-[200px] gap-[130px]">
            <div className="flex items-start gap-[130px]">
            <div className="flex flex-col items-center gpa-[19px]">
                <img src={BlackLogo} alt="img" className="w-[100px] h-[100px]" />
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium text-white mb-[24px]">ABOUT</h2>
                <ul>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">Finde</a></li>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">Brand</a></li>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">About Us</a></li>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">Contact</a></li>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">Where to buy</a></li>
                </ul>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium text-white mb-[24px]">HELP</h2>
                <ul>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">Shipping & Returns</a></li>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">Track Order</a></li>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">FAQ</a></li>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">Terms & Conditions</a></li>
                    <li><a href="#" className="text-white text-sm font-normal whitespace-nowrap">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium text-white mb-[24px]">SUBSCRIBE</h2>
                <p className="text-md font-normal text-white mb-[16px]">Subscribe now and thank us later</p>
                <form className="w-[348px] h-[48px] border border-white bg-black relative">
                    <input type="search" name="search" className="w-[268px] h-[48px] bg-transparent outline-none border border-white text-white pl-[20px]" />
                    <button type="submit" className=" absolute outline-none text-white font-normal text-sm text-center border border-white  w-[80px] h-[48px] top-0">Subscribe</button>
                </form>
            </div>
            </div>
            <div className="w-full h-0 border border-footer bg-footer mt-[52px]"></div>
            <p className="text-sm text-white font-normal text-center mt-[32px]">© 2021 Beauty Store. All rights reserved.</p>
        </div>
       </div>
        </>
    )
}