import React from 'react'
import NavbarSimple from '@/components/navbar';
import {useGlobalContext} from "@/Context";
import {Navbar} from '@material-tailwind/react';



export default function () {

    const {selectProduct, noodlesCorr} = useGlobalContext();
    return (
        <div>
            <NavbarSimple />
            {console.log(selectProduct)}
            {console.log(noodlesCorr)}
        </div>
    )
}
