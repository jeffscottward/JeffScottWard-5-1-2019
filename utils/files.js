export function checkFileSize(file) {
  if (file.size > 10 * 1024 * 1024) {
    alert("FILE SIZE TOO BIG - TRY SMALLER IMAGE")
    throw ('TOO BIG')
  } else {
    return true
  }
}

export function makeFileObj(file) {
  let fileObj = {}
  fileObj.id = Math.floor(Math.random() * 1000000)
  fileObj.name = file.name.split('.')[0] + '.' + file.name.split('.')[1].toLowerCase()
  fileObj.type = file.type.split('/')[1].toLowerCase()
  fileObj.size = Math.round(file.size / 1000)
  return fileObj
}