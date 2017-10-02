import React, { Component } from 'react'
import BoilingVeredict from './BoilingVeredict'
import TemperatureInput from './TemperatureInput'

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            temperature: 0,
            scale: 'c'
        }
        this.handleCelsiusInput = this.handleCelsiusInput.bind(this);
        this.handleFahrenheitInput = this.handleFahrenheitInput.bind(this);
    }

    handleCelsiusInput(temperature) {
        this.setState({ temperature, scale: 'c' })
    }

    handleFahrenheitInput(temperature) {
        this.setState({ temperature, scale: 'f' })
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

        return (
            <div>
                <h1>Calculador de temperatura de ebulição da água</h1>
                <TemperatureInput temperature={celsius} scale="c" onTemperatureChange={this.handleCelsiusInput} />
                <TemperatureInput temperature={fahrenheit} scale="f" onTemperatureChange={this.handleFahrenheitInput} />
                <BoilingVeredict celsius={parseFloat(celsius)} />
            </div>
        )
    }

}

const toFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
}

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const tryConvert = (temp, to) => {
    let input = parseFloat(temp)
    if (Number.isNaN(input)) {
        return ""
    }
    let output = to(temp)
    let rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}