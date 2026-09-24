import React from 'react';

const Tickets = ({pross,resolverHandel}) => {
    return (
        <div className='p-3 rounded-2xl bg-white mt-2 shadow-sm'>
            <h1 className='text-xl font-semibold'>{pross.title}</h1>
            <button onClick={()=> resolverHandel(pross)}  className='w-full bg-green-400 text-white p-2 rounded-2xl mt-3'>Complete</button>
        </div>
    );
};

export default Tickets;