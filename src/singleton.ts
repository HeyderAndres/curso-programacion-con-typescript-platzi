export class MySingleton {
  private static instance: MySingleton | null = null;
  private constructor(private name: string){}

  static getInstance(name: string): MySingleton {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton(name);
    }
    return MySingleton.instance;
  }
}


const instanceS1 = MySingleton.getInstance('first instance');
const instanceS2 = MySingleton.getInstance('Second instance');
const instanceS3 = MySingleton.getInstance('third instance');

console.log(instanceS1 === instanceS2);;
