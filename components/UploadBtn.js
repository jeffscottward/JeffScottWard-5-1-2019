import React, {useContext} from 'react'
import { DocsActions } from '../context/docs'
import { DocsContext } from '../context/docsContext'
import { useDropzone } from 'react-dropzone'
import { checkFileSize, makeFileObj } from '../utils/files'
import { borderColor, mobileBreakPoint } from '../components/cssVars'

function UploadBtn() {
  const { dispatch } = useContext(DocsContext)
  
  function handleSuccessDrop (fileUploaded) {
    let file = fileUploaded[0]
    checkFileSize(file)
    dispatch({
      type: DocsActions.SET_DOC,
      payload: makeFileObj(file)
    })
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
  })

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <button type="button" className="upload" onClick={open}>UPLOAD</button>
      </div>
      <style jsx>{`
        .upload { padding: 10px 50px; cursor: pointer;} 
        @media (max-width: ${mobileBreakPoint}) {
          .upload {width: 100%}
        }
      `}</style>
    </section>
  );
}

export default UploadBtn