import React, { Component } from 'react'

export default class ColorBox extends Component {

    clickHandler(){
        this.props.onChangeColor(this.props.color)
    }

    render() {
        return (
            <div className='color-box' style={{backgroundColor: this.props.color}}  onClick={this.clickHandler.bind(this)}>
                
            </div>
  
        )
    }
}
