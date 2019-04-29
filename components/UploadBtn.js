import React from 'react'
import { useDropzone } from 'react-dropzone';

function UploadBtn(props) {
  const {
    getRootProps,
    open,
    getInputProps,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: 'image/jpeg, image/png'
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