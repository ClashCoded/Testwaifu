export type Images = {
    lg: string
    md: string
    sm: string
    ipfs?: string
  }

export type NftImages = {
    blur?: string
  } & Images
  
  export type NftVideo = {
    webm: string
    mp4: string
  }
  
  export type Nft = {
    name: string
    description: string
    images: NftImages
    sortOrder: number
    bunnyId: number
    video?: NftVideo
    element?: string
  }

export type LootBox = {
    name: string
    video?: NftVideo
    images?: NftImages
    lootboxprice?: string
  }
  