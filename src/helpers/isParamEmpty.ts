import { Request } from "express";

export function isParamEmpty(req: Request): boolean {
    return Object.keys(req.params).length === 0;
}