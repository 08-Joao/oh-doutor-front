import { JSX } from "react";

export interface MenuOptions {
    name: string;
    icon?: JSX.Element;
    content: JSX.Element;
}

export interface BodyProps {
    title: string;
    menuOptions: MenuOptions[];
}