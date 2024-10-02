import React, { useEffect, useRef, useState } from "react";
import "./Typeahead.css";

function generateRandomText(givenText, wordCount = 5) {
  const words = givenText.split(" ");

  let randomText = [];
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomText.push(words[randomIndex]);
  }

  return randomText;
}

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => setDebounce(text), delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return debounce;
};

export default function Typeahead() {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const timeRef = useRef(null);

  function handleInput(e) {
    const value = e.target.value;
    setQuery(value);

    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      setSuggestion(generateRandomText(value));
    }, 300);
  }

  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, []);

  return (
    <div className="typeahead">
      <div style={{ display: "flex" }}>
        <span className="search-header">Search</span>
        <input
          className="search-input"
          type="text"
          placeholder="enter you query"
          onInput={handleInput}
          value={query}
        />
      </div>
      {suggestion.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </div>
  );
}

// import React, { useState, useEffect, useRef } from "react";

// const Typeahead = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const timeoutRef = useRef(null);

//   const fetchResults = (searchTerm) => {
//     // Simulate an API call
//     console.log(`Fetching results for ${searchTerm}`);
//     setResults([`Result for ${searchTerm}`]); // Dummy results
//     setIsLoading(false);
//   };

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     setIsLoading(true);

//     // Clear the previous timeout
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // Set a new timeout
//     timeoutRef.current = setTimeout(() => {
//       fetchResults(value);
//     }, 300); // 300ms delay
//   };

//   useEffect(() => {
//     // Cleanup timeout on component unmount
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Type to search..."
//       />
//       {isLoading && <p>Loading...</p>}
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Typeahead;
