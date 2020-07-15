import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

export const Home = () => {
    return (
        <div className="App">
            <h1>This is Home Page</h1>
            <LoremIpsum p={1} />
        </div>
    )
}