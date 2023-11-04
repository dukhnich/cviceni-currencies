import { useState, useEffect } from 'react';

import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 }
};

export const Rate = ({from}) => {
  const [currency, setCurrency] = useState();
  useEffect(() => {
    const getCurrency = async() => {
        const response = await fetch (`https://api.frankfurter.app/latest?from=${from}&to=CZK`);
        const data = await response.json();
        setCurrency(data?.rates?.CZK);
    }
    getCurrency()
  }, [from])
  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{currency} CZK</div>
    </div>
  );
};
