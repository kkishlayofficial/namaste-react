import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title, menuList, showMenu, setShowIndex } = props;
  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div data-testid="resCategory">
      <div data-testid="resCategoryTitle" className='w-9/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-medium'>
          {title} ({menuList.length})
        </span>
        <span>▽</span>
      </div>
      {showMenu && <ItemList items={menuList} />}
    </div>
  );
};

export default RestaurantCategory;
