/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProductService } from "../product.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductCreateInput } from "./ProductCreateInput";
import { Product } from "./Product";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ProductUpdateInput } from "./ProductUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductControllerBase {
  constructor(
    protected readonly service: ProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Product })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProduct(
    @common.Body() data: ProductCreateInput
  ): Promise<Product> {
    return await this.service.createProduct({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        quantity: true,
        name: true,
        price: true,
        category: true,
        imageUrl: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Product] })
  @ApiNestedQuery(ProductFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async products(@common.Req() request: Request): Promise<Product[]> {
    const args = plainToClass(ProductFindManyArgs, request.query);
    return this.service.products({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        quantity: true,
        name: true,
        price: true,
        category: true,
        imageUrl: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async product(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    const result = await this.service.product({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        quantity: true,
        name: true,
        price: true,
        category: true,
        imageUrl: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProduct(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() data: ProductUpdateInput
  ): Promise<Product | null> {
    try {
      return await this.service.updateProduct({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          quantity: true,
          name: true,
          price: true,
          category: true,
          imageUrl: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProduct(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          quantity: true,
          name: true,
          price: true,
          category: true,
          imageUrl: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Post("/products")
  @swagger.ApiOkResponse({
    type: Product,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateProduct(
    @common.Body()
    body: ProductUpdateInput
  ): Promise<Product> {
    return this.service.CreateProduct(body);
  }

  @common.Delete("/products/:id")
  @swagger.ApiOkResponse({
    type: Product,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async DeleteProduct(
    @common.Body()
    body: ProductUpdateInput
  ): Promise<Product> {
    return this.service.DeleteProduct(body);
  }

  @common.Get("/products/:id")
  @swagger.ApiOkResponse({
    type: Product,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetProduct(
    @common.Body()
    body: ProductUpdateInput
  ): Promise<Product> {
    return this.service.GetProduct(body);
  }

  @common.Get("/products")
  @swagger.ApiOkResponse({
    type: Product,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ListProducts(
    @common.Body()
    body: ProductUpdateInput
  ): Promise<Product[]> {
    return this.service.ListProducts(body);
  }

  @common.Patch("/products/:id")
  @swagger.ApiOkResponse({
    type: Product,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateProduct(
    @common.Body()
    body: ProductUpdateInput
  ): Promise<Product> {
    return this.service.UpdateProduct(body);
  }
}
