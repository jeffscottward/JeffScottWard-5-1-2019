export function totalSize(jsonBlob) {
  let total = 0
  jsonBlob.uploads.map((uploadedDoc) => {
    total += Number(uploadedDoc.fileSize)
  })
  return total
}

export function totalDocs(jsonBlob) {
  return jsonBlob.uploads.length
}