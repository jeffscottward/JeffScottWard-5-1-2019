export function checkFileSize(file) {
  if (file.size > 10 * 1024 * 1024) {
    alert("FILE SIZE TOO BIG - TRY SMALLER IMAGE")
    throw ('TOO BIG')
  }
}

export function makeFileObj(file) {
  let fileObj = {}
  fileObj.id = Math.floor(Math.random() * 1000000)
  fileObj.name = file.name.split('.')[0] + '.' + file.name.split('.')[1].toLowerCase()
  fileObj.fileType = file.name.split('.')[1].toLowerCase()
  fileObj.fileSize = Math.round(file.size / 1000)
  return fileObj
}