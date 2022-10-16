import CorsWrapper from 'cors';
import { RequestHandler } from 'express';

const CORS_OPTIONS = {
    methods: ['GET', 'OPTIONS'],
};

function promisifyMiddleware(middleware: RequestHandler) {
    return (req: any, res: any) =>
        new Promise((resolve, reject) => {
            middleware(req, res, (result: Error | unknown) => {
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            })
        })
}

const cors = promisifyMiddleware(CorsWrapper(CORS_OPTIONS));

export default cors;