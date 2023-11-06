"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dtos/create-user-dto");
const update_user_dto_1 = require("./dtos/update-user-dto");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const user_dto_1 = require("./dtos/user.dto");
const auth_service_1 = require("./auth.service");
const user_entity_1 = require("./user.entity");
const auth_guard_1 = require("../guards/auth.guard");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
const sign_in_user_dto_1 = require("./dtos/sign-in-user-dto");
let UsersController = class UsersController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async createUser(body, session) {
        const user = await this.authService.register(body.name, body.surname, body.username, body.email, body.password, body.contact_number, body.gender, body.date_of_birth);
        session.user_id = user.user_id;
        return user;
    }
    catch(error) {
        return { error: error.message
        };
    }
    async sign_in(body, session) {
        const user = await this.authService.sign_in(body.email, body.password);
        session.userId = user.user_id;
        return user;
    }
    signOut(session) {
        session.userId = null;
    }
    whoAmI(user) {
        return user;
    }
    getallUsers(email) {
        return this.userService.getAllUsers(email);
    }
    getUser(user_id) {
        return this.userService.getUserbyId(user_id);
    }
    getUserbyemail(email) {
        return this.userService.getUserbyEmail(email);
    }
    removeUser(email) {
        return this.userService.delete_account(email);
    }
    updateUser(email, body) {
        return this.authService.password_reset(email, body.password);
    }
    async update_contactNumber(user_id, body) {
        return this.userService.change_contactNumber(user_id, body.contact_number);
    }
};
__decorate([
    common_1.Post('/register'),
    __param(0, common_1.Body()), __param(1, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Post('/signin'),
    __param(0, common_1.Body()), __param(1, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_user_dto_1.SignUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "sign_in", null);
__decorate([
    common_1.Post('/signout'),
    __param(0, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "signOut", null);
__decorate([
    common_1.Get('/whoami'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.Users]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "whoAmI", null);
__decorate([
    common_1.Get("/getUsers"),
    __param(0, common_1.Query("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getallUsers", null);
__decorate([
    common_1.Get("/getUserById/:user_id"),
    __param(0, common_1.Param("user_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.Get("/getUserByEmail/:email"),
    __param(0, common_1.Param("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserbyemail", null);
__decorate([
    common_1.Delete("/delete_account/:email"),
    __param(0, common_1.Param("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeUser", null);
__decorate([
    common_1.Post('/password_reset/:email'),
    __param(0, common_1.Param('email')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Post('/update_contactNumber/:user_id'),
    __param(0, common_1.Param("user_id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update_contactNumber", null);
UsersController = __decorate([
    common_1.Controller('user'),
    serialize_interceptor_1.Serialize(user_dto_1.UserDto),
    __metadata("design:paramtypes", [users_service_1.UsersService, auth_service_1.AuthService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map