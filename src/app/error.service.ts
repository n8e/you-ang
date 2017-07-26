import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {
  private _error: string;

  getErrorMessage(): string {
    return this._error;
  };

  setErrorMessage(message: string): void {
    this._error = message;
  };
}
