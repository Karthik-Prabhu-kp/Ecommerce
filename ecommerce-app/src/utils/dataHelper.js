


export function categorySort(products,category) {
    console.log(category)
    let filterProducts = [];
    let flag = false;
    for (const item of category) {
      if (item.isChecked) {
        flag = true;
        filterProducts = filterProducts.concat(products.filter((ele) => ele.categoryName === item.categoryName));
      }
    }console.log(filterProducts)
    return flag ? filterProducts : products;
}

export function getFilteredProducts(products,filterByPrice,filterByRating){ ;
    console.log('Filter By Price:', filterByPrice);
    console.log('Filter By Rating:', filterByRating);
    console.log('Products:', products);

    let filteredProduct = products;

    if (filterByRating) {
    filteredProduct = filteredProduct.filter((item) => item.rating >= filterByRating);
  }
    if (filterByPrice) {
    filteredProduct = filteredProduct.filter((item) => item.price <= +filterByPrice);
  }
  console.log('Filtered Products:', filteredProduct);
    return filteredProduct;
};

