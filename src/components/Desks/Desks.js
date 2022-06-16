import React from 'react';
import { useEventrixState, useEmit } from 'eventrix';
import Button from '../Button';
import Quantity from '../Quantity';
import { ADD_DESK } from '../../eventrix/desks';

const Desks = () => {
    const desks = useEventrixState('desks');
    const emit = useEmit();
    const addDesk = () => {
        emit(ADD_DESK)
    }

    return (
        <div>
            <Button onClick={addDesk} text='Add desk' />
            <Quantity quantity={desks}/>
        </div>
    )
}

export default Desks;
