import { RequestHandler } from "express";
declare namespace Definitions {
    export interface ApiResponse {
        code?: number; // int32
        type?: string;
        message?: string;
    }
    export interface Category {
        id?: number; // int64
        name?: string;
    }
    export interface Order {
        id?: number; // int64
        petId?: number; // int64
        quantity?: number; // int32
        shipDate?: string; // date-time
        /**
         * Order Status
         */
        status?: "placed" | "approved" | "delivered";
        complete?: boolean;
    }
    export interface Pet {
        id?: number; // int64
        category?: Category;
        /**
         * example:
         * doggie
         */
        name: string;
        photoUrls: string[];
        tags?: Tag[];
        /**
         * pet status in the store
         */
        status?: "available" | "pending" | "sold";
    }
    export interface Tag {
        id?: number; // int64
        name?: string;
    }
    export interface User {
        id?: number; // int64
        username?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: string;
        phone?: string;
        /**
         * User Status
         */
        userStatus?: number; // int32
    }
}
declare namespace Paths {
    namespace AddPet {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.Pet;
        }
        interface Config {
            operationId: "addPet";
            method: "post";
            expressPath: "/pet";
            openapiPath: "/pet";
            pathParams?: unknown;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, unknown, unknown>;
    }
    namespace CreateUser {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.User;
        }
        interface Config {
            operationId: "createUser";
            method: "post";
            expressPath: "/user";
            openapiPath: "/user";
            pathParams?: unknown;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, unknown, unknown>;
    }
    namespace CreateUsersWithArrayInput {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.User[];
        }
        interface Config {
            operationId: "createUsersWithArrayInput";
            method: "post";
            expressPath: "/user/createWithArray";
            openapiPath: "/user/createWithArray";
            pathParams?: unknown;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, unknown, unknown>;
    }
    namespace CreateUsersWithListInput {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.User[];
        }
        interface Config {
            operationId: "createUsersWithListInput";
            method: "post";
            expressPath: "/user/createWithList";
            openapiPath: "/user/createWithList";
            pathParams?: unknown;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, unknown, unknown>;
    }
    namespace FindPetsByStatus {
        namespace Responses {
            export type $200 = Definitions.Pet[];
        }
        interface Config {
            operationId: "findPetsByStatus";
            method: "get";
            expressPath: "/pet/findByStatus";
            openapiPath: "/pet/findByStatus";
            pathParams?: unknown;
            responses: Paths.FindPetsByStatus.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.FindPetsByStatus.Responses.$200, unknown, unknown>;
    }
    namespace FindPetsByTags {
        namespace Responses {
            export type $200 = Definitions.Pet[];
        }
        interface Config {
            operationId: "findPetsByTags";
            method: "get";
            expressPath: "/pet/findByTags";
            openapiPath: "/pet/findByTags";
            pathParams?: unknown;
            responses: Paths.FindPetsByTags.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.FindPetsByTags.Responses.$200, unknown, unknown>;
    }
    namespace GetInventory {
        namespace Responses {
            export interface $200 {
                [name: string]: number; // int32
            }
        }
        interface Config {
            operationId: "getInventory";
            method: "get";
            expressPath: "/store/inventory";
            openapiPath: "/store/inventory";
            pathParams?: unknown;
            responses: Paths.GetInventory.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.GetInventory.Responses.$200, unknown, unknown>;
    }
    namespace GetOrderById {
        namespace Responses {
            export type $200 = Definitions.Order;
        }
        interface Config {
            operationId: "getOrderById";
            method: "get";
            expressPath: "/store/order/:orderId";
            openapiPath: "/store/order/{orderId}";
            pathParams?: unknown;
            responses: Paths.GetOrderById.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.GetOrderById.Responses.$200, unknown, unknown>;
    }
    namespace GetPetById {
        namespace Responses {
            export type $200 = Definitions.Pet;
        }
        interface Config {
            operationId: "getPetById";
            method: "get";
            expressPath: "/pet/:petId";
            openapiPath: "/pet/{petId}";
            pathParams?: unknown;
            responses: Paths.GetPetById.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.GetPetById.Responses.$200, unknown, unknown>;
    }
    namespace GetUserByName {
        namespace Responses {
            export type $200 = Definitions.User;
        }
        interface Config {
            operationId: "getUserByName";
            method: "get";
            expressPath: "/user/:username";
            openapiPath: "/user/{username}";
            pathParams?: unknown;
            responses: Paths.GetUserByName.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.GetUserByName.Responses.$200, unknown, unknown>;
    }
    namespace LoginUser {
        namespace Responses {
            export type $200 = string;
        }
        interface Config {
            operationId: "loginUser";
            method: "get";
            expressPath: "/user/login";
            openapiPath: "/user/login";
            pathParams?: unknown;
            responses: Paths.LoginUser.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.LoginUser.Responses.$200, unknown, unknown>;
    }
    namespace PlaceOrder {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.Order;
        }
        namespace Responses {
            export type $200 = Definitions.Order;
        }
        interface Config {
            operationId: "placeOrder";
            method: "post";
            expressPath: "/store/order";
            openapiPath: "/store/order";
            pathParams?: unknown;
            responses: Paths.PlaceOrder.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.PlaceOrder.Responses.$200, unknown, unknown>;
    }
    namespace UpdatePet {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.Pet;
        }
        interface Config {
            operationId: "updatePet";
            method: "put";
            expressPath: "/pet";
            openapiPath: "/pet";
            pathParams?: unknown;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, unknown, unknown>;
    }
    namespace UpdateUser {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.User;
        }
        interface Config {
            operationId: "updateUser";
            method: "put";
            expressPath: "/user/:username";
            openapiPath: "/user/{username}";
            pathParams?: unknown;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, unknown, unknown>;
    }
    namespace UploadFile {
        namespace Responses {
            export type $200 = Definitions.ApiResponse;
        }
        interface Config {
            operationId: "uploadFile";
            method: "post";
            expressPath: "/pet/:petId/uploadImage";
            openapiPath: "/pet/{petId}/uploadImage";
            pathParams?: unknown;
            responses: Paths.UploadFile.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.UploadFile.Responses.$200, unknown, unknown>;
    }
}
