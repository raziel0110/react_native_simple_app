import 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as ProductsApi from '../components/hooks/products/useGetProducts';

const queryClient = new QueryClient();
queryClient.setDefaultOptions({ queries: { cacheTime: 0 } })

const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("<HomeScreen />", () => {
  // const getProductsMocked = jest.spyOn(ProductsApi, 'useGetProducts')
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
  const mock = {isLoading: false, isSuccess: true, data: {pages: [{data: products}]}, isFetching: false}
  const mockedService = jest.mock('react-query', () => ({
    useInfiniteQuery: jest.fn().mockReturnValue((mock))
  }))

  beforeEach( async () => {

    
    await waitFor(() => {
      render(
        <NavigationContainer>
            <HomeScreen navigation={{ navigate: jest.fn() }} />
        </NavigationContainer>, {wrapper}
      );
    });
  });
  afterEach(() => { queryClient.clear() })
  
  it('render correctly', () => {
    expect(screen.getByPlaceholderText('Search Product')).toBeTruthy();
  })

  // it('call the get product hook', () => {
  //   expect(mockedService).toHaveBeenCalled();
  // });

  // it('fetch products in pages', () => {
  //   // products.forEach(prod => {
  //   //   expect(screen.getByText(prod['title'])).toBe(prod['title']);
  //   // })
  // })

  test("ViewAllProducts", () => {
    render(
      <NavigationContainer>
          <HomeScreen navigation={{ navigate: jest.fn() }} />
      </NavigationContainer>, {wrapper}
    );
    screen.debug();
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
