function calculateShipping(cep, weight) {
  const cepRegex = /^\d{8}$/;
  if (!cepRegex.test(cep)) {
    throw new Error("CEP inválido");
  }
  
  const firstTwoDigits = parseInt(cep.substring(0, 2));
  let baseCost, costPerKg, region;
  
  if (firstTwoDigits >= 1 && firstTwoDigits <= 19) {
    baseCost = 10.00;
    costPerKg = 1.50;
    region = "SP";
  } else if (firstTwoDigits >= 20 && firstTwoDigits <= 29) {
    baseCost = 15.00;
    costPerKg = 2.00;
    region = "RJ/ES";
  } else {
    baseCost = 20.00;
    costPerKg = 2.50;
    region = "Outros";
  }
  
  const totalCost = baseCost + (weight * costPerKg);
  
  return {
    region,
    cost: parseFloat(totalCost.toFixed(2))
  };
}

function isFreeShipping(orderTotal) {
  return orderTotal >= 200.00;
}

module.exports = {
  calculateShipping,
  isFreeShipping
};
