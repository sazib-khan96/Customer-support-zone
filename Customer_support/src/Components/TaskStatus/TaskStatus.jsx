import React from 'react';
import Tickets from '../Tickets/Tickets';
const TaskStatus = ({cardHandel,proGress,setProgress,resolverHandel}) => {
    return (
        <div className='w-full border p-3'>
            <h1 className='text-xl font-semibold'>Task Status</h1>
            <div className='bg-amber-50 '>
              {
                proGress.map(pross => <Tickets pross={pross} resolverHandel={resolverHandel}></Tickets>)
              }
            </div>
        </div>
    );
};

export default TaskStatus;