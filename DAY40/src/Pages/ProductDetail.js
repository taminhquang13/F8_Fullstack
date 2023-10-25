export const ProductDetail = ({ data }) => {
  const { id } = data;
  console.log(data);

  return `<h1>Chi tiết sản phẩm ${id}</h1>
  <button onclick="navigate('/product')" >Back</button>
  `;
};
