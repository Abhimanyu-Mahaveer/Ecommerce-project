// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO : we will not hardcode-server URL here, we will change this later on 
    const response = await fetch('http://localhost:8080/products')
    const data=await response.json() 
    resolve({data}) 
  } 
  );
} 
