import { RequestHandler } from "express";
declare namespace Components {
    namespace Schemas {
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
}
declare namespace Paths {
    namespace AddPet {
        export type RequestBody = Components.Schemas.Pet;
        interface Config {
            operationId: "addPet";
            method: "post";
            expressPath: "/pet";
            openapiPath: "/pet";
            pathParams?: unknown;
            responses?: unknown;
            requestBody: Paths.AddPet.RequestBody;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, Paths.AddPet.RequestBody, unknown>;
    }
    namespace CreateUser {
        export type RequestBody = Components.Schemas.User;
        interface Config {
            operationId: "createUser";
            method: "post";
            expressPath: "/user";
            openapiPath: "/user";
            pathParams?: unknown;
            responses?: unknown;
            requestBody: Paths.CreateUser.RequestBody;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, Paths.CreateUser.RequestBody, unknown>;
    }
    namespace CreateUsersWithArrayInput {
        export type RequestBody = Components.Schemas.User[];
        interface Config {
            operationId: "createUsersWithArrayInput";
            method: "post";
            expressPath: "/user/createWithArray";
            openapiPath: "/user/createWithArray";
            pathParams?: unknown;
            responses?: unknown;
            requestBody: Paths.CreateUsersWithArrayInput.RequestBody;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, Paths.CreateUsersWithArrayInput.RequestBody, unknown>;
    }
    namespace CreateUsersWithListInput {
        export type RequestBody = Components.Schemas.User[];
        interface Config {
            operationId: "createUsersWithListInput";
            method: "post";
            expressPath: "/user/createWithList";
            openapiPath: "/user/createWithList";
            pathParams?: unknown;
            responses?: unknown;
            requestBody: Paths.CreateUsersWithListInput.RequestBody;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, Paths.CreateUsersWithListInput.RequestBody, unknown>;
    }
    namespace DeleteOrder {
        namespace Parameters {
            export type OrderId = number; // int64
        }
        export interface PathParameters {
            orderId: Parameters.OrderId /* int64 */;
        }
        interface Config {
            operationId: "deleteOrder";
            method: "delete";
            expressPath: "/store/order/:orderId";
            openapiPath: "/store/order/{orderId}";
            pathParams: Paths.DeleteOrder.PathParameters;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<Paths.DeleteOrder.PathParameters, unknown, unknown, unknown>;
    }
    namespace DeletePet {
        export interface HeaderParameters {
            api_key?: Parameters.ApiKey;
        }
        namespace Parameters {
            export type ApiKey = string;
            export type PetId = number; // int64
        }
        export interface PathParameters {
            petId: Parameters.PetId /* int64 */;
        }
        interface Config {
            operationId: "deletePet";
            method: "delete";
            expressPath: "/pet/:petId";
            openapiPath: "/pet/{petId}";
            pathParams: Paths.DeletePet.PathParameters;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers: Paths.DeletePet.HeaderParameters;
        }
        type Route = RequestHandler<Paths.DeletePet.PathParameters, unknown, unknown, unknown>;
    }
    namespace DeleteUser {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        interface Config {
            operationId: "deleteUser";
            method: "delete";
            expressPath: "/user/:username";
            openapiPath: "/user/{username}";
            pathParams: Paths.DeleteUser.PathParameters;
            responses?: unknown;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<Paths.DeleteUser.PathParameters, unknown, unknown, unknown>;
    }
    namespace FindPetsByStatus {
        namespace Parameters {
            export type Status = ("available" | "pending" | "sold")[];
        }
        export interface QueryParameters {
            status: Parameters.Status;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Pet[];
        }
        interface Config {
            operationId: "findPetsByStatus";
            method: "get";
            expressPath: "/pet/findByStatus";
            openapiPath: "/pet/findByStatus";
            pathParams?: unknown;
            responses: Paths.FindPetsByStatus.Responses.$200;
            requestBody?: unknown;
            queryParams: Paths.FindPetsByStatus.QueryParameters;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.FindPetsByStatus.Responses.$200, unknown, Paths.FindPetsByStatus.QueryParameters>;
    }
    namespace FindPetsByTags {
        namespace Parameters {
            export type Tags = string[];
        }
        export interface QueryParameters {
            tags: Parameters.Tags;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Pet[];
        }
        interface Config {
            operationId: "findPetsByTags";
            method: "get";
            expressPath: "/pet/findByTags";
            openapiPath: "/pet/findByTags";
            pathParams?: unknown;
            responses: Paths.FindPetsByTags.Responses.$200;
            requestBody?: unknown;
            queryParams: Paths.FindPetsByTags.QueryParameters;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.FindPetsByTags.Responses.$200, unknown, Paths.FindPetsByTags.QueryParameters>;
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
        namespace Parameters {
            export type OrderId = number; // int64
        }
        export interface PathParameters {
            orderId: Parameters.OrderId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Order;
        }
        interface Config {
            operationId: "getOrderById";
            method: "get";
            expressPath: "/store/order/:orderId";
            openapiPath: "/store/order/{orderId}";
            pathParams: Paths.GetOrderById.PathParameters;
            responses: Paths.GetOrderById.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<Paths.GetOrderById.PathParameters, Paths.GetOrderById.Responses.$200, unknown, unknown>;
    }
    namespace GetPetById {
        namespace Parameters {
            export type PetId = number; // int64
        }
        export interface PathParameters {
            petId: Parameters.PetId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Pet;
        }
        interface Config {
            operationId: "getPetById";
            method: "get";
            expressPath: "/pet/:petId";
            openapiPath: "/pet/{petId}";
            pathParams: Paths.GetPetById.PathParameters;
            responses: Paths.GetPetById.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<Paths.GetPetById.PathParameters, Paths.GetPetById.Responses.$200, unknown, unknown>;
    }
    namespace GetUserByName {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        namespace Responses {
            export type $200 = Components.Schemas.User;
        }
        interface Config {
            operationId: "getUserByName";
            method: "get";
            expressPath: "/user/:username";
            openapiPath: "/user/{username}";
            pathParams: Paths.GetUserByName.PathParameters;
            responses: Paths.GetUserByName.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<Paths.GetUserByName.PathParameters, Paths.GetUserByName.Responses.$200, unknown, unknown>;
    }
    namespace LoginUser {
        namespace Parameters {
            export type Password = string;
            export type Username = string;
        }
        export interface QueryParameters {
            username: Parameters.Username;
            password: Parameters.Password;
        }
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
            queryParams: Paths.LoginUser.QueryParameters;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.LoginUser.Responses.$200, unknown, Paths.LoginUser.QueryParameters>;
    }
    namespace PlaceOrder {
        export type RequestBody = Components.Schemas.Order;
        namespace Responses {
            export type $200 = Components.Schemas.Order;
        }
        interface Config {
            operationId: "placeOrder";
            method: "post";
            expressPath: "/store/order";
            openapiPath: "/store/order";
            pathParams?: unknown;
            responses: Paths.PlaceOrder.Responses.$200;
            requestBody: Paths.PlaceOrder.RequestBody;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, Paths.PlaceOrder.Responses.$200, Paths.PlaceOrder.RequestBody, unknown>;
    }
    namespace UpdatePet {
        export type RequestBody = Components.Schemas.Pet;
        interface Config {
            operationId: "updatePet";
            method: "put";
            expressPath: "/pet";
            openapiPath: "/pet";
            pathParams?: unknown;
            responses?: unknown;
            requestBody: Paths.UpdatePet.RequestBody;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<unknown, unknown, Paths.UpdatePet.RequestBody, unknown>;
    }
    namespace UpdatePetWithForm {
        namespace Parameters {
            export type PetId = number; // int64
        }
        export interface PathParameters {
            petId: Parameters.PetId /* int64 */;
        }
        export interface RequestBody {
            /**
             * Updated name of the pet
             */
            name?: string;
            /**
             * Updated status of the pet
             */
            status?: string;
        }
        interface Config {
            operationId: "updatePetWithForm";
            method: "post";
            expressPath: "/pet/:petId";
            openapiPath: "/pet/{petId}";
            pathParams: Paths.UpdatePetWithForm.PathParameters;
            responses?: unknown;
            requestBody: Paths.UpdatePetWithForm.RequestBody;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<Paths.UpdatePetWithForm.PathParameters, unknown, Paths.UpdatePetWithForm.RequestBody, unknown>;
    }
    namespace UpdateUser {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        export type RequestBody = Components.Schemas.User;
        interface Config {
            operationId: "updateUser";
            method: "put";
            expressPath: "/user/:username";
            openapiPath: "/user/{username}";
            pathParams: Paths.UpdateUser.PathParameters;
            responses?: unknown;
            requestBody: Paths.UpdateUser.RequestBody;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<Paths.UpdateUser.PathParameters, unknown, Paths.UpdateUser.RequestBody, unknown>;
    }
    namespace UploadFile {
        namespace Parameters {
            export type PetId = number; // int64
        }
        export interface PathParameters {
            petId: Parameters.PetId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ApiResponse;
        }
        interface Config {
            operationId: "uploadFile";
            method: "post";
            expressPath: "/pet/:petId/uploadImage";
            openapiPath: "/pet/{petId}/uploadImage";
            pathParams: Paths.UploadFile.PathParameters;
            responses: Paths.UploadFile.Responses.$200;
            requestBody?: unknown;
            queryParams?: unknown;
            headers?: unknown;
        }
        type Route = RequestHandler<Paths.UploadFile.PathParameters, Paths.UploadFile.Responses.$200, unknown, unknown>;
    }
}
