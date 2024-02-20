import React, {useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";

export default function ScrollChoose({data}) {
    const categoryColors = {
        'Noodles': 'bg-yellow-600',
        'Cold Drinks': 'bg-blue-300',
        // Add more categories and corresponding colors as needed
    };

    const handleContinue = () => {
        
    };

    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (id) => {
        const selectedItem = data.find(item => item.id === id);

        // Check if the item is already selected
        if (!selectedItems.some(item => item.id === id)) {
            setSelectedItems([...selectedItems, selectedItem]);
        }
    };

    const handleRemoveItemClick = (id) => {
        const updatedSelectedItems = selectedItems.filter(item => item.id !== id);
        setSelectedItems(updatedSelectedItems);
    };

    const filteredData = data.filter(item => !selectedItems.some(selected => selected.id === item.id));

    return (
        <div className='flex'>
            <div className='flex flex-col justify-center items-center border-4 border-gray-200 w-1/4'>
                <div className='text-2xl mt-4 font-bold text-blue-900 underline'>CHOOSE ITEMS</div>
                <ScrollArea className="h-[600px] w-[350px] rounded-md border p-4 border-none">
                    {filteredData && filteredData.map((item) => (
                        <Button key={item.id} className={`flex flex-col h-24 w-full ${categoryColors[item.product_category]} text-white text-lg my-2`} onClick={() => handleItemClick(item.id)}>
                            <div className='font-bold text-3xl mb-2'>{item.product_name}</div>
                            <div className='uppercase text-md font-bold'>{item.product_category}</div>
                        </Button>
                    ))}
                </ScrollArea>
            </div>

            <div className='flex flex-col items-center justify-between w-3/4 border-4 border-gray-200'>
                <div className='text-2xl mt-4 text-blue-900 font-bold underline'>SELECTED ITEMS</div>
                <div className='p-4 w-1/3'>
                    {selectedItems.map((item) => (
                        <Button key={item.id} className={`flex flex-col h-24 w-full ${categoryColors[item.product_category]} text-white text-lg my-2`} onClick={() => handleRemoveItemClick(item.id)}>
                            <div className='font-bold text-3xl mb-2'>{item.product_name}</div>
                            <div className='uppercase text-md font-bold'>{item.product_category}</div>
                        </Button>
                    ))}
                </div>
                <Button className="bg-blue-900 text-white mb-4 text-lg font-bold" onClick={handleContinue}>Continue</Button>
            </div>
        </div>
    );
}
