import React from 'react'

const CustomLink = ({ targetUrl, children }) => (
    <strong><a href={targetUrl} target='_blank' rel='noopener noreferrer'>{children}</a></strong>
)

export default CustomLink