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
exports.AppController = void 0;
const user_model_1 = require("./models/user.model");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("./app.service");
const typeorm_2 = require("typeorm");
let AppController = class AppController {
    constructor(appService, userRepository) {
        this.appService = appService;
        this.userRepository = userRepository;
    }
    getHello() {
        return this.userRepository.find({
            order: {
                id: 'DESC',
            },
        });
    }
    async getUserById(id) {
        return this.userRepository.findOne({
            where: { id },
        });
    }
    createUser(body) {
        const { username, email } = body;
        const newUser = this.userRepository.create({ username, email });
        return this.userRepository.save(newUser);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('list/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)('add/user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createUser", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_model_1.User)),
    __metadata("design:paramtypes", [app_service_1.AppService,
        typeorm_2.Repository])
], AppController);
//# sourceMappingURL=app.controller.js.map