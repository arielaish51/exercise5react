import { Component } from "react";
import "./PlayerClass.css";
interface PlayerClassProps{
    name:string;
    goals:number;
}
interface  PlayerClassState{
    goals:number;
}
class PlayerClass extends Component<PlayerClassProps,PlayerClassState> {
public constructor(props:PlayerClassProps){
    super(props);
    // init state
    this.state={
        goals:this.props.goals
    }
}
public addGoal =()=>{
  
    this.setState({goals:this.state.goals +1})
}
public minusGoal =()=>{

    this.setState({goals:this.state.goals -1})
}
    public render(): JSX.Element {
        return (
            <div className="PlayerClass single-col">
                <h1>cc</h1>
                <p className="single-row">{this.props.name}</p>
                <div className="single-row">
                <button onClick={this.minusGoal}>-</button>
                <p>{this.state.goals}</p>
                <button onClick={this.addGoal}>+</button>		
                </div>
              
            </div>
        );
    }
}

export default PlayerClass;
