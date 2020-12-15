import React from 'react'

export default function SearchBar({ query, setQuery }) {

    const handleKeyPress = (e) => {
        // This prevents the regex from crashing the app
        if(e.key === '\\' || 
            e.key === '*' ||
            e.key === '+' ||
            e.key === '$' ||
            e.key === '^' ||
            e.key === '(' ||
            e.key === ')' ||
            e.key === '[' ||
            e.key === ']' ||
            e.key === '|' ||
            e.key === '.' ||
            e.key === '?'
        ) {
            e.preventDefault()
        }
    }

    return (
        <div className='hidden sm:flex justify-start items-center'>
            <input
            className='flex border rounded-lg px-2 py-1 my-auto text-lg'
            // maxLength={48}
            value={query}
            placeholder={`Search Lina's Gallery`}
            onKeyPress={handleKeyPress}
            onChange={e => setQuery(e.target.value)}
            />
        </div>
    )
}