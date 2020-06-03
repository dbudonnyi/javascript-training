const categories = document.querySelectorAll('#categories > li.item');

console.log(`В списке ${categories.length} категории.`);
categories.forEach(category => {
  console.log(`Категория - ${category.querySelector('h2').textContent}
Количество элементов - ${category.querySelectorAll('ul > li').length}`);
});
