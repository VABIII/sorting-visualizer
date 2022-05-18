import React, { Component } from "react";
import './App.css';
import Bar from "./components/Bar";
import Play from '@material-ui/icons/PlayCircleOutlineRounded';
import Forward from '@material-ui/icons/SkipNextRounded';
import Backward from '@material-ui/icons/SkipPreviousRounded';
import RotateLeft from '@material-ui/icons/RotateLeft';




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

    clearTimeouts = () => {
        this.state.timeouts.forEach(timeout => clearTimeout(timeout));
        this.setState({
            timeouts: [],
        });
    }

    clearColorKey = () => {
        let blankKey = new Array(this.state.count).fill(0);

        this.setState({
            colorKey: blankKey,
            colorSteps: [blankKey],
        })
    }

    generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    generateRandomArray = () => {
        this.clearTimeouts();
        this.clearColorKey();
        const count = this.state.count;
        const temp = [];

        for (let i = 0; i < count; i++) temp.push(this.generateRandomNumber(50, 200));

        this.setState({
            array: temp,
            arraySteps: [temp],
            currentStep: 0,
        },
            ()=> {
            this.generateSteps();
            }
        );
    };

    changeArray = (index, value) => {
        let arr = this.state.array;
        arr[index] = value;
        this.setState({
            array: arr,
            arraySteps: [arr],
            currentSteps: 0,
        },
            () => {
            this.generateSteps();
            }
        );
    };

    previousStep = () => {
        let currentStep = this.state.currentStep;
        if (currentStep === 0) return;
        currentStep -= 1;
        this.setState({
            currentStep: currentStep,
            array: this.state.arraySteps[currentStep],
            colorKey: this.state.colorSteps[currentStep],
        });
    };

    nextStep = () => {
        let currentStep = this.state.currentStep;
        if (currentStep >= this.state.arraySteps.length - 1) return;
        currentStep += 1;
        this.setState({
            currentStep: currentStep,
            array: this.state.arraySteps[currentStep],
            colorKey: this.state.colorSteps[currentStep],
        });
    };

    start = () => {
        let steps = this.state.arraySteps;
        let colorSteps = this.state.colorSteps;

        this.clearTimeouts();

        let timeouts = [];
        let i = 0;

        while (i < steps.length - this.state.currentStep) {
            let timeout = setTimeout(() => {
                let currentStep = this.state.currentStep;
                this.setState({
                    array: steps[currentStep],
                    colorKey: colorSteps[currentStep],
                    currentStep: currentStep + 1,
                });
                timeouts.push(timeout);
            }, this.state.delay * i);
            i++;
        }
        this.setState({
            timeouts
        })
    }

    render() {
        let bars = this.state.array.map((value, index) => (
            <Bar
                key={index}
                index={index}
                length={value}
                color={this.state.colorKey[index]}
                changeArray={this.changeArray}
            />
            ));
        let playButton;

        if(this.state.arraySteps.length === this.state.currentStep) {
            playButton = (
                <button className="controller" onClick={this.generateRandomArray}>
                    <RotateLeft />
                </button>
            )
        }
        else {
            playButton = (
                <button className="controller" onClick={this.start}>
                    <Play />
                </button>
            )
        }

        return (
            <div className="App">
                <div className="frame">
                    <div className="barsDiv container card">{bars}</div>
                </div>
                <div className="control-panel">
                    <div className="control-buttons">
                        <button className="controller" onClick={this.previousStep}>
                            <Backward />
                        </button>
                        {playButton}
                        <button className="controller" onClick={this.nextStep}>
                            <Forward />
                        </button>
                    </div>
                </div>
                <div className="panel"></div>
            </div>
        )
    };
}

export default App;




























