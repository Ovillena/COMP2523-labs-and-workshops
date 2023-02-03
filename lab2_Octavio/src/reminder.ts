import { question } from "readline-sync";
import { LiteralSyntaxKind } from "typescript";
import TagList from "./tag";

export default class Reminder {
  constructor(
    private _theReminder: string,
    private _tag: string,
    private _isComplete: boolean = false
  ) {}

  getReminder(): string {
    return this._theReminder.toLowerCase();
  }

  getTag(): string {
    return this._tag.toUpperCase();
  }

  setReminder(): void {
    let mod = question("Change your reminder to: ");
    this._theReminder = mod;
  }

  //modify thereminder

  toggleComplete(): void {
    if (this._isComplete) {
      this._isComplete = false;
    } else {
      this._isComplete = true;
    }
  }
}
