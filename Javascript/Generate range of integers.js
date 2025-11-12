function generateRange(min, max, step) {
    return Array.from(
        { length: Math.floor((max - (min -= step)) / step) },
        () => min += step
    )
}
