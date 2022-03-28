import { default as React } from 'react';
import type { ElementProps } from '@nodestrap/element';
import { OrientationName, OrientationVariant, CardProps } from '@nodestrap/card';
import { BackdropStyle, BackdropVariant, DialogProps, ModalProps } from '@nodestrap/modal';
import { ModalCardCloseType } from '@nodestrap/modal-card';
export declare type ModalSideStyle = 'inlineStart' | 'inlineEnd' | 'blockStart' | 'blockEnd';
export interface ModalSideVariant {
    modalSideStyle?: ModalSideStyle;
}
export declare const useModalSideVariant: ({ modalSideStyle }: ModalSideVariant) => {
    class: ModalSideStyle;
};
export declare const usesSideDialogLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesSideDialogVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesSideDialogStates: () => import("@cssfn/cssfn").Rule;
export declare const useSideDialogSheet: import("@cssfn/types").Factory<import("jss").Classes<"main" | "actionBar">>;
export declare const usesSideBackdropLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesSideBackdropVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesSideBackdropStates: () => import("@cssfn/cssfn").Rule;
export declare const useSideBackdropSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{}>, cssDecls: import("@cssfn/css-config").Decls<{}>, cssVals: import("@cssfn/css-config").Vals<{}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export declare type ModalSideCloseType = ModalCardCloseType;
export interface SideDialogProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType> extends DialogProps<TElement, TCloseType>, CardProps<TElement>, ModalSideVariant {
    card?: React.ReactComponentElement<any, ElementProps>;
}
export declare function SideDialog<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType>(props: SideDialogProps<TElement, TCloseType>): JSX.Element;
export interface ModalSideProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType> extends ModalProps<TElement, TCloseType>, SideDialogProps<TElement, TCloseType> {
}
export declare function ModalSide<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType>(props: ModalSideProps<TElement, TCloseType>): JSX.Element;
export { ModalSide as default };
export type { OrientationName, OrientationVariant };
export type { BackdropStyle, BackdropVariant };
