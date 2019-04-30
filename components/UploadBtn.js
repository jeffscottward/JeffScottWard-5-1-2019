import React, {useContext} from 'react'
import DocsContext from '../components/Context';
import { useDropzone } from 'react-dropzone';
import { checkFileSize, makeFileObj } from '../utils/files'

// import axios from 'axios'

function UploadBtn() {
  const { dispatch } = useContext(DocsContext)
  
  function handleSuccessDrop (fileUploaded) {
    let file = fileUploaded[0]
    checkFileSize(file)
    dispatch({ type: "SET_DOC", payload: makeFileObj(file) })
    
    // Backend Server -- if there's time?
      // let formData = new FormData();
      // formData.append("image", file);
      // console.log(formData);

      // axios.post('/upload', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }).then(function () {
      //   console.log('success!!!!');
      // }).catch(function () {
      //   console.log('FAILURE!!');
      // });
  }

  const {
    getRootProps,
    open,
    getInputProps,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/jpeg, image/png',
    onDropAccepted: files => handleSuccessDrop(files)
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <button type="button" className="upload" onClick={open}>UPLOAD</button>
      </div>
      <style jsx>{`
        .upload { padding: 10px 50px; cursor: pointer;} 
        @media (max-width: 768px) {
          .upload {width: 100%;}
        }
      `}</style>
    </section>
  );
}

export default UploadBtn