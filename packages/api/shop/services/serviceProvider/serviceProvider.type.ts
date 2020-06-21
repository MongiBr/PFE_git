import { Field, ObjectType, Int } from "type-graphql";
import User from "../user/user.type";
import Product from "../product/product.type";
import { ProductType } from "../product/product.enum";
import PaginatedResponse from "../../helpers/paginated-response";

@ObjectType()
export default class ServiceProvider extends User {
  @Field(() => ProductType)
  type: ProductType;

  @Field((type) => [Product], { nullable: true })
  products: Product[];
}

@ObjectType()
export class ServiceProviderResponse extends PaginatedResponse(
  ServiceProvider
) {
  // simple helper for creating new instances easily
  constructor(ServiceProviderResponse: ServiceProviderResponse) {
    super();
    Object.assign(this, ServiceProviderResponse);
  }

  // you can add more fields here if you need
}
