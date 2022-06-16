import React from 'react';
import { useEventrixState, useEmit } from 'eventrix';
import Button from '../Button';
import Quantity from '../Quantity';
import { ADD_WARDROBE} from '../../eventrix/wardrobes';

const Wardrobes = () => {
    const wardrobes = useEventrixState('wardrobes');
    const emit = useEmit();
    const addWardrobe = () => {
        emit(ADD_WARDROBE)
    }

    return (
        <div>
            <Button onClick={addWardrobe} text='Add wardrobe'/>
            <Quantity quantity={wardrobes}/>
        </div>
    )
}

export default Wardrobes;
