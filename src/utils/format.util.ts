import "intl";
import "intl/locale-data/jsonp/pt";

export function formatCurrency(value: number) {
  const localFormat = {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "code",
  };

  const result = new Intl.NumberFormat("pt", localFormat)
    .format(value)
    .replace(/[a-z]{3}/i, "")
    .trim();

  return `R$ ${result}`;
}
