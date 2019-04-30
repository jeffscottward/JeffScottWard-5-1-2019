export function docsReducer (docs, action) {
  switch (action.type) {
    case "SET_DOC":
      docs.uploads.push(action.payload);
      docs.onlyVisible.push(action.payload);
      return;
    case "REMOVE_DOC":
      // Fancy algo to remove parent obj by attribute 
      // https://stackoverflow.com/a/26327271

      // Update docs.uploads
      var removeIndex = docs.uploads.map(item => item.id).indexOf(action.payload)
      if (removeIndex >= 0) { docs.uploads.splice(removeIndex, 1) }

      // Update docs.onlyVisible
      if (!!docs.onlyVisible && docs.onlyVisible.length > 0) {
        var removeIndex = docs.onlyVisible.map(item => item.id).indexOf(action.payload)
        if (removeIndex >= 0) { docs.onlyVisible.splice(removeIndex, 1) }
      }
      return;
    case "SET_VISIBLE_DOCS":
      // If no search term
      if (action.payload.length === 0) {
        docs.onlyVisible = docs.uploads
      } else {
        docs.onlyVisible = action.payload
      }
      return;
    default:
      return docs;
  }
};