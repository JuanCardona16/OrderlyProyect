import { PublicRoutes } from "@/config/constants";
import { Router } from "express";

const authenticationRoutes: Router = Router();

authenticationRoutes.get(PublicRoutes.LOGIN, (req, res) => {
  res.send({
    status: 200,
    message: "Login Page",
  });
});

export default authenticationRoutes;
