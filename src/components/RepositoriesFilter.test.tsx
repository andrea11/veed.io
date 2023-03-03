import RepositoriesFilter from "@/components/RepositoriesFilter";
import {render} from "@testing-library/react";

describe('RepositoriesFilter', () => {
    it('renders correctly when empty', () => {
        const {container} = render(<RepositoriesFilter selectedFilter={''} onSelectFilter={jest.fn()}
                                                       availableFilters={[]} categoryTitle={''}/>)
        expect(container).toMatchSnapshot()
    })

    it('renders correctly', () => {
      const {container} = render(<RepositoriesFilter selectedFilter={'none'} onSelectFilter={jest.fn()}
                                                       availableFilters={["none", "all"]} categoryTitle={'custom filter'}/>)
        expect(container).toMatchSnapshot()
    })
})