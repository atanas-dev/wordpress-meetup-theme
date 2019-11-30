export default {
  initialize() {
    const german   = ['BMW', 'Audi', 'VW', 'Mercedes'];
    const japanese = ['Toyota', 'Nissan'];

    console.log(`German Brands: ${german.join(', ')}`);
    console.log(`Japanese Brands: ${japanese.join(', ')}`);
    console.log(`All Brands: ${[...german, ...japanese].join(', ')}`);
  },
};
