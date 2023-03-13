import nextElementList from "@/utils/NextElementInList";
describe("nextElementList shold", () => {
  it("locat element in list and return next element in list", () => {
    //Given
    const list = ["A", "B", "C", "D"];
    const value = "B";

    //When
    const nextElement = nextElementList(list, value);

    //then
    expect(nextElement).toBe("C");
  });
  it("locat next element and start in list", () => {
    //Given
    const list = ["A", "B", "C", "D","E","F"];
    const value = "F";

    //When
    const nextElement = nextElementList(list, value);

    //then
    expect(nextElement).toBe("A");
  });
});
