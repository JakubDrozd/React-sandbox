//render
import React, { Component, useRef,  } from "react";



export function Overview(props: any){

    function onSubmit(){
        const task = document.querySelector("#task")
        taskArray.push(task)
        console.log(taskArray)
    }

    let taskArray: any[] = ["One", "Two"]

    const element = taskArray.map((task: any) => <li key={taskArray.indexOf(task)}>{task}</li>)

        return(
            <div>
                <input type="text" />
                <input type="button" value="Submit" onClick={onSubmit } />
                {element}
            </div>
        )
    }
