function getDrink(name: string) {
    const drinks = [
        { //tea
            name: 'leaf',
            caffeine: '15-70 mg/cup',
            age: '4,000+ years'
        },
        { //coffee
            name: 'bean',
            caffeine: '80–185 mg/cup',
            age: '1,000+ years'
        }
    ];

    return name == 'tea' ? drinks[0] : drinks[1];
}

export default function Drink({ name }) {
    const drink = getDrink(name);

    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{drink.name}</dd>
                <dt>Caffeine content</dt>
                <dd>{drink.caffeine}</dd>
                <dt>Age</dt>
                <dd>{drink.age}</dd>
            </dl>
        </section>
    );
}