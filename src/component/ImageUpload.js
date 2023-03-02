import axios from 'axios';

async function ImageUploader(ipfsArray) {
  try {
    const response = await axios.post(
      'https://deep-index.moralis.io/api/v2/ipfs/uploadFolder',
      ipfsArray,
      {
        headers: {
          'X-API-KEY': 'api',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
    const data = response.data;
    const ipfsPath = data[0].path.substring(0, data[0].path.lastIndexOf('/') + 1);
    console.log(ipfsPath);
    return ipfsPath;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export default ImageUploader;
