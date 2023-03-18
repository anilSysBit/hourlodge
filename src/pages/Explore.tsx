import React from 'react'
import FilterForm from '../globalComponents/home/FilterForm'
import '../styles/main.css'

const Explore = () => {
  return (
    <div className="explore_main_container">
      <div className="explore_navigation_container">
      <FilterForm />
      </div>
      <h1>Explore</h1>
    </div>
  )
}

export default Explore