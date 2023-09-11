import React,{ useState } from 'react'

import './App.css'
import ListofUsers  from './Components/ListofUsers'
import { CreateNewUser } from './Components/CreateNewUsers'
import {Toaster} from 'sonner'
function App() {
  const [count, setCount] = useState(0)

  return (<>

    <ListofUsers />
    <CreateNewUser/>
    <Toaster richColors/>
   </>
   )
}

export default App
