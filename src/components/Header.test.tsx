import Header from "@/components/Header";
import {render} from "@testing-library/react";

describe("Header", () => {
    it("renders correctly", () => {
        const { container } = render(<Header/>)
        expect(container).toMatchSnapshot()
    })
})