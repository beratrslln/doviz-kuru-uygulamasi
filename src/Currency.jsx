import React from 'react'
import './css/currency.css';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from 'react';
import axios from 'axios';



function Currency() {
    const [amount , setAmount] = useState(0);
    const [fromCurrency , setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency ] = useState("TRY");
    const [result , setResult] = useState(0);

    let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
    const myKey = "fca_live_L1WPJNwzndB6c0nn5x4PGoEVHqCI3wIxA2QJR3Ir"
    
    const exchange = async()=>{
     const response =   await axios.get(`${BASE_URL}?apikey=${myKey}&base_currency=${fromCurrency}`)
     //bu link bize ilk seçtiğimiz para biriminin diğer parabirimlerindeki karşılığını verir
     
    const kur = response.data.data; //yukarıdan gelen toplu verinin data kısmına ulaşmak için kısayol değişken 
    const exchangeRate = kur[toCurrency];//bütün para birimlerinin olduğu veri setinden sadece çevirmek istediğimiz para birimini seçer
    const total = exchangeRate*amount //çevrilen birimi başta inputla girdiğimiz katsayıyla çarparız.
    setResult(total+" "+toCurrency) //çevrilen birimi ekrana yazdırma.
    
    }


  return (

    
    
<div className='currency-div'>

    <div className='currency-container'>

        <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" className='currency-entry' />
        
        <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option'>
            <option >USD</option>
            <option >TRY</option>
            <option >EUR</option>
        </select>

        <BsArrowRightCircleFill style={{color:"white", fontSize:"25px"}}/>

        <select onChange={(e)=>setToCurrency(e.target.value)} className='to-currency-option'>
            <option >TRY</option>
            <option >USD</option>
            <option >EUR</option>
        </select>
            
        <input value={result} onChange={(e)=>setResult(e.target.value)}  className='currency-output' />

    </div>


    <div >
        <button
        onClick={exchange}
         className='convert-button'>Convert</button>
    </div>


</div>


  )
}

export default Currency