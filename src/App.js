import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'

class App extends React.Component {

    render() {
        const name = 'John Doe'
        return (
            <Fragment>
                <div className="h-24 flex justify-end bg-blue-300">
                    <Navbar/>

                </div>
            </Fragment>
        )
    }

}

export default App;
