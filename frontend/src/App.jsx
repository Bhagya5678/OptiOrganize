import {useState, useEffect} from 'react'
import './App.css'
import Home from './screens/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ShelfLayout from './screens/ShelfLayout';
import {useGlobalContext} from "@/Context";

function App() {
  const [data, setData] = useState(null);
  const [categ, setCateg] = useState(null);

  const {noodlesCorr, setNoodlesCorr} = useGlobalContext();

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/products'); // Replace with your API endpoint
        const response2 = await fetch('http://127.0.0.1:5000/noodle_corr'); // Replace with your API endpoint
        if (!response.ok && !response2.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const jsonData2 = await response2.json();
        setData(jsonData);
        setNoodlesCorr(jsonData2);
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
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={categ && <Home categ={categ} data={data}></Home>}></Route>
            <Route exact path="/shelf-layout" element={<ShelfLayout />}></Route>
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
