import lhyRequest from "..";

export function getHomeGoodPriceData() {
  return lhyRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return lhyRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return lhyRequest.get({
    url: "/home/discount"
  })
}


export function getHomeHotRecommendData() {
  return lhyRequest.get({
    url: "/home/hotrecommenddest"
  })
}


export function getHomeLongForData() {
  return lhyRequest.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return lhyRequest.get({
    url: "/home/plus"
  })
}