// src/App.jsx
import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

    const totalStrength = team.reduce((totalStrength, fighter) => totalStrength + fighter.strength, 0);
    const totalAgility = team.reduce((totalAgility, fighter) => totalAgility + fighter.agility, 0);

  const handleAddFighter = (zombie) => {
    if (zombie.price <= money) {
      setMoney((money) => money - zombie.price); 
      setTeam((team) => [...team, zombie]);
      setZombieFighters((zombieFighters) =>
        zombieFighters.filter((fighter) => fighter.id !== zombie.id))
    } else {
      console.log("Not enough money");
    }
  }

  const handleRemoveFighter = (zombie) => {
    setMoney((money) => money + zombie.price); 
    setZombieFighters((ZombieFighters) => [...ZombieFighters, zombie]);
    setTeam((team) =>
      team.filter((fighter) => fighter.id !== zombie.id))
  }

  return (
    <>
      <div>
        <h1>Zombie Fighters</h1>
        <h2>Money: {money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>  
        <h2>{(team.length) ?"Team:" : "Pick some team members!"}</h2>
        
        <ul>
        {[...team].sort((a, b) => a.id - b.id)
        .map((fighter) => (
          <li key={fighter.id}>  
          <img src={fighter.img} alt={fighter.name}></img>
          <h2>{fighter.name}</h2>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button className={`remove-fighter-${fighter.id}`} onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        </li>
        ))}
        </ul>
      </div>

      <h2>Fighters:</h2>
      <ul>
      {[...zombieFighters].sort((a, b) => a.id - b.id)
      .map((fighter) => (
        <li key={fighter.id}>  
          <img src={fighter.img} alt={fighter.name}></img>
          <h2>{fighter.name}</h2>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button className={`add-fighter-${fighter.id}`} onClick={() => handleAddFighter(fighter)}>Add</button>
        </li>
      ))}
      </ul>
    </>
  );
}

export default App
