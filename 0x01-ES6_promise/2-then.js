export default function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
      console.log('Got a response from the API');
    } else {
      reject(Error());
    }
  });

  return myPromise;
}
