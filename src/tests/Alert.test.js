import React from "react";
import {act, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import AlertComponent from "../components/Atoms/Alert/Alert";

test('Should render a success Alert and onClick on close button', () => {
    let result = null;
    const {getByText} = render(<AlertComponent message={'Test alert'} type={'success'}
                                               onClick={() => result = 'success'}/>);
    act(() => {
        fireEvent.click(getByText('Zamknij'))
    });

    expect(result).toBe('success');
});

test('Should render an error Alert and onClick on close button', () => {
    let result = null;
    const {getByText} = render(<AlertComponent message={'Test alert'} type={'error'}
                                               onClick={() => result = 'success'}/>);
    act(() => {
        fireEvent.click(getByText('Zamknij'))
    });

    expect(result).toBe('success');
});