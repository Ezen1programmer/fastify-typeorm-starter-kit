export class BAD_REQUEST_400 extends Error {
  constructor(message) {
    super(message);
    this.name = "BAD_REQUEST_400";
  }
}
export class NOT_FOUND_404 extends Error {
  constructor(message) {
    super(message);
    this.name = "NOT_FOUND_404";
  }
}
export class NOT_ACCEPTABLE_406 extends Error {
  constructor(message) {
    super(message);
    this.name = "NOT_ACCEPTABLE_406";
  }
}
export class INTERNAL_SERVER_ERROR_500 extends Error {
  constructor(message) {
    super(message);
    this.name = "INTERNAL_SERVER_ERROR_500";
  }
}

export class FAILED_ON_SERIALIZATION_VALIDATION_500 extends Error {
  constructor(message) {
    super(message);
    this.name = "FAILED_ON_SERIALIZATION_VALIDATION_500";
  }
}

export class UNSUPPORTED_MEDIA_TYPE_415 extends Error {
  constructor(message) {
    super(message);
    this.name = "UNSUPPORTED_MEDIA_TYPE_415";
  }
}

export class TO_MANY_REQUESTS_429 extends Error {
  constructor(message) {
    super(message);
    this.name = "TO_MANY_REQUESTS_429";
  }
}

export class CSRF_PROTECTION_403 extends Error {
  constructor(message) {
    super(message);
    this.name = "CSRF_PROTECTION_403";
  }
}

export class PAYLOAD_TO_LARGE_413 extends Error {
  constructor(message) {
    super(message || "Payload too large");
    this.name = "PAYLOAD_TO_LARGE_413";
  }
}

export class RESOURCE_NOT_ACCEPTABLE_406 extends Error {
  constructor(message) {
    super(message);
    this.name = "RESOURCE_NOT_ACCEPTABLE_406";
  }
}

export class SERVICE_UNAVAILABLE_EXCEPTION_503 extends Error {
  constructor(message) {
    super(message);
    this.name = "SERVICE_UNAVAILABLE_EXCEPTION_503";
  }
}
