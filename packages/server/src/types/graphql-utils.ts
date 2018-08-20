import { Redis } from "ioredis";
import DataLoader = require("dataloader");
import express = require("express");
import { User } from "./../models/User";
export interface Session extends Express.Session {
  userId: string;
}

export interface Context {
  redis: Redis;
  url: string;
  session: Session;
  req: Express.Request;
  res: express.Response;
  userLoader: DataLoader<string, User>;
}

export type Resolver = (
  parent: any,
  args: any,
  context: Context,
  info: any
) => any;

export type GraphQLMiddlewareFunc = (
  resolver: Resolver,
  parent: any,
  args: any,
  context: Context,
  info: any
) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}
