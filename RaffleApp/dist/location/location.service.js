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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/user.entity");
const location_entity_1 = require("./location.entity");
const typeorm_2 = require("typeorm");
let LocationService = class LocationService {
    constructor(locationRepository, userRepository) {
        this.locationRepository = locationRepository;
        this.userRepository = userRepository;
    }
    async addLocationToUser(email, locationData) {
        const user = await this.userRepository.findOneBy({ email });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const location = this.locationRepository.create(locationData);
        location.user = user;
        return this.locationRepository.save(location);
    }
    async updateLocation(user_id, locationData) {
        const user = await this.locationRepository.createQueryBuilder().update().set({
            city: locationData.city, country: locationData.country,
            state: locationData.state, street: locationData.street,
            zip_code: locationData.zip_code
        }).where("userUserId = :id", { id: user_id }).execute();
        return user;
    }
};
LocationService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(location_entity_1.Location)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map