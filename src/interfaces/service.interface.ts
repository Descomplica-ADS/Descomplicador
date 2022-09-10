interface IService {
  execute: (request: any) => any;
}

abstract class StaticService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static execute(request: any): any {}
}

export {IService, StaticService};
