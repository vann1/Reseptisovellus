import React, { useState } from 'react';
import './style.css';

const desserts = [
  { name: 'Chocolate Cake', mainIngredient: 'Chocolate', tag: 'cake' },
  { name: 'Apple Pie', mainIngredient: 'Apples', tag: 'pie' },
  { name: 'Cheesecake', mainIngredient: 'Cream cheese', tag: 'cake' },
  { name: 'Ice Cream', mainIngredient: 'Milk', tag: 'ice cream' },
  { name: 'Brownies', mainIngredient: 'Chocolate', tag: 'brownies' },
];

function SearchResults({ searchQuery }) {
  const filteredDesserts = desserts.filter(dessert =>
    dessert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dessert.mainIngredient.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dessert.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {filteredDesserts.map((dessert, index) => (
          <li key={index}>
            <strong>{dessert.name}</strong> - Main Ingredient: {dessert.mainIngredient}, Tag: {dessert.tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SearchComponent({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  return (
    <div>
      <h1>Search Website</h1>
      <input
        type="text"
        placeholder="Enter search query"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button className="button" onClick={handleSearchClick}>Search</button>
    </div>
  );
}

function DessertList() {
  return (
    <div>
      <h2>Desserts</h2>
      <ul>
        {desserts.map((dessert, index) => (
          <li key={index}>
            <strong>{dessert.name}</strong> - Main Ingredient: {dessert.mainIngredient}, Tag: {dessert.tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DessertSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      {searchQuery && <SearchResults searchQuery={searchQuery} />}
      <DessertList />
    </div>
  );
}

export default DessertSearchPage;



