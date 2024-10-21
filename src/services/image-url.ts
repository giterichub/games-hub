const getCroppedImageUrl = (url: string) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    const answer = url.slice(0, index) + 'crop/600/400/' + url.slice;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
export default getCroppedImageUrl;