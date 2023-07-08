import React, { useState } from 'react';
import './App.css';

function App() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [result, setResult] = useState([]);

  const computeDifferences = () => {
    const onlyInA = listA.filter(item => !listB.includes(item));
    const onlyInB = listB.filter(item => !listA.includes(item));
    const commonItems = listA.filter(item => listB.includes(item));
    const combinedItems = [...new Set([...listA, ...listB])];

    const diffResult = {
      onlyInA,
      onlyInB,
      commonItems,
      combinedItems
    };

    setResult(diffResult);
  };

  const handleAddItemToListA = () => {
    if (textA.trim() !== '') {
      setListA(prevListA => [...prevListA, textA]);
      setTextA('');
    }
  };

  const handleAddItemToListB = () => {
    if (textB.trim() !== '') {
      setListB(prevListB => [...prevListB, textB]);
      setTextB('');
    }
  };

  return (
    <div className='app-container'>
      <h2>List Comparison</h2>
      <div className="list-container">
        <div className="listA">
          <h3>List A</h3>
          <ul>
            {listA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="add-item">
            <input
              type="text"
              placeholder="Enter an item"
              value={textA}
              onChange={e => setTextA(e.target.value)}
            />
            <button onClick={handleAddItemToListA}>Add</button>
          </div>
        </div>
        <div className="listB">
          <h3>List B</h3>
          <ul>
            {listB.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="add-item">
            <input
              type="text"
              placeholder="Enter an item"
              value={textB}
              onChange={e => setTextB(e.target.value)}
            />
            <button onClick={handleAddItemToListB}>Add</button>
          </div>
        </div>
      </div>
      <div className="compute">
        <button onClick={computeDifferences}>Compute Differences</button>
      </div>
      <div className="results">
        <h3>Results</h3>
        <div className='results_items'>
          <strong>Items present only in List A:</strong>
          <ul>
            {result.onlyInA &&
              result.onlyInA.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
        <div className='results_items'>
          <strong>Items present only in List B:</strong>
          <ul>
            {result.onlyInB &&
              result.onlyInB.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
        <div className='results_items'>
          <strong>Items present in both List A and List B:</strong>
          <ul>
            {result.commonItems &&
              result.commonItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
        <div className='results_items'>
          <strong>Items combining List A and List B:</strong>
          <ul>
            {result.combinedItems &&
              result.combinedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';

// function App() {
//   const [textA, setTextA] = useState('')
//   const [textB, setTextB] = useState('')
//   const [listA, setListA] = useState([]);
//   const [listB, setListB] = useState([]);
//   const [result, setResult] = useState([]);

//   const computeDifferences = () => {
//     const onlyInA = listA.filter(item => !listB.includes(item));
//     const onlyInB = listB.filter(item => !listA.includes(item));
//     const commonItems = listA.filter(item => listB.includes(item));
//     const combinedItems = [...new Set([...listA, ...listB])];

//     const diffResult = {
//       onlyInA,
//       onlyInB,
//       commonItems,
//       combinedItems
//     };

//     setResult(diffResult);
//   };

//   const handleAddItemToListA = () => {
//     if (textA.trim() !== '') {
//       setListA(prevListA => [...prevListA, textA]);
//       setTextA('');
//     }
//   };

//   const handleAddItemToListB = () => {
//     if (textB.trim() !== '') {
//       setListB(prevListB => [...prevListB, textB]);
//       setTextB('');
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h3>List A</h3>
//         <ul>
//           {listA.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           value={textA}
//           onChange={e => setTextA(e.target.value)}
//         />
//         <button onClick={handleAddItemToListA}>Add</button>
//       </div>
//       <div>
//         <h3>List B</h3>
//         <ul>
//           {listB.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           value={textB}
//           onChange={e => setTextB(e.target.value)}
//         />
//         <button onClick={handleAddItemToListB}>Add</button>
//       </div>
//       <button onClick={computeDifferences}>Compute</button>

//       <div>
//         <h3>Results</h3>
//         <div>
//           <strong>Items present only in A:</strong>
//           <ul>
//             {result.onlyInA &&
//               result.onlyInA.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//           </ul>
//         </div>
//         <div>
//           <strong>Items present only in B:</strong>
//           <ul>
//             {result.onlyInB &&
//               result.onlyInB.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//           </ul>
//         </div>
//         <div>
//           <strong>Items present in both A and B:</strong>
//           <ul>
//             {result.commonItems &&
//               result.commonItems.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//           </ul>
//         </div>
//         <div>
//           <strong>Items combining both A and B:</strong>
//           <ul>
//             {result.combinedItems &&
//               result.combinedItems.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
