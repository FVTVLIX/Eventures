import React from 'react'
import './ShowCategories.css'
import { Link } from 'react-router-dom'

export default function ShowCategories(props) {

  const { categories } = props;

  return (
    <div className="category_container">
      <h3 className="categories_banner">Categories</h3>
      {categories.map(category => (
        <Link
          to={`/categories/${category.id}`}
          className="category_list"
          key={category.id}>{category.name}</Link>
      ))}
    </div>
  )
}
