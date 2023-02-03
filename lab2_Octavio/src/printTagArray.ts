import Reminder from "./reminder";

export default class TagArrayPrint {
  // constructor(
  //   private _tagArray: string[],
  //   private _cache: { [k: string]: any }
  // ) {}

  printTagArray = (tagArray: string[], cache: { [k: string]: any }): void => {
    for (let tag of tagArray) {
      //prints each reminder under the same tag
      console.log(`${tag}\n${cache[tag]}\n`);
    }
  };
}
