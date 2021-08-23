export default function (source) {
    debugger
    console.log("=======>",source)
  
    // Apply some transformations to the source...
  
    return `export default ${JSON.stringify(source)}`;
  }
