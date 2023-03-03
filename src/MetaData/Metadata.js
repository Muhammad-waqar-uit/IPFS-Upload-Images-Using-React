import axios from 'axios';

async function metaData(ipfsArray, link) {
  let metaarray = [];
  try {
    const File = ipfsArray.length;
    for (let i = 0; i < File; i++) {
      await metaarray.push({
        path: `metadata/${i + 1}.json`,
        content: {
          image: `${link}${i + 1}.png`,
          name: ipfsArray[i]['Name'],
          description: ipfsArray[i]['Description']
        }
      })
    }
    const response = await axios.post(
      'https://deep-index.moralis.io/api/v2/ipfs/uploadFolder',
      metaarray,
      {
        headers: {
          "X-API-KEY": '2P40Qm2Xjcvf71Uizp9vOxvZwiGnPxoYR8gNMiHxusSfAQ10PA0HaVwJKgX2VxBW',
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      }
    )
    return response.data; // return the response object
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default metaData;
