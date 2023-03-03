import Banner from "@/components/Banner";
import {render} from "@testing-library/react";

describe("Banner", () => {
    it("renders correctly", () => {
        const { container } = render(<Banner/>)
        expect(container).toMatchSnapshot()
    })
})