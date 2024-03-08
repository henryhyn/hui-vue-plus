import Refiner from './Refiner';
const Hex = {};

Hex.Refiner = Refiner;
Hex.refiner = new Refiner();
Hex.refine = text => Hex.refiner.refine(text);

export default Hex;
