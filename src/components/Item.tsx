import React from 'react';
import Ratings from './Ratings';
import { ItemProps } from '../interfaces/items';

const Item = ({ item }: ItemProps) => {
  return (
    <div
      className="border-b border-b-gray-300 mb-4 py-4"
      onClick={() => window.open(item.volumeInfo.previewLink, '_blank')}
      style={{ cursor: 'pointer' }}
    >
      <div className="flex">
        <img
          src={item.volumeInfo.imageLinks?.thumbnail}
          alt={item.volumeInfo.title}
          className="h-20"
        />
        <div>
          <p>{item.volumeInfo.authors}</p>
          <p className=" text-gray-500 text-sm">{item.volumeInfo.categories}</p>
        </div>
      </div>
      <div>
        <p className=" font-bold text-2xl">{item.volumeInfo.title}</p>
        {item.volumeInfo.averageRating && (
          <Ratings averageRating={item.volumeInfo.averageRating} />
        )}
        <div className=" text-gray-500 text-sm">
          <p>
            # {item.volumeInfo.pageCount || 'No page'} <b>.</b>{' '}
            {item.volumeInfo.publishedDate || 'No published date'} <b>.</b>{' '}
            {item.volumeInfo.publisher || 'No publisher'}
          </p>
          <p>{item.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
