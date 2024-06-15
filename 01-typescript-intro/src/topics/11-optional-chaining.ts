export interface Passenger {
  name: string;
  children?: string[];
}
const passenger: Passenger = {
  name: "Pedro",
};
const passenger2: Passenger = {
  name: "Borja",
  children: ["Natalia", "Eli"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);
};
// Comprueba anteriormente que siempre va a tener hijos
const printChildren2 = (passenger: Passenger): number => {
  const howManyChildren = passenger.children!.length || 0;
  console.log(passenger.name, howManyChildren);
  return howManyChildren;
};

printChildren(passenger);
printChildren(passenger2);
