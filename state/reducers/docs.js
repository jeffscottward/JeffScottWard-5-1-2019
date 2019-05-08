export function DocsReducer(state, action) {
  let newState = Object.create(state)
  switch (action.type) {
    case "SET_DOC":
      newState.uploads.push(action.payload)
      return newState
    case "REMOVE_DOC":
      // Update newState.uploads
      let removeIndex = newState.uploads.map(item => item.id).indexOf(action.payload)
      if (removeIndex >= 0) { newState.uploads.splice(removeIndex, 1) }
      // Update newState.onlyVisible
      if (!!newState.onlyVisible && newState.onlyVisible.length > 0) {
        let removeIndex = newState.onlyVisible.map(item => item.id).indexOf(action.payload)
        if (removeIndex >= 0) { newState.onlyVisible.splice(removeIndex, 1) }
      }
      return newState
    case "SET_VISIBLE_DOCS":
      // If no search term
      if (action.payload.length === 0) {
        newState.onlyVisible = newState.uploads
      } else {
        newState.onlyVisible = action.payload
      }
      return newState
    default:
      return newState
  }
}

