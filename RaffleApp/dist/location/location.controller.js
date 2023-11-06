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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("./location.service");
const location_dto_1 = require("./dtos/location-dto");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    async assignLocation(email, locationData) {
        try {
            const location = await this.locationService.addLocationToUser(email, locationData);
            return location;
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async updateLocation(user_id, body) {
        return this.locationService.updateLocation(user_id, body);
    }
};
__decorate([
    common_1.Post('/User/addLocation/:email'),
    __param(0, common_1.Param('email')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "assignLocation", null);
__decorate([
    common_1.Post('/User/updateLocation/:user_id'),
    __param(0, common_1.Param("user_id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, location_dto_1.LocationDto]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "updateLocation", null);
LocationController = __decorate([
    common_1.Controller('locations'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map