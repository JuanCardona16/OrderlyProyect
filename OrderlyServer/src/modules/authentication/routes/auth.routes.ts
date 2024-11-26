import { PublicRoutes } from "@/config/constants";
import { Router } from "express";
import AuthenticationController from '../controllers/auth.controller'

const authenticationRoutes: Router = Router();

// Admin Routes
authenticationRoutes.post(PublicRoutes.ADMIN_REGISTER, AuthenticationController.AdminRegister);

export default authenticationRoutes;
