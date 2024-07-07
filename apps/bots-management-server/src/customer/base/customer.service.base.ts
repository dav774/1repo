/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Customer as PrismaCustomer,
  User as PrismaUser,
} from "@prisma/client";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { Customer } from "./Customer";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";

export class CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CustomerCountArgs, "select">): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async customers(
    args: Prisma.CustomerFindManyArgs
  ): Promise<PrismaCustomer[]> {
    return this.prisma.customer.findMany(args);
  }
  async customer(
    args: Prisma.CustomerFindUniqueArgs
  ): Promise<PrismaCustomer | null> {
    return this.prisma.customer.findUnique(args);
  }
  async createCustomer(
    args: Prisma.CustomerCreateArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.create(args);
  }
  async updateCustomer(
    args: Prisma.CustomerUpdateArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.update(args);
  }
  async deleteCustomer(
    args: Prisma.CustomerDeleteArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
  async CreateCustomer(args: CustomerCreateInput): Promise<Customer> {
    throw new Error("Not implemented");
  }
  async GetCustomer(args: CustomerWhereUniqueInput): Promise<Customer> {
    throw new Error("Not implemented");
  }
  async ListCustomers(args: CustomerFindManyArgs): Promise<Customer[]> {
    throw new Error("Not implemented");
  }
}
