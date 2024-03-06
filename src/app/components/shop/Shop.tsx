import { Item } from "./Item";

interface Product {
  id: string;
  title: string;
  image: {
    src: string;
  }
};

const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
      headers: new Headers({
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
      })
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
}

export const Shop = async () => {
  const { products } = await getProducts();

  return (
    <div>
      {products.map((product: Product) => <Item key={product.id} name={product.title} img={product.image.src} />)}
    </div>
  )
};
