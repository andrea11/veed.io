import RepositoryCard from "@/components/RepositoryCard";
import {act, cleanup, render, waitFor} from "@testing-library/react";
import {Repository} from "@/app/types";

jest.mock("minidenticons", () => ({
    identicon: jest.fn()
}))

describe("RepositoryCard", () => {
    const spyOnLocalStorageGetItem = jest.fn()
    const spyOnLocalStorageSetItem = jest.fn()
    let repository: Repository

    beforeEach(() => {
        jest.resetAllMocks()
        const localStorage = {
            getItem: spyOnLocalStorageGetItem,
            setItem: spyOnLocalStorageSetItem,
            removeItem: jest.fn(),
            clear: jest.fn(),
            key: jest.fn(),
            length: 0
        }
        Object.defineProperty(window, "localStorage", {value: localStorage});

        repository = {
            id: 1252125,
            name: "name",
            full_name: "full_name",
            description: "description",
            html_url: "html_url",
            stargazers_count: 0,
            url: "url",
        } as Repository
    })

    afterEach(() => {
        cleanup()
    })

    it("renders correctly", () => {
        const {container} = render(<RepositoryCard repository={repository} key={repository.id}/>)
        expect(container).toMatchSnapshot()
    })

    it("should retrieve favourites from local storage and set the button to enable if it matches", async () => {
        spyOnLocalStorageGetItem.mockReturnValue(JSON.stringify({[repository.id]: repository}))
        const {getByTestId} = render(<RepositoryCard repository={repository} key={repository.id}/>)
        await waitFor(() => expect(getByTestId("repository-star")).toHaveClass("text-yellow-400"))
    })

    it("should save favourites to local storage on click", async () => {
        const {getByTestId} = render(<RepositoryCard repository={repository} key={repository.id}/>)
        act(() => getByTestId("repository-star-button").click())
        await waitFor(() => expect(spyOnLocalStorageSetItem).toHaveBeenCalled())
        expect(spyOnLocalStorageSetItem).toHaveBeenCalledWith("favourites", JSON.stringify({[repository.id]: repository}))
    })

    it("should toggle the button on multiple clicks", async () => {
        const {getByTestId} = render(<RepositoryCard repository={repository} key={repository.id}/>)
        for (let i = 1; i <= 3; i++) {
            act(() => getByTestId("repository-star-button").click())
            await waitFor(() => {
                expect(getByTestId("repository-star")).toHaveClass(i % 2 === 1 ? "text-yellow-400" : "text-grey-400")
            })
        }
    })
})