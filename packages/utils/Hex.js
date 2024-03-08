import Refiner from './Refiner';
import Retrofit from './Retrofit';
const Hex = {};

Hex.Refiner = Refiner;
Hex.refiner = new Refiner();
Hex.refine = text => Hex.refiner.refine(text);
Hex.Retrofit = Retrofit;

Hex.empty = () => {};

Hex.validAny = any => any !== null && any !== undefined;

export default Hex;
