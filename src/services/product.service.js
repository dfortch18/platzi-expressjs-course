const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async find(limit) {
    const products = this.products.filter((item) => !item.isBlock);
    if (isNumber(limit)) {
      return products.slice(0, limit);
    }
    return products;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      return boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw new boom.conflict('Product is block');
    }
    return product;
  }

  async create({ name, price, image }) {
    const newProduct = {
      id: faker.string.uuid(),
      name,
      price,
      image,
    };
    this.products.push(newProduct);
    return newProduct.id;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      return boom.notFound('Product not found');
    }
    let product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return index;
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products = this.products.slice(index, 1);
  }

  generate() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBloc: faker.datatype.boolean(),
      });
    }
  }
}

module.exports = ProductService;
