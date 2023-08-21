const NumberToCurrency = ({ value }) => {
  const centsValue = value / 100;
  const formattedValue = centsValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return <span>{formattedValue}</span>;
};

export default NumberToCurrency;