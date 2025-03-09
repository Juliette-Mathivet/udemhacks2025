import React from 'react'
import { Medicine } from '../classes/Medecine'


const medicineDescription = (medicine: Medicine) => {

    
  return (
    <div>
        <h1>{medicine.medicineName}</h1>
        <p>{medicine.description}</p>
    </div>

)
}

export default medicineDescription