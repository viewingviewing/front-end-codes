$(document).ready(function(e){
  $('.dropdown-menu').find('li').find('a').click(function(e) {
      e.preventDefault();
      var cat = $(this).text();
      $('button.btn--search').text(cat);
  });
});

function search() {
  let searchCategory = document.querySelector('.btn--search').textContent;
  let searchValue = document.querySelector('.search-container input').value.toLowerCase();
  console.log(`${searchCategory}, ${searchValue}`);
  if (searchCategory == '분류')
    alert('분류를 선택해주세요!');
  else if (searchValue == '')
    alert('검색어를 입력해주세요!');
  else {
    location.href = `search.html?category=${encodeURIComponent(searchCategory)}&value=${encodeURIComponent(searchValue)}`;
  }
}