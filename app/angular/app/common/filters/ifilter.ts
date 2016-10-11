export type IFilterReturnType = (value: any, ...agrs) => any;
export type IFilter = (...services) => IFilterReturnType;
