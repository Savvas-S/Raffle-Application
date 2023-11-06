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
exports.Location = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let Location = class Location {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Location.prototype, "location_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Location.prototype, "country", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Location.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Location.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Location.prototype, "street", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Location.prototype, "zip_code", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.Users, user => user.location, { onDelete: "CASCADE" }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.Users)
], Location.prototype, "user", void 0);
Location = __decorate([
    typeorm_1.Entity()
], Location);
exports.Location = Location;
//# sourceMappingURL=location.entity.js.map