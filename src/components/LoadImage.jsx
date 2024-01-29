import React from 'react'

const LoadImage = ({ srcPath }) => {
    return (
        <img src={srcPath} className='bg-cover aspect-video' loading='Loading...' />
    )
}

export default LoadImage
