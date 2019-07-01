import React, { Component } from 'react'

const liStyle = {
    marginTop: '2em',
    textAlign: 'center',
    listStyle: 'none',
}

export default class Feed extends Component {
    render() {
        const {error, isLoaded, posts} = this.props;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <p>Loading Feed...</p>
        } else {
            return (
                <>
                    <ul style={liStyle}>
                        {posts.items.map((item, index) => (
                            <li style={liStyle} key={index}>
                                <b>{item.creator}</b> - {item.title} <br /> 
                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a> <br />
                                {/* Comments - <a href={item.comments} target="_blank" rel="noopener noreferrer">{item.comments}</a> <br /> */}
                                {/* <i>{item.pubDate}</i> */}
                            </li>
                        ))}
                        <br />
                    </ul>
                </>
            )
        }
    }
}
