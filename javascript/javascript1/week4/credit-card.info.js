// Credit card info
function getCardType(accountNumber)
{
let result = "unknown"; //start without knowing the credit card type

  //first check for MasterCard
  if (/^5[1-5]/.test(accountNumber))
  {
    result = "mastercard";
  }

  //then check for Visa
  else if (/^4/.test(accountNumber))
  {
    result = "visa";
  }

  //then check for visa electron
  else if ("^(4026|417500|4508|4844|491(3|7))".test(accountNumber))
  {
    result = "visa electorn";
  }

  return result;
}
console.log(getCardType(4781321334789876)); // 'visa'