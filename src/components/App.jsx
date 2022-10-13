import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import { Box } from './Box';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonsHandler = option => () =>
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? Number(((this.state.good / this.countTotalFeedback()) * 100).toFixed(2))
      : 0;

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Box display="flex" as="article" p={20}>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.buttonsHandler}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            options={options}
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Box>
    );
  }
}

export default App;
