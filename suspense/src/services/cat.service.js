export class CatService {
  async getCat() {
    return fetch(`https://aws.random.cat/meow`, {});
  }
}
