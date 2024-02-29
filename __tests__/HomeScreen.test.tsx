import 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useGetProducts } from '../components/hooks/products/useGetProducts';

const queryClient = new QueryClient();
const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const mockService = useGetProducts as jest.Mock
jest.mock('../components/hooks/products/useGetProducts')

describe("<HomeScreen />", () => {
  describe("when the product list is empty", () => {
    beforeEach(() => {
      mockService.mockImplementation(() => ({isLoading: false, data: {pages: []}}));
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test("displays correct the element", async () => {
      const container = render(
        <HomeScreen navigation={{
          navigate: function (arg0: string, arg1: { itemId: any; }): void {
            throw new Error('Function not implemented.');
          }
        }} />,{ wrapper }
      );
      
      expect(container.getByText('No Items Found!!!'));
    })
  });

  describe('when product list is not empty', () => {
    const products = [
      {
        id: 1,
        thumbnail: 'http://test.com/thumbnail1.jpg',
        title: 'test 1',
        stock: 12,
        price: 10
      },
      {
        id: 2,
        thumbnail: 'http://test.com/thumbnail2.jpg',
        title: 'test 2',
        stock: 12,
        price: 10
      }
    ];
    const mock = {isLoading: false, isSuccess: true, data: {pages: [{data: {products}}]}, isFetching: false}
    // const service = useGetProduct as jest.Mock
    // jest.mock('../components/hooks/products/useGetProduct')

    beforeEach(() => {
      mockService.mockImplementation(() => (mock));
      render(
        <HomeScreen navigation={{
          navigate: jest.fn()
        }} />,{ wrapper }
      );
      
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('render correctly the search element', () => {
      expect(screen.getByPlaceholderText('Search Product')).toBeTruthy();
    });

    it("display correct the list", () => {
      products.forEach((product) => {
        expect(screen.getByText(product.title));
        expect(screen.getAllByText(`Stock: ${product.stock}`));
      })
    });
    it("redirect to product page", async () => {
      const product = products[0]
      const input = screen.getByText(product.title);
      fireEvent.press(input, product.id)
      // waitFor(async () => {
      //   console.log(service)
      //   await expect(service).toHaveBeenCalled();
      // });
    })

    describe("when there are more pages", () => {
      const mock = {
        hasNextPage: true,
        isLoading: false,
        isSuccess: true, 
        data: {pages: [
          {data: {products:[{
            id: 2,
            thumbnail: 'http://test.com/thumbnail2.jpg',
            title: 'test 2',
            stock: 12,
            price: 10
          }]}},{
            data: { products: [{
              id: 1,
              thumbnail: 'http://test.com/thumbnail1.jpg',
              title: 'test 1',
              stock: 12,
              price: 10
            }]}}]}, 
        isFetching: false
      }
      beforeEach(() => {
        mockService.mockImplementation(() => (mock));
        render(
          <HomeScreen navigation={{
            navigate: function (arg0: string, arg1: { itemId: any; }): void {
              throw new Error('Function not implemented.');
            }
          }} />,{ wrapper }
        );
      });
      afterEach(() => {
        jest.clearAllMocks();
      });

      it("fetch next page", () => {
        // screen.debug();
      })
    })

    describe("when the product list is loading", () => {
      const mock = {isFetching: true, isLoading: true}
      beforeEach(() => {
        mockService.mockImplementation(() => (mock));
        render(
          <HomeScreen navigation={{
            navigate: function (arg0: string, arg1: { itemId: any; }): void {
              throw new Error('Function not implemented.');
            }
          }} />,{ wrapper }
        );
      });
      it("displays correct the loading", () => {
        screen.getByAccessibilityHint('loading')
      })
    })
  })
});
