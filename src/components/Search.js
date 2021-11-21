import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')
  
  const [results, setResults] = useState([])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      })
      setResults(data.query.search)
    }
    if (term && !results.length) {
      search()
    } else {
      // to decrese the number of requests to the server and make the requests only after the user has stopped typing
      const timeOutId = setTimeout(() => {
        // if the term has value start the function search
        if (term) {
          search()
        }
      }, 500)

      // to clear the timeOutId when the component is unmounted
      return () => {
        clearTimeout(timeOutId)
      }
    }
  }, [term, results.length])

  const renderdResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          {/* eslint-disable-line */}

          {/* to avoid spans which come from wikipedia */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </div>
      </div>
      <div className='ui celled list'>{renderdResults}</div>
    </div>
  )
}

export default Search
