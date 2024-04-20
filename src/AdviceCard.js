import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DiveiderDesktop from './images/pattern-divider-desktop.svg'
import DiveiderMobile from './images/pattern-divider-mobile.svg';
import Logo from './images/icon-dice.svg';
export const AdviceCard = () => {
    const [advice, setAdvice] = useState('')
    
        const getAdvice = async() => {
            const response = await axios.get('https://api.adviceslip.com/advice')
            const advice = await response.data.slip;
            setAdvice(advice)
        }
        useEffect(() => {
            getAdvice();
           }, []);
    return (
    <div className='card'>
        <p>ADVICE #{advice.id   }</p>
        <h2>"{advice.advice}"</h2>
        <img src={DiveiderDesktop} className='divider-desktop' alt='divider'/>
        <img src={DiveiderMobile} className='divider-mobile' alt='divider'/>
        <div className='dice' onClick={getAdvice}>
            <img src={Logo} alt='dice'/>
        </div>
    </div>
  )
}
