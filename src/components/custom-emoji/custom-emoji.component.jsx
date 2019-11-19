import React from 'react'

const CustomEmoji = ({ label, emoji }) => (
    <span role='img' aria-label={label}>{emoji}</span>
)

export default CustomEmoji