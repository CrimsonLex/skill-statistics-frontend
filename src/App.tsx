//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss'
import TenTopicsDtoTable from './components/ui/TenTopicsDtoTable'
import Navbar from './components/layouts/Navbar'

function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className="app">
                <Navbar />
            </div>
            <div className="container">
                <header className="container__header">
                    <h1>Top ten topics</h1>
                </header>
                <main className="container__table">
                    <TenTopicsDtoTable />
                </main>
            </div>
        </>
    )
}

export default App
