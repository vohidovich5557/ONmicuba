import React from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import z from 'zod';
import bgImg from '../../assets/bg_img.png';
import Logo from '../../assets/logo.svg';
import { headerData } from "../../data/home";
import { Search } from "../../assets/icons/search";
import { Profile } from "../../assets/icons/profile";
import { Heart } from "../../assets/icons/heart";
import { Left } from '../../assets/icons/left';
import { Right } from "../../assets/icons/right";
import { Button } from "../../components/ui/button";
import { useToggle } from "../../hook/useToggle";
import { Modal } from "../../components/ui/modal";
import { Input } from "../../components/ui/input";

const schema = z.object({
    username:z.string().min(3, "stadan kam bolmasin").max(10, "10tadan ko`paydi"),
    email:z.string().min(3, "3tadan kamaydi").max(25, "25tadan ko`paydi"),
    number:z.string().min(9, "9 tadan kamaymasin").max(12, "oshib ketdi xato"),
    password:z.string().min(5, "5tadan kam bo`ldi").max(10, "10tadan ko`p bo`ldi"),
    confirmPassword:z.string().min(5, "5tadan kam bo`ldi").max(10, "10tadan ko`paydi")
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Parollar bir xel kiritilmagan"
});


export const Header = () => {

    const { close, isOpen, open } = useToggle();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({resolver: zodResolver(schema)});

    const submit = (data) => {
        console.log(data);
        reset();
    }



    return (
        <>
            <div className="container border relative h-[702px]">
                <img src={bgImg} alt="bg-Img" className=" absolute w-full -z-10 h-auto" />
                <nav className="pt-[10px] flex items-center justify-around mb-[10px]">
                    <div className="flex items-center gap-[95px]">
                        <img src={Logo} alt="logo" className="w-[80px] h-[59px]" />
                        <ul className="flex items-center gap-[32px]">
                            {headerData.map((item) => (
                                <li key={item.id}><a href={item.path} className="text-black text-base font-medium">{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-[24px]">
                        <select name="lang" id="lang" className=" bg-transparent border-none outline-none">
                            <option value="Eng">Eng</option>
                            <option value="Uzb">Uzb</option>
                            <option value="Rus">Rus</option>
                        </select>
                        <Search />
                        <Heart />
                        <div onClick={open}>
                            <Profile />
                        </div>
                        <p>Bag <span>0</span></p>
                    </div>
                </nav>
                <div className="w-full h-0 border-[0.5px] border-gray-600/50 bg-gray-600/50"></div>
                <div className="flex items-center justify-between px-[20px] mt-[218px]">
                    <Left />
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="3000">
                        <h2 className="text-3xl font-medium mb-[12px]">Discover summer promotions</h2>
                        <p className="text-sm font-normal mb-[24px]">Free sample and free shipping when you spend $50</p>
                        <div className="flex items-center gap-[12px]">
                            <Button variant="primary">Skincare</Button>
                            <Button variant="secondary">Shop All</Button>
                        </div>
                    </div>
                    <Right />
                </div>
            </div>
            <div className="container">
                <Modal isOpen={isOpen} close={close}>
                    <h2 className="text-3xl font-medium mt-[48px] mb-[32px]">Create an account</h2>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input variant="primary"
                            {...register("username", { required: true })}
                            placeholder="Username*"
                            type="text"
                            helperText={errors?.username?.message}
                        />
                        <Input variant="primary"
                            {...register("email", { required: true })}
                            placeholder="Email*"
                            type="email"
                            helperText={errors?.email?.message}
                        />
                         <Input variant="primary"
                            {...register("number", { required: true })}
                            placeholder="Phone number*"
                            type="text"
                            helperText={errors?.number?.message}
                        />
                         <Input variant="primary"
                            {...register("password", { required: true })}
                            placeholder="Password*"
                            type="password"
                            helperText={errors?.password?.message}
                        />
                         <Input variant="primary"
                            {...register("confirmPassword", { required: true })}
                            placeholder="Repeat Password*"
                            type="password"
                            helperText={errors?.confirmPassword?.message}
                        />
                        <Button variant="fifth">Sign up</Button>
                    </form>
                </Modal>
            </div>
        </>
    )
}