import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const defaultResponse = {
      timestamp: new Date().toISOString(),
      path: request.url,
      data: request.body,
    };

    switch (exception.code) {
      case 11000: {
        return response.status(409).json({
          ...defaultResponse,
          statusCode: 409,
          message: `Pre-existing data exists`,
        });
      }
      default: {
        return response.status(500).json({
          statusCode: 500,
        });
      }
    }
  }
}
