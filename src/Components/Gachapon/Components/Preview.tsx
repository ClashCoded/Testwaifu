import React from 'react'
import { LootBox } from '../../config/constants/types'

interface PreviewProps {
  lootbox: LootBox
  isOwned?: boolean
}

const Preview: React.FC<PreviewProps> = ({ lootbox, isOwned = false }) => {
  const { images, name, video } = lootbox
  const previewImageSrc = `/images/nfts/WaifustationGacha.gif`

  if (video) {
    const videoComponent = (
      <video className="gacha-preview-video" autoPlay playsInline controls={false} loop muted poster={previewImageSrc}>
        <source src={video.webm} type="video/webm" />
        <source src={video.mp4} type="video/mp4" />
      </video>
    )

    return isOwned ? (
      <a href={images.ipfs} target="_blank" rel="noreferrer noopener">
        {videoComponent}
      </a>
    ) : (
      videoComponent
    )
  }

  const previewImage = <img className="gacha-preview-image" src={previewImageSrc} alt={name} />

  return (
    <div className="gacha-preview-container">
      {isOwned ? (
        <a href={images.ipfs} target="_blank" rel="noreferrer noopener">
          {previewImage}
        </a>
      ) : (
        previewImage
      )}
    </div>
  )
}

export default Preview
