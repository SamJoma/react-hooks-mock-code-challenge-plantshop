import React,{useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [showPlants, setShowPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res=>res.json())
    .then(plantPageData =>setShowPlants(plantPageData))
    console.log(showPlants)
    
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList showPlants={showPlants} />
    </main>
  );
}

export default PlantPage;
