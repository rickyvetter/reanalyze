/* TypeScript file generated from Records.res by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const RecordsBS = require('./Records.bs');

import {list} from './ReasonPervasives.gen';

// tslint:disable-next-line:interface-over-type-literal
export type coord = {
  readonly x: number; 
  readonly y: number; 
  readonly z?: number
};

// tslint:disable-next-line:interface-over-type-literal
export type person = {
  readonly name: string; 
  readonly age: number; 
  readonly address?: string
};

// tslint:disable-next-line:interface-over-type-literal
export type business = {
  readonly name: string; 
  readonly owner?: person; 
  readonly address?: string
};

// tslint:disable-next-line:interface-over-type-literal
export type payload<a> = { readonly num: number; readonly payload: a };

// tslint:disable-next-line:interface-over-type-literal
export type record = { readonly v: number; readonly w: number };

// tslint:disable-next-line:interface-over-type-literal
export type business2 = {
  readonly name: string; 
  readonly owner: (null | undefined | person); 
  readonly address2: (null | undefined | string)
};

// tslint:disable-next-line:interface-over-type-literal
export type mix = {
  readonly a: number; 
  readonly b: number; 
  readonly c?: {
    readonly name: string; 
    readonly surname: string
  }
};

// tslint:disable-next-line:interface-over-type-literal
export type myRec = { readonly type: string };

// tslint:disable-next-line:interface-over-type-literal
export type myObj = { readonly type_: string };

// tslint:disable-next-line:interface-over-type-literal
export type myRecBsAs = { readonly type_: string };

export const origin: coord = RecordsBS.origin;

export const computeArea: (param:coord) => number = RecordsBS.computeArea;

export const coord2d: (x:number, y:number) => coord = function (Arg1: any, Arg2: any) {
  const result = Curry._2(RecordsBS.coord2d, Arg1, Arg2);
  return result
};

export const findAddress: (business:business) => list<string> = RecordsBS.findAddress;

export const someBusiness: business = RecordsBS.someBusiness;

export const findAllAddresses: (businesses:business[]) => string[] = RecordsBS.findAllAddresses;

export const getPayload: <T1>(param:payload<T1>) => T1 = RecordsBS.getPayload;

export const getPayloadRecord: (param:payload<record>) => record = RecordsBS.getPayloadRecord;

export const recordValue: record = RecordsBS.recordValue;

export const payloadValue: payload<record> = RecordsBS.payloadValue;

export const getPayloadRecordPlusOne: (param:payload<record>) => record = RecordsBS.getPayloadRecordPlusOne;

export const findAddress2: (business:business2) => list<string> = RecordsBS.findAddress2;

export const someBusiness2: business2 = RecordsBS.someBusiness2;

export const computeArea3: (o:{
  readonly x: number; 
  readonly y: number; 
  readonly z: (null | undefined | number)
}) => number = RecordsBS.computeArea3;

export const computeArea4: (o:{
  readonly x: number; 
  readonly y: number; 
  readonly z?: number
}) => number = RecordsBS.computeArea4;

export const testMyRec: (x:myRec) => string = function (Arg1: any) {
  const result = RecordsBS.testMyRec({type_:Arg1.type});
  return result
};

export const testMyRec2: (x:myRec) => myRec = function (Arg1: any) {
  const result = RecordsBS.testMyRec2({type_:Arg1.type});
  return {type:result.type_}
};

export const testMyObj: (x:myObj) => string = RecordsBS.testMyObj;

export const testMyObj2: (x:myObj) => myObj = RecordsBS.testMyObj2;

export const testMyRecBsAs: (x:myRecBsAs) => string = RecordsBS.testMyRecBsAs;

export const testMyRecBsAs2: (x:myRecBsAs) => myRecBsAs = RecordsBS.testMyRecBsAs2;
