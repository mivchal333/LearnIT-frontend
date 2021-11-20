export const EMPTY_IMAGE_PATH = 'empty-img.jpg'
export const LEARNING_BANNER_IMAGE_PATH = 'learning-banner.webp'
export const LEARNING_PROGRESS_IMAGE_PATH = 'learning-progress.webp'
export const GIRL_LEARNING_LAPTOP_IMAGE_PATH = 'girl-learning-laptop.jpg'
export const SOCIAL_MEDIA_BANNER_IMAGE_PATH = 'social-media-banner.png'
export const QUESTION_HEAD_IMAGE_PATH = 'question-head.jpg'
export const ONLINE_LEARNING_IMAGE_PATH = 'online-learning.png'
export const PB_LOGO_IMAGE_PATH = 'pb_logo.png'

export const getStaticImageUrl = (imagePath: string) => {
    return process.env.PUBLIC_URL + '/img/' + imagePath
}