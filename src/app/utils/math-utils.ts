export class MathUtils {
    static stringMathOperation(mathOperation: string): number {
        return this.normalizeNumber(eval(mathOperation));
    }

    static normalizeNumber(badNumber: number): number {
        return Math.round(badNumber * 1000) / 1000;
    }
}
