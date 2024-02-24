import React from "react";
import { MainLayout } from "../../layout/main-layout"
import { ArrowRight } from "../../assets/icons/arrowright";
import { ArrowLeft } from '../../assets/icons/arrowleft';
import { blogData, helpData, sellerData, serviceData } from "../../data/home";
import { SellerCard } from "../../components/card/seller";
import { Button } from "../../components/ui/button";
import { ServiceCard } from "../../components/card/service";
import { BlogCard } from "../../components/card/blog";
import {HelpCard} from '../../components/card/help';
import InstaLogo from "../../assets/insta_logo.svg";
import Insta1 from '../../assets/insta1.png';
import Insta2 from '../../assets/insta2.png';
import Insta3 from '../../assets/insta3.png';
import Insta4 from '../../assets/insta4.png';
import Insta5 from '../../assets/insta5.png';
import Insta6 from '../../assets/insta6.png';
import Insta7 from '../../assets/insta7.png';



export const Home = () => {

    return (
        <>
            <section className="seller">
                <div className="container mt-[64px] flex flex-col items-center">
                    <h2 className="text-3xl font-medium">Our bestsellers</h2>
                    <div className="flex items-center gap-[34px] pl-[301px] pr-[301px] mt-[40px] mb-[36px]">
                        <ArrowLeft />
                        <div className="grid grid-cols-4 gap-[20px]">
                            {sellerData.map((item) => (
                                <SellerCard
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                />
                            ))}
                        </div>
                        <ArrowRight />
                    </div>
                    <Button variant="secondary">Shop All</Button>
                    <div className=" w-full h-[213px] bg-bgPink mt-[64px] flex items-center gap-[60px] justify-center ">
                        {serviceData.map((item) => (
                            < ServiceCard
                                img={item.img}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="blog">
                <div className="container flex flex-col items-center mt-[64px] mb-[64px]">
                    <h2 className="text-3xl font-medium mb-[40px]">Blogs</h2>
                    <div className="flex items-center gap-[32px] mb-[40px]">
                        <ArrowLeft />
                        <div className="grid grid-cols-4 gap-[20px]">
                            {blogData.map((item) => (
                                <BlogCard
                                    img={item.img}
                                    desc={item.desc}
                                    data={item.data}
                                    title={item.title}
                                />
                            ))}
                        </div>
                        <ArrowRight />
                    </div>
                    <Button variant="third">View All Posts</Button>
                </div>
            </section>
            <section className="help">
                <div className="container flex flex-col items-center w-full h-[368px] bg-bgPink pt-[64px] pb-[65px]">
                    <h2 className="text-3xl font-medium mb-[40px]" data-aos="fade-down">How can we help?</h2>
                    <div className="grid grid-cols-3 gap-[30px]" data-aos="fade-up">
                        {helpData.map((item) => (
                            <HelpCard 
                             img={item.img}
                             title={item.title}
                             text={item.text}
                             text2={item.text2}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="instagram">
                <div className="container flex flex-col items-center pt-[64px] pb-[64px]">
                    <div className="flex items-center gap-[12px] mb-[40px]" data-aos="fade-down">
                        <img src={InstaLogo} alt="logo" className="w-[36px] h-[36px]" />
                        <h2 className="text-3xl font-medium">Instagram</h2>
                    </div>
                   <div className="flex items-center gap-[16px] mb-[40px]">
                   <div className="w-[550px] h-[550px]" data-aos="fade-right" data-aos-duration="3000">
                        <img src={Insta1} alt="img" className="w-full h-auto"/>
                    </div>
                    <div className="grid grid-cols-3 gap-[16px]" data-aos="fade-left" data-aos-duration="3000">
                        <img src={Insta2} alt="img" className="w-[267px] h-[267px]" />
                        <img src={Insta3} alt="img" className="w-[267px] h-[267px]" />
                        <img src={Insta4} alt="img" className="w-[267px] h-[267px]" />
                        <img src={Insta5} alt="img" className="w-[267px] h-[267px]" />
                        <img src={Insta6} alt="img" className="w-[267px] h-[267px]" />
                        <img src={Insta7} alt="img" className="w-[267px] h-[267px]" />
                    </div>
                   </div>
                   <Button variant="fourth">Follow Us @beautyshop</Button>
                </div>
            </section>
        </>
    )
}