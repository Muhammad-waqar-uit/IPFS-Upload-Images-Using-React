import axios from 'axios';

function ImageUploader(ipfsArray){
    try {
      const response = axios.post(
        'https://deep-index.moralis.io/api/v2/ipfs/uploadFolder',
        ipfsArray,
        {
          headers: {
            'X-API-KEY': "api_key",
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        }
      );
      const value = response.data[0];
      const result = value.path.replace(/\/\w+\.\w+$/, '');
      const image = result;
      console.log(image)
      return image;
    } catch (error) {
      console.log(error);
      return null;
    }
  };


export default ImageUploader;
