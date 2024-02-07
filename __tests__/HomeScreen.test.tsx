import 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import {render, screen} from '@testing-library/react-native';
import * as Products from "../components/hooks/products/useGetProducts";

describe("HomeScreen", () => {
    const products = [
        {

        }
    ];
    const getProductsMock = jest.spyOn(Products, 'useGetProducts').mockResolvedValue(products);
    it('render correctly', () => {
        const {getByText} = render(
            <NavigationContainer>
                <HomeScreen navigation={{
                    navigate: function (arg0: string, arg1: { itemId: any; }): void {
                        throw new Error('Function not implemented.');
                    }
                }} />
            </NavigationContainer>
        );

        expect(getByText('All Products')).toBeTruthy();
    })
})
