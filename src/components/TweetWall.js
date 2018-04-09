import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount = () => {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state !== nextState)
  }

  componentWillReceiveProps = (nextProps) => {
    nextProps.newTweets.map(tweet => {
      this.setState({
        tweets: [tweet, ...this.state.tweets]
      }, () => console.log(this.state.tweets))
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
