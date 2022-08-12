//render
import React, { Component,  } from "react";

export class InputField extends Component<any, any> {
    render(): React.ReactNode {
        return (
            <input type="text" />
        )
    }}

export class Submit extends Component<any, any> {
        render(): React.ReactNode {
            return (
                <input type="submit" value="Submit" />
            )
        }
    }

export class List extends Component<any, any>{
    constructor(props:any){
        super(props)

        this.state = {
            taskArray : ["One","Two","Three"]
        }
    }
   
    
    render(): React.ReactNode {
        return (
            this.state.taskArray.map((task: any) => <li key={this.state.taskArray.indexOf(task)}>{task}</li>)
        )
    }
}

export class Overview extends Component<any, any> {


    render(): React.ReactNode {
        return(
            <div>
                <InputField></InputField>
                <Submit></Submit>
                <List></List>
            </div>
        )
    }
}