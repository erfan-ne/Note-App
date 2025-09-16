import React, { Component } from 'react'

export default class Note extends Component {

    clickHandler(){
        this.props.onRemove(this.props)
    }

    render() {

        const {title, id, color} = this.props

        return (
            <div className="card shadow-sm rounded" id={id} style={{ backgroundColor: color }} onClick={this.clickHandler.bind(this)}>
                <p className="card-text p-3">
                    {title}
                </p>
            </div>
        )
    }
}
