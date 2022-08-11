export function Welcome(props: any){
    if(!props.firstName || !props.lastName){
      return ( <h1>Hello, anonymous</h1> )
    } else {
      const text = `Welcome ${props.firstName} ${props.lastName}, it is ${new Date().toLocaleTimeString("en-GB")}`
      return (<h1>{text}</h1>)
    }
  }