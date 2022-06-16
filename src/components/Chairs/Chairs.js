import React from 'react';
import { useEventrixState, useEmit } from 'eventrix';
import Button from '../Button';
import Quantity from '../Quantity';
import { ADD_CHAIR } from '../../eventrix/chairs';

const Chairs = () => {
    const chairs = useEventrixState('chairs');
    const emit = useEmit();
    const addChair = () => {
        emit(ADD_CHAIR)
    }

    return (
        <div>
            <Button onClick={addChair} text='Add chair' />
            <Quantity quantity={chairs}/>
        </div>
    )
}

export default Chairs;
