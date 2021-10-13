import axios from 'axios';
import ReactDOM from 'react-dom'
import react from 'react';
import {useEffect, useState} from 'react';

const useGetProducts = (API)=>{
    const [products, setProducts] = useState([]);
	useEffect(async () => {
		let response; 
		try {
            console.log('API: ', API);
			response = await axios(API);
            console.log(response);						
			setProducts(response.data);
            
		} catch (error) {
            console.log(error);
		}
	}, []);
    return products;


}

export default useGetProducts;