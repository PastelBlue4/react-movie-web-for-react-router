import { useState, useEffect } from "react";

import "./App.css";
import CharacterCard from "./components/CharacterCard";

function App() {
  const [charactersData, setCharactersData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getCharacter = async () => {
    const response = await fetch(
      "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
    );
    const jsonData = await response.json();
    setCharactersData(jsonData.data.results);
    setIsLoading(false);
    console.log(jsonData.data.results);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="w-full p-2 mb-4 text-2xl font-semibold text-center bg-blue-300 text-gray-50">
          꺼블위키
        </h1>

        {isLoading ? (
          "꺼블위키 키는중..."
        ) : (
          <div className="flex flex-col items-center w-full space-y-4">
            {charactersData.length > 0 &&
              charactersData.map((data) => {
                return <CharacterCard data={data} />;
              })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
