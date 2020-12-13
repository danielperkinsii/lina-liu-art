import React from 'react'

export default function SearchBar() {

    return (
        <div>
            <input
            className=''
            maxLength={48}
            // value={query}
            placeholder={`Search Lina's Gallery`}
            onChange={e => e.target.value}
            />
        </div>
    )
}