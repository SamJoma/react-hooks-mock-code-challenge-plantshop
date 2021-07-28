import React, { useState } from "react";

function NewPlantForm() {
  const [formData, formDataSetter] = useState({
    name:"",
    image:"",
    price:"",
  })

  function manageFormData(e) {
    let name= e.target.name
    let value= e.target.value
  
    formDataSetter({
      ...formData,[name]:value
    })
  }
  // Capture submitted Data and store in a  separate state
    const [submittedData, setsubmittedData] = useState([])

    //Create a callback function to handle onSubmit behaviour for our controlled form
    function handleSubmit (e) {
      e.preventDefault()

      const newFormdata = {name: formData.name, image: formData.image, price: formData.price}
    }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text"
         name="name"
          value={formData.name} placeholder="Plant name"
          onChange={manageFormData} />

        <input type="text"
         name="image"
          value={formData.image}
          placeholder="Image URL" />

        <input type="number" 
        name="price"
         value={formData.price}
          step="0.01" 
          placeholder="Price" />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
