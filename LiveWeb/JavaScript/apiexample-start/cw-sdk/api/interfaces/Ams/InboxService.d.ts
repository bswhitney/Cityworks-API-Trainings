import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace InboxServiceTypes { 
    export namespace Requests {
        export interface CopyWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            Id: number;
        }
        export interface CreateWidget extends ServiceTypes.CoreRequestBase {
            WidgetType: number;
            ZoneId: number;
        }
        export interface CreateWidgetContainer extends ServiceTypes.CoreRequestBase {
            ContainerType?: number;
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Position?: number;
            TabId: number;
        }
        export interface CreateWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Position?: number;
            TabType?: number;
        }
        export interface CreateWidgetZone extends ServiceTypes.CoreRequestBase {
            ContainerId: number;
        }
        export interface DeleteWidget extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        export interface DeleteWidgetContainer extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        export interface DeleteWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        export interface DeleteWidgetZone extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        export interface MoveWidget extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        export interface MoveWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        export interface MoveWidgetZone extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        export interface UpdateChartWidget extends ServiceTypes.CoreRequestBase {
            Analysis?: string;
            BottomMargin?: number;
            ChartType?: string;
            Header?: string;
            Height?: number;
            Id: number;
            Kind?: string;
            LeftMargin?: number;
            SearchId?: number;
            TextRotation?: number;
            XColumn?: string;
            YColumn?: string;
        }
        export interface UpdateHtmlWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: string;
            Html?: string;
            Id: number;
            Position?: number;
            Url?: string;
            WidgetZoneId?: number;
        }
        export interface UpdateNotesWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: string;
            Id: number;
            Notes?: string;
            Position?: number;
            WidgetZoneId?: number;
        }
        export interface UpdateReportLinksWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: number;
            Id: number;
            Position?: number;
            ReportIds?: number[];
            WidgetZoneId?: number;
        }
        export interface UpdateSearchResultsWidget extends ServiceTypes.CoreRequestBase {
            AutosizeColumns?: boolean;
            Header?: string;
            Height?: number;
            Id: number;
            RefreshInterval?: number;
            Rows?: number;
            SearchId?: number;
            SearchType?: number;
            SearchView?: number;
        }
        export interface UpdateWeatherWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Id: number;
            Position?: number;
            WidgetZoneId?: number;
            ZipCode?: string;
        }
        export interface UpdateWidgetContainer extends ServiceTypes.CoreRequestBase {
            ContainerType?: number;
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Id: number;
            Position?: number;
        }
        export interface UpdateWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Id: number;
            Position?: number;
            TabType?: number;
        }
        export interface UpdateWidgetZone extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Id: number;
            Position?: number;
            WidgetContainerId?: number;
            Width?: string;
        }
    }
    export namespace Responses {
        export interface CopyWidgetContainerTab extends ServiceTypes.CoreResponseBase_<{[key: number]: number}> {}
        export interface CreateWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidget> {}
        export interface CreateWidgetContainer extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainer> {}
        export interface CreateWidgetContainerTab extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainerTab> {}
        export interface CreateWidgetZone extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetZone> {}
        export interface DeleteWidget extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteWidgetContainer extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteWidgetContainerTab extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteWidgetZone extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface MoveWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidget> {}
        export interface MoveWidgetContainerTab extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainerTab> {}
        export interface MoveWidgetZone extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetZone> {}
        export interface UpdateChartWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.ChartWidget> {}
        export interface UpdateHtmlWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.HtmlWidget> {}
        export interface UpdateNotesWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.NotesWidget> {}
        export interface UpdateReportLinksWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.ReportLinksWidget> {}
        export interface UpdateSearchResultsWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchResultsWidget> {}
        export interface UpdateWeatherWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.WeatherWidget> {}
        export interface UpdateWidgetContainer extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainer> {}
        export interface UpdateWidgetContainerTab extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainerTab> {}
        export interface UpdateWidgetZone extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetZone> {}
    }
    export interface IInboxService {
        CopyWidgetContainerTab?: (request: Requests.CopyWidgetContainerTab) => AbortablePromise<Responses.CopyWidgetContainerTab>;
        CreateWidget?: (request: Requests.CreateWidget) => AbortablePromise<Responses.CreateWidget>;
        CreateWidgetContainer?: (request: Requests.CreateWidgetContainer) => AbortablePromise<Responses.CreateWidgetContainer>;
        CreateWidgetContainerTab?: (request: Requests.CreateWidgetContainerTab) => AbortablePromise<Responses.CreateWidgetContainerTab>;
        CreateWidgetZone?: (request: Requests.CreateWidgetZone) => AbortablePromise<Responses.CreateWidgetZone>;
        DeleteWidget?: (request: Requests.DeleteWidget) => AbortablePromise<Responses.DeleteWidget>;
        DeleteWidgetContainer?: (request: Requests.DeleteWidgetContainer) => AbortablePromise<Responses.DeleteWidgetContainer>;
        DeleteWidgetContainerTab?: (request: Requests.DeleteWidgetContainerTab) => AbortablePromise<Responses.DeleteWidgetContainerTab>;
        DeleteWidgetZone?: (request: Requests.DeleteWidgetZone) => AbortablePromise<Responses.DeleteWidgetZone>;
        MoveWidget?: (request: Requests.MoveWidget) => AbortablePromise<Responses.MoveWidget>;
        MoveWidgetContainerTab?: (request: Requests.MoveWidgetContainerTab) => AbortablePromise<Responses.MoveWidgetContainerTab>;
        MoveWidgetZone?: (request: Requests.MoveWidgetZone) => AbortablePromise<Responses.MoveWidgetZone>;
        UpdateChartWidget?: (request: Requests.UpdateChartWidget) => AbortablePromise<Responses.UpdateChartWidget>;
        UpdateHtmlWidget?: (request: Requests.UpdateHtmlWidget) => AbortablePromise<Responses.UpdateHtmlWidget>;
        UpdateNotesWidget?: (request: Requests.UpdateNotesWidget) => AbortablePromise<Responses.UpdateNotesWidget>;
        UpdateReportLinksWidget?: (request: Requests.UpdateReportLinksWidget) => AbortablePromise<Responses.UpdateReportLinksWidget>;
        UpdateSearchResultsWidget?: (request: Requests.UpdateSearchResultsWidget) => AbortablePromise<Responses.UpdateSearchResultsWidget>;
        UpdateWeatherWidget?: (request: Requests.UpdateWeatherWidget) => AbortablePromise<Responses.UpdateWeatherWidget>;
        UpdateWidgetContainer?: (request: Requests.UpdateWidgetContainer) => AbortablePromise<Responses.UpdateWidgetContainer>;
        UpdateWidgetContainerTab?: (request: Requests.UpdateWidgetContainerTab) => AbortablePromise<Responses.UpdateWidgetContainerTab>;
        UpdateWidgetZone?: (request: Requests.UpdateWidgetZone) => AbortablePromise<Responses.UpdateWidgetZone>;
    }
}
