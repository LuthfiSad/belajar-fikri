import { useState } from 'react'
import Carousel from './Carousel'

function App() {
  const [hello, setHello] = useState('Hello World')

  return (
    <div className='flex justify-center flex-col items-center'>
      <h1 className='text-3xl'>Niko ❤️ Nisa</h1>
      <Carousel/>
    </div>
  )
}

export default App
