import { useEffect, useState, createContext, useContext } from "react"

const SongContext = createContext();

function ContextProvider( {children }) {

    const apiUrl = "http://localhost:3000/songs";
    const [data, setData] = useState();
  
    useEffect(() => {
      fetch(apiUrl)
        .then(result => result.json())
        .then(data => setData(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);


  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  );
};

const useData = () => {
    return useContext(SongContext);
  };
  

export { ContextProvider, useData }