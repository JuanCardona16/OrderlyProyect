import { RequestHandler } from "express";
import AuthenticationServices from '../services/auth.service';
import { setError } from "@/helpers";

class AuthenticationController {

  AdminRegister: RequestHandler = async (req, res, next) => {
    try {
      const data = req.body 

      if (!data) next(setError(500, "Bad Request"))

      const response = await AuthenticationServices.AdminRegister(data);

      res.status(201).json({
        success: true,
        accessToken: response
      })
    } catch (error) {
      return next(error);
    }
  }

  // login: RequestHandler = async (req, res, next) => {
  //   try {
  //     const response = await AuthenticationServices.register(req, res, next);
  //     return response
  //   } catch (error) {
  //     return next(error);
  //   }
  // }

  // logout: RequestHandler = async (req, res, next) => {
  //   try {
  //     const response = await AuthenticationServices.register(req, res, next);
  //     return response
  //   } catch (error) {
  //     return next(error);
  //   }
  // }

}

export default new AuthenticationController();