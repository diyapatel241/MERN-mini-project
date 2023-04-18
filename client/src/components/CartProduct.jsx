import React from 'react';

const CartProduct = ({ product }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between mb-4'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:mr-8 mb-8 md:mb-0'>
          <img className='w-full h-full md:w-64 md:h-64' src={product.image} />
        </div>
        <div>
          <div className='mb-6'>
            <span className='font-bold'>Product:</span> {product.title}
          </div>
          <div className='mb-6'>
            <span className='font-bold'>ID:</span> {product._id}
          </div>
          <div className='mb-6'>
            <span className='font-bold'>Size:</span> {product.size}
          </div>
        </div>
      </div>
