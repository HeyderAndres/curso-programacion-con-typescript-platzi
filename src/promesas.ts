import axios from 'axios';
(async () =>{
  function delay(time: number): Promise<boolean> {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(()=> {
        resolve(true);
      }, time);
      console.log('esperando timeout');

    });
    return promise;
  }

  async function getProducts(){
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  const rta = await delay(2000);
  console.log(rta);

  const products = await getProducts();
  console.log(products);


})();
