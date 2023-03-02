import { useState } from 'react';
import './uploader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import ImageUploader from './ImageUpload';

function Uploader() {
const [images, setImages] = useState([]);
const [fileNames, setFileNames] = useState([]);

const handleFileUpload = async (e) => {
const newImages = [...images];
const newFileNames = [...fileNames];

const files = e.target.files;
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  if (file.type === 'image/png') {
    const base64 = await encodeFileInBase64(file); // Wait for the promise to resolve
    const base64WithoutPadding = base64.replace(/=*$/, ''); // Remove the padding characters
    newImages.push({
      path: `images/${i+1}.png`,
      content: base64WithoutPadding // Add the modified base64 string
    });
    newFileNames.push(file.name);
  }
}
setImages(newImages);
setFileNames(newFileNames);
};

    const encodeFileInBase64 = (file) => {
    return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
    });
    };

    const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    const newFileNames = [...fileNames];
    newFileNames.splice(index, 1);
    setFileNames(newFileNames);
    };

    const handleConsoleLog = async() => {
      console.log(images);
      // console.log( images[2].content);
      const imagesData = images.map(image => ({
        path: image.path,
        content: image.content
      }));
      const uploadedImages = await ImageUploader(imagesData);
      console.log(uploadedImages);
    };
return (
<main>
<form onClick={() => document.querySelector('.input-field').click()}>
<input
       type='file'
       className='input-field'
       hidden
       multiple
       onChange={handleFileUpload}
     />
    {<MdCloudUpload color='1475cf' size={60} />}
<p>Browse Files To Upload </p>
<p>Upload Only PNG files</p>
</form>
{images.length > 0 &&
images.map((image, index) => (
<section key={index} className='Uploaded-row'>
<AiFillFileImage color='1475cf' />
<span className='Upload-content'>
{fileNames[index]}
<MdDelete onClick={() => handleDeleteImage(index)} />
</span>
</section>
))}
<button onClick={handleConsoleLog}>Upload To IPFS</button>
</main>
);
}
export default Uploader;