import Identicon from "@/components/Identicon";
import {render} from "@testing-library/react";

jest.mock("minidenticons", () => ({
    identicon: jest.fn()
}))

describe("Identicon", () => {
    it("renders correctly", () => {
        const { container } = render(<Identicon username={"username"}/>)
        expect(container).toMatchSnapshot()
    })
})