import React from 'react';
import Accordion from './components/Accordion'

const items = [
    {
        title: 'Waht is React?',
        Content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        Content: 'React is a favorite Js library among many'
    },
    {
        title: 'How do you use React?',
        Content: 'You use React by crateing components'
    },
]
function App() {
    return (
        <div className="ui container">
        <Accordion items = {items}/>
        </div>
    )
}

export default App