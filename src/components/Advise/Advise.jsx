import React, {useState, useEffect} from 'react'
import './Advise.scss';
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

function Advise() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] =useState(false);

  const getAdvice = async() => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  }

  useEffect(() => {
    getAdvice()
  }, [])

  useEffect(() => {
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    },1000)
  }, [])


  return (
    <div className='advise'>
        <h2>ADVICE # {advice.id}</h2>
        <div className="loader">
          {
            loading ?
            <BeatLoader
              color={"#39FF14"}
              loading={loading}
              size={20}
              />
            :
            <p>
            ❝
            {advice.advice}
            ❞
          </p>
          }
        </div>
        <img className='divider desktop' src='assets/pattern-divider-desktop.svg' alt='pattern desktop' />
        <img className='divider mobile' src='assets/pattern-divider-mobile.svg' alt='pattern mobile' />
        <div className="dice" onClick={getAdvice}>
          <img src='assets/icon-dice.svg' alt='dice' />
        </div>
    </div>
  )
}

export default Advise