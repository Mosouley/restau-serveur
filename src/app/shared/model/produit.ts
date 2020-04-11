import { BaseEntity } from './base-entity';

export class Produit {

  constructor(
               public id?: number,
                public category?: BaseEntity,
                public codeProd?: string,
                public descProduit?: string,
                public stockMini?: number,
                public prixUnitaire?: number,
                public coutUnitaire?: number
  ) {}

}
