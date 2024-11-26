import { Request, Response, NextFunction } from "express";

export const errorGlobalHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.status || 500; // Si no hay statusCode en el error, usamos 500 como valor predeterminado
  const message = err.message || "An error occurred"; // Si no hay mensaje en el error, usamos el mensaje predeterminado

  res.status(statusCode).json({
    error: {
      message,
      status: statusCode,
      timestamp: new Date().toISOString(), // La fecha y hora de cuando ocurrió el error
    },
  });
};
