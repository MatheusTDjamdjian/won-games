/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Types provided from the official repo:
// https://github.com/styled-components/jest-styled-components/blob/master/typings/index.d.ts
 
 import { Plugin, NewPlugin } from 'pretty-format'
 
 declare global {
   namespace jest {
     interface AsymmetricMatcher {
       $$typeof: symbol
       sample?: string | RegExp | object | Array<any> | Function
     }
 
     type Value = string | number | RegExp | AsymmetricMatcher | undefined
 
     interface Options {
       media?: string
       modifier?: string
       supports?: string
     }
 
     interface Matchers<R, T> {
       toHaveStyleRule(property: string, value?: Value, options?: Options): R
     }
   }
 }
 
 export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>