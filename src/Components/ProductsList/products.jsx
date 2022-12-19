import { useState } from "react";
import ProductsCard from "../Product/product";

export default function ProductsList({
  data,
  bool,
  searchValue,
  cleanSearch,
  AddCart,
}) {
  return (
    <div className="max-w-[100vw] pl-4 mt-4 flex flex-col lg:pl-0 ">
      {bool ? (
        <div className="w-full flex justify-between items-center md:pr-12 py-3">
          <div className="flex gap-1  md:gap-3">
            <h2 className="text-colorGrey1 font-bold md:text-title2 leading-8">
              Resultados para:{" "}
            </h2>
            <p className="text-colorGrey2 font-bold md:text-title2 leading-8">
              {searchValue}
            </p>
          </div>
          <button
            onClick={() => cleanSearch()}
            className={`bg-colorPrimary text-center text-white font-medium text-headline3 rounded-lg md:h-9 p-2`}
          >
            Limpar Busca
          </button>
        </div>
      ) : (
        ""
      )}

      <ul className="flex overflow-auto gap-4 lg:flex-wrap lg:w-[60vw] ">
        {data.map((produto) => (
          <ProductsCard produto={produto} func={AddCart} />
        ))}
      </ul>
    </div>
  );
}
