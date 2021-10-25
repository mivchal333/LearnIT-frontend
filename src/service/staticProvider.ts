export const EMPTY_IMAGE_PATH = 'empty-img.jpg'
export const getStaticImageUrl = (imagePath: string) => {
    return process.env.PUBLIC_URL + '/img/' + imagePath
}