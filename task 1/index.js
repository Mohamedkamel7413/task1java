let price = parseFloat(prompt("Enter your price"));
let discount = parseInt(prompt("Enter your discount"));
let Tax = confirm("you want to calculate with vat");
if( Tax == true){
    let Taxvalue = parseInt(prompt("Enter your Tax value"));
    let priceAfterTax = price * (1+(Taxvalue/100));
    let finalPrice = priceAfterTax * (1-(discount/100));
    console.log(finalPrice + " L.E");
}else{
    let finalPrice = price * (1-(discount/100));
    console.log(finalPrice + " L.E");
}
