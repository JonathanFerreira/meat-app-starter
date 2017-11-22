import {Injectable} from '@angular/core'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'

@Injectable()

export class OrderService {
  constructor(private cartService: ShoppingCartService){}

  cartItens(): CartItem[]{
    return this.cartService.items;
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.cartService.removeItem(item);
  }

  itemsValues(): number {
    return this.cartService.total();
  }
}
