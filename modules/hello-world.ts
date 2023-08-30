import { HttpProblems, ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  return HttpProblems.notFound(request, context);
}
