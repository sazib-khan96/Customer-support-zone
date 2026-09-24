import React, { use } from 'react';
import Customer from '../Customer/Customer';

const CustomerTickets = ({CustomerData}) => {
    const data = use(CustomerData)
    
    return (
        <div className=''>
            <h1>Customer Tickets</h1>
            <div className='grid grid-cols-2 gap-3'>
                {
                    data.map(customer => <Customer customer={customer} key={customer.id}></Customer> )

                }
            </div>
        </div>
    );
};

export default CustomerTickets;