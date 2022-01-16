import React from 'react';
import './App.css';
import Header from './Header';
import AddGroup from './AddGroup';
import GroupList from './GroupList';

function App() {
  return (
  <div>
    <Header>
      <AddGroup />
      <GroupList />
    </Header>
  </div>
  );
}

export default App;
