import React from "react";
import {act, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import SideBarButton from "../components/Atoms/SideBarButton/SideBarButton";

test('Should onClick SideBarButton', () => {
    let result = null;
    const {getByText} = render(<SideBarButton children={'Click'} onClick={() => result = 'success'}/>)
    act(() => {
        fireEvent.click(getByText('Click'));
    });
    expect(result).toBe('success');
});