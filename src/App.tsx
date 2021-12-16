import { Contador } from "./components/Contador";
import { Cunter } from "./components/Cunter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { User } from "./components/User";



function App() {
  return (
    <>
        <div className='mt-5'>
          <h1>React + TypeScript</h1>
            <hr/>
            <Cunter />
            <User />

            <h2>useEffect - useRef</h2>
            <hr/>
            <TimerPadre />

            <h2>useReducer</h2>
            <hr/>
            <Contador />
            <Formulario />

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </>
  );
}

export default App;
