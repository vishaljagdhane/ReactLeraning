import React from 'react';

export default function ArrayAndMap() {
    const array = ["vishal", "Haribhau", "Jagdhane", "Pune", "Auranagbad"];
    const array1 = ["Pooja", "Vishal", "Jagdhane", "Pune", "Auranagbad"];
    const array2 = [...array, ...array1];

    // Using forEach to log items
    const forEachItems = [];
    array.forEach((item, index) => {
        forEachItems.push(`${index}: ${item}`);
    });

    // Using filter to get items that contain 'a'
    const filteredItems = array.filter(item => item.includes('a'));

    // Using reduce to concatenate items
    const concatenatedString = array.reduce((acc, item) => acc + ' ' + item, '');

    return (
        <>
            <h1>Array Methods</h1>
            <div style={{ position: 'relative', display: 'flex', gap: '15px' }}>
                <div>
                    <h2>Map:</h2>
                    <ul>
                        {array.map((item, index) => (
                            <li key={`array-item-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>forEach:</h2>
                    <ul>
                        {forEachItems.map((item, index) => (
                            <li key={`foreach-item-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Filter (items containing 'a'):</h2>
                    <ul>
                        {filteredItems.map((item, index) => (
                            <li key={`filter-item-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Reduce (concatenated string):</h2>
                    <p>{concatenatedString}</p>
                </div>
                <div>
                    <h2>Combined Array (using Spread):</h2>
                    <ul>
                        {array2.map((item, index) => (
                            <li key={`array2-item-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
