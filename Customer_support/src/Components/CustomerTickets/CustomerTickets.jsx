import React, { use } from 'react';
import Customer from '../Customer/Customer';

const CustomerTickets = ({CustomerData,cardHandel}) => {
    const data = use(CustomerData)
    
    return (
        <div className=''>
            <h1 className='text-xl font-semibold'>Customer Tickets</h1>
            <div className='grid grid-cols-2 gap-3 w-3xl'>
                {
                    data.map(customer => <Customer customer={customer} key={customer.id} cardHandel={cardHandel}></Customer> )

                }
            </div>
        </div>
    );
};

export default CustomerTickets;