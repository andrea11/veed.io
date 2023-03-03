import Pagination from "@/components/Pagination";
import {render} from "@testing-library/react";

describe("Pagination", () => {
    it("renders correctly", () => {
        const { container } = render(<Pagination total={1000} index={1} limitPerPage={12}/>)
        expect(container).toMatchSnapshot()
    })

    it("renders correctly with no results", () => {
        const { container } = render(<Pagination total={0} index={0} limitPerPage={12}/>)
        expect(container).toMatchSnapshot()
    })
})