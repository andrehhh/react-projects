import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import items from './data';

function App() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categoryArr, setCategoryArr] = useState(['all']); // Array of all categories

  // Categorized Items from the selected category
  const [categorizedItems, setCategorizedItems] = useState(items) 

  // Function returns an array of all unique categories from the menu including 'all' category.
  // This means that the category is dynamic and does not need to be hardcoded.
  const findUniqueCategories = () => {
    let categoryArr = ['all'];
    items.forEach(item => {
      const categoryExists = categoryArr.find((category) => category === item.category);
      if(!categoryExists) {
        const newCategoryArr = [...categoryArr, item.category];
        categoryArr = newCategoryArr;
      }
    })
    return categoryArr;
  }

  // findUniqueCategories function called in useEffect, will only run when initial page loads.
  useEffect(() => {
    setCategoryArr(findUniqueCategories());

    return () => {
      // cleanup
    }
  }, [])

  // useEffect to categorize the items sent to Categories component.
  // Categorization process depends on the value of selectedCategory.
  // useEffect re-runs if selectedCategory is changed, to re-categorize items.
  useEffect(() => {
    if(selectedCategory !== "all") {
      setCategorizedItems(items.filter((item) => item.category === selectedCategory));
    } else setCategorizedItems(items);
    return () => {
      // cleanup
    }
  }, [selectedCategory])
  
  // Changes the selected category
  const changeCategoryTo = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div>
      {
        categoryArr.map((category) => {
          return (
            <button key={category} onClick={() => changeCategoryTo(category)}>{category}</button>
          )
        })
      }
      <Categories items={categorizedItems} />
    </div>
  )
}

export default App;
