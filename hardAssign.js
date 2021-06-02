function hardAssign(...rest) {
  return rest.reduce((prev, current) => {
    if (isObject(current)) {
      return Object.assign(prev, isDeeper(current));
    } else {
      throw new Error("Only objects can be parameters");
    }
  }, {});

  function isDeeper(object) {
    const keys = Object.keys(object);
    let match = false;
    keys.forEach((key) => {
      isObject(object[key]) && (match = true);
    });
    if (match) {
      return JSON.parse(JSON.stringify(object));
    } else {
      return object;
    }
  }

  function isObject(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
  }
}
