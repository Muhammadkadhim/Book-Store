const one = {
    fruit: "🥝",
    nutrients: {
        energy: "255kJ",
        minerals: {
            name: "calcium",
        },
    },
};

const two = {
    fruit: "🥝",
    nutrients: {
        energy: "255kl",
        minerals: {
            name: "calcium",
        },
    },
};

// Using JavaScript
console.log(JSON.stringify(one) === JSON.stringify(two)); // true
