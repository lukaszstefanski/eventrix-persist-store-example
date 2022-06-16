import { EventrixProvider } from 'eventrix';
import eventrix from './eventrix/index';
import Logo from './components/Logo';
import Chairs from './components/Chairs';
import Desks from './components/Desks';
import Wardrobes from './components/Wardrobes';
import './App.css';

const App = () => {
    return (
        <EventrixProvider eventrix={eventrix}>
            <div className='app'>
                <Logo />
                <div className='items'>
                    <Chairs />
                    <Desks />
                    <Wardrobes />
                </div>
            </div>
        </EventrixProvider>
    );
}

export default App;
