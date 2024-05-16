import React from 'react'

const UIComponent = () => {
    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className='mx-72'>Welcome BAJAJ MOTERS LTD </div>
            <div className='mx-64 grid grid-cols-5 gap-4 bg-blue-800 text-white py-2'>
                <p>TODAY'S P0(3)</p>
                <p>TODAY'S DESPATCH</p>
                <p>TODAY'S ASN</p>
                <p>TODAY'S BILL</p>
                <p>TODAY'S PAYMENT</p>
            </div>
            <br />
            <div className='mx-64 w-full grid grid-cols-5  bg-green-500 text-white py-2'>
                <p>PENDING PO FOR APP(3)</p>
                <p>PENDING PO FOR DESPATCH</p>
                <p>PENDING ASN</p>
                <p>PAYING BILL</p>
                <p>PENDING PAYMENT</p>
            </div>
        </div>
    )
}

export default UIComponent