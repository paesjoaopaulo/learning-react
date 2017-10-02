import React, { Component } from 'react'

export default class BoilingVeredict extends Component {
    render() {
        let saida = null
        if (this.props.celsius >= 100) {
            saida = "Essa temperatura é suficiente para ferver a água"
        } else {
            saida = "Essa temperatura não é suficiente para ferver a água"
        }
        return (
            <div>
                <h3>{saida}</h3>
            </div>
        )
    }
}
