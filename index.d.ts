import { PageRect, Point, Rect, RectPoints, Segment } from "./dist/BasicTypes";
import { HTMLPageCollection } from "./dist/Collection/HTMLPageCollection";
import { ImagePageCollection } from "./dist/Collection/ImagePageCollection";
import {  PageCollection } from "./dist/Collection/PageCollection";
import { DataType, EventObject, WidgetEvent } from "./dist/Event/EventObject";
import { Flip, FlipCorner, FlipDirection, FlippingState } from "./dist/Flip/Flip";
import { FlipCalculation } from "./dist/Flip/FlipCalculation";
import { Helper } from "./dist/Helper";
import { HTMLPage } from "./dist/Page/HTMLPage";
import { ImagePage } from "./dist/Page/ImagePage";
import { Page, PageDensity, PageOrientation, PageState } from "./dist/Page/Page";
import { PageFlip } from "./dist/PageFlip";
import { CanvasRender } from "./dist/Render/CanvasRender";
import { HTMLRender } from "./dist/Render/HTMLRender";
import { Orientation, Render } from "./dist/Render/Render";
import { FlipSetting, Settings, SizeType } from "./dist/Settings";
import { CanvasUI } from "./dist/UI/CanvasUI";
import { HTMLUI } from "./dist/UI/HTMLUI";
import { UI } from "./dist/UI/UI";

export as namespace St;

export {
    // Classes
    CanvasRender,
    CanvasUI,
    // Type aliases
    DataType,
    EventObject,
    Flip,
    FlipCalculation,
    // Enumerations
    FlipCorner,
    FlipDirection,
    FlippingState,
    // Interfaces
    FlipSetting,
    Helper,
    HTMLPage,
    HTMLPageCollection,
    HTMLRender,
    HTMLUI,
    ImagePage,
    ImagePageCollection,
    Orientation,
    Page,
    PageCollection,
    PageDensity,
    PageFlip,
    PageOrientation,
    PageRect,
    PageState,
    Point,
    Rect,
    RectPoints,
    Render,
    Segment,
    Settings,
    SizeType,
    UI,
    WidgetEvent,
};