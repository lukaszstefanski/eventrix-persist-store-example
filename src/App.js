import { EventrixProvider, PersistStoreGate } from 'eventrix';
import eventrix from './eventrix/index';
import Logo from './components/Logo';
import Loader from './components/Loader';
import Chairs from './components/Chairs';
import Desks from './components/Desks';
import Wardrobes from './components/Wardrobes';
import './App.css';

const App = () => (
    <EventrixProvider eventrix={eventrix}>
        <PersistStoreGate eventrix={eventrix} loader={Loader}>
            <div className='app'>
                <Logo />
                <div className='items'>
                    <Chairs />
                    <Desks />
                    <Wardrobes />
                </div>
            </div>
        </PersistStoreGate>
    </EventrixProvider>
)

export default App;
