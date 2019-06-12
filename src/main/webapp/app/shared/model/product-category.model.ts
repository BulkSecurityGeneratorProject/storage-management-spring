export interface IProductCategory {
  id?: number;
  name?: string;
  description?: string;
}

export class ProductCategory implements IProductCategory {
  constructor(public id?: number, public name?: string, public description?: string) {}
}
