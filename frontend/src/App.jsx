import {useState, useEffect} from 'react'
import './App.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {Button} from "@material-tailwind/react";
import NavbarSimple from './components/navbar';
import ScrollChoose from './components/scrollChoose';

function App() {
  const [data, setData] = useState(null);
  const [categ, setCateg] = useState(null);
  
  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/products'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    // Call the fetch data function
    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once
  
  useEffect(() => {
    // Check if data is not null before accessing its properties
    if (data) {
      // console.log(data);
      const uniqueCategories = [...new Set(data.map(item => item.product_category))];
      setCateg(uniqueCategories);
    }
  }, [data]);

  return (
    <>
      <NavbarSimple></NavbarSimple>
      {categ && <ScrollChoose categ={categ} data={data}></ScrollChoose>}
    </>
  )
}

export default App
