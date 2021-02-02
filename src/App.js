import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use Raact?',
    content: 'React is a favorite JS Library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating component',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A shade blue',
    value: 'blue',
  },
];
export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
