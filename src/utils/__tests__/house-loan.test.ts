import { calculateHouseLoan } from '../house-loan.ts';

describe('Calculate House Loan', () => {
  it('should return correct value', () => {
    expect(
      calculateHouseLoan({
        principal: 450000,
        years: 10,
        interestRate: 4.25,
      }),
    ).toStrictEqual({
      monthlyPayment: (4609.69).toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
      totalInterest: (103162.68).toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
      totalPayment: (553162.68).toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    });
  });
});
