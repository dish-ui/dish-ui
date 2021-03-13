export default function getComponentClassName(
    name: string,
    suffix: string = '',
    ...addition: string[]
): string {
    return (
        `dish-ui dish-${name}${suffix ? '-' + suffix : ''}` +
        `${addition.join(' ')}`
    );
}
