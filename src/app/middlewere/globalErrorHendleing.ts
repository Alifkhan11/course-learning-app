import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error";
import handelCastError from "../error/handleCaseError";
import handleValidationError from "../error/handleValidationError";
import handleDuplicateError from "../error/handleDuplicateError";
import AppError from "../error/AppError";
import { ZodError } from "zod";
import handleZodError from "../error/handleZodError";


const globalErrorHendleing: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = 'Something went wrong';

    let errorSources: TErrorSources = [
        {
            path: '',
            message: 'Something went wrong',
        },
    ];

    if (err.name === "ZodError") {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    } else if (err.name === 'CastError') {
        const simplifiedError = handelCastError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSource;
    }
    else if (err.name === 'ValidationError') {
        const simplifiedError = handleValidationError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSource;
    } else if (err?.code === 11000) {
        const simplifiedError = handleDuplicateError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSource;
    } else if (err instanceof AppError) {
        statusCode = err?.statusCode;
        message = err?.message;
        errorSources = [
            {
                path: '',
                message: err.message,
            },
        ];
    } else if (err instanceof Error) {
        message = err.message;
        errorSources = [
            {
                path: '',
                message: err.message,
            },
        ];
    }





    res.status(statusCode).json({
        success: false,
        message,
        errorSource: errorSources,
        stack: process.env.NODE_NEW === 'develpoment' ? err.stack : null,
        err,
    });
    next();
};

export default globalErrorHendleing;