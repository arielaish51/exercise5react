import { useState, useSyncExternalStore } from "react";
import "./PlayerFunction.css";
interface PlayerFunctionProps {
  name: string;
  goals: number;
}

function PlayerFunction(props: PlayerFunctionProps): JSX.Element {

    const addGoal =()=>{
        setGoals(goals+1);
    }
    
    const minusGoal =()=>{
        setGoals(goals-1);
    }
     const[goals,setGoals] =useState(props.goals);
  return (                                                  
    <div className="PlayerFunction single-col ">
        <h1>fc</h1>
      <p className="single-row">{props.name}</p>
      <div className="single-row">
        <button onClick={minusGoal}>-</button>
        <p className= {goals>0?"green":goals<0?"red":"orange"}>{goals}</p>
        <button onClick={addGoal}>+</button>
      </div>
    </div>
  );
}

export default PlayerFunction;
