import React from 'react'

const CustomIcon = ({ targetUrl, imageSource, altDescription, ...otherProps }) => (
    <a href={targetUrl} target='_blank' rel='noopener noreferrer'><img {...otherProps} src={imageSource} alt={altDescription} /></a>
)

export default CustomIcon