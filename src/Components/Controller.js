import React, { Component } from 'react';
import Clock from './Clock';
import Feed from './Feed';

/**
|--------------------------------------------------------------
| Main Controller/Parent Component - Data will flow from here
|--------------------------------------------------------------
*/

const centerStyle = {
    textAlign: 'center'
}

class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
            date: new Date(),
        }
        //this.getData.bind(this)
    }

    getData = () => {
        fetch("http://localhost:3001/get/rss")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    posts: result
                })
                // Logging the API response
                console.log(result)
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
        this.getData()
        setInterval(this.getData, 60000)
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }


    render() {
        return (
            <React.Fragment>
                    <h2 style={centerStyle}>News Aggregator</h2>
                    <Clock date={this.state.date} />
                    <Feed posts={this.state.posts} error={this.state.error} isLoaded={this.state.isLoaded}/>
            </React.Fragment>
        );
    }
}

export default Controller