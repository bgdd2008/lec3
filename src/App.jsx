
import './App.css'

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

  return (
  <div
    ><button onClick={() => {
      console.log("clicked")
    }}>Click me</button>

    <button onClick={handleClick}>Variant2</button>
    <input onChange={handleOnChange} type="text" placeholder='enter fullname' />

    <div className='circle' onMouseEnter={handleHover}></div>

    {numbers.map((num, i )=> <h3 key={i}>{num}</h3>)}
  </div>
  )
}

export default App
