//render
export const Overview = (props: any) =>{
    const {tasks} = props

    return (
        <ol>
            {tasks.map((task: any) => {
        return <li key={task.id}>{task.text}</li>;
      })}
        </ol>
    )
}