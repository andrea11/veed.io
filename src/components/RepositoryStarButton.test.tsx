import {RepositoryStarButton} from "@/components/RepositoryStarButton";
import {render} from "@testing-library/react";

describe("RepositoryStarButton", () => {
    it("renders correctly", () => {
        const { container } = render(<RepositoryStarButton onClick={() => {}} enabled={false} numberOfLikes={"0"}/>)
        expect(container).toMatchSnapshot()
    })
})