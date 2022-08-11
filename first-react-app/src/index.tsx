import ReactDOM from 'react-dom/client';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import { App} from "./components/App"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function interval(){
  root.render(
    <div>
      <App>
      </App>
      <h1>Test</h1>
    </div>
  )
}

setInterval(interval, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
