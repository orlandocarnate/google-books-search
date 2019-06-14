import React, { Component } from 'react'

export class SaveBtn extends Component {
    state = {
        active: true
    }

    setDisable = () => {
        this.setState({
            active: false
        })
    }
    render() {
        return (
            <span>
                {this.state.active ? (
                    <a className="btn btn-primary text-light" onClick={() => this.setDisable()}>Save</a>
                    ) : (
                        <a className="btn btn-primary text-light disabled">Saved</a>
                    )}
            </span>
        )
    }
}

export default SaveBtn
