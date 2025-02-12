import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Form from '../forms/Forms'

const SearchContainer = () => {
  const [query, setQuery] = useState('')

  const handleInputChange = (value) => {
    setQuery(value)
  }

  const handleSearch = () => {
    // Do your fetch with `search/movie`, passing `query` to the API
    // ...
  }

  return (
    <View>
      <Text>Search Movies / TV / Multi</Text>
      <Form
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />
      {/* Render search results here */}
    </View>
  )
}

export default SearchContainer