import React, { Component } from 'react'

import BoilOrNot from './Calculator/BoilOrNot'
import InputTemperatura from './Calculator/InputTemperatura'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.convert = this.convert.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(event) {
        this.setState({ temperatura: event.target.value, scale: 'c' })
    }
    handleFahrenheitChange(event) {
        this.setState({ temperatura: event.target.value, scale: 'f' })
    }

    celsiusToFahrenheit(celsius) {
        return celsius * 9 / 5 + 32
    }

    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9
    }

    converter(temp, to) {
        let input = parseFloat(temp);
        if (Number.isNaN(input)) {
            return ""
        }
        let retorno = to(input)
        return Number.round(retorno * 1000) / 1000
    }

    render() {
        return (
            <div className="Calculator">
                <h1>Transformação de Temperatura</h1>
                <InputTemperatura scale="c" temperature={0} onTemperatureChange={this.handleCelsiusChange} />
                <hr />
                <InputTemperatura scale="f" temperature={32} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilOrNot />
            </div>
        )
    }
}