import React, { Component } from "react";
import './App.css';


class App extends Component {

    state = {
        array: [],
        arraySteps: [],
        colorKey: [],
        colorSteps: [],
        currentStep: [],
        count: 20,
        delay: 300,
        algorithm: '',
        timeouts: [],
    };

    ALGORITHMS = {}

    generateSteps = () => {
        let array = this.state.array.slice();
        let steps = this.state.arraySteps.slice();
        let colorSteps = this.state.colorSteps.slice();

        this.ALGORITHMS[this.state.algorithm](array, 0, steps, colorSteps);

        this.setState({
            arraySteps: steps,
            colorSteps
        })


    }




    render() {
        return (
            <div className="App">
                <h1>Hi ALL!</h1>
            </div>
        )
    };
}

export default App;




























