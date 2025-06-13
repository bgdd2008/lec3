import './App.css'
import Card from './components/Card'
import { footBallPlayers } from './data'

function App() {
  const handleClick = () => {
    console.log("variant 2 button")
    alert('Clicked')
  }

  const handleOnChange = (e) => {
    console.log(e.target.value)
  }

  const handleHover = () => {
    console.log('Hover')
  }

  const numbers = [1,2,3,4,5,6,7,8,9,10]
  const names = ['mariami', 'luka', 'nika', 'giorgi']
  const cards = [
    {
      title: "First title",
      content: "First content"
    },
    {
      title: "Second title",
      content: "Second content"
    },
    {
      title: "Third title",
      content: "Third content"
    },
    {
      title: "Fourth title",
      content: "Fourth content"
    }
  ]

  const users = [
    {
      name: "giorgi",
      age:"21",
      bgColor: "red"
    },
    {
      name: "nika",
      age:"16",
      bgColor: "green"
    },
    {
      name: "lado",
      age:"17",
      bgColor: "orange"
    }
  ]

  return (
  <div>

    {footBallPlayers.map((el, i) => (
      <Card  key={i} title={el.name} content={el.price} img={el.img}/>
    ))}
{/* 
    <img src='/assets/pic.jpg' alt="pic" width={100} height={100} />
    {users.map((el , i) => (
      <div key={i} className='userCard' style={{background: el.bgColor}}>
        <h2>Name:{el.name}</h2>
        <h2>Name:{el.age}</h2>
      </div>
    ))} */}


    {/* <button onClick={() => {
      console.log("clicked")
    }}>Click me</button>

    <button onClick={handleClick}>Variant2</button>
    <input onChange={handleOnChange} type="text" placeholder='enter fullname' />

    <div className='circle' onMouseEnter={handleHover}></div>

    {numbers.map((num, i )=> <h3 key={i}>{num}</h3>)}

    {names.map((el, i) => <h2 key={i}>{el}</h2>)} */}

    {/* {cards.map((el, i) => (
      <Card key={i}  title={el.title} content={el.content} />
    ))} */}
  </div>
  )
}

export default App
