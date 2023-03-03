import {Endpoints} from "@octokit/types";

export type Repository = Endpoints["GET /search/repositories"]["response"]["data"]["items"][0]
export type Repositories = Endpoints["GET /search/repositories"]["response"]["data"]["items"]
export type RepositoriesResponseData = Endpoints["GET /search/repositories"]["response"]["data"]