import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const Pagination = ({ numPages, currentPage }) => {
  const paginationArr = Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex' }}>
      {paginationArr.map((page, index) => (
        <div
          key={index}
          style={{
            marginRight: 10,
            fontWeight: page.toString() === currentPage ? 'bold' : 'normal',
          }}>
            {page.toString() !== currentPage ? (
              <BlogLink to={`/journal/${page !== 1 ? page : ''}`}>
                {page}
              </BlogLink>
            ) : <span>{page}</span>}
          <span style={{ marginLeft: 10 }}>/</span>
        </div>
      ))}
    </div>
  )
}

export default Pagination
