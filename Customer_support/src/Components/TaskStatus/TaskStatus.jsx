import React from 'react';

const TaskStatus = ({cardHandel}) => {
    return (
        <div className='w-full border p-3'>
            <h1 className='text-xl font-semibold'>Task Status</h1>
            <div className='bg-amber-50 '>
              {
                console.log(cardHandel)
              }
            </div>
        </div>
    );
};

export default TaskStatus;