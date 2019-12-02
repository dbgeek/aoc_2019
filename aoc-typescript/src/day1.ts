export const fuelForMass = (mass: number): number =>  {
    return (Math.floor(mass / 3) - 2);
}

export const totalFuel = (mass: number): number => {
    const fuel = (Math.floor(mass / 3) - 2);

    if ( fuel <= 0) {
        return 0
    };

    return totalFuel(fuel) + fuel;
}