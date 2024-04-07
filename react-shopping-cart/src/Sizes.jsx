import React from 'react'

function Sizes() {
  return (
    <div className="col-md-2">
    <h5 className="font-weight-bold mb-4">Sizes:</h5>
    <ul className="sizes list-unstyled d-flex flex-wrap">
        <li
            className="size d-flex justify-content-center align-items-center rounded-circle"
        >
            XS
        </li>
        <li
            className="size d-flex justify-content-center align-items-center rounded-circle"
        >
            S
        </li>
        <li
            className="size d-flex justify-content-center align-items-center rounded-circle"
        >
            M
        </li>
        <li
            className="size d-flex justify-content-center align-items-center rounded-circle"
        >
            ML
        </li>
        <li
            className="size d-flex justify-content-center align-items-center rounded-circle"
        >
            L
        </li>
        <li
            className="size d-flex justify-content-center align-items-center rounded-circle"
        >
            XL
        </li>
        <li
            className="size d-flex justify-content-center align-items-center rounded-circle"
        >
            XXL
        </li>
    </ul>
    <p className="rating-text text-center text-black-50">
        Leave a star on Github if this repository was useful :)
    </p>
    <div
        className="rating d-flex text-center justify-content-center"
    >
        <button
            className="btn py-0 px-2 d-flex align-items-center border-secondary mr-3 rating-button me-3"
        >
            <img src="./images/star-custom (1).png" alt="" />
            <p className="mb-0 ml-1 ">Star</p>
        </button>
        <button
            className="btn d-flex justify-content-center position-relative ratings-count"
        >
            <p className="m-0">848</p>
            <div className="position-absolute pointy"></div>
        </button>
    </div>
</div>
  )
}

export default Sizes