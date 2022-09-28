import './index.css'

const FiltersGroup = props => {
  const {
    categories,
    ratings,
    filterByRatings,
    filterByCategory,
    searchProducts,
    removeFilters,
  } = props

  const updateSearch = e => {
    if (e.code === 'Enter') {
      searchProducts(e.target.value)
    }
  }

  const sortByCat = e => {
    filterByCategory(e.target.id)
  }

  const sortByRating = e => {
    filterByRatings(e.target.id)
  }

  const clearFilters = () => {
    removeFilters()
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input type="search" placeholder="Search" onKeyDown={updateSearch} />
      <h1>Category</h1>
      <ul>
        {categories.map(cat => (
          <li key={cat.categoryId}>
            <button type="button" onClick={sortByCat}>
              <p id={cat.categoryId}>{cat.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul>
        {ratings.map(rating => (
          <li key={rating.ratingId}>
            <button type="button" onClick={sortByRating}>
              <img
                src={rating.imageUrl}
                alt={`rating ${rating.ratingId}`}
                id={rating.ratingId}
              />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
