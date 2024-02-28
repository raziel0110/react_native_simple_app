import 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { render } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useGetProducts } from '../components/hooks/products/useGetProducts';

const queryClient = new QueryClient();
const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const mockService = useGetProducts as jest.Mock
jest.mock('../components/hooks/products/useGetProducts')

describe("when the product list is empty", () => {
  const mock = {isLoading: false, isSuccess: true, data: {pages: [{data: []}]}, isFetching: false}
  beforeEach(() => {
    mockService.mockImplementation(() => ({data: {pages: []}}));
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
})

// describe("<HomeScreen />", () => {
//   describe('when product list is not empty', () => {
//     const products = [
//       {
//         id: 1,
//         thumbnail: 'http://test.com/thumbnail1.jpg',
//         title: 'test 1',
//         stock: 12,
//         price: 10
//       },
//       {
//         id: 2,
//         thumbnail: 'http://test.com/thumbnail2.jpg',
//         title: 'test 2',
//         stock: 12,
//         price: 10
//       }
//     ];

//     // beforeEach(() => {
//     //   // const mock = {isLoading: false, isSuccess: true, data: {pages: [{data: products}]}, isFetching: false}
//     //   // jest.mock('react-query', () => ({
//     //   //   useInfiniteQuery: () => {
//     //   //     return jest.fn().mockReturnValue((mock))
//     //   //   }
//     //   // }));

//     //   render(<HomeScreen navigation={{ navigate: jest.fn() }} />);
//     // });

//     // afterEach(() => { queryClient.clear() })

//     // it('render correctly the search element', () => {
//     //   expect(screen.getByPlaceholderText('Search Product')).toBeTruthy();
//     // });

//     // it("display correct the list", () => {
//     //   screen.debug();
//     //   // expect(screen.toJSON()).toMatchSnapshot()
//     // });
//   })
// });
