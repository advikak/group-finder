import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import AddGroup from './AddGroup';
import GroupList from './GroupList';

function App() {
  const [groups, setGroups] = useState([]);

  const addGroupHandler = (group) => {
    console.log(group);
    setGroups([...groups, group]);
  }
//  const groups = [
//    {
//      name: "Bob's Bobba Club",
//      type: "Club",
//      link: "www.bobba.com"
//    }, 
//    {
//      name: "Food Class",
//      type: "Class",
//      link: "www.discord.com",
//    }, 

//  ];


  return (
  <div className = "ui container">
    <Header>
      </Header>
     

      <body>
      <AddGroup addGroupHandler={addGroupHandler}/>
      <GroupList groups = {groups} />
      </body>

  </div>
  );
}

export default App;
