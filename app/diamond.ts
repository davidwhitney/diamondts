import * as os from 'os'

export class Diamond {
    private _lines: string[];

    public constructor(midpointLetter: string) {
        this._lines = [];
        this.create(midpointLetter);
    }

    private create(midpointLetter: string): void {
        const distance = midpointLetter.charCodeAt(0) - 65;        
        const charIndex = Array.from(Array(distance + 1).keys());
        const topHalf: string[] = [];

        charIndex.forEach((n: number) => {
            const char = String.fromCharCode(n + 65);
            if(char == 'A') {
                topHalf.push("A");
                return;
            }

            const requiredSpaces = topHalf[topHalf.length -1].length;
            topHalf.push(char + " ".repeat(requiredSpaces) + char);
        });

        const widestPoint = topHalf[topHalf.length -1].length;

        for(const i in topHalf) {
            const paddingEitherSide = (widestPoint - topHalf[i].length) / 2;
            const padding = " ".repeat(paddingEitherSide);
            topHalf[i] = padding + topHalf[i] + padding;
        }

        const reversed = topHalf.slice(0, topHalf.length-1).reverse()
        this._lines.push(...topHalf, ...reversed);
    }

    get lines():string[] { return this._lines; }
    public toString = (): string => this._lines.join(os.EOL);
}