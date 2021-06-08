import React from 'react';
import Menu from './Menu';

// Found an unnecessary re-render in App.js when setting selectedCategory.
// Using React.memo to prevent re-rendering unnecessarily.
// Now it only re-renders after categorizedItems in App.js is changed.
// Faster and more efficient.
const Categories = React.memo(({ items }) => {
  return (
    <div className='section-center'>
      {
        items.map((item) => {
          return (
            <Menu key={item.id} {...item} />
          )
        })
      }
    </div>
  )
});

export default Categories;
