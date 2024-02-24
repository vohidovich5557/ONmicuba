import React from "react";
import {Header} from "../layout/header";
import {Footer} from "../layout/footer";
import { Outlet } from "react-router-dom";


export const MainLayout = () => {


    return (
        <>
            <header>
              <Header />
            </header>
            <main>
                <Outlet />
            </main>
         <footer>
            <Footer />
         </footer>
        </>
    )
}