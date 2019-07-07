export class MathUtils {
    static stringMathOperation(mathOperation: string, ...param): number {
        console.log(...param)
        return eval(mathOperation);
    }

    static normalizeNumber(badNumber: number): number {
        return Math.round(badNumber * 1000000000) / 1000000000;
    }
}
