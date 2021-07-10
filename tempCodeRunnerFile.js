amount=prompt("Enter amount to withdraw")
const cashier = (amount) =>{
    a=amount%100
    hndr=amount-a
    hndr=hndr/100
    ten=a%50
    fifty=a-ten
    fifty=fifty/50
    ten=ten/10
    document.write(`you will have ${hndr} hundred notes ${fifty} fifty notes ${ten} Ten notes`)
}
cashier(amount)
