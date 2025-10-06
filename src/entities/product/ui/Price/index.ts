import Main from "./Price";
import FullPrice from "./FullPrice";
import ResultPrice from "./ResultPrice";
import Currency from "./Currency";

const Price = Object.assign(Main, {
  Full: FullPrice,
  Result: ResultPrice,
  Currency: Currency,
});

export { Price };
