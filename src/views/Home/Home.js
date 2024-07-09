import React, { useEffect, useState } from 'react'
import "./Home.css"
import PlantCard from '../../component/PlantCard/PlantCard'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'

function Home() {
    const [plants, setPlants] = useState([])

    const loadPlants = async ()=>{
        toast.loading("Loding plants...")
        const response = await axios.get(`http://localhost:8000/plants`)
        toast.dismiss()
        toast.success("Plants loaded successfully")
        setPlants(response.data.data)
    }

    useEffect(()=>{
        loadPlants()
    }, [])

  return (
    <div>
        <h1>Plants</h1>

        {
            plants.map((plants, i)=>{
                const {
                    _id,
                    name, 
                    category, 
                    image, 
                    price, 
                    description} = plants

                return <PlantCard 
                key={i}
                _id={_id} 
                name={name} 
                category={category} 
                image={image} 
                price={price} 
                description={description}/>
            })
        }
        <Toaster/>
    </div>
  )
}

export default Home