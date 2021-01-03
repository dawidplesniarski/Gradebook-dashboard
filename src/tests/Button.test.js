import React from "react";
import {act, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Atoms/Button/Button";
import SideBarButton from "../components/Atoms/SideBarButton/SideBarButton";

test('Should render disabled Button', () => {
    const {getByText} = render(<Button children={'Test'} disabled={true}/>)
    expect(getByText('Test')).toBeDisabled()
});

test('Should onClick Button and trigger function', () => {
    let result = null;
    const {getByText} = render(<Button children={'Click'} onClick={() => result = 'success'}/>);
    act(() => {
        fireEvent.click(getByText('Click'));
    })
    expect(result).toBe('success');
});