// import React from 'react'
import Card from './components/Card.jsx';

const App = () => {
  const users = [
  {
    "name": "Amit Sharma",
    "city": "Delhi",
    "age": 28,
    "profession": "Software Engineer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    "name": "Priya Mehta",
    "city": "Mumbai",
    "age": 25,
    "profession": "Graphic Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "name": "Rahul Verma",
    "city": "Bangalore",
    "age": 32,
    "profession": "Data Analyst",
    "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    "name": "Sneha Reddy",
    "city": "Hyderabad",
    "age": 30,
    "profession": "Marketing Manager",
    "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "name": "Karan Singh",
    "city": "Chandigarh",
    "age": 27,
    "profession": "Architect",
    "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
  }
]


  return(
  <>
  <div className="p-10">
     {users.map(function(elem , idx){
      return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} prof={elem.profession} photo={elem.profilePhoto}/>
     })}
  </div>
  </>
)}

export default App;
