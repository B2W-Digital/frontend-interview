import React, { Component } from 'react'

class TweetsList extends Component {
  componentDidMount() {
    this.props.fetchTweets()
  }

  render() {
    return (
      <div>
        <h3>I'am a list of tweets</h3>
        { console.dir(this.props.tweets) }
      </div>
    )
  }
}

export default TweetsList
