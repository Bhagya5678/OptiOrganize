import {useState} from 'react'
import './App.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {Button} from "@material-tailwind/react";

function App() {

  return (
    <>
      <div className='text-3xl font-bold underline'>HELLO</div>
      {/* <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}

      <Button>Button</Button>

    </>
  )
}

export default App
