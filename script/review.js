document.addEventListener('DOMContentLoaded', () => {
  const reviewCountKey = 'reviewCount';

  let reviewCount = parseInt(localStorage.getItem(reviewCountKey), 10);

  reviewCount += 1;
  localStorage.setItem(reviewCountKey, reviewCount);

  const reviewCounterElement = document.getElementById('reviewCounter');
  if (reviewCounterElement) {
    reviewCounterElement.textContent = `You have submitted ${reviewCount} review(s).`;
  }
});

  