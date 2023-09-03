export const calculateHouseLoan = ({
  principal,
  interestRate,
  years,
}: {
  principal: number;
  interestRate: number;
  years: number;
}) => {
  const monthlyRate = interestRate / 12 / 100;
  const months = years * 12;
  const monthlyPayment =
    (principal * monthlyRate * (1 + monthlyRate) ** months) /
    ((1 + monthlyRate) ** months - 1);
  const totalInterest = monthlyPayment * months - principal;
  return {
    monthlyPayment: monthlyPayment.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }),
    totalInterest: totalInterest.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }),
    totalPayment: (totalInterest + principal).toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }),
  };
};
