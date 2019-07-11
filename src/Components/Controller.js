import React, { Component } from 'react';
import Clock from './Clock';
import Feed from './Feed';
import app from './auth.components/base'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


/**
|--------------------------------------------------------------
| Main Controller/Parent Component - Data will flow from here
|--------------------------------------------------------------
*/

const centerStyle = {
    textAlign: 'left',
    marginLeft: '70px',
    marginTop: '20px',
    marginBottom: '10px',
}

const buttonStyle = {
    display: 'flex',
    marginLeft: '4.5em',
    marginRight: '1em',
    marginBottom: '1em',
    justifyContent: 'left',
}

class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            dropdownOpen: false,
            error: null,
            isLoaded: false,
            posts: [],
            feedSelector: 0,
            date: new Date(),
        }
    }

    getData = () => {
        fetch("http://localhost:3001/get/rss")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    posts: result,
                    error: null,
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

        //auto-refresh feed every minute
        //setInterval(this.getData, 60000)
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    handleSignOut = () => {
        app.auth().signOut()
    }

    handleFeedFilter = (num) => {
        this.setState({
            feedSelector: num
        })
    }

    render() {
        return (
            <>
                <h1 style={centerStyle}>
                    Aggregator
                </h1>
                <Clock date={this.state.date} />
                <div style={buttonStyle}>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size='sm' style={{marginRight:'1em'}}>
                        <DropdownToggle color='primary' outline caret>
                            Filter
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>News Sources</DropdownItem>
                            <DropdownItem divider></DropdownItem>
                            <DropdownItem onClick={() => this.handleFeedFilter(0)}><b>Pool Sources</b></DropdownItem>
                            <DropdownItem divider></DropdownItem>
                            <DropdownItem onClick={() => this.handleFeedFilter(1)}><i>yCom-HackerNews</i></DropdownItem>
                            <DropdownItem onClick={() => this.handleFeedFilter(2)}><i>HackerNoon</i></DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <Button onClick={this.getData} color="primary" outline size="sm" style={{marginRight:'1em'}}>Feed Refresh</Button>
                    <Button onClick={this.handleSignOut} outline size="sm">Sign Out</Button>
                </div>
                <Feed feedSelector={this.state.feedSelector} posts={this.state.posts} error={this.state.error} isLoaded={this.state.isLoaded}/>
            </>
        );
    }
}

export default Controller