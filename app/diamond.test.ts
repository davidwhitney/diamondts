import { Diamond } from "./diamond";

describe("Diamond kata", () => {
    it("Given A, returns only A.", () => {
        const sut = new Diamond("A");
        const asString = sut.toString();
        expect(asString).toBe("A");
    });

    it("Given not A, first row contains A", () => {
        const sut = new Diamond("D");        
        expect(sut.lines[0]).toContain("A");
    });

    it("Given not A, last row contains A", () => {
        const sut = new Diamond("D");        
        expect(sut.lines[sut.lines.length - 1]).toContain("A");
    });

    it("Given not A, there is more than one row", () => {
        const sut = new Diamond("D");
        expect(sut.lines.length).toBeGreaterThan(1);
    });

    it("Given not A, supplied letter is the middle row", () => {
        const sut = new Diamond("B");
        expect(sut.lines[1]).toContain("B");
    });

    it("Given not A, non-A rows feature two instances of letter", () => {
        const sut = new Diamond("B");
        
        const chars = Array.from(sut.lines[1]);

        expect(chars.filter(c=>c == "B").length).toBe(2);
    });

    it("Given not A, letters are spaced out to make a diamond", () => {
        const sut = new Diamond("B");
        
        expect(sut.lines[1]).toBe("B B");
    });

    it("Given not A, pads out rows to form diamond shape", () => {
        const sut = new Diamond("B");
        
        expect(sut.lines[0]).toBe(" A ");
        expect(sut.lines[2]).toBe(" A ");
    });

    it("Demo", () => {
        const sut = new Diamond("C");

        console.log(sut.toString());
        
        expect(sut.lines[0]).toBe("  A  ");
        expect(sut.lines[1]).toBe(" B B ");
        expect(sut.lines[2]).toBe("C   C");
        expect(sut.lines[3]).toBe(" B B ");
        expect(sut.lines[4]).toBe("  A  ");
    });
});
