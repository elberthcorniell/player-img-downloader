import axios from 'axios';

export const handleFileDownload = async url => {
    const response = await axios({
        url, responseType: 'blob',
    });
    url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'player.jpg');
    document.body.appendChild(link);
    link.click();
    return true;
}

export const handleImgError = (ref) => {
    const { src } = ref.current;
    const image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    if (src !== image)
        ref.current.src = image;
}