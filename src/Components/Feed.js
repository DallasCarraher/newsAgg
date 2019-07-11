import React, { Component } from 'react'

const liStyle = {
    marginTop: '2em',
    marginLeft: '1em',
    textAlign: 'left',
    listStyle: 'none',
}


export default class Feed extends Component {
    render() {
        const {error, isLoaded, posts, feedSelector} = this.props;
        if (error) {
            return <div style={liStyle}>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <p style={liStyle}>Loading Feed...</p>
        } else {
            if (feedSelector === 1) {
                return (
                    <>
                        <ul style={liStyle}>
                            {posts[0].items.map((item, index) => (
                                <li style={liStyle} key={index}>
                                    <b>{item.creator}</b> - {item.title} <br /> 
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a> <br />
                                    {/* Comments - <a href={item.comments} target="_blank" rel="noopener noreferrer">{item.comments}</a> <br /> */}
                                    {/* <i>{item.pubDate}</i> */}
                                </li>
                            ))}
                        </ul>
                    </>
                )
            }
            else if (feedSelector === 2) {
                return (
                    <>
                    <ul style={liStyle}>
                        {posts[1].items.map((item, index) => (
                            <li style={liStyle} key={index}>
                                <b>{item.creator}</b> - {item.title} <br /> 
                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a> <br />
                                {/* Comments - <a href={item.comments} target="_blank" rel="noopener noreferrer">{item.comments}</a> <br /> */}
                                {/* <i>{item.pubDate}</i> */}
                            </li>
                        ))}
                    </ul>
                </>
                )
            }
            else {
                return (
                    <>
                        <ul style={liStyle}>
                            {posts[0].items.map((item, index) => (
                                <li style={liStyle} key={index}>
                                    <b>{item.creator}</b> - {item.title} <br /> 
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a> <br />
                                    {/* Comments - <a href={item.comments} target="_blank" rel="noopener noreferrer">{item.comments}</a> <br /> */}
                                    {/* <i>{item.pubDate}</i> */}
                                </li>
                            ))}
                            <br />
                            {posts[1].items.map((item, index) => (
                                <li style={liStyle} key={index}>
                                    <b>{item.creator}</b> - {item.title} <br /> 
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a> <br />
                                    {/* Comments - <a href={item.comments} target="_blank" rel="noopener noreferrer">{item.comments}</a> <br /> */}
                                    {/* <i>{item.pubDate}</i> */}
                                </li>
                            ))}
                        </ul>
                    </>
                )
            }
        }
    }
}
