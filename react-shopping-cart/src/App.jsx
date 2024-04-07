

import './App.css'
import ProductFilter from './ProductFilter';
import Products from './Products'
import Sizes from './Sizes';
import ProductCount from './ProductCount';

function App() {

  return (
  	<div className="container-fluid page">
			<div className="row">
		     <Sizes/>
				<div className="col-md-10  ">
					<div className="product-filters d-flex justify-content-between mb-3">
						<ProductCount/>
						<ProductFilter/>
					</div>
          <Products/>
				</div>
			
			</div>
		</div>
  )}

export default App;
