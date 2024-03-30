import axios from 'axios';
import React, { useState, useEffect } from "react";
import Search from "./Search";
import Data from "./Data";

const Main = () => {
    const [searchData, setSearchData] = useState(null);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        if (searchData) {
            const { company, category, minPrice, maxPrice, numProducts } = searchData;
            const apiUrl = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${numProducts}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzk5OTExLCJpYXQiOjE3MTE3OTk2MTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFlYjEyMjU1LTg2MDItNGI4Ni05YWFkLTYzZDE0MTU4OTIwMSIsInN1YiI6Im5pa2hpbC4yMG1pczcwMTVAdml0YXAuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJBZmZvcmQgTWVkaWNhbCIsImNsaWVudElEIjoiMWViMTIyNTUtODYwMi00Yjg2LTlhYWQtNjNkMTQxNTg5MjAxIiwiY2xpZW50U2VjcmV0IjoiUFhyQU53bXhNWklDRVp3SCIsIm93bmVyTmFtZSI6IlAgTmlraGlsIFNhaSIsIm93bmVyRW1haWwiOiJuaWtoaWwuMjBtaXM3MDE1QHZpdGFwLmFjLmluIiwicm9sbE5vIjoiMjBNSVM3MDE1In0.mUXpElgIkqpB4B4YhlzYzZBO2QIV4Htb4E6Qcs9KCIQ';

            axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setApiData(response.data);
            })
            .catch(error => {
                document.error("Error fetching data:", error);
            });
        }
    }, [searchData]);
    console.log(apiData);

    const handleSearch = (searchData) => {
        setSearchData(searchData);
    };

    return (
        <div>
            <div className="Search">
                <Search onSearch={handleSearch} />
                <Data apiData={apiData} />
            </div>
        </div>
    );
}

export default Main;
