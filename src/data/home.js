import seller1 from '../assets/seller1.png';
import seller2 from '../assets/seller2.png';
import seller3 from '../assets/seller3.png';
import seller4 from "../assets/seller4.svg";
import {Icon1} from "../assets/icons/icon1";
import {Icon2} from "../assets/icons/icon2";
import {Icon3} from '../assets/icons/icon3';
import {Icon4} from "../assets/icons/icon4";
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.png';
import Blog3 from '../assets/blog4.png';
import Blog4 from '../assets/blog4.png';
import {Help1} from "../assets/icons/help1";
import {Help2} from "../assets/icons/help2";
import {Help3} from "../assets/icons/help3";

export const headerData = [
    {
        id: 1,
        name: "Products",
        path: "/Products",
    },

    {
        id: 2,
        name: "Brand",
        path: "/Brand",
    },

    {
        id: 3,
        name: "About Us",
        path: "/About",
    },

    {
        id: 4,
        name: "FAQ",
        path: "/FAQ",
    },

    {
        id: 5,
        name: "Contact",
        path: "/Contact",
    },

    {
        id: 6,
        name: "Where to buy",
        path: "/buy",
    },
];

export const sellerData = [
    {
        id: 1,
        img: seller1,
        title: "Facial Balancing Gel",
        price: "$45.00-$99.00",
    },

    {
        id: 2,
        img: seller2,
        title: "Post-Shave Lotion",
        price: "$54.00",
    },

    {
        id: 3,
        img: seller3,
        title: "Facial Balancing Gel",
        price: "$25.00",
    },

    {
        id: 4,
        img: seller4,
        title: "Post-Shave Lotion",
        price: "$54.00",
    }

];

export const serviceData = [
    {
        // img: `${<Icon1 />}`,
        title: "Ethical business",
        text: "Only green beauty products.",
    },

    {
        // img: `${<Icon2 />}`,
        title: "Shipped free & with love",
        text: "On orders abouve $50.",
    },

    {
        // img: `${<Icon3 />}`,
        title: "Delivered in 1-3 days",
        text: "And packaged with love.",
    },

    {
        // img: `${<Icon4 />}`,
        title: "Personalized experience",
        text: "Free consultations via email.",
    },
];



export const blogData = [
    {
        img: Blog1,
        desc: "Beauty",
        data: "May 2, 2021",
        title: "Some beaty secrets from our editor in chief",
    },

    {
        img: Blog2,
        desc: "Fragrance",
        data: "May 2, 2021",
        title: "Morning beauty routine: our main rules",
    },

    {
        img: Blog3,
        desc: "Beauty",
        data: "May 2, 2021",
        title: "Organic ingredients: do they even work?",
    },

    {
        img: Blog4,
        desc: "Makeup",
        data: "May 2, 2021",
        title: "The best cosmetic products",
    },

];


export const helpData = [
    {
        // img: Help1,
        title: "Frequently asked questions",
        text: "If you have questions about products, orders or account info, you may find answer in our FAQ.",
        text2: "View FAQ",
    },

    {
        // img: <Help1 />,
        title: "Give us a call",
        text: "You can always give us a call: Mon to Fri from 9 am till 7 pm EST.",
        text2: "+44 678 94830",
    },

    {
        // img: <Help1 />,
        title: "Drop us a line",
        text: "Drop us a line and we will get back to you as soon as possible.",
        text2: "hello@example.com",
    },
]