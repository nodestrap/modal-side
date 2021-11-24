// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, compositionOf, mainComposition, imports, 
// layouts:
layout, children, 
// rules:
variants, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, usesBorderRadius, usesExcitedState, useExcitedState, } from '@nodestrap/basic';
import CloseButton from '@nodestrap/close-button';
import { Card, } from '@nodestrap/card';
import { 
// react components:
Collapse, } from '@nodestrap/collapse';
import { 
// styles:
usesModalElementLayout, usesModalLayout, usesModalVariants, usesModalStates, ModalElement, Modal, } from '@nodestrap/modal';
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
    return composition([
        imports([
            // layouts:
            usesModalElementLayout(),
        ]),
        layout({
            // layouts:
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
            // sizes:
            boxSizing: 'border-box',
            inlineSize: 'auto',
            maxInlineSize: '100%',
            blockSize: 'auto',
            maxBlockSize: '100%',
            overflow: 'hidden',
            // children:
            ...children('*', [
                layout({
                    // sizes:
                    flex: [[1, 1, '100%']],
                    boxSizing: 'inherit',
                    inlineSize: 'inherit',
                    maxInlineSize: 'inherit',
                    blockSize: 'inherit',
                    maxBlockSize: 'inherit',
                    // customize:
                    ...usesGeneralProps(usesPrefixedProps(cssProps, 'card')), // apply general cssProps starting with card***
                }),
            ]),
        }),
    ]);
};
export const usesModalSideElementVariants = () => {
    // dependencies:
    // borders:
    const [, , borderRadiusDecls] = usesBorderRadius();
    return composition([
        variants([
            rule('.blockStart>&', [
                layout({
                    // children:
                    ...children(['&', '*'], [
                        layout({
                            // borders:
                            // remove rounded corners on top:
                            [borderRadiusDecls.borderStartStartRadius]: '0px',
                            [borderRadiusDecls.borderStartEndRadius]: '0px',
                        }),
                    ]),
                }),
            ]),
            rule('.blockEnd>&', [
                layout({
                    // children:
                    ...children(['&', '*'], [
                        layout({
                            // borders:
                            // remove rounded corners on bottom:
                            [borderRadiusDecls.borderEndStartRadius]: '0px',
                            [borderRadiusDecls.borderEndEndRadius]: '0px',
                        }),
                    ]),
                }),
            ]),
            rule('.inlineStart>&', [
                layout({
                    // children:
                    ...children(['&', '*'], [
                        layout({
                            // borders:
                            // remove rounded corners on left:
                            [borderRadiusDecls.borderStartStartRadius]: '0px',
                            [borderRadiusDecls.borderEndStartRadius]: '0px',
                        }),
                    ]),
                }),
            ]),
            rule('.inlineEnd>&', [
                layout({
                    // children:
                    ...children(['&', '*'], [
                        layout({
                            // borders:
                            // remove rounded corners on right:
                            [borderRadiusDecls.borderStartEndRadius]: '0px',
                            [borderRadiusDecls.borderEndEndRadius]: '0px',
                        }),
                    ]),
                }),
            ]),
        ]),
    ]);
};
export const usesModalSideElementStates = () => {
    // dependencies:
    // states:
    const [excited] = usesExcitedState();
    return composition([
        imports([
            // states:
            excited(),
        ]),
    ]);
};
export const useModalSideElementSheet = createUseSheet(() => [
    mainComposition([
        variants([
            rule('&&', [
                imports([
                    // layouts:
                    usesModalSideElementLayout(),
                    // variants:
                    usesModalSideElementVariants(),
                    // states:
                    usesModalSideElementStates(),
                ]),
            ]),
        ]),
    ]),
    compositionOf('actionBar', [
        imports([
            usesActionBarLayout(),
        ]),
    ]),
]);
export const usesModalSideLayout = () => {
    return composition([
        imports([
            // layouts:
            usesModalLayout(),
        ]),
        layout({
            // layouts:
            display: 'grid',
            // child default sizes:
            // justifyItems : 'start',   // align left horizontally // already defined in variant `.(inline|block)(Start|End)`
            // alignItems   : 'stretch', // stretch    vertically   // already defined in variant `.(inline|block)(Start|End)`
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    ]);
};
export const usesModalSideVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesModalVariants(),
            // layouts:
            sizes(),
        ]),
        variants([
            rule('.blockStart', [
                layout({
                    // layouts:
                    // child default sizes:
                    justifyItems: 'stretch',
                    alignItems: 'start', // align top vertically
                }),
            ]),
            rule('.blockEnd', [
                layout({
                    // layouts:
                    // child default sizes:
                    justifyItems: 'stretch',
                    alignItems: 'end', // align top vertically
                }),
            ]),
            rule('.inlineStart', [
                layout({
                    // layouts:
                    // child default sizes:
                    justifyItems: 'start',
                    alignItems: 'stretch', // stretch    vertically
                }),
            ]),
            rule('.inlineEnd', [
                layout({
                    // layouts:
                    // child default sizes:
                    justifyItems: 'end',
                    alignItems: 'stretch', // stretch    vertically
                }),
            ]),
        ]),
    ]);
};
export const usesModalSideStates = () => {
    return composition([
        imports([
            // states:
            usesModalStates(),
        ]),
    ]);
};
export const useModalSideSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesModalSideLayout(),
            // variants:
            usesModalSideVariants(),
            // states:
            usesModalSideStates(),
        ]),
    ]),
]);
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
    onActiveChange, onExcitedChange, // not implemented
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
            return (<h5 
            // classes:
            className={sheet.actionBar}>
                {header}
                <CloseButton 
            // variants:
            size={props.size} 
            // actions:
            onClick={handleClose}/>
            </h5>);
        // other component:
        return header;
    })();
    // jsx:
    return (<Collapse 
    // accessibilities:
    {...{
        active,
        inheritActive,
    }} 
    // layouts:
    orientation={props.modalSideStyle?.startsWith('block') ? 'block' : 'inline'} 
    // appearances:
    nude={true} 
    // classes:
    classes={[
            sheet.main, // inject ModalSideElement class
        ]} stateClasses={[...(props.stateClasses ?? []),
            excitedState.class,
        ]} 
    // events:
    onAnimationEnd={(e) => {
            // states:
            excitedState.handleAnimationEnd(e);
        }}>
            <Card 
    // other props:
    {...restProps} 
    // essentials:
    elmRef={elmRef} 
    // accessibilities:
    {...{
        tabIndex,
    }} 
    // children:
    header={headerFn}/>
        </Collapse>);
}
ModalSideElement.prototype = ModalElement.prototype; // mark as ModalElement compatible
export function ModalSide(props) {
    // styles:
    const sheet = useModalSideSheet();
    // variants:
    const modalSideVariant = useModalSideVariant(props);
    // jsx:
    return (<Modal 
    // other props:
    {...props} 
    // classes:
    mainClass={props.mainClass ?? sheet.main} variantClasses={[...(props.variantClasses ?? []),
            modalSideVariant.class,
        ]}>
            <ModalSideElement 
    // other props:
    {...props}/>
        </Modal>);
}
export { ModalSide as default };
