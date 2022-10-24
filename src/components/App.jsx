import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import { Box } from './Box';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const totalCount = () => good + neutral + bad;
  const positiveFeedbacks = () =>
    good / totalCount() ? Number(((good / totalCount()) * 100).toFixed(2)) : 0;

  const buttonsHandler = option => () => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
        return;
      default:
        return;
    }
  };

  return (
    <Box display="flex" as="article" p={20}>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={buttonsHandler}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics
          options={options}
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalCount()}
          positivePercentage={positiveFeedbacks()}
        ></Statistics>
      </Section>
    </Box>
  );
};

export default App;
