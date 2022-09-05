import {useState, useEffect} from 'react'
import {toursData} from './toursData'
import './App.css';
import { Loading } from './Components/Loading';

function App() {
  const [isLoading, setIsloading] = useState(true)
  const [tours, setTours] = useState(toursData)
  const [readMore, setReadMore] = useState(false)
  

  const handleRemove = (id) =>{

    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)

  }

  useEffect(() =>{
    setTimeout(() => {
      setIsloading(false)
      
    },1500);
  })

  






  if(isLoading){
    return <div>
    <Loading />

    </div>
    
  };
  
  return (
    <div className="App">
    {tours.length > 0 ? <h1 className="tour-txt">Our Tours</h1> : <h1 style={{textAlign:'center'}}>No Tours left</h1>}
      

      {tours.length > 0 ? (
        tours.map((tour) => {
          const { id, img, title, price, about } = tour;

          return (
            <main className="main" key={id}>
              <section className="article-txt">
                <img src={img} alt="" />
                <p className="title-para">
                  <span className="title">{title}</span>
                  <span className="price">{price}</span>
                </p>

                <p className="about">
                  {readMore ? about : about.slice(0, 170)}
                  <span onClick={() => setReadMore(!readMore)} className="showText">
                    {readMore ? "show less" : "...show more"}
                  </span>
                </p>
                <button
                  className="btn"
                  type="button"
                  onClick={() => handleRemove(id)}
                >
                  Not Interested
                </button>
              </section>
            </main>
          );
        })
      ) : (
        <div className='refresh-div'>
          <button onClick={() => setTours(toursData)} className="refresh-btn">
            refresh
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
