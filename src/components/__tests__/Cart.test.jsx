import { fireEvent, render, screen } from "@testing-library/react";
import mockData from "../mocks/resMenuMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});

describe("render Restaurant Menu Component", () => {
  it("should load Restaurant Menu Component", async () => {
    await act(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const resName = screen.getByTestId('resName');
    expect(resName).toHaveTextContent('KFC');
    const resCategory = screen.getAllByTestId('resCategory');
    expect(resCategory.length).toBe(16);
    const resCategoryTitle = screen.getAllByTestId('resCategoryTitle');
    fireEvent.click(resCategoryTitle[0]);
    fireEvent.click(resCategoryTitle[0]);
    const resMenuCard = screen.getAllByTestId('resMenuItem');
    expect(resMenuCard.length).toBe(20);
    const addToCartBtn = screen.getAllByTestId('addItemToCart');
    expect(screen.getByTestId('cart')).toHaveTextContent('Cart (0 items)');
    fireEvent.click(addToCartBtn[0])
    expect(screen.getByTestId('cart')).toHaveTextContent('Cart (1 items)');
    fireEvent.click(addToCartBtn[1])
    expect(screen.getByTestId('cart')).toHaveTextContent('Cart (2 items)');
    fireEvent.click(screen.getByTestId('cart'))
    const clearCartBtn = screen.getByRole('button', { name: 'Clear Cart' })
    expect(clearCartBtn).toBeInTheDocument();
    expect(screen.getByTestId('cart')).toHaveTextContent('Cart (2 items)');
    const resMenuListCart = screen.getAllByTestId('resMenuItem-cart');
    expect(resMenuListCart.length).toBe(2);
    fireEvent.click(clearCartBtn);
    expect(screen.getByTestId('cart')).toHaveTextContent('Cart (0 items)');
  });
});
