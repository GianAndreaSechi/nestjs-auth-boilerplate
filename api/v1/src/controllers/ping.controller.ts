import { Controller, Get } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
// Convienience Function
const AllowUnauthorizedRequest = () => SetMetadata('allowUnauthorizedRequest', true);

@Controller('ping')
export class PingController {
    @Get()
    @AllowUnauthorizedRequest()
    getPing() {
        return JSON.stringify({'ping': Date.now()});
    }
}