import Fuse from 'fuse.js'

// Default options
// Can override
var fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "name",
  ]
};

export default function fuzzySearch(array, input, options = fuseOptions) {
  const fuse = new Fuse(array, options)  
  return fuse.search(input)
}