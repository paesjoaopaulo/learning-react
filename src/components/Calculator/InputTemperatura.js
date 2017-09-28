import React, { Component } from 'react'

export default class InputTemperatura extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <label>Temperatura</label>
                    <input type="text" value={this.props.temperatura}/>
                </fieldset>
            </div>
        )
    }
}