/// <reference types="react" />
import { TogglerExcitedProps } from '@nodestrap/basic';
import { OrientationName, OrientationVariant, CardProps } from '@nodestrap/card';
import { ModalStyle, ModalVariant, ModalElementProps, ModalProps } from '@nodestrap/modal';
import { ModalCardCloseType } from '@nodestrap/modal-card';
export declare type ModalSideStyle = 'inlineStart' | 'inlineEnd' | 'blockStart' | 'blockEnd';
export interface ModalSideVariant {
    modalSideStyle?: ModalSideStyle;
}
export declare const useModalSideVariant: (props: ModalSideVariant) => {
    class: ModalSideStyle;
};
export declare const usesModalSideElementLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesModalSideElementVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesModalSideElementStates: () => import("@cssfn/cssfn").Rule;
export declare const useModalSideElementSheet: import("@cssfn/types").Factory<import("jss").Classes<"main" | "actionBar">>;
export declare const usesModalSideLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesModalSideVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesModalSideStates: () => import("@cssfn/cssfn").Rule;
export declare const useModalSideSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{}>, cssDecls: import("@cssfn/css-config").Decls<{}>, cssVals: import("@cssfn/css-config").Vals<{}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export declare type ModalSideCloseType = ModalCardCloseType;
export interface ModalSideElementProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType> extends ModalElementProps<TElement, TCloseType>, CardProps<TElement>, TogglerExcitedProps, ModalSideVariant {
}
export declare function ModalSideElement<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType>(props: ModalSideElementProps<TElement, TCloseType>): JSX.Element;
export declare namespace ModalSideElement {
    var prototype: any;
}
export interface ModalSideProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType> extends ModalProps<TElement, TCloseType>, ModalSideElementProps<TElement, TCloseType> {
}
export declare function ModalSide<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType>(props: ModalSideProps<TElement, TCloseType>): JSX.Element;
export { ModalSide as default };
export type { OrientationName, OrientationVariant };
export type { ModalStyle, ModalVariant };
