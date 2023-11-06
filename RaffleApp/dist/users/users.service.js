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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const role_entity_1 = require("../role/role.entity");
let UsersService = class UsersService {
    constructor(userReposiroty, roleRepository) {
        this.userReposiroty = userReposiroty;
        this.roleRepository = roleRepository;
    }
    async sign_up(name, surname, username, email, password, contact_number, gender, date_of_birth) {
        const new_user = await this.userReposiroty.create({ name, surname, username, email, password, contact_number, gender, date_of_birth });
        const role = await this.role_assignment(email);
        new_user.role = role;
        return this.userReposiroty.save(new_user);
    }
    getAllUsers(email) {
        return this.userReposiroty.find({ where: { email } });
    }
    getUserbyEmail(email) {
        const user = this.userReposiroty.findOneBy({ email });
        return user;
    }
    getUserbyId(user_id) {
        const user = this.userReposiroty.findOneBy({ user_id });
        return user;
    }
    async delete_account(email) {
        const account = await this.getUserbyEmail(email);
        if (!account) {
            throw new Error("User does not exists");
        }
        return this.userReposiroty.remove(account);
    }
    async password_reset(user) {
        return this.userReposiroty.save(user);
    }
    async role_assignment(email) {
        if (email === "savvasbmwm3@gmail.com") {
            const role = await this.roleRepository.findOneBy({ role_name: "Admin" });
            return role;
        }
        else {
            const role = await this.roleRepository.findOneBy({ role_name: "User" });
            return role;
        }
    }
    async change_contactNumber(user_id, contact_number) {
        const user = await this.userReposiroty.createQueryBuilder().update().set({ contact_number: contact_number }).where("user_id = :id", { id: user_id }).execute();
        return user;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.Users)),
    __param(1, typeorm_1.InjectRepository(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map