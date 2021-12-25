import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState("hello");
  const [testString, setTestString] = useState('abcdefg');

  useEffect(()=> {
    fetch("/members").then(res => res.json()).then(data => {
      setData(data);
      console.log(data);
    })
  }, []);

  useEffect(() => {
    fetch('/test').then(res => res.json()).then(data => {
      setTestString(data);
    })
  }, []);

  return (
    <div>
      <p>Data </p>
      {(typeof data.members == 'undefined') ? (
        <p>Loading ...</p>
      ): (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
      
      <p>String</p>
      <p>{testString}</p>
      
    </div>
  )
}

export default App
