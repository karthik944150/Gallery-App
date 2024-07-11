import {Component} from 'react'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

const intialImagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl:
      'https://www.bing.com/images/search?q=flower+images&id=78D4E16D5DDFF73815345B6CDF3BD45E241D0237&FORM=IACMIR',
    thumbnailUrl:
      'https://www.bing.com/images/search?q=flower+images&id=78D4E16D5DDFF73815345B6CDF3BD45E241D0237&FORM=IACMIR',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

class Gallery extends Component {
  state = {
    activeImageId: intialImagesList[0].id,
    imagesList: intialImagesList,
  }
  clickImage = id => {
    this.setState({activeImageId: id})
  }
  render() {
    const {imagesList, activeImageId} = this.state
    const filteredImage = imagesList.find(
      eachImage => eachImage.id === activeImageId,
    )
    return (
      <div className="app-container">
        <div className="gallery-container">
          <img
            key={filteredImage.id}
            src={filteredImage.imageUrl}
            alt={filteredImage.imageAltText}
            className="selected-image"
          />
          <h1 className="heading">Nature Photography</h1>
          <p className="description">Nature Photography by Karthik</p>
          <ul className="list-container">
            {imagesList.map(eachImageDetils => (
              <ThumbnailItem
                key={eachImageDetils.id}
                imageDetails={eachImageDetils}
                clickImage={this.clickImage}
                isActive={eachImageDetils.id === activeImageId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
