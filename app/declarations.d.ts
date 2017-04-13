// tslint:disable max-classes-per-file

declare module 'react-native-svg' {
    import React, { Component } from 'react'
    class Svg extends Component<any, any> {}
    class Circle extends Component<any, any> {}
    class Ellipse extends Component<any, any> {}
    class G extends Component<any, any> {}
    class Text extends Component<any, any> {}
    class TSpan extends Component<any, any> {}
    class TextPath extends Component<any, any> {}
    class Path extends Component<any, any> {}
    class Polygon extends Component<any, any> {}
    class Polyline extends Component<any, any> {}
    class Line extends Component<any, any> {}
    class Rect extends Component<any, any> {}
    class Use extends Component<any, any> {}
    class Image extends Component<any, any> {}
    class Symbol extends Component<any, any> {}
    class Defs extends Component<any, any> {}
    class LinearGradient extends Component<any, any> {}
    class RadialGradient extends Component<any, any> {}
    class Stop extends Component<any, any> {}
    class ClipPath extends Component<any, any> {}

    export {
      Svg,
      Circle,
      Ellipse,
      G,
      Text,
      TSpan,
      TextPath,
      Path,
      Polygon,
      Polyline,
      Line,
      Rect,
      Use,
      Image,
      Symbol,
      Defs,
      LinearGradient,
      RadialGradient,
      Stop,
      ClipPath,
    }
}

declare module 'react-native-svg-icon' {
  import React, { Component } from 'react'

  export interface ISvgIcon {
    fill: string
    height: string | number
    name: string
    stroke: string
    strokeWidth: string | number
    svgs: {}
    width: string | number
    viewBox: string
  }
  export default class SvgIcon extends Component<any, {}> {}
}

declare module 'react-native-swiper' {
  import * as React from 'react'
  import {
    ViewStyle,
  } from 'react-native'

  interface SwiperProperties extends React.Props<Swiper> {

    horizontal?: boolean

    style?: ViewStyle

    pagingEnabled?: boolean

    showsHorizontalScrollIndicator?: boolean

    showsVerticalScrollIndicator?: boolean

    bounces?: boolean

    scrollsToTop?: boolean

    removeClippedSubviews?: boolean

    automaticallyAdjustContentInsets?: boolean

    showsPagination?: boolean

    showsButtons?: boolean

    loadMinimal?: boolean

    loadMinimalSize?: number

    loadMinimalLoader?: JSX.Element

    loop?: boolean

    autoplay?: boolean

    autoplayTimeout?: number

    autoplayDirection?: boolean

    index?: number

    renderPagination?: (index: number, total: number, thisObject: Swiper) => JSX.Element

    dotStyle?: ViewStyle

    activeDotStyle?: ViewStyle

    dotColor?: string

    activeDotColor?: string

    height?: number

    paginationStyle?: ViewStyle
  }

  export default class Swiper extends React.Component<SwiperProperties, {}> {
  }
}

declare module 'react-native-scrollable-tab-view' {
  import * as React from 'react'
  import {
    Animated,
    ScrollViewProperties,
    ViewStyle,
  } from 'react-native'

  export interface OnChangeTabProperties {
    // currentPage
    i: number

    // currentPage object
    ref: JSX.Element

    // previousPage
    from: number
  }

  export interface RenderTabBarProperties {

    goToPage: (pageNumber: number) => void

    tabs: JSX.Element

    activeTab: number

    scrollValue: Animated.Value

    containerWidth: number
  }

  interface ScrollableTabViewProperties extends React.Props<ScrollableTabView> {

    /**
     * tabBarPosition (String) Defaults to "top".
     * "bottom" to position the tab bar below content.
     * "overlayTop" or "overlayBottom" for a semitransparent tab bar that overlays content. Custom
     * tab bars must consume a style prop on their outer element to support this feature: style={this.props.style}.
     */
    tabBarPosition?: 'top' | 'bottom' | 'overlayTop' | 'overlayBottom'

    /**
     * (Integer) - the index of the initially selected tab, defaults to 0 === first tab
     */
    initialPage?: number

    /**
     * (Integer) - set selected tab(can be buggy see
     * https://github.com/skv-headless/react-native-scrollable-tab-view/issues/126
     */
    page?: number

    /**
     * onChangeTab (Function) - function to call when tab changes, should accept 1 argument which is
     * an Object containing two keys: i: the index of the tab that is selected, ref: the ref of the
     * tab that is selected
     */
    onChangeTab?: (value: OnChangeTabProperties, pageNumber: number) => void

    /**
     * onScroll (Function) - function to call when the pages are sliding,
     * should accept 1 argument which is an Float number representing the page position in the slide frame.
     */
    onScroll?: (value: number) => void

    /**
     * renderTabBar (Function:ReactComponent) - accept 1 argument props and should return a component
     * to use as the tab bar. The component has goToPage, tabs, activeTab and ref added to the props,
     * and should implement setAnimationValue to be able to animate itself along with the tab content.
     * You can manually pass the props to the TabBar component.
     */
    renderTabBar?: (value: JSX.Element) => JSX.Element

    /**
     * style (View.propTypes.style)
     */
    style?: ViewStyle

    /**
     * contentProps (Object) - props that are applied to root ScrollView/ViewPagerAndroid.
     * Note that overriding defaults set by the library may break functionality; see the source for details.
     */
    contentProps?: ScrollViewProperties

    /**
     * scrollWithoutAnimation (Bool) - on tab press change tab without animation.
     */
    scrollWithoutAnimation?: boolean

    /**
     * locked (Bool) - disables horizontal dragging to scroll between tabs, default is false.
     */
    locked?: boolean

    /**
     * prerenderingSiblingsNumber (Integer) - pre-render nearby # sibling, Infinity === render all
     * the siblings, default to 0 === render current page.
     */
    prerenderingSiblingsNumber?: number

    tabBarActiveTextColor?: string

    tabBarBackgroundColor?: string

    tabBarInactiveTextColor?: string

  }

  export default class ScrollableTabView extends React.Component<ScrollableTabViewProperties, {}> {
  }
}
