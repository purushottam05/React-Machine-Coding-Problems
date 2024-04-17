// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div>
      <input 
        type="number" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
        placeholder="Height (cm)" 
      />
      
      <input 
        type="number" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
        placeholder="Weight (kg)" 
      />
      
      <button onClick={calculateBMI}>Calculate BMI</button>
      
      <p>Your BMI: {bmi}</p>
    </div>
  );
}

export default App;
