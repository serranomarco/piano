import React from "react";

import Context from './Context';
import Home from './Home';

function App() {
    const context = {

    };

    return (
        <Context.Provider value={context}>
            <Home />    
        </Context.Provider>
    );
}

export default App;