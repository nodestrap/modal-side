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
usesModalElementLayout, usesModalElementStates, usesModalLayout, usesModalVariants, usesModalStates, ModalElement, Modal, } from '@nodestrap/modal';
import { 
// styles:
usesActionBarLayout, } from '@nodestrap/modal-card';
export const useModalSideVariant = (props) => {
    return {
        class: props.modalSideStyle ? props.modalSideStyle : 'inlineStart',
    };
};
// styles:
export const usesModalSideElementLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesModalElementLayout(),
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
                overflow: 'hidden', // force the Card to scroll
            }),
            // children:
            ...children('*', {
                // sizes:
                flex: [[1, 1, '100%']],
                // customize:
                ...usesGeneralProps(usesPrefixedProps(cssProps, 'card')), // apply general cssProps starting with card***
            }),
        }),
    });
};
export const usesModalSideElementVariants = () => {
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
export const usesModalSideElementStates = () => {
    return style({
        ...imports([
            // states:
            usesModalElementStates(),
        ]),
    });
};
export const useModalSideElementSheet = createUseSheet(() => [
    mainComposition(rule('&&', {
        ...imports([
            // layouts:
            usesModalSideElementLayout(),
            // variants:
            usesModalSideElementVariants(),
            // states:
            usesModalSideElementStates(),
        ]),
    })),
    compositionOf('actionBar', imports([
        usesActionBarLayout(),
    ])),
], /*sheetId :*/ 'qvp7n6e4ck'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export const usesModalSideLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesModalLayout(),
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
export const usesModalSideVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesModalVariants(),
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
export const usesModalSideStates = () => {
    return style({
        ...imports([
            // states:
            usesModalStates(),
        ]),
    });
};
export const useModalSideSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesModalSideLayout(),
        // variants:
        usesModalSideVariants(),
        // states:
        usesModalSideStates(),
    ])),
], /*sheetId :*/ 'g93sfdvlhc'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
    /* no config props yet */
    };
}, { prefix: 'mdlsde' });
export function ModalSideElement(props) {
    // styles:
    const sheet = useModalSideElementSheet();
    // states:
    const excitedState = useExcitedState(props);
    // rest props:
    const { 
    // essentials:
    elmRef, // moved to Card
    // accessibilities:
    active, // from accessibilities, moved to Collapse
    inheritActive, // from accessibilities, moved to Collapse
    tabIndex = -1, // from ModalElement   , moved to Card
    // actions:
    onActiveChange, onExcitedChange, 
    // children:
    header, ...restProps } = props;
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
    return (React.createElement(Collapse, { ...{
            active,
            inheritActive,
        }, 
        // layouts:
        orientation: props.modalSideStyle?.startsWith('block') ? 'block' : 'inline', 
        // appearances:
        nude: true, 
        // classes:
        classes: [
            sheet.main, // inject ModalSideElement class
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
ModalSideElement.prototype = ModalElement.prototype; // mark as ModalElement compatible
export function ModalSide(props) {
    // styles:
    const sheet = useModalSideSheet();
    // variants:
    const modalSideVariant = useModalSideVariant(props);
    // jsx:
    return (React.createElement(Modal, { ...props, 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            modalSideVariant.class,
        ] },
        React.createElement(ModalSideElement, { ...props })));
}
export { ModalSide as default };
