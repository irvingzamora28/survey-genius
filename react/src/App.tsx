import "./App.css";
import { AiOutlineUser, AiOutlineUserDelete } from 'react-icons/ai';

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1>
            <AiOutlineUser />
            <AiOutlineUserDelete />
        </div>
    );
}

export default App;
