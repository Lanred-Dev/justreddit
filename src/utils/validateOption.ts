/**
 * Validates if a value is in an array of options, throws if not.
 *
 * @param value
 * @param options
 * @param name
 */
export default function validateOption<T extends Record<string, string | number>>(value: any, options: T, name: string): void {
    const values = Object.values(options);
    if (!values.includes(value)) throw new TypeError(`${value} is an invalid ${name} value. Valid ones are: ${values.join(", ")}`);
}
