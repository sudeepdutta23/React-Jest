import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {
      name: "School Shoes",
      price: 4000,
      description: "Shoes For Students",
      background: ""
    },
    {
      name: "School Dress",
      price: 3000,
      description: "Dress For Students",
      background: ""
    },
    {
      name: "School Bag",
      price: 2000,
      description: "Bag For Students",
      background: ""
    },
    {
      name: "College Shirt",
      price: 1000,
      description: "Shirt For College Students",
      background: ""
    },
    {
      name: "College trowser",
      price: 1000,
      description: "Trowser For College Students",
      background: ""
    },
    {
      name: "College Shoes",
      price: 3000,
      description: "Shoes For College Students",
      background: ""
    }
  ]

  const additionalProd = [
    {
      name: "Notebooks",
      price: 500,
      description: "Notebooks For School & College Students",
      background: ""
    },
    {
      name: "Books",
      price: 2000,
      description: "Books For School & College Students",
      background: ""
    },
    {
      name: "Practical Copies",
      price: 100,
      description: "Practical Copies For School & College Students",
      background: ""
    },
    {
      name: "Pen & Pencil",
      price: 125,
      description: "Pen & Pencil For School & College Students",
      background: ""
    },
    {
      name: "Water Bottle",
      price: 150,
      description: "Water Bottle For School & College Students",
      background: ""
    },
    {
      name: "Socks",
      price: 100,
      description: "Socks For School & College Students",
      background: ""
    }
  ]

  const [prods, setProds] = useState([])
  const randomColorGen = () => Math.floor(Math.random()*16777215).toString(16);
  const addMore = () =>{
    let newProducts = additionalProd.map(p=> ({...p, background: `#${randomColorGen()}`}))
    prods.length == 6 && setProds([...prods, ...newProducts])
  } 
  useEffect(()=>{
   const newProducts = products.map(p=> ({...p, background: `#${randomColorGen()}`}))
    setProds(newProducts)
  },[])
  return (
      <>
        <div className='h1 text-center p-4'>
          Shopping List
        </div>
        <div className='container-prod'>
          {prods && prods.map((p,i)=>{
            return(
            <div className='card-child' key={p.background}>
              <div className='bg-box' style={{ backgroundColor: p.background }}>
              </div>
              <span className='nane-style'>
                {p.name}
              </span>
              <div style={{ marginTop: 10}}>
                {p.description}
              </div>
              <div style={{ marginTop: 10}}>
                Rs. {p.price}
              </div>
              <button className='add-to-cart-btn'>Add to Cart</button>
            </div>)
          })}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className='load-more-btn' onClick={addMore}>Load More</button>
        </div>
      </>
  );
}

export default App;
