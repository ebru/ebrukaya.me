import React from 'react'

const CustomLink = ({ targetUrl, children, newTab = true }) => (
    <strong><a href={targetUrl} target={newTab ? '_blank' : undefined} rel='noopener noreferrer'>{children}</a></strong>
)

export default CustomLink