function search() {
  let searchValue = document.querySelector('.search-container input').value.toLowerCase();
  if (searchValue == '')
    alert('검색어를 입력해주세요!');
  else {
    location.href = `search.html?value=${encodeURIComponent(searchValue)}`;
  }
}