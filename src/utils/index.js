import { fetchPerson, fetchLocation, fetchEmployee } from "./APICalls";

const wrapPromise = promise => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  };
};

const createResource = api => {
  return {
    data: wrapPromise(api)
  };
};

export { fetchEmployee, fetchPerson, fetchLocation, createResource };
