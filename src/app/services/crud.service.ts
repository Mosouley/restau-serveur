import { Observable } from 'rxjs';

export interface CrudService {
  getAll(): Observable<any>;
  find (id): Observable<any>;

  create(produit): Observable<any>;

  update(produit): Observable<any>;

  delete(id): Observable<any>;

  // addAll(list): Observable<any>;
}
