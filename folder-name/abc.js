
  const trendingRow = document.getElementById('trendingRow');

  function scrollTrendingLeft() {
    trendingRow.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  function scrollTrendingRight() {
    trendingRow.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

