import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddGroup from './AddGroup';
import GroupList from './GroupList';
import './App.css';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


function App() {
  const LOCAL_STORAGE_KEY = "groups";
  const [groups, setGroups] = useState([]);

  const addGroupHandler = (group) => {
    console.log(group);
    setGroups([...groups, {name: uuidv4, ...group}]);
  }

  useEffect(() => {
    const retrieveGroups = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveGroups) setGroups(retrieveGroups);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(groups));
  }, [groups]);
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



const removeGroup = (name) => {
  const newGroupList = groups.filter((group) => {
    return group.name !== name;
  });

  setGroups(newGroupList);
};

  return (
  <div className = "ui container">
    <Router>

    <Header>
      </Header>
      <Route path="/add" component={AddGroup} />
      <Route path="/" component={GroupList} />

     
      <body>
      {/* <AddGroup addGroupHandler={addGroupHandler}/> */}
      {/* <GroupList groups = {groups} getGroupName={removeGroup}/> */}
      </body>

    </Router>

    

  </div>
  );
}

export default App;
