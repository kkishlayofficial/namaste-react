import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import mockData from "../mocks/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});

beforeAll(() => {

})

afterAll(() => {

})

beforeEach(() => {

})

afterEach(() => {

})

describe("render Body", () => {
  it("should render body component with search button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const searchBtn = screen.getByRole('button', { name: 'Search' });
    const searchInput = screen.getByTestId('searchInput');
    expect(searchBtn).toBeInTheDocument();
    fireEvent.change(searchInput, {target: {value: 'pizza'}})
    fireEvent.click(searchBtn);
    const resCard = screen.getAllByTestId('resCard');
    expect(resCard.length).toBe(2)
  });

  it('should render top rated restaurant', async() => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const topRated = screen.getByTestId('topRatedRestaurant');
    const resCards = screen.getAllByTestId('resCard');
    expect(resCards.length).toBe(8);
    fireEvent.click(topRated);
    const resCardsAfter = screen.getAllByTestId('resCard');

    expect(resCardsAfter.length).toBe(7);
  })
});
