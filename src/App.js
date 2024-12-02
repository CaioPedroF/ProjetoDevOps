import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('/data');
    const result = await response.json();
    setData(result);
  };

  const sendData = async () => {
    const response = await fetch('/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello, server!' }),
    });
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="App">
      <button onClick={fetchData}>GET Data</button>
      <button onClick={sendData}>POST Data</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;
