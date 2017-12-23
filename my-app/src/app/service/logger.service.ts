


export class LoggerService {
  log(msg: any) {
    window.console.log(new Date().valueOf() +': ' +msg);
  }

  warn(msg: any) {
    window.console.warn(new Date().valueOf() +': ' +msg);
  }

  error(msg: any) {
    window.console.error(new Date().valueOf() +': ' +msg);
  }
}