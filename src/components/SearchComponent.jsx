"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef(null)

  // Sample data - replace this with your actual data source
  const sampleData = [
    { id: 1, title: "Mountain Climbing Guide", type: "Service", path: "/services/climbing" },
    { id: 2, title: "Hiking Equipment Rental", type: "Service", path: "/services/equipment" },
    { id: 3, title: "About Our Team", type: "Page", path: "/about" },
    { id: 4, title: "Contact Information", type: "Page", path: "/contact" },
    { id: 5, title: "Safety Guidelines", type: "Guide", path: "/guides/safety" },
    { id: 6, title: "Beginner's Hiking Tips", type: "Guide", path: "/guides/beginner" },
    { id: 7, title: "Advanced Mountaineering", type: "Service", path: "/services/advanced" },
    { id: 8, title: "Group Bookings", type: "Service", path: "/services/group" },
  ]

  // Live search function
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    setIsLoading(true)

    // Simulate API delay - remove this in production
    setTimeout(() => {
      const filtered = sampleData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase()),
      )
      setSearchResults(filtered)
      setIsLoading(false)
    }, 200)
  }

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(searchQuery)
    }, 300) // 300ms delay

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setTimeout(() => {
        const input = document.getElementById("search-input")
        if (input) input.focus()
      }, 100)
    } else {
      setSearchQuery("")
      setSearchResults([])
    }
  }

  const handleResultClick = () => {
    setIsSearchOpen(false)
    setSearchQuery("")
    setSearchResults([])
  }

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Toggle Button */}
      <button
        onClick={toggleSearch}
        className="p-2 rounded-lg text-[var(--primary-color)] transition-all duration-300 cursor-pointer"
        aria-label="Toggle search"
      >
        {isSearchOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        )}
      </button>

      {/* Live Search Dropdown - Desktop */}
      {isSearchOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-[var(--bg-color)] border border-[var(--primary-color)] rounded-lg shadow-lg z-50 max-h-96 overflow-hidden">
          {/* Search Input */}
          <div className="p-3 border-b border-[var(--primary-color)]">
            <div className="relative">
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, services, guides..."
                className="w-full px-3 py-2 bg-transparent border border-[var(--primary-color)] rounded text-[var(--text-color)] placeholder-[var(--text-color)] opacity-70 focus:outline-none focus:border-[var(--primary-color)] focus:opacity-100"
              />
              {isLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin h-4 w-4 border-2 border-[var(--primary-color)] border-t-transparent rounded-full"></div>
                </div>
              )}
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-64 overflow-y-auto">
            {searchQuery && !isLoading && searchResults.length === 0 && (
              <div className="p-4 text-center text-[var(--text-color)] opacity-70">
                No results found for "{searchQuery}"
              </div>
            )}

            {searchResults.map((result) => (
              <Link
                key={result.id}
                to={result.path}
                onClick={handleResultClick}
                className="block p-3 hover:bg-[var(--primary-color)] hover:bg-opacity-10 border-b border-[var(--primary-color)] border-opacity-20 last:border-b-0 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[var(--text-color)] font-medium">{result.title}</div>
                    <div className="text-[var(--text-color)] opacity-60 text-sm">{result.type}</div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-[var(--primary-color)]"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          {!searchQuery && (
            <div className="p-3 border-t border-[var(--primary-color)] border-opacity-20">
              <div className="text-[var(--text-color)] opacity-60 text-sm mb-2">Quick Actions</div>
              <div className="space-y-1">
                <Link
                  to="/services"
                  onClick={handleResultClick}
                  className="block p-2 rounded hover:bg-[var(--primary-color)] hover:bg-opacity-10 text-sm text-[var(--text-color)] transition-colors"
                >
                  View All Services
                </Link>
                <Link
                  to="/contact"
                  onClick={handleResultClick}
                  className="block p-2 rounded hover:bg-[var(--primary-color)] hover:bg-opacity-10 text-sm text-[var(--text-color)] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchComponent
