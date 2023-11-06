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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const crypto_1 = require("crypto");
const util_1 = require("util");
const scrypt = util_1.promisify(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async register(name, surname, username, email, password, contact_number, gender, date_of_birth) {
        const [new_user] = await this.usersService.getAllUsers(email);
        if (new_user) {
            throw new common_1.BadRequestException('Email already exists');
        }
        const password_extension = crypto_1.randomBytes(8).toString('hex');
        const hash = (await scrypt(password, password_extension, 32));
        const result = password_extension + '.' + hash.toString('hex');
        password = result;
        const user = await this.usersService.sign_up(name, surname, username, email, password, contact_number, gender, date_of_birth);
        return user;
    }
    async sign_in(email, password) {
        const user = await this.usersService.getUserbyEmail(email);
        if (!user) {
            throw new common_1.BadRequestException('Account not register');
        }
        const [password_extension, storedHash] = user.password.split('.');
        const hash = (await scrypt(password, password_extension, 32));
        if (storedHash !== hash.toString('hex')) {
            throw new common_1.BadRequestException('Incorrect password');
        }
        return user;
    }
    async password_reset(email, password) {
        const users = await this.usersService.getUserbyEmail(email);
        if (!users) {
            throw new common_1.BadRequestException('Invalid email');
        }
        const password_extension = crypto_1.randomBytes(8).toString('hex');
        const hash = (await scrypt(password, password_extension, 32));
        const result = password_extension + '.' + hash.toString('hex');
        password = result;
        users.password = password;
        const user = await this.usersService.password_reset(users);
        return user;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map