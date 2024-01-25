import { Either, left, right } from "./either";

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10);
  }

  return left("error");
}

test("success result", () => {
  const success = doSomething(true);

  expect(success.value).toEqual(10);
  expect(success.isRight()).toBe(true);
});

test("error result", () => {
  const error = doSomething(false);

  expect(error.value).toEqual("error");
  expect(error.isLeft()).toBe(true);
});
