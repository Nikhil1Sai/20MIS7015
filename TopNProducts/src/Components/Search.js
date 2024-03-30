import React, { useState } from "react";
import './Search.css'; // Import CSS file for styling

const Search = ({ onSearch }) => {
    const [selectedCompany, setSelectedCompany] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [numProducts, setNumProducts] = useState("");

    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
    const categories = [
        "Phone", "Computer", "TV", "Earphone", "Tablet", "Charger",
        "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote",
        "Speaker", "Headset", "Laptop", "PC"
    ];

    const handleSearch = () => {
        
        onSearch({
            company: selectedCompany,
            category: selectedCategory,
            minPrice: minPrice,
            maxPrice: maxPrice,
            numProducts: numProducts
        });
    };

    return (
        <div className="search-container">
            <select value={selectedCompany} onChange={e => setSelectedCompany(e.target.value)}>
                <option value="">Select Company</option>
                {companies.map((company, index) => (
                    <option key={index} value={company}>{company}</option>
                ))}
            </select>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <input type="number" placeholder="Min Price" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
            <input type="number" placeholder="Max Price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            <input type="number" placeholder="Number of Products" value={numProducts} onChange={e => setNumProducts(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;
