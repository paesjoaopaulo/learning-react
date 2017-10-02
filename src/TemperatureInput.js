import React, { Component } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default class TemperatureInput extends Component {
    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler(ev) {
        const temperature = ev.target.value;
        this.props.onTemperatureChange(temperature)
    }
    render() {
        const scale = this.props.scale
        return (
            <div>
                <fieldset>
                    <legend>Enter  temperature in {scaleNames[scale]}</legend>
                    <input value={this.props.temperature} onChange={this.changeHandler} />
                </fieldset>
            </div>
        )
    }
}
