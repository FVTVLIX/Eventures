import React from 'react'
import './ShowCategories.css'
import { Link } from 'react-router-dom'
import EventList from './EventList'

export default function ShowCategories(props) {

  const { categories } = props;

  return (
    <div className="category_container">
      <h3 className="categories_banner">Categories</h3>
      <Link
          to={`/categories`}
          className="category_list">All</Link>
      {categories.map(category => (
        <Link
          to={`/categories/${category.id}`}
          className="category_list"
          key={category.id}>{category.name}</Link>
      ))}
      <EventList {...props} />
    </div>
  )
}
