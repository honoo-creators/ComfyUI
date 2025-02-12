export class CustomError extends Error {
  constructor(code, message, title, button, redirect) {
    super(message);
    this.code = code;
    this.message = message;
    this.title = title;
    this.button = button;
    this.redirect = redirect;
    this.name = "CustomError";
    if (code == "Network Error" /* NetworkError */) {
      this.message = message ? message : !title ? "NetworkError \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "NetworkError \u30BF\u30A4\u30C8\u30EB";
    } else if (code == "Validation Error" /* ValidationError */) {
      this.message = message ? message : !title ? "ValidationError \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "ValidationError \u30BF\u30A4\u30C8\u30EB";
    } else if (code == "Unknown Error" /* UnknownError */) {
      this.message = message ? message : !title ? "UnknownError \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "UnknownError \u30BF\u30A4\u30C8\u30EB";
    } else if (code == 400 /* BadRequest */) {
      this.message = message ? message : !title ? "BadRequest \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "BadRequest \u30BF\u30A4\u30C8\u30EB";
    } else if (code == 401 /* AuthorizationRequired */) {
      this.message = message ? message : !title ? "AuthorizationRequired \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "AuthorizationRequired \u30BF\u30A4\u30C8\u30EB";
    } else if (code == 403 /* Forbidden */) {
      this.message = message ? message : !title ? "Forbidden \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "Forbidden \u30BF\u30A4\u30C8\u30EB";
    } else if (code == 404 /* NotFound */) {
      this.message = message ? message : !title ? "NotFound \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "NotFound \u30BF\u30A4\u30C8\u30EB";
    } else if (code == 405 /* MethodNotAllowed */) {
      this.message = message ? message : !title ? "MethodNotAllowed \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "MethodNotAllowed \u30BF\u30A4\u30C8\u30EB";
    } else if (code == 429 /* TooManyRequests */) {
      this.message = message ? message : !title ? "TooManyRequests \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "TooManyRequests \u30BF\u30A4\u30C8\u30EB";
    } else if (code == 500 /* ServerError */) {
      this.message = message ? message : !title ? "ServerError \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "ServerError \u30BF\u30A4\u30C8\u30EB";
    } else if (code == "RGS001" /* EmailAlreadyTaken */) {
      this.message = message ? message : !title ? "EmailAlreadyTaken \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "EmailAlreadyTaken \u30BF\u30A4\u30C8\u30EB";
    } else if (code == "RGS002" /* SnsLoginError */) {
      this.message = message ? message : !title ? "SnsLoginError \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "SnsLoginError \u30BF\u30A4\u30C8\u30EB";
    } else if (code == "ERR000" /* Unknown */) {
      this.message = message ? message : !title ? "Unknown \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "Unknown \u30BF\u30A4\u30C8\u30EB";
    } else if (code == "Stripe Error" /* StripeError */) {
      this.message = message ? message : !title ? "Stripe Error \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "Stripe Error \u30BF\u30A4\u30C8\u30EB";
    } else if (code == "Google Login Error" /* GoogleLoginError */) {
      this.message = message ? message : !title ? "Google Login Error \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8" : "";
      this.title = title || "Google Login Error \u30BF\u30A4\u30C8\u30EB";
    } else {
      this.message = "\u672A\u5B9A\u7FA9\u30A8\u30E9\u30FC";
      this.title = "\u3053\u306E\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u306F\u672A\u5B9A\u7FA9\u3067\u3059\u3002";
    }
  }
  /**
   * エラーオブジェクトを受け取り、CustomErrorインスタンスを返す静的メソッド
   * @param error 任意のエラーオブジェクト
   * @returns CustomErrorインスタンス
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromError(error) {
    if (error instanceof CustomError) {
      return error;
    } else {
      const errorCode = error.code || "Unknown Error" /* UnknownError */;
      const errorMessage = error.message || "\u672A\u77E5\u306E\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002";
      return new CustomError(errorCode, errorMessage);
    }
  }
}
export var CustomErrorCode = /* @__PURE__ */ ((CustomErrorCode2) => {
  CustomErrorCode2["NetworkError"] = "Network Error";
  CustomErrorCode2["ValidationError"] = "Validation Error";
  CustomErrorCode2["UnknownError"] = "Unknown Error";
  CustomErrorCode2[CustomErrorCode2["BadRequest"] = 400] = "BadRequest";
  CustomErrorCode2[CustomErrorCode2["AuthorizationRequired"] = 401] = "AuthorizationRequired";
  CustomErrorCode2[CustomErrorCode2["Forbidden"] = 403] = "Forbidden";
  CustomErrorCode2[CustomErrorCode2["NotFound"] = 404] = "NotFound";
  CustomErrorCode2[CustomErrorCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  CustomErrorCode2[CustomErrorCode2["TooManyRequests"] = 429] = "TooManyRequests";
  CustomErrorCode2[CustomErrorCode2["ServerError"] = 500] = "ServerError";
  CustomErrorCode2["EmailAlreadyTaken"] = "RGS001";
  CustomErrorCode2["SnsLoginError"] = "RGS002";
  CustomErrorCode2["DisabledInviteCode"] = "RGS003";
  CustomErrorCode2["Unknown"] = "ERR000";
  CustomErrorCode2["StripeError"] = "Stripe Error";
  CustomErrorCode2["GoogleLoginError"] = "Google Login Error";
  return CustomErrorCode2;
})(CustomErrorCode || {});
export class NuxtError extends Error {
  constructor(url, statusCode, statusMessage, message, stack) {
    super(message);
    this.url = url;
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    this.message = message;
    this.stack = stack;
  }
}
