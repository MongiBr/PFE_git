import { Resolver, Query, Arg, ID, Int, Mutation } from "type-graphql";
import ServiceProvider, {
  ServiceProviderResponse,
} from "./serviceProvider.type";
import search from "../../helpers/search";
import loadServiceProviders from "../../data/serviceProvider.data";
import { filterItems } from "../../helpers/filter";
@Resolver()
export default class ServiceProviderResolver {
  private readonly serviceProvidersCollection: ServiceProvider[] = loadServiceProviders();

  @Query({ description: "Get all the Service Providers" })
  serviceProviders(
    @Arg("limit", (type) => Int, { defaultValue: 10 }) limit: number,
    @Arg("offset", (type) => Int, { defaultValue: 0 }) offset: number,
    @Arg("type", { nullable: true }) type?: string,
    @Arg("text", { nullable: true }) text?: string,
    @Arg("category", { nullable: true }) category?: string
  ): ServiceProviderResponse {
    const total = this.serviceProvidersCollection.length;
    const filteredData = filterItems(
      this.serviceProvidersCollection,
      limit,
      offset,
      text,
      type,
      category
    );
    return new ServiceProviderResponse({
      total: total,
      ...filteredData,
    });
  }

  @Query(() => ServiceProvider)
  async serviceProvider(
    @Arg("id", (type) => ID) id: string
  ): Promise<ServiceProvider | undefined> {
    // as auth ServiceProvider. check from middleware.
    console.log(id, "serviceProvider_id");
    return await this.serviceProvidersCollection.find(
      (serviceProvider) => serviceProvider.id === id
    );
  }
  // input ServiceProvidersFilterInput{
  //   id:
  // }
  // @Mutation(() => ServiceProvider, { description: "Update ServiceProvider" })
  // async createOrUpdateServiceProvider(
  //   @Arg("serviceProvider") serviceProvider: AddServiceProviderInput
  // ): Promise<ServiceProvider> {
  //   console.log(serviceProvider, "serviceProvider");
  //   this.serviceProvidersCollection.push(serviceProvider);
  //   return await serviceProvider;
  // }

  //   @Mutation(() => ServiceProvider, { description: 'Add or Edit Address' })
  //   async updateAddress(
  //     @Arg('addressInput') addressInput: string
  //   ): Promise<ServiceProvider> {
  //     console.log(addressInput, 'addressinput');
  //     return await this.serviceProvidersCollection[0];
  //   }

  //   @Mutation(() => ServiceProvider, { description: 'Add or Edit Contact' })
  //   async updateContact(
  //     @Arg('contactInput') contactInput: string
  //   ): Promise<ServiceProvider> {
  //     console.log(contactInput, 'contactinput');
  //     return await this.serviceProvidersCollection[0];
  //   }

  //   @Mutation(() => ServiceProvider, { description: 'Delete Address' })
  //   async deleteAddress(@Arg('addressId') addressId: string): Promise<ServiceProvider> {
  //     console.log(addressId, 'address_id');
  //     return await this.serviceProvidersCollection[0];
  //   }

  //   @Mutation(() => ServiceProvider, { description: 'Delete Contact' })
  //   async deleteContact(@Arg('contactId') contactId: string): Promise<ServiceProvider> {
  //     console.log(contactId, 'contact_id');
  //     return await this.serviceProvidersCollection[0];
  //   }

  //   @Mutation(() => ServiceProvider, { description: 'Add Payment Card' })
  //   async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<ServiceProvider> {
  //     console.log(cardInput, 'cardInput');
  //     return await this.serviceProvidersCollection[0];
  //   }

  //   @Mutation(() => ServiceProvider, { description: 'Delete Payment Card' })
  //   async deletePaymentCard(@Arg('cardId') cardId: string): Promise<ServiceProvider> {
  //     console.log(cardId, 'card_id');
  //     return await this.serviceProvidersCollection[0];
  //   }
}
