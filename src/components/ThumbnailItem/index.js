import React from 'react'
import './index.css'

const ThumbnailItem = proos => {
  const {imageDetails, clickImage, isActive} = proos
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const activeImageClassName = isActive ? 'activeImageClassName' : ''
  const onClickThumbnailImage = () => {
    clickImage(id)
  }
  return (
    <li className="thumbnail-item">
      <button type="button" className="button" onClick={onClickThumbnailImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${activeImageClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
