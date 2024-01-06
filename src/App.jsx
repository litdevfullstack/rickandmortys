import { useEffect, useRef } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import InfoLocation from './components/InfoLocation'
import CardResident from './components/CardResident'
import { useState } from 'react'


function App() {

  const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1)


  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [location, getLocation, isLoading, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [locationId])


  const inputLocation = useRef()

  const handleLocation = (e) => {
    e.preventDefault();
    const enteredId = parseInt(inputLocation.current.value.trim(), 10);
    setLocationId(enteredId || 0); 
  }
  

console.log(hasError);

  return (
    <div className='app'>
      <header>
        <img className='app__img' src="../rick-and-morty.jpg" alt="" />
      </header>
      <form  className='app__form' onSubmit={handleLocation}>
        <input className='app__input' ref={inputLocation} type="text" />
        <button className='app__button'>Search</button>
      </form>

      {
        isLoading ? <h2 className='load__title'>Loading...</h2>
        : (hasError || locationId === "0"
          ? <h2 className='error__title'>X Hey! you must provide an id from 1 to 126</h2>
          : (<>
            <InfoLocation location={location} />
            <div className='app__card-container'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}
                  />
                ))
              }

            </div>
          </>)
        )
      }

    </div>
  )
}

export default App
