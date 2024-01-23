const button=document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttondelivery=document.querySelector("#deliveryServise");
buttondelivery.addEventListener("click",showDelivery);
function showDelivery(e){
    e.preventDefault();
    delivery.style.display="block";
}


function calculateAmount(e){
    e.preventDefault();
    const money=document.querySelector("#money").value;
    const people=document.querySelector("#people").value;
    const delivery=document.querySelector("#delivery").value;

    if (money===""|| people===""|| people<1){
        Swal.fire({
            icon: 'error',
            title: 'Oops...try again!',
            text: 'Something went wrong!',
          
          })
    }
    
    let amountPerPerson=money/people;
   
    let deliveryPerPerson=(money*delivery)/people;
    
    let totalSum=amountPerPerson + deliveryPerPerson;
   
   amountPerPerson=amountPerPerson.toFixed(2);
   deliveryPerPerson=deliveryPerPerson.toFixed(2);
   totalSum=totalSum.toFixed(2);

   document.querySelector("#dividedBill").textContent=amountPerPerson;
   document.querySelector("#dividedDelivery").textContent=deliveryPerPerson;
   document.querySelector("#totalAndDelivery").textContent=totalSum;




}