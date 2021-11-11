export const EMPTY_IMAGE_PATH = 'empty-img.jpg'
export const LEARNING_BANNER_IMAGE_PATH = 'learning-banner.webp'
export const LEARNING_PROGRESS_IMAGE_PATH = 'learning-progress.webp'

export const getStaticImageUrl = (imagePath: string) => {
    return process.env.PUBLIC_URL + '/img/' + imagePath
}