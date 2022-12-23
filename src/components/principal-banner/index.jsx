import './style.css';
import data from  '../../data/data.json';
import ElementPrincipalBanner from '../element-principal-banner';

function elementBanner() {
  const firstProduct = data[0];
  console.log(firstProduct)
  return firstProduct.name;
}

function PrincipalBanner() {
  return (<div class="banner-principal">
    {elementBanner()}
    {/* {data[0].name} */}
    {/* <ElementPrincipalBanner data={data} /> */}
  </div>);
}

export default PrincipalBanner;
