import RepositoriesCatalogue from "@/components/RepositoriesCatalogue";
import {render} from "@testing-library/react";

jest.mock("minidenticons", () => ({
    identicon: jest.fn()
}))

describe("RepositoriesCatalogue", () => {
    it("renders correctly", () => {
        const { container } = render(<RepositoriesCatalogue repositories={[]} title={"title"}/>)
        expect(container).toMatchSnapshot()
    })
})