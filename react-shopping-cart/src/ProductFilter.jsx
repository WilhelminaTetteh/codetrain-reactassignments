import React from 'react'

function ProductFilter() {
  return (
    <form action=""> <div className="form-row align-items-center">
							<label className=" mr-2 my-0 font-weight-bold">Order By</label>
							<div className="col-auto my-1 d-flex">
								<select className="custom-select  select-choice font-weight-bold" id="inlineFormCustomSelect">
									<option selected>Select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
              </div> 
            </form>
  )}

export default ProductFilter;