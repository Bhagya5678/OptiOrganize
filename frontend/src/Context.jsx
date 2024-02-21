import React, {useState, useContext, useEffect} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // const [user, setUser] = useState({});
    const [selectProduct, setSelectProduct] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
    const [noodlesCorr, setNoodlesCorr] = useState([]);

    useEffect(() => {
        const uniqueCategories = [...new Set(selectProduct.map(item => item.product_category))];
        setSelectCategory(uniqueCategories);

    }, [selectProduct]);


    return (
        <AppContext.Provider
            value={{
                // user,
                selectProduct,
                setSelectProduct,
                selectCategory,
                setSelectCategory,
                noodlesCorr,
                setNoodlesCorr
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider};
