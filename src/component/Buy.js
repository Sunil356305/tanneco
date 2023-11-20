import React from "react";
import Nav from "./Nav";

const Buy = () => {
  return (
    <div>
      <Nav />
      <div className="buy  text-white">
        <div className="first">
          <div className="elememts">
            <span>Home</span>
            <span>Catalogue</span>
            <span>Set of 3: Multicolor Masks</span>
            <span>Accesories</span>
          </div>

          <img alt="kk" />
        </div>

        <div className="second">
          <span>sunil mehra</span>
          <span>$599</span>

          <div className="buttons ">
            <button>Buy Now</button>
            <div className="  border border-white  w-16 p-1 flex justify-center">
              <svg
                width="31"
                height="36"
                viewBox="0 0 31 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-10     "
              >
                <path
                  d="M24.3317 9.02818H30.8529V29.6788C30.8529 31.1732 30.3095 32.4639 29.2226 33.5507C28.1357 34.6376 26.913 35.1131 25.4186 35.1131H5.85486C4.36041 35.1131 3.06975 34.6376 1.98287 33.5507C0.896002 32.4639 0.420495 31.1732 0.420495 29.6788V9.02818H6.94173C6.94173 7.4658 7.28138 6.03928 8.09653 4.68069C8.84375 3.3221 9.8627 2.30316 11.2213 1.48801C12.5799 0.740783 14.0064 0.333206 15.6367 0.333206C17.1991 0.333206 18.6256 0.740783 19.9842 1.48801C21.3428 2.30316 22.3617 3.3221 23.1769 4.68069C23.9241 6.03928 24.3317 7.4658 24.3317 9.02818ZM15.6367 2.50695C13.8026 2.50695 12.2402 3.18625 11.0175 4.40898C9.72684 5.69964 9.11547 7.26202 9.11547 9.02818H22.1579C22.1579 7.26202 21.4786 5.69964 20.2559 4.40898C18.9653 3.18625 17.4029 2.50695 15.6367 2.50695ZM28.6792 29.6788V11.2019H24.3317V14.4625C24.3317 14.8022 24.1958 15.0739 23.992 15.2777C23.7882 15.4815 23.5165 15.5494 23.2448 15.5494C22.9052 15.5494 22.6334 15.4815 22.4297 15.2777C22.2259 15.0739 22.1579 14.8022 22.1579 14.4625V11.2019H9.11547V14.4625C9.11547 14.8022 8.97961 15.0739 8.77582 15.2777C8.57204 15.4815 8.30032 15.5494 8.0286 15.5494C7.68895 15.5494 7.41723 15.4815 7.21345 15.2777C7.00966 15.0739 6.94173 14.8022 6.94173 14.4625V11.2019H2.59424V29.6788C2.59424 30.6298 2.86596 31.377 3.54525 31.9884C4.15662 32.6677 4.90384 32.9394 5.85486 32.9394H25.4186C26.3016 32.9394 27.0489 32.6677 27.7282 31.9884C28.3395 31.377 28.6792 30.6298 28.6792 29.6788Z"
                  fill="#E5DFD9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
