export class CatService {
  async getCat() {
    const cat = await fetch(`https://aws.random.cat/meow`, {});
    return cat.json();
  }
}
