const showDB = [
  {
    "showName" : "2019 Wanna One Concert［Therefore］",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/18/18018073_p.gif",
    "showDate" : "2019.01.24 ~ 2019.01.27",
    "artistName" : "워너원",
    "hallName" : "고척스카이돔"
  },
  {
    "showName" : "SEVENTEEN WORLD TOUR ［BE THE SUN］- SEOUL",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/22/22006106_p.gif",
    "showDate" : "2022.06.25 ~ 2022.06.26",
    "artistName" : "세븐틴",
    "hallName" : "고척스카이돔"
  },
  {
    "showName" : "2021 SVT 5TH FAN MEETING 〈SEVENTEEN in CARAT LAND〉",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/21/21005587_p.gif",
    "showDate" : "2021.08.06 ~ 2021.08.08",
    "artistName" : "세븐틴",
    "hallName" : "잠실실내체육관"
  },
  {
    "showName" : "2022 알렌 워커(Alan Walker) 내한공연",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/22/22006873_p.gif",
    "showDate" : "2022.09.14 ~ 2022.09.14",
    "artistName" : "알렌 워커",
    "hallName" : "잠실실내체육관"
  },
  {
    "showName" : "TOMORROW X TOGETHER WORLD TOUR 〈ACT : LOVE SICK〉 IN SEOUL",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/22/22005310_p.gif",
    "showDate" : "2022.07.02 ~ 2022.07.03",
    "artistName" : "투모로우바이투게더",
    "hallName" : "잠실실내체육관"
  },
  {
    "showName" : "2018 Asia Song Festival - Day 2",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/18/18011915_p.gif",
    "showDate" : "2018.10.03",
    "artistName" : "이특(박정수), 세븐틴, 레드벨벳, 워너원, 프로미스나인, 모모랜드",
    "hallName" : "부산아시아드주경기장"
  },
];
const hallDB = [
  {
    "hallName" : "고척스카이돔",
    "hallImg" : "http://ticketimage.interpark.com/HousingImage/goods/template/noimage_s.gif"
  },
  {
    "hallName" : "잠실실내체육관",
    "hallImg" : "http://ticketimage.interpark.com/HousingImage/goods/template/noimage_s.gif"
  },
  {
    "hallName" : "부산아시아드주경기장",
    "hallImg" : "http://ticketimage.interpark.com/HousingImage/goods/template/noimage_s.gif"
  },
];
const artistDB = [
  {
    "artistName" : "세븐틴",
    "artistImg" : "https://ssl.pstatic.net/sstatic/people/portraitGroup/202207/20220711113610645.jpg",
    "recentShow" : "SEVENTEEN WORLD TOUR ［BE THE SUN］- SEOUL"
  },
  {
    "artistName" : "워너원",
    "artistImg" : "https://ssl.pstatic.net/sstatic/people/48/201811191455102433.jpg",
    "recentShow" : "2019 Wanna One Concert［Therefore］"
  },
  {
    "artistName" : "투모로우바이투게더",
    "artistImg" : "https://ssl.pstatic.net/sstatic/people/portraitGroup/202204/2022042715012999.jpg",
    "recentShow" : "TOMORROW X TOGETHER WORLD TOUR 〈ACT : LOVE SICK〉 IN SEOUL"
  },
];
const searchValue = decodeURIComponent(window.location.href).split("value=")[1];

$(document).ready(function(e){
  searchAll(searchValue);
  $('.search-result h2>b:first-child').text(searchValue);
});

function searchFilter(data, types, search) {
  return data.map((d) => {
    for(i=0; i<types.length; i++){
      if (d[types[i]].toLowerCase().includes(search)) {
        console.log(d)
        return d;
      }
    }
  });
}

function searchAll(value){
  // 1. 공연장 데이터 - 공연장명 검색
  let hallRes = searchFilter(hallDB, ["hallName"], value).filter((d) => d !== undefined);
  console.log(hallRes);
  if (hallRes.length > 0) {
    $('.hall-result').show();
    $('.hall-result .result__num').text(hallRes.length);
    hallRes.forEach(res => {
      temp_html =  `<li>
                      <div class="col photo">
                        <a href="review.html">
                          <img src=${res.hallImg} alt=${res.hallName}>
                        </a>
                      </div>
                      <div class="col data">
                        <div class="itemName">
                          <a href="review.html">${res.hallName}</a>
                        </div>
                      </div>
                    </li>`;
      $('.hall-result .itemList').append(temp_html);
    });
  }

  // 2. 공연 데이터 - 공연장명, 공연명, 아티스트명 검색
  showRes = searchFilter(showDB, ["hallName", "showName", "artistName"], value).filter((d) => d !== undefined);
  if (showRes.length) {
    $('.show-result').show();
    $('.show-result .result__num').text(showRes.length);
    showRes.forEach(res => {
      temp_html =  `<li>
                      <div class="col photo">
                          <img src=${res.posterImg} alt="${res.hallName}">
                        </a>
                      </div>
                      <div class="col data">
                        <div class="itemName">
                          <a href="javascript:void(0)">${res.showName}</a>
                        </div>
                        <div class="itemInfo">
                          <span class="hall">${res.hallName}</span>
                          <span class="date">${res.showDate}</span>
                        </div>
                      </div>
                    </li>`;
      $('.show-result .itemList').append(temp_html);
    });
  }

  // 3. 아티스트 데이터 - 아티스트명
  let artistRes = searchFilter(artistDB, ["artistName"], value).filter((d) => d !== undefined);
  console.log(artistRes);
  if (artistRes.length > 0) {
    $('.artist-result').show();
    console.log(artistRes.length);
    $('.artist-result .result__num').text(artistRes.length);
    artistRes.forEach(res => {
      temp_html =  `<li>
                      <div class="col photo">
                        <a href="javascript:void(0)">
                          <img src=${res.artistImg} alt=${res.artistName}>
                        </a>
                      </div>
                      <div class="col data">
                        <div class="itemName">
                          <a href="javascript:void(0)">${res.artistName}</a>
                        </div>
                        <div class="itemInfo">
                          <span class="recentShow">최근 공연 : ${res.recentShow}</span>
                        </div>
                      </div>
                    </li>`;
      $('.artist-result .itemList').append(temp_html);
    });
  }


  if (hallRes == 0 && showRes == 0 && artistRes == 0) {
    $('.search-result h2').text(`${searchValue}에 대한 검색결과가 없습니다.`);
  }
}