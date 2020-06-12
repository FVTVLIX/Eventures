import React from 'react'

export default function ShowCategories(props) {

  const { categories } = props;
  return (
    <div>
      <h3>Categories</h3>
      {categories.map(category => (
        <p key={category.id}>{category.name}</p>
      ))}
    </div>
  )
}
