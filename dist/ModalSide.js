// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
compositionOf, mainComposition, 
// styles:
style, imports, 
// rules:
rule, variants, 
//combinators:
children, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, usesBorderRadius, useExcitedState, } from '@nodestrap/basic';
import CloseButton from '@nodestrap/close-button';
import { Card, } from '@nodestrap/card';
import { 
// react components:
Collapse, } from '@nodestrap/collapse';
import { 
// styles:
usesDialogLayout, usesDialogStates, usesBackdropLayout, usesBackdropVariants, usesBackdropStates, Modal, } from '@nodestrap/modal';
import { 
// styles:
usesActionBarLayout, } from '@nodestrap/modal-card';
export const useModalSideVariant = ({ modalSideStyle }) => {
    return {
        class: modalSideStyle ? modalSideStyle : 'inlineStart',
    };
};
// styles:
export const usesSideDialogLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesDialogLayout(),
        ]),
        ...style({
            // layouts:
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
            // children:
            ...children(['&', '*'], {
                // sizes:
                boxSizing: 'border-box',
                inlineSize: 'auto',
                maxInlineSize: '100%',
                blockSize: 'auto',
                maxBlockSize: '100%',
                overflow: 'hidden', // force the <Card> to scroll
            }),
            // children:
            ...children('*', {
                // sizes:
                // maximum height of <Card> when side-left & side-right
                flex: [[1, 1, '100%']],
                // customize:
                ...usesGeneralProps(usesPrefixedProps(cssProps, 'card')), // apply general cssProps starting with card***
            }),
        }),
    });
};
export const usesSideDialogVariants = () => {
    // dependencies:
    // borders:
    const [, , borderRadiusDecls] = usesBorderRadius();
    return style({
        ...variants([
            rule('.blockStart>&', {
                // children:
                ...children(['&', '*'], {
                    // borders:
                    // remove rounded corners on top:
                    [borderRadiusDecls.borderStartStartRadius]: '0px',
                    [borderRadiusDecls.borderStartEndRadius]: '0px',
                }),
            }),
            rule('.blockEnd>&', {
                // children:
                ...children(['&', '*'], {
                    // borders:
                    // remove rounded corners on bottom:
                    [borderRadiusDecls.borderEndStartRadius]: '0px',
                    [borderRadiusDecls.borderEndEndRadius]: '0px',
                }),
            }),
            rule('.inlineStart>&', {
                // children:
                ...children(['&', '*'], {
                    // borders:
                    // remove rounded corners on left:
                    [borderRadiusDecls.borderStartStartRadius]: '0px',
                    [borderRadiusDecls.borderEndStartRadius]: '0px',
                }),
            }),
            rule('.inlineEnd>&', {
                // children:
                ...children(['&', '*'], {
                    // borders:
                    // remove rounded corners on right:
                    [borderRadiusDecls.borderStartEndRadius]: '0px',
                    [borderRadiusDecls.borderEndEndRadius]: '0px',
                }),
            }),
        ]),
    });
};
export const usesSideDialogStates = () => {
    return style({
        ...imports([
            // states:
            usesDialogStates(),
        ]),
    });
};
export const useSideDialogSheet = createUseSheet(() => [
    mainComposition(rule('&&', {
        ...imports([
            // layouts:
            usesSideDialogLayout(),
            // variants:
            usesSideDialogVariants(),
            // states:
            usesSideDialogStates(),
        ]),
    })),
    compositionOf('actionBar', imports([
        usesActionBarLayout(),
    ])),
], /*sheetId :*/ 'qvp7n6e4ck'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export const usesSideBackdropLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesBackdropLayout(),
        ]),
        ...style({
            // layouts:
            display: 'grid',
            // child default sizes:
            // justifyItems : 'start',   // align left horizontally // already defined in variant `.(inline|block)(Start|End)`
            // alignItems   : 'stretch', // stretch    vertically   // already defined in variant `.(inline|block)(Start|End)`
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    });
};
export const usesSideBackdropVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesBackdropVariants(),
            // layouts:
            sizes(),
        ]),
        ...variants([
            rule('.blockStart', {
                // layouts:
                // child default sizes:
                justifyItems: 'stretch',
                alignItems: 'start', // align top vertically
            }),
            rule('.blockEnd', {
                // layouts:
                // child default sizes:
                justifyItems: 'stretch',
                alignItems: 'end', // align top vertically
            }),
            rule('.inlineStart', {
                // layouts:
                // child default sizes:
                justifyItems: 'start',
                alignItems: 'stretch', // stretch    vertically
            }),
            rule('.inlineEnd', {
                // layouts:
                // child default sizes:
                justifyItems: 'end',
                alignItems: 'stretch', // stretch    vertically
            }),
        ]),
    });
};
export const usesSideBackdropStates = () => {
    return style({
        ...imports([
            // states:
            usesBackdropStates(),
        ]),
    });
};
export const useSideBackdropSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesSideBackdropLayout(),
        // variants:
        usesSideBackdropVariants(),
        // states:
        usesSideBackdropStates(),
    ])),
], /*sheetId :*/ 'g93sfdvlhc'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
    /* no config props yet */
    };
}, { prefix: 'mdlsde' });
export function SideDialog(props) {
    // styles:
    const sheet = useSideDialogSheet();
    // states:
    const excitedState = useExcitedState(props);
    // rest props:
    const { 
    // essentials:
    elmRef, // moved to <Card>
    // accessibilities:
    isModal, // moved to <Collapse>
    isVisible, // moved to <Collapse>
    tabIndex = -1, // moved to <Card>
    active, // moved to <Collapse>
    inheritActive, // moved to <Collapse>
    // actions:
    onActiveChange, // implemented
    onExcitedChange, // not implemented
    // children:
    header, // changed the default
    ...restProps } = props;
    // handlers:
    const handleClose = onActiveChange && ((e) => {
        if (!e.defaultPrevented) {
            onActiveChange(false, 'ui');
            e.preventDefault();
        } // if
    });
    // jsx fn props:
    const headerFn = (() => {
        // default (unset) or string:
        if ((header === undefined) || (typeof header === 'string'))
            return (React.createElement("h5", { 
                // classes:
                className: sheet.actionBar },
                header,
                React.createElement(CloseButton
                // variants:
                , { 
                    // variants:
                    size: props.size, 
                    // actions:
                    onClick: handleClose })));
        // other component:
        return header;
    })();
    // jsx:
    return (React.createElement(Collapse, { 
        // semantics:
        semanticTag: props.semanticTag ?? 'dialog', semanticRole: props.semanticRole ?? 'dialog', "aria-modal": isModal, ...{
            open: isVisible,
        }, 
        // accessibilities:
        active: active, inheritActive: inheritActive, 
        // layouts:
        orientation: props.modalSideStyle?.startsWith('block') ? 'block' : 'inline', nude: true, 
        // classes:
        classes: [
            sheet.main, // inject SideDialog class
        ], stateClasses: [...(props.stateClasses ?? []),
            excitedState.class,
        ], 
        // events:
        onAnimationEnd: (e) => {
            // states:
            excitedState.handleAnimationEnd(e);
        } },
        React.createElement(Card, { ...restProps, 
            // essentials:
            elmRef: elmRef, ...{
                tabIndex,
            }, 
            // children:
            header: headerFn })));
}
export function ModalSide(props) {
    // styles:
    const sheet = useSideBackdropSheet();
    // variants:
    const modalSideVariant = useModalSideVariant(props);
    // rest props:
    const { 
    // components:
    dialog = React.createElement(SideDialog, null), 
    // ModalSideVariant:
    modalSideStyle, 
    // children:
    header, footer, children, ...restBackdropProps } = props;
    // jsx:
    const defaultDialogProps = {
        // ModalSideVariant:
        modalSideStyle,
        // children:
        header,
        footer,
        children,
    };
    return (React.createElement(Modal, { ...restBackdropProps, 
        // components:
        dialog: React.cloneElement(React.cloneElement(dialog, defaultDialogProps), dialog.props), 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            modalSideVariant.class,
        ] }));
}
export { ModalSide as default };
