const storedID = localStorage.getItem('id');

if (storedID) {
  $('.sub-menu').empty();
  let temp_html = `<div class="profile">
                    <img src="img/user_navy.png" alt="프로필사진">
                    <span><b>${storedID}</b>님</span>
                  </div>
                  <a href="javascript:void(0)">리뷰 작성하기</a>
                  <a href="javascript:void(0)">마이페이지</a>`
  $('.sub-menu').append(temp_html);
}


function search() {
  let searchValue = document.querySelector('.search-container input').value.toLowerCase();
  if (searchValue == '')
    alert('검색어를 입력해주세요!');
  else {
    location.href = `search.html?value=${encodeURIComponent(searchValue)}`;
  }
}