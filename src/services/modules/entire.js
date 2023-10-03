import lhyRequest from "../request";

export function getEntireList(offset = 0, size = 20) {
  return lhyRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}