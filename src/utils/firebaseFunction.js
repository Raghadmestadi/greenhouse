import firebase from "./firebase"

export const getProductsData = async () => {
  const Products = await firebase.database().ref().once("value")

  const ProductsData = Products.val()
  console.log(ProductsData)
  return ProductsData
}
