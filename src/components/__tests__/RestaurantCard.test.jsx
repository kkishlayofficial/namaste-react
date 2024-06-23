import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOffersLabel } from "../RestaurantCard";
import mockData from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("render RestaurantCard component", () => {
  it("should render Restaurant Card", () => {
    render(
      <BrowserRouter>
        <RestaurantCard res={mockData} />
      </BrowserRouter>
    );

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
  });

  it("should render Restaurant Card with Offers", () => {
    const RestaurantCardWithLabel = withOffersLabel(RestaurantCard);
    render(
      <BrowserRouter>
        <RestaurantCardWithLabel res={mockData} />
      </BrowserRouter>
    );
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
    const offerLabel = screen.getByText('ITEMS AT ₹189');
    expect(offerLabel).toBeInTheDocument();
  });
});
