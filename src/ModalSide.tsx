// react:
import {
    default as React,
}                           from 'react'         // base technology of our nodestrap components

// cssfn:
import {
    // compositions:
    compositionOf,
    mainComposition,
    
    
    
    // styles:
    style,
    imports,
    
    
    
    // rules:
    rule,
    variants,
    
    
    
    //combinators:
    children,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react
import {
    createCssConfig,
    
    
    
    // utilities:
    usesGeneralProps,
    usesPrefixedProps,
    usesSuffixedProps,
    overwriteProps,
}                           from '@cssfn/css-config'  // Stores & retrieves configuration using *css custom properties* (css variables)

// nodestrap components:
import {
    // hooks:
    usesSizeVariant,
    usesBorderRadius,
    useExcitedState,
    TogglerExcitedProps,
}                           from '@nodestrap/basic'
import CloseButton          from '@nodestrap/close-button'
import {
    // hooks:
    OrientationName,
    OrientationVariant,
    
    
    
    // react components:
    CardProps,
    Card,
}                           from '@nodestrap/card'
import {
    // react components:
    Collapse,
}                           from '@nodestrap/collapse'
import {
    // hooks:
    ModalStyle,
    ModalVariant,
    
    
    
    // styles:
    usesModalElementLayout,
    usesModalElementStates,
    
    usesModalLayout,
    usesModalVariants,
    usesModalStates,
    
    
    
    // react components:
    ModalElementProps,
    ModalElement,
    
    ModalProps,
    Modal,
}                           from '@nodestrap/modal'
import {
    // styles:
    usesActionBarLayout,
    
    
    
    // react components:
    ModalCardCloseType,
}                           from '@nodestrap/modal-card'



// hooks:

// appearances:

export type ModalSideStyle = 'inlineStart'|'inlineEnd'|'blockStart'|'blockEnd' // might be added more styles in the future
export interface ModalSideVariant {
    modalSideStyle? : ModalSideStyle
}
export const useModalSideVariant = (props: ModalSideVariant) => {
    return {
        class : props.modalSideStyle ? props.modalSideStyle : 'inlineStart',
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
            display        : 'flex',
            flexDirection  : 'column',
            justifyContent : 'start',   // if Card is not growable, the excess space (if any) placed at the end, and if no sufficient space available => the Card's header should be visible first
            alignItems     : 'stretch', // stretch Card horizontally
            flexWrap       : 'nowrap',  // no wrapping
            
            
            
            // children:
            ...children(['&', '*'], { // Popup & Card
                // sizes:
                boxSizing     : 'border-box',     // the final size is including borders & paddings
                inlineSize    : 'auto',           // follows the content's width, but
                maxInlineSize : '100%',           // up to the maximum available parent's width
                blockSize     : 'auto',           // follows the content's height, but
                maxBlockSize  : '100%',           // up to the maximum available parent's height
                overflow      : 'hidden',         // force the Card to scroll
            }),
            
            
            
            // children:
            ...children('*', { // Card
                // sizes:
                flex          : [[1, 1, '100%']], // growable, shrinkable, initial from parent's height
                
                
                
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
                ...children(['&', '*'], { // Card
                    // borders:
                    // remove rounded corners on top:
                    [borderRadiusDecls.borderStartStartRadius] : '0px',
                    [borderRadiusDecls.borderStartEndRadius  ] : '0px',
                }),
            }),
            rule('.blockEnd>&', {
                // children:
                ...children(['&', '*'], { // Card
                    // borders:
                    // remove rounded corners on bottom:
                    [borderRadiusDecls.borderEndStartRadius  ] : '0px',
                    [borderRadiusDecls.borderEndEndRadius    ] : '0px',
                }),
            }),
            rule('.inlineStart>&', {
                // children:
                ...children(['&', '*'], { // Card
                    // borders:
                    // remove rounded corners on left:
                    [borderRadiusDecls.borderStartStartRadius] : '0px',
                    [borderRadiusDecls.borderEndStartRadius  ] : '0px',
                }),
            }),
            rule('.inlineEnd>&', {
                // children:
                ...children(['&', '*'], { // Card
                    // borders:
                    // remove rounded corners on right:
                    [borderRadiusDecls.borderStartEndRadius  ] : '0px',
                    [borderRadiusDecls.borderEndEndRadius    ] : '0px',
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
    mainComposition(
        rule('&&', { // makes `.ModalSideElement` is more specific than `.Collapse`
            ...imports([
                // layouts:
                usesModalSideElementLayout(),
                
                // variants:
                usesModalSideElementVariants(),
                
                // states:
                usesModalSideElementStates(),
            ]),
        }),
    ),
    compositionOf('actionBar',
        imports([
            usesActionBarLayout(),
        ]),
    ),
], /*sheetId :*/'qvp7n6e4ck'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



export const usesModalSideLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesModalLayout(),
        ]),
        ...style({
            // layouts:
            display      : 'grid',    // use a grid for the layout, so we can align the Card both horizontally & vertically
            
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
                justifyItems : 'stretch', // stretch   horizontally
                alignItems   : 'start',   // align top vertically
            }),
            rule('.blockEnd', {
                // layouts:
                
                // child default sizes:
                justifyItems : 'stretch', // stretch   horizontally
                alignItems   : 'end',     // align top vertically
            }),
            rule('.inlineStart', {
                // layouts:
                
                // child default sizes:
                justifyItems : 'start',   // align left horizontally
                alignItems   : 'stretch', // stretch    vertically
            }),
            rule('.inlineEnd', {
                // layouts:
                
                // child default sizes:
                justifyItems : 'end',     // align left horizontally
                alignItems   : 'stretch', // stretch    vertically
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
    mainComposition(
        imports([
            // layouts:
            usesModalSideLayout(),
            
            // variants:
            usesModalSideVariants(),
            
            // states:
            usesModalSideStates(),
        ]),
    ),
], /*sheetId :*/'g93sfdvlhc'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        /* no config props yet */
    };
}, { prefix: 'mdlsde' });



// react components:

export type ModalSideCloseType = ModalCardCloseType



export interface ModalSideElementProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType>
    extends
        ModalElementProps<TElement, TCloseType>,
        CardProps<TElement>,
        
        // states:
        TogglerExcitedProps,
        
        // appearances:
        ModalSideVariant
{
}
export function ModalSideElement<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType>(props: ModalSideElementProps<TElement, TCloseType>) {
    // styles:
    const sheet        = useModalSideElementSheet();
    
    
    
    // states:
    const excitedState = useExcitedState(props);
    
    
    
    // rest props:
    const {
        // essentials:
        elmRef,         // moved to Card
        
        
        // accessibilities:
        active,         // from accessibilities, moved to Collapse
        inheritActive,  // from accessibilities, moved to Collapse
        tabIndex = -1,  // from ModalElement   , moved to Card
        
        
        // actions:
        onActiveChange,
        onExcitedChange,
        
        
        // children:
        header,
    ...restProps} = props;
    
    
    
    // handlers:
    const handleClose = onActiveChange && ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!e.defaultPrevented) {
            onActiveChange(false, 'ui' as unknown as TCloseType);
            e.preventDefault();
        } // if
    });
    
    
    
    // jsx fn props:
    const headerFn = (() => {
        // default (unset) or string:
        if ((header === undefined) || (typeof header === 'string')) return (
            <h5
                // classes:
                className={sheet.actionBar}
            >
                { header }
                <CloseButton
                    // variants:
                    size={props.size}
                    
                    
                    // actions:
                    onClick={handleClose}
                />
            </h5>
        );
        
        
        
        // other component:
        return header;
    })();
    
    
    
    // jsx:
    return (
        <Collapse<TElement>
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
            ]}
            stateClasses={[...(props.stateClasses ?? []),
                excitedState.class,
            ]}
            
            
            // events:
            onAnimationEnd={(e) => {
                // states:
                excitedState.handleAnimationEnd(e);
            }}
        >
            <Card<TElement>
                // other props:
                {...restProps}
                
                
                // essentials:
                elmRef={elmRef}
                
                
                // accessibilities:
                {...{
                    tabIndex,
                }}
                
                
                // children:
                header={headerFn}
            />
        </Collapse>
    );
}
ModalSideElement.prototype = ModalElement.prototype; // mark as ModalElement compatible



export interface ModalSideProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType>
    extends
        ModalProps<TElement, TCloseType>,
        ModalSideElementProps<TElement, TCloseType>
{
}
export function ModalSide<TElement extends HTMLElement = HTMLElement, TCloseType = ModalSideCloseType>(props: ModalSideProps<TElement, TCloseType>) {
    // styles:
    const sheet              = useModalSideSheet();
    
    
    
    // variants:
    const modalSideVariant   = useModalSideVariant(props);
    
    
    
    // jsx:
    return (
        <Modal<TElement, TCloseType>
            // other props:
            {...props}
            
            
            // classes:
            mainClass={props.mainClass ?? sheet.main}
            variantClasses={[...(props.variantClasses ?? []),
                modalSideVariant.class,
            ]}
        >
            <ModalSideElement<TElement, TCloseType>
                // other props:
                {...props}
            />
        </Modal>
    );
}
export { ModalSide as default }

export type { OrientationName, OrientationVariant }

export type { ModalStyle, ModalVariant }
