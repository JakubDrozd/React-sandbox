import '../../src/style/App.css';
import { Welcome } from './Welcome';

 
export function App(props: any) {
  return (
    <div className="App">
      <Welcome firstName="Jakub" lastName="Drozd"></Welcome>
    </div>
  );
}



