import { OrderItem } from './orderI-item';
import { User } from '@eshop/products';
 
export class Order {
  id?: string;
  orderItems?: OrderItem[];
  totalPrice?: number;
  location?: string;
  status?: number;
  user?: User;
  date?: string;
  hasAnimal?:boolean;
  bringProducts?:boolean;
  forYou?:boolean;
  serviceFrequency?: string;
  houseType?: string;
}
