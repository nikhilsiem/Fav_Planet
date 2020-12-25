import React,{ useState } from 'react';
import './App.css';

const PAGE_PLANET = 'planets';
const PAGE_FAVS = 'favs';

function App() {

  const [fav, setFavs]=  useState([]);

  const [page, setPage] = useState(PAGE_PLANET);


  const [planets] = useState([
    {
      name: 'Mercury',
      Dist_sun: '57.91 million km',
      image:'https://scx2.b-cdn.net/gfx/news/hires/2015/whatsimporta.jpg',
    },
    {
      name: 'Venus',
      Dist_sun: '108.2 million km',
      image:'https://static.scientificamerican.com/sciam/cache/file/F7E0BB0E-3F76-4AF5-92AC0951C2976728_source.jpg?w=590&h=800&7D4AE32D-D3D4-4689-A81E895E9A173CC2',
    },
    {
      name: 'Earth',
      Dist_sun: '146.6 million km',
      image:'https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg',
    },
    {
      name: 'Mars',
      Dist_sun: '227.9 million km',
      image:'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
    },
    {
      name: 'Jupiter',
      Dist_sun: '778.5 million km',
      image:'https://spaceandbeyondbox.com/wp-content/uploads/2020/11/jupiter.jpg',
    },
    {
      name: 'Saturn',
      Dist_sun: '1434.6 million km',
      image:'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
    },
    {
      name: 'Neptune',
      Dist_sun: '2871.3 million km',
      image:'https://www.nasa.gov/sites/default/files/thumbnails/image/pia01492-main.jpg',
    },
    {
      name: 'Uranus',
      Dist_sun: '4495.1 million km',
      image:'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2019%2F01%2Furanus-1200x800.jpg',
    },
  ])

  const addToFavs = (planet) => {
    setFavs([...fav, { ...planet } ]);
  }

  const removeFromFavs = (planetToRemove) => {
    setFavs(fav.filter(planet =>  planet !== planetToRemove))
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderPlanets = () => (
    <>
    <div className="system">
      <h1>Choose your Favourite planets:</h1>
        <div className="planets">
        {planets.map((planet, idx) => (
          <div className="prod_map" key={idx}>
            <h3>{planet.name}</h3>
            <h4>{planet.Dist_sun}</h4>
            <img  className="planet_image"  src={planet.image} alt={planet.name} />
            <button onClick={() => addToFavs(planet)}>
              Add to Favourites
            </button>
          </div>
        ))}
      </div>
      </div>
    </>
  );

  const renderFavs = () => (
    <>
      <div className="system">
      <h1>Your choosen Favourite Planets:</h1>
        <div className="planets">
        {fav.map((planet, idx) => (
          <div className="prod_map" key={idx}>
            <h3>{planet.name}</h3>
            <h4>{planet.Dist_sun}</h4>
            <img  className="planet_image"  src={planet.image} alt={planet.name} />
            <button onClick={() => removeFromFavs(planet)}> 
              Not my Fav!
            </button>
          </div>
        ))}
      </div>
      </div>
    </>
  );

  return (
    <div className="planet">
      <header>
        
        <button onClick={() => navigateTo(PAGE_FAVS)}>Check Favourites({fav.length})</button>
        <div className="side_button">
          <button onClick={() => navigateTo(PAGE_PLANET)}>See the Planets</button>
        </div>
      </header>
      {page === PAGE_PLANET && renderPlanets()}
      {page === PAGE_FAVS && renderFavs()}
    </div>
  );
}

export default App;
