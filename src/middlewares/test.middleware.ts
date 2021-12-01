import { Request, Response, NextFunction } from "express"

const testMiddleware = (_req: Request, _res: Response, next: NextFunction) => {
    console.log('Testing middleware....')
    next()
}

export default testMiddleware