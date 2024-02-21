import React from 'react'
import NavbarSimple from '@/components/navbar'
import ScrollChoose from '@/components/scrollChoose'
import {Scroll} from 'lucide-react'

export default function Home({categ, data}) {
    return (
        <>
            <NavbarSimple></NavbarSimple>
            {categ && <ScrollChoose categ={categ} data={data}></ScrollChoose>}
        </>
    )
}
