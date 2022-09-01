import { Enums } from './enums';
export declare namespace Types {
    interface ActivityLink {
        ActivityLinkId?: number;
        DestId?: string;
        DestSid?: number;
        DestType?: Enums.ActivityLinkActivityType;
        LinkType?: Enums.ActivityLinkType;
        SourceId?: string;
        SourceSid?: number;
        SourceType?: Enums.ActivityLinkActivityType;
    }
    interface ActivityNotificationItem {
        ActivityId?: number;
        ActivityNotificationId?: number;
        ActivityType?: Enums.NotificationActivityType;
        DateCreated?: Date;
        EmployeeSid?: number;
        EventType?: Enums.NotificationEventType;
        Message?: string;
        ParentId?: number;
        UserRead?: boolean;
    }
    interface AliasAsset {
        Alias?: string;
        AliasType?: Enums.AssetAliasType;
        Assets?: string[];
    }
    interface AssemblyMaterial {
        ChildMatSid?: number;
        ParentMatSid?: number;
        Quantity?: number;
    }
    interface AssemblyMaterialDetail extends Types.AssemblyMaterial {
        ChildMatDesc?: string;
        ChildMatUid?: string;
        ChildStock?: number;
        Description?: string;
        MaterialUid?: string;
        Stock?: number;
        Storeroom?: string;
    }
    interface AssemblyTransactions {
    }
    interface AssetAlias {
        AliasNames?: string[];
        AliasType?: Enums.AssetAliasType;
        AssetName?: string;
    }
    interface AssetCostSummary {
        EntityType?: string;
        EntityUid?: string;
        Inspection?: Types.InspCostSummary[];
        WorkOrder?: Types.WorkOrderCostSummary[];
    }
    interface AssetIdField {
        CondScoreDateField?: string;
        CondScoreField?: string;
        DateModified?: Date;
        EntityUidField?: string;
        FacilityIdField?: string;
        IdField?: string;
        ImageNameField?: string;
        ImagePath?: string;
        IsFeatClass?: boolean;
        LevelIdField?: string;
        TableName?: string;
    }
    interface AssetSplitRecord {
        Comments?: string;
        DateRecorded?: Date;
        EntityType?: string;
        Id?: number;
        NewOid?: number;
        NewUid?: string;
        OldOid?: number;
        OldUid?: string;
    }
    interface AssetTypeId {
        AssetId?: string;
        AssetType?: string;
    }
    interface AttachmentActivityTagsItem {
        ActivityType?: string;
        AttachmentId?: number;
        AttachmentTagId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        TagId?: number;
        TagText?: string;
    }
    interface AttachmentBase {
        AttachedBySid?: number;
        Attachment?: string;
        AttachmentType?: Enums.AttachmentFileType;
        Comments?: string;
        DateTimeAttached?: Date;
    }
    interface AttachmentExtendedBase extends Types.AttachmentBase {
        AttachedBy?: string;
        Description?: string;
        Title?: string;
    }
    interface AttachmentMapping extends Types.CoreDomainBase {
        Alias?: string;
        DomainId?: number;
        Source?: string;
    }
    interface Audit extends Types.Transaction {
        AcctNum?: string;
        CostDiff?: number;
        NewQuant?: number;
        NewUnitCost?: number;
        OldQuant?: number;
        OldUnitCost?: number;
        Reason?: string;
        SerialNumbersLost?: string[];
        StoreRm?: string;
    }
    interface AuthToken {
        Token?: string;
    }
    interface BusinessCaseItem {
        AnonymousFlag?: string;
        AssignedTo?: number;
        AutoNumberFlag?: string;
        BLicenseFlag?: string;
        BusCaseCode?: string;
        BusCaseDesc?: string;
        BusCaseId?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeExpiredFlag?: string;
        CaseTypeId?: number;
        CheckQuickCreate?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        FirstName?: string;
        InfoFlag?: string;
        InfoText?: string;
        InitialCaseStatusId?: number;
        LastName?: string;
        LoginId?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        RegisteredFlag?: string;
        ShowQuickCreate?: string;
        SubType?: string;
        SubTypeDefaultText?: string;
        SubTypeDesc?: string;
        SubTypeExpiredFlag?: string;
        SubTypeId?: number;
        TermsFlag?: string;
        TermsText?: string;
    }
    interface CaAddressItem extends Types.CaAddressItemBase {
        CaObjectLocation?: string;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusId?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CreatedByLoginId?: string;
        FeatureFlagOn?: string;
        FormatedAddress?: string;
        InspectionArea?: string;
        IsSingleEntry?: boolean;
        ModifiedByLoginId?: string;
        OrgId?: number;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        StateName?: string;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TempTableName?: string;
        UniqueKeyForAdvQry?: number;
    }
    interface CaAddressItemBase {
        Address?: string;
        AddressId?: number;
        AssetId?: string;
        AssetObjectId?: number;
        AssetType?: string;
        CaAddressId?: number;
        CaObjectId?: number;
        CityName?: string;
        CreatedBy?: number;
        CrossStreet?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        Facility_Id?: string;
        FeatureAssetId?: string;
        FeatureClass?: string;
        FeatureObjectId?: number;
        LegacyId?: string;
        Level_Id?: string;
        LndObjectId?: number;
        Location?: string;
        MasterFlag?: string;
        ModifiedBy?: number;
        ObjectId?: string;
        StateCode?: string;
        StreetDirection?: string;
        StreetFraction?: string;
        StreetName?: string;
        StreetNumber?: number;
        StreetPostDir?: string;
        StreetType?: string;
        Suite?: string;
        TileNo?: string;
        XCoord?: number;
        YCoord?: number;
        ZCoord?: number;
        ZipCode?: string;
    }
    interface CaAssetItemBase {
        Address?: string;
        AssetId?: string;
        AssetObjectId?: number;
        AssetType?: string;
        CaAssetId?: number;
        CaObjectId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        FeatureAssetId?: string;
        FeatureClass?: string;
        FeatureObjectId?: number;
        LegacyId?: string;
        Location?: string;
        ModifiedBy?: number;
        TileNo?: string;
        Xcoord?: string;
        Ycoord?: string;
    }
    interface CaChildObjectItemBase {
        CaChildObjectId?: number;
        CaObjectId?: number;
        ChildId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
    }
    interface CaConditionItem extends Types.CaConditionItemBase {
        AnonymousFlag?: string;
        AppliedByLoginId?: string;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CompletedByLoginId?: string;
        ConditionCode?: string;
        ConditionDesc?: string;
        CreatedByLoginId?: string;
        DisciplineCode?: string;
        DisciplineDesc?: string;
        IsSingleEntry?: boolean;
        ModifiedByLoginId?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        RegisteredFlag?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TableName?: string;
        TaskCode?: string;
        TaskDesc?: string;
    }
    interface CaConditionItemBase {
        AppliedBy?: number;
        CaConditionId?: number;
        CaObjectId?: number;
        CompletedBy?: number;
        ConditionId?: number;
        CreatedBy?: number;
        DateApplied?: Date;
        DateCompleted?: Date;
        DateCreated?: Date;
        DateModified?: Date;
        DefaultText?: string;
        DisciplineId?: number;
        ModifiedBy?: number;
        Notes?: string;
        PrePostExistFlag?: string;
        TaskId?: number;
    }
    interface CaContractorItem extends Types.CaContractorItemBase {
        AvailableEscrowAmount?: number;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        EscrowAmount?: number;
        IsSingleEntry?: boolean;
        Location?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TableName?: string;
        TempTableName?: string;
        UniqueKeyForAdvQry?: number;
    }
    interface CaContractorItemBase {
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        BusinessName?: string;
        CaContractorId?: number;
        CaObjectId?: number;
        CityName?: string;
        CommentText?: string;
        ContractorDesc?: string;
        ContractorId?: number;
        ContractorType?: string;
        ContractorTypeId?: number;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateModified?: Date;
        Email?: string;
        FaxNumber?: string;
        FirstName?: string;
        GenLiability?: string;
        GenLiabilityExpDate?: Date;
        LastName?: string;
        LicenseExpirationDate?: Date;
        LicenseNum?: string;
        LocalLicenseId?: number;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        PhoneHome?: string;
        PhoneMobile?: string;
        PhoneWork?: string;
        StateCode?: string;
        StateLicenseId?: number;
        WcLiabilityCompany?: string;
        WCLiabilityExpDate?: Date;
        ZipCode?: string;
    }
    interface CaCorrectionsItemBase {
        CaCorrectionsId?: number;
        CaObjectId?: number;
        CaTaskId?: number;
        CommentText?: string;
        CompletedBy?: number;
        CorrCode?: string;
        CorrDesc?: string;
        CorrId?: number;
        CorrStatusCode?: string;
        CorrStatusDesc?: string;
        CorrStatusGrpId?: number;
        CorrStatusId?: number;
        CreatedBy?: number;
        DateCompleted?: Date;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        RecheckCaCorrId?: number;
        RecheckFlag?: string;
        RecheckHistoryFlag?: string;
    }
    interface CaCorrStatusItemBase {
        CaCorrectionsId?: number;
        CaCorrStatusId?: number;
        CompletedBy?: number;
        CorrDefaultStatus?: boolean;
        CorrStatusCode?: string;
        CorrStatusDesc?: string;
        CorrStatusId?: number;
        CreatedBy?: number;
        DateCompleted?: Date;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
    }
    interface CaDataDetailChanges {
        CaDataDetailId?: number;
        DetailDesc?: string;
        EntityType?: string;
        EntityUid?: string;
        NewValue?: string;
        OldValue?: string;
    }
    interface CaDataDetailItem extends Types.CaDataDetailItemBase {
        CaListValues?: string[];
        CaObjectId?: number;
        CaseDataDetailCode?: string;
        CaseDataGroupId?: number;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CheckboxFlag?: string;
        CollapseFlag?: string;
        CreatedByLoginId?: string;
        DefaultQuantity?: number;
        DefaultRate?: number;
        DefaultValue?: number;
        GroupCode?: string;
        GroupDesc?: string;
        GroupDetailFlag?: string;
        GroupSum?: number;
        ImageName?: string;
        IntakeFlag?: string;
        IsSingleEntry?: boolean;
        ItemValue?: string[];
        ListValues?: string[];
        ModifiedByLoginId?: string;
        OrgId?: number;
        PAHelpQuestion?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        Q1LabelText?: string;
        Q2LabelText?: string;
        Q3LabelText?: string;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        SumFlag?: string;
        TempTableName?: string;
        UniqueKeyForAdvQry?: number;
    }
    interface CaDataDetailItemBase {
        CaDataDetailId?: number;
        CaDataGroupId?: number;
        CalcRateFlag?: string;
        CaseDataDetailId?: number;
        ColumnSequence?: string;
        CommentFlag?: string;
        CommentValue?: string;
        CreatedBy?: number;
        CurrencyFlag?: string;
        CurrencyValue?: number;
        DateCountFlag?: string;
        DateCountValue?: string;
        DateCreated?: Date;
        DateFlag?: string;
        DateModified?: Date;
        DateValue?: Date;
        DetailCode?: string;
        DetailDesc?: string;
        DetailSequence?: number;
        GISUpdateFlag?: string;
        ListValue?: string;
        ListValuesFlag?: string;
        LockFlag?: string;
        ModifiedBy?: number;
        NumberFlag?: string;
        NumberValue?: number;
        Q1Q2Q3Flag?: string;
        Q2Value?: number;
        Q3Value?: number;
        Quantity?: number;
        Rate?: number;
        TextFlag?: string;
        TextValue?: string;
        Value?: number;
        ValueFlag?: string;
        YesNoFlag?: string;
        YesNoValue?: string;
    }
    interface CaDataGroupItem extends Types.CaDataGroupItemBase {
        CaseDataGroupCode?: string;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CollapseFlag?: string;
        CreatedByLoginId?: string;
        IsSingleEntry?: boolean;
        ModifiedByLoginId?: string;
        SubType?: string;
        SubTypeDesc?: string;
        TempTableName?: string;
    }
    interface CaDataGroupItemBase {
        CaDataGroupId?: number;
        CaObjectId?: number;
        CaseDataGroupId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        GroupCode?: string;
        GroupDesc?: string;
        GroupSum?: number;
        ModifiedBy?: number;
        SumFlag?: string;
    }
    interface CaDataListValuesItemBase {
        CaDataDetailId?: number;
        CaDataListId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ListValue?: string;
        ModifiedBy?: number;
    }
    interface CaDepositItem extends Types.CaDepositItemBase {
        AccountCode?: string;
        AmountDue?: number;
        CaseDateCreated?: Date;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CreatedByLoginId?: string;
        CreditAmount?: number;
        DepositCode?: string;
        DepositDesc?: string;
        DepositTypeCode?: string;
        DepositTypeDesc?: string;
        DepositTypeId?: number;
        FeesDepositAmount?: number;
        IsSingleEntry?: boolean;
        Location?: string;
        ModifiedByLoginId?: string;
        PaymentAmount?: number;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TempTableName?: string;
        TotalCreditAmount?: number;
        TotalDepositAmount?: number;
        TotalDueAmount?: number;
        TotalPaymentAmount?: number;
    }
    interface CaDepositItemBase {
        Amount?: number;
        CaDepositId?: number;
        CaObjectId?: number;
        CommentText?: string;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        DepositId?: number;
        ModifiedBy?: number;
    }
    interface CaFeesDataDetailItemBase {
        CaDataDetailId?: number;
        CaFeeId?: number;
        CaFeesDataDetailId?: number;
        CaObjectId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        Sequence?: number;
    }
    interface CaFeesDataGroupItemBase {
        CaDataGroupId?: number;
        CaFeeId?: number;
        CaFeesDataGroupId?: number;
        CaObjectId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        Sequence?: number;
    }
    interface CaFeesItem extends Types.CaFeesItemBase {
        AmountDue?: number;
        CaDataDetailArry?: Types.CaDataDetailItem[];
        CaDataDetailIdArry?: number[];
        CaDataGroupArry?: Types.CaDataGroupItem[];
        CaDataGroupIdArry?: number[];
        CaseDataDetailId?: number;
        CaseDataDetailIdArry?: number[];
        CaseDataGroupId?: number;
        CaseDataGroupIdArry?: number[];
        CaseDateCreated?: Date;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CreatedByLoginId?: string;
        CreditAmount?: number;
        DetailCode?: string;
        FeeTypeCode?: string;
        GrandSumFlag?: string;
        GroupCode?: string;
        Location?: string;
        ModifiedByLoginId?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        Sum?: number;
        TableName?: string;
        TempTableName?: string;
        TotalCreditAmount?: number;
        TotalDueAmount?: number;
        TotalFeeAmount?: number;
        TotalPaymentAmount?: number;
        Value?: number;
    }
    interface CaFeesItemBase {
        Amount?: number;
        AutoRecalculate?: string;
        CaDataDetailId?: number;
        CaDataGroupId?: number;
        CaFeeId?: number;
        CaObjectId?: number;
        CommentText?: string;
        CreatedBy?: number;
        CustFeeSeq?: number;
        DateCreated?: Date;
        DateModified?: Date;
        Factor?: number;
        FeeCode?: string;
        FeeDesc?: string;
        FeeSetupId?: number;
        FeeTypeId?: number;
        Invoiced?: string;
        LockOnPayment?: string;
        ModifiedBy?: number;
        PaymentAmount?: number;
        Quantity?: number;
        Rate?: number;
        RecalcCreateDate?: string;
        WaiveFee?: string;
    }
    interface CaFlagsItem extends Types.CaFlagsItemBase {
        AnonymousFlag?: string;
        AppliedByLoginId?: string;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CompletedByLoginId?: string;
        CreatedByLoginId?: string;
        DisciplineCode?: string;
        DisciplineDesc?: string;
        Flag?: string;
        FlagDesc?: string;
        IsSingleEntry?: boolean;
        ModifiedByLoginId?: string;
        OrgId?: number;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        RegisteredFlag?: string;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TableName?: string;
    }
    interface CaFlagsItemBase {
        AppliedBy?: number;
        CaFlagId?: number;
        CaObjectId?: number;
        CompletedBy?: number;
        CreatedBy?: number;
        DateApplied?: Date;
        DateCompleted?: Date;
        DateCreated?: Date;
        DateModified?: Date;
        DisciplineId?: number;
        FlagId?: number;
        ModifiedBy?: number;
        Notes?: string;
        Severity?: string;
    }
    interface CaInspectionRequestItem extends Types.CaInspectionRequestItemBase {
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CaTaskId?: number;
        CreatedByLoginId?: string;
        ModifiedByLoginId?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        ResponsibleUserId?: number;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TargetEndDate?: Date;
        TargetStartDate?: Date;
        TaskCode?: string;
        TaskDesc?: string;
        TaskId?: number;
        TaskType?: string;
        UniqueKeyForAdvQry?: number;
    }
    interface CaInspectionRequestItemBase {
        CaObjectId?: number;
        ConfirmationId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        LocationSpecific?: string;
        ModifiedBy?: number;
        RequestId?: number;
        RequestorComment?: string;
        RequestorName?: string;
        RequestorPhone?: string;
        RequestorPhoneExt?: string;
        RequestSource?: string;
    }
    interface CaInstReleasesItemBase {
        AmountReleased?: number;
        CaInstReleasesId?: number;
        CaInstrumentId?: number;
        CommentText?: string;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        DateReleased?: Date;
        ModifiedBy?: number;
        PercentReleased?: number;
        ReleasedBy?: number;
    }
    interface CaInstrumentItem extends Types.CaInstrumentItemBase {
        AmountReleased?: number;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CountryName?: string;
        CreatedByLoginId?: string;
        InstDesc?: string;
        InstType?: string;
        IsSingleEntry?: boolean;
        ModifiedByLoginId?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        StateName?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TableName?: string;
    }
    interface CaInstrumentItemBase {
        AddressLine1?: string;
        AddressLine2?: string;
        Amount?: number;
        CaInstrumentId?: number;
        CaObjectId?: number;
        CityName?: string;
        CommentText?: string;
        Company?: string;
        ContactEmail?: string;
        ContactName?: string;
        ContactPhone?: string;
        CountryCode?: string;
        CreatedBy?: number;
        DateCreated?: Date;
        DateExpire?: Date;
        DateModified?: Date;
        EffectiveDate?: Date;
        InstTypeId?: number;
        IssueDate?: Date;
        ModifiedBy?: number;
        SerialNumber?: string;
        StateCode?: string;
        ZipCode?: string;
    }
    interface CaLicenseItem extends Types.CaLicenseItemBase {
        CaseNumber?: string;
        CaseType?: string;
        CaseTypeId?: number;
        IsSingleEntry?: boolean;
    }
    interface CaLicenseItemBase {
        CaFeeId?: number;
        CaLicenseId?: number;
        CaObjectId?: number;
        Code?: string;
        Comments?: string;
        CreatedBy?: number;
        DateApproved?: Date;
        DateCreated?: Date;
        DateModified?: Date;
        Description?: string;
        FeeCode?: string;
        FeeSetupId?: number;
        LicenseNumber?: number;
        ModifiedBy?: number;
        StatusCode?: string;
    }
    interface CaNotesItem extends Types.CaNotesItemBase {
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CommentCode?: string;
        CreatedByLoginId?: string;
        IsSingleEntry?: boolean;
        Location?: string;
        ModifiedByLoginId?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        Sequence?: number;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        UniqueKeyForAdvQry?: number;
    }
    interface CaNotesItemBase {
        CaNotesId?: number;
        CaObjectId?: number;
        CommentId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        Notes?: string;
        printOnCase?: string;
    }
    interface CaObjectCommentsItemBase {
        CaObjectCommentId?: number;
        CaObjectId?: number;
        CommentText?: string;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        PAVisibleFlag?: string;
    }
    interface CaObjectItem extends Types.CaObjectItemBase {
        AcceptedByLoginId?: string;
        AmountDue?: number;
        AnonymousFlag?: string;
        CaseGroup?: string;
        CloneCaseRelation?: string;
        CreatedByLoginId?: string;
        EnteredByLoginid?: string;
        GetViewColumns?: string[];
        ModifiedByLoginId?: string;
        ParentCaObjectId?: number;
        PendingFlag?: string;
        RegisteredFlag?: string;
        ServiceRequestDesc?: string;
        ServiceRequestId?: number;
        ServiceRequestStatus?: string;
        TableName?: string;
        TempTableName?: string;
        WorkOrderDesc?: string;
        WorkOrderId?: number;
        WorkOrderStatus?: string;
    }
    interface CaObjectItemBase {
        AcceptedBy?: number;
        ActiveFlag?: string;
        AssignedTo?: number;
        AssignedToFirstName?: string;
        AssignedToLastName?: string;
        AssignedToLoginId?: string;
        BLicenseFlag?: string;
        BusCaseDesc?: string;
        BusCaseId?: number;
        BusinessCategory?: string;
        BusinessName?: string;
        BusinessOrgType?: string;
        CaObjectId?: number;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusId?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CreatedBy?: number;
        CX?: number;
        CY?: number;
        CZ?: number;
        DateAccepted?: Date;
        DateCreated?: Date;
        DateEntered?: Date;
        DateExpiration?: Date;
        DateIssued?: Date;
        DateModified?: Date;
        EnteredBy?: number;
        ExpiredFlag?: string;
        Facility_Id?: string;
        FedTaxId?: string;
        IssuedBy?: number;
        IssuedFlag?: string;
        Level_Id?: string;
        Location?: string;
        ModifiedBy?: number;
        OrgId?: number;
        PACaseFlag?: string;
        PriorityLevel?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        ProjectSid?: number;
        StateTaxId?: string;
        StatusCode?: string;
        SubType?: string;
        SubTypeDefaultText?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
    }
    interface CaPaymentItem extends Types.CaPaymentItemBase {
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CreatedByLoginId?: string;
        DepositDesc?: string;
        EscrowPaymentId?: number;
        FeeDesc?: string;
        FeeSetupId?: number;
        isCaseObjectUpdated?: boolean;
        Location?: string;
        ModifiedByLoginId?: string;
        OverPaymentFlag?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        ReceivedByLoginId?: string;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TempTableName?: string;
        TenderDesc?: string;
        VersionNo?: string;
        VoidedByLoginId?: string;
    }
    interface CaPaymentItemBase {
        CaDepositId?: number;
        CaFeeId?: number;
        CaObjectId?: number;
        CaPaymentId?: number;
        CaReceiptId?: number;
        CommentText?: string;
        CreatedBy?: number;
        CustFeeSeq?: number;
        DateCreated?: Date;
        DateModified?: Date;
        DateReceived?: Date;
        DateVoided?: Date;
        DepositCode?: string;
        DepositId?: number;
        FeeAmount?: number;
        FeeCode?: string;
        ModifiedBy?: number;
        PaymentAccount?: string;
        PaymentAmount?: number;
        PaymentDate?: Date;
        ReceivedBy?: number;
        ReferenceInfo?: string;
        TenderType?: string;
        TenderTypeId?: number;
        Voided?: string;
        VoidedBy?: number;
    }
    interface CaPaymentRefundItemBase {
        CaFeeId?: number;
        CaPaymentId?: number;
        CaPaymentRefundId?: number;
        Comments?: string;
        CreatedBy?: number;
        DateCreated?: Date;
        DateVoided?: Date;
        RefundAmount?: number;
        Voided?: string;
        VoidedBy?: number;
    }
    interface CaPeopleItem extends Types.CaPeopleItemBase {
        AddToPeople?: boolean;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CountryName?: string;
        CreatedByLoginId?: string;
        IsSingleEntry?: boolean;
        Location?: string;
        ModifiedByLoginId?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        Roles?: Types.CaPeopleRoleItem[];
        StateName?: string;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TempTableName?: string;
        UniqueKeyForAdvQry?: number;
        VersionNo?: string;
    }
    interface CaPeopleItemBase {
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        CaObjectId?: number;
        CaPeopleId?: number;
        CityName?: string;
        CommentText?: string;
        CompanyName?: string;
        CountryCode?: string;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        Email?: string;
        FaxNumber?: string;
        ModifiedBy?: number;
        Name?: string;
        PeopleId?: number;
        PhoneHome?: string;
        PhoneMobile?: string;
        PhoneWork?: string;
        PhoneWorkExt?: string;
        StateCode?: string;
        WebSiteUrl?: string;
        ZipCode?: string;
    }
    interface CaPeopleRoleItem extends Types.CaPeopleRoleItemBase {
        CreatedByLoginId?: string;
        ModifiedByLoginId?: string;
        RequiredFields?: string;
        RoleCode?: string;
        RoleDesc?: string;
        TableName?: string;
    }
    interface CaPeopleRoleItemBase {
        CaPeopleId?: number;
        CaPeopleRoleId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        RoleId?: number;
    }
    interface CaReceiptItem {
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        AmountBalance?: number;
        CaReceiptId?: number;
        CityName?: string;
        CommentText?: string;
        FaxNumber?: string;
        GenerateReceipt?: Enums.WritePdf;
        LoginId?: string;
        OrgCode?: string;
        OrgDesc?: string;
        OrgId?: number;
        PhoneNumber?: string;
        ReceiptDate?: Date;
        ReceiptFileName?: string;
        StateCode?: string;
        TempTableName?: string;
        TotalAmountDue?: number;
        TotalAmountTendered?: number;
        UserId?: number;
        WebSiteUrl?: string;
        ZipCode?: string;
    }
    interface CaRelDocsItem extends Types.CaRelDocsItemBase {
        IsSingleEntry?: boolean;
        TempTableName?: string;
        UserDefinedLocation?: boolean;
    }
    interface CaRelDocsItemBase {
        CaObjectId?: number;
        CaReceiptId?: number;
        CaRelDocId?: number;
        CaTaskId?: number;
        CommentText?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateModified?: Date;
        Description?: string;
        DocActivityType?: Enums.DocumentActivityType;
        DocContentInString?: string;
        DocName?: string;
        DocumentContent?: number[];
        LabelText?: string;
        Location?: string;
        LocationType?: string;
        ModifiedBy?: number;
        Tags?: Types.AttachmentActivityTagsItem[];
        Title?: string;
    }
    interface CaseCommentRecord extends Types.CommentRecord {
        PAVisibleFlag?: string;
    }
    interface CaseData {
        BusCaseId?: number;
        Conditions?: Types.CaConditionItem[];
        DataGroup?: Types.CaDataGroupItem[];
        Deposit?: Types.CaDepositItem[];
        Fee?: Types.CaFeesItem[];
        Flags?: Types.CaFlagsItem[];
        Object?: Types.CaObjectItem;
        People?: Types.CaPeopleItem[];
        Tasks?: Types.CaTaskItem[];
    }
    interface CaseStatusItem {
        CaseStatus?: string;
        CaseStatusId?: number;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        StatusCode?: string;
        StatusDesc?: string;
    }
    interface CaseTypeItem {
        AnonymousFlag?: string;
        AutoExtExprFromInsp?: number;
        AutoNumberFlag?: string;
        BLicenseFlag?: string;
        CaseGroup?: string;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        DepartmentCode?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        DivisionCode?: string;
        DivisionId?: number;
        DivisionName?: string;
        ExpirationTypeCode?: string;
        ExpirationTypeDesc?: string;
        ExpiredFlag?: string;
        IncrementBy?: number;
        InitialCaseStatusCode?: string;
        InitialCaseStatusId?: number;
        IntakeExpirationTypeId?: number;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        NumberingGroupCode?: string;
        NumberingGroupId?: number;
        OrgId?: number;
        PrefixYyyymmdd?: string;
        RecalcExpirationStatus?: number;
        RecalcExpirationStatusCode?: string;
        RecalcExpirationType?: string;
        RecalcExpirationTypeId?: number;
        RegisteredFlag?: string;
        RemoveTempCharacterStatusId?: number;
        RemoveTempCharCaseStatus?: string;
        StartWith?: number;
        StatusCode?: string;
        TableName?: string;
        TaskCode?: string;
        TaskDesc?: string;
        UseTempCharacter?: string;
    }
    interface CaTaskCommentsItem extends Types.CaTaskCommentsItemBase {
        CaseNumber?: string;
        CaseType?: string;
        CaseTypeId?: number;
        GeneralComment?: string;
        IsDBValue?: string;
        IsSingleEntry?: boolean;
        UserFlag?: string;
    }
    interface CaTaskCommentsItemBase {
        CaObjectId?: number;
        CaTaskCommentId?: number;
        CaTaskId?: number;
        CommentId?: number;
        Commenttext?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
    }
    interface CaTaskItem extends Types.CaTaskItemBase {
        AcceptedEndPoint?: number;
        AcceptedStartPoint?: number;
        AnonymousFlag?: string;
        AutoSchduleInspDays?: number;
        AutoSchduleInspTime?: number;
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CaTaskCommentsItemList?: Types.CaTaskCommentsItem[];
        CaTaskCommentsJsonString?: string;
        CaTaskTimeAccountingItemList?: Types.CaTaskTimeAccountingItem[];
        CloseTaskFlag?: string;
        ConfirmationId?: number;
        CorrGroupCode?: string;
        CorrGroupDesc?: string;
        CreatedByLoginId?: string;
        CX?: number;
        CY?: number;
        CZ?: number;
        Db2BAdjustedFrom?: number;
        DepartmentCode?: string;
        DepartmentName?: string;
        DisciplineCode?: string;
        DisciplineDesc?: string;
        DivisionCode?: string;
        DivisionName?: string;
        ExtendExpirationDateFlag?: string;
        FirstName?: string;
        GeoArea?: string;
        GeoAreaDesc?: string;
        GeoDetail?: string;
        GeoDetailDesc?: string;
        HasComments?: boolean;
        HasCorrections?: boolean;
        HasRelDocs?: boolean;
        HasSignature?: boolean;
        HasTimeAccounting?: boolean;
        HearingDesc?: string;
        HearingType?: string;
        InsertFlag?: string;
        IsCaseObjectChanged?: boolean;
        IsChangedUserAcceptedValues?: boolean;
        IsDBAdjusted?: boolean;
        IsInsertBetweenLevel?: boolean;
        IsScheduler?: boolean;
        IsSingleEntry?: boolean;
        LastName?: string;
        Location?: string;
        LoginId?: string;
        ModifiedByLoginId?: string;
        NextTaskFlag?: string;
        OrgId?: number;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        RegisteredFlag?: string;
        ReInsertFlag?: string;
        ReqCorrectionsFlag?: string;
        ResultDisplay?: string;
        ShowSignatureFlag?: string;
        SkipTaskFlag?: string;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TableName?: string;
        TaskCompletedByFirstName?: string;
        TaskCompletedByLastName?: string;
        TaskCompletedByLoginID?: string;
        TaskSequence?: number;
        UniqueKeyForAdvQry?: number;
    }
    interface CaTaskItemBase {
        ActualEndDate?: Date;
        ActualStartDate?: Date;
        AutoSchduleInspFlg?: string;
        CalWeekDayFlag?: string;
        CaObjectId?: number;
        CaTaskId?: number;
        CorrGroupId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        DefDurationDays?: number;
        DefDurationTime?: number;
        DisciplineId?: number;
        EndPoint?: number;
        ExpiredFlag?: string;
        GeoAreaId?: number;
        GeoDetailId?: number;
        HearingTypeId?: number;
        LeadDays?: number;
        LocationNotes?: string;
        ModifiedBy?: number;
        RescheduleAfterDays?: number;
        ResponsibleDeptId?: number;
        ResponsibleDivId?: number;
        ResponsibleUserId?: number;
        ResultCode?: string;
        ResultId?: number;
        ResultSetDesc?: string;
        ResultSetId?: number;
        StartPoint?: number;
        TargetEndDate?: Date;
        TargetStartDate?: Date;
        TaskAvailableDate?: Date;
        TaskAvailableFlag?: string;
        TaskCode?: string;
        TaskCompleteDate?: Date;
        TaskCompletedBy?: number;
        TaskCompleteFlag?: string;
        TaskDesc?: string;
        TaskGeoFlag?: string;
        TaskId?: number;
        TaskType?: string;
        TimeCut?: number;
        Unit?: string;
        WorkUnit?: number;
    }
    interface CaTaskResultsItem extends Types.CaTaskResultsItemBase {
        CaseStatus?: string;
        IsSingleEntry?: boolean;
        StatusCode?: string;
    }
    interface CaTaskResultsItemBase {
        CaObjectId?: number;
        CaseStatusId?: number;
        CaTaskId?: number;
        CaTaskResultsId?: number;
        CloseTaskFlag?: string;
        ExtendExpirationDateFlag?: string;
        InsertFlag?: string;
        NextTaskFlag?: string;
        ReInsertFlag?: string;
        ResultCode?: string;
        ResultDesc?: string;
        ResultDisplay?: string;
        ResultID?: number;
        ResultSetID?: number;
        SkipTaskFlag?: string;
    }
    interface CaTaskTimeAccountingItem {
        CaObjectId?: number;
        CaseNumber?: string;
        CaseType?: string;
        CaseTypeId?: number;
        CaTaskId?: number;
        CaTaskTimeAccountingId?: number;
        CommentText?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateModified?: Date;
        DateTimeSpent?: Date;
        IsDBValue?: string;
        IsSingleEntry?: boolean;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        TimeAccountingCode?: string;
        TimeAccountingDesc?: string;
        TimeAccountingId?: number;
        TimeSpent?: number;
        TimeSpentBy?: number;
        TimeSpentByLoginId?: string;
    }
    interface CategoryComment {
        ApplyTo?: Enums.WorkType;
        Category?: string;
        Comments?: string;
        ObjectId?: number;
    }
    interface CategoryCustField {
        CategoryId?: number;
        CodeDescList?: Types.CodeDesc[];
        CodeType?: string;
        CustFieldId?: number;
        CustFieldName?: string;
        CustFieldType?: Enums.FieldDataType;
        CustFieldValue?: string;
        DefaultValue?: string;
        ForceSortByCode?: boolean;
        IsRequired?: boolean;
        IsVisible?: boolean;
        LinkFieldName?: string;
        MaxValue?: number;
        MinValue?: number;
        SequenceId?: number;
        UseCodeDesc?: string;
        UseCodeForDisplay?: boolean;
    }
    interface CaViolationsItem extends Types.CaViolationsItemBase {
        CaseName?: string;
        CaseNumber?: string;
        CaseStatus?: string;
        CaseStatusID?: number;
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CompletedByLoginId?: string;
        CreatedByLoginId?: string;
        FeeCode?: string;
        FeeDesc?: string;
        FeeSetupId?: number;
        IsSingleEntry?: boolean;
        IssuedByLoginId?: string;
        Location?: string;
        ModifiedByLoginId?: string;
        ProjectCode?: string;
        ProjectDesc?: string;
        ProjectId?: number;
        StatusCode?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        TableName?: string;
        TaskCode?: string;
        TaskDesc?: string;
        ViolationDesc?: string;
        ViolationType?: string;
    }
    interface CaViolationsItemBase {
        CaFeeId?: number;
        CaObjectId?: number;
        CaTaskId?: number;
        CaViolationId?: number;
        CompletedBy?: number;
        CreatedBy?: number;
        DateCompleted?: Date;
        DateCreated?: Date;
        DateIssued?: Date;
        DateModified?: Date;
        Issuedby?: number;
        ModifiedBy?: number;
        RemedialText?: string;
        ViolationId?: number;
        ViolationText?: string;
    }
    interface CctvCode {
        Cause?: string;
        Code?: string;
        CodeGroup?: string;
        Description?: string;
        Grade?: number;
        HRange?: number;
        LoRange?: number;
        ValueField?: string;
    }
    interface CctvCodeDescGrade {
        Cause?: string;
        Code?: string;
        CodeGroup?: string;
        Description?: string;
        Grade?: number;
        HRange?: number;
        LoRange?: number;
        ValueField?: string;
    }
    interface ChangeOutOperation {
        AssetType?: string;
        ChangeOutId?: number;
        Comments?: string;
        DirectParentType?: string;
        DirectParentUid?: string;
        NewRead?: Types.ChangeOutRead;
        NewReadId?: number;
        NewUid?: string;
        OldRead?: Types.ChangeOutRead;
        OldReadId?: number;
        OldUid?: string;
        Operation?: Enums.ChangeOutOp;
        OperationId?: number;
        RecordDate?: Date;
    }
    interface ChangeOutRead {
        Date1?: Date;
        Date2?: Date;
        Date3?: Date;
        Date4?: Date;
        Date5?: Date;
        Num1?: number;
        Num10?: number;
        Num11?: number;
        Num12?: number;
        Num13?: number;
        Num14?: number;
        Num15?: number;
        Num16?: number;
        Num17?: number;
        Num18?: number;
        Num19?: number;
        Num2?: number;
        Num20?: number;
        Num3?: number;
        Num4?: number;
        Num5?: number;
        Num6?: number;
        Num7?: number;
        Num8?: number;
        Num9?: number;
        OperationId?: number;
        ReadId?: number;
        Text1?: string;
        Text10?: string;
        Text11?: string;
        Text12?: string;
        Text13?: string;
        Text14?: string;
        Text15?: string;
        Text16?: string;
        Text17?: string;
        Text18?: string;
        Text19?: string;
        Text2?: string;
        Text20?: string;
        Text3?: string;
        Text4?: string;
        Text5?: string;
        Text6?: string;
        Text7?: string;
        Text8?: string;
        Text9?: string;
    }
    interface ChartWidget {
        Header?: string;
        Id?: number;
        Kind?: string;
        Position?: number;
        Settings?: Types.ChartWidgetSettings;
        WidgetZoneId?: number;
    }
    interface ChartWidgetFormatOptions {
        ChartColor?: string;
        MainBackgroundColor?: string;
        MainTextColor?: string;
        NameColor?: string;
        PieChartPallet?: number;
    }
    interface ChartWidgetOptions extends Types.WidgetOptions {
        AggregateByField?: string;
        AggregationType?: Enums.DashboardAggregationType;
        ChartType?: Enums.DashboardChartWidgetType;
        DateGroupBy?: Enums.DateGroupByOption;
        FormatOptions?: Types.ChartWidgetFormatOptions;
        GroupByField?: string;
        NumberFormat?: Enums.DashboardNumberFormat;
        QueryId?: number;
    }
    interface ChartWidgetSettings {
        Analysis?: string;
        BottomMargin?: number;
        ChartType?: string;
        Height?: number;
        Items?: Types.ChartWidgetSettingsItem[];
        LeftMargin?: number;
        TextRotation?: number;
    }
    interface ChartWidgetSettingsItem {
        Kind?: string;
        SearchId?: number;
        XColumn?: string;
        YColumn?: string;
    }
    interface ChgOutReadConfig {
        AssetType?: string;
        FieldLabel?: string;
        FieldName?: string;
        Format?: string;
        GdbFieldName?: string;
        SeqId?: number;
    }
    interface Choice {
        Description?: string;
        Value?: Object;
    }
    interface CityworksOnlineAuthToken {
        Token?: string;
    }
    interface CityworksOnlineSite {
        Description?: string;
        Url?: string;
    }
    interface CodeDesc {
        Code?: string;
        CodeType?: string;
        Description?: string;
        IsActive?: boolean;
    }
    interface CodeDescScore {
        Code?: string;
        Description?: string;
        Score?: number;
    }
    interface CommentRecord {
        ActivityId?: string;
        ActivitySid?: number;
        ActivityType?: Enums.CommentActivityType;
        AuthorName?: string;
        AuthorSid?: number;
        CommentId?: number;
        Comments?: string;
        DateCreated?: Date;
        LastModified?: Date;
        LastModifiedByName?: string;
        LastModifiedBySid?: number;
    }
    interface ConditionalQuestion {
        AnswerFormat?: Enums.QuestAnswerFormat;
        Answers?: Types.ConditionalQuestionAnswer[];
        ConditionQuestionId?: number;
    }
    interface ConditionalQuestionAnswer {
        AnswerId?: number;
        Condition?: string;
    }
    interface ConditionalQuestionConfig {
        AnswerCondition?: string;
        AnswerId?: number;
        Id?: number;
        QuestionId?: number;
    }
    interface ConditionHistory {
        ActivityId?: string;
        ActivitySid?: number;
        DateGenerated?: Date;
        EntityType?: string;
        EntityUid?: string;
        Id?: number;
        Kind?: string;
        Score?: number;
    }
    interface ConditionScore {
        CondDate?: Date;
        CondScore?: number;
        EntityType?: string;
        EntityUid?: string;
        MaintenanceDate?: Date;
        MaintenanceScore?: number;
    }
    interface Contract extends Types.ContractBase {
        ContractAttachments?: Types.ContractAttachment[];
        ContractClaims?: Types.ContractClaim[];
        ContractFundSources?: Types.ContractFundSource[];
        ContractGroupRights?: Types.ContractGroupRight[];
        ContractLineItems?: Types.ContractLineItem[];
        ContractPermits?: Types.ContractPermit[];
        ContractSubcontractors?: Types.ContractSubcontractor[];
        ContractSubmittals?: Types.ContractSubmittal[];
    }
    interface ContractAttachment extends Types.AttachmentExtendedBase {
        Contract?: Types.Contract;
        ContractId?: number;
        Id?: number;
    }
    interface ContractBase extends Types.UniversalCustomFieldsBase {
        Accountant?: string;
        AccountantSid?: number;
        AcctManager?: string;
        AcctManagerSid?: number;
        ActualBudget?: number;
        ActualCost?: number;
        ActualFinishDate?: Date;
        Address?: string;
        BidBondPercent?: number;
        BidBudget?: number;
        BidDate?: Date;
        BidDepositPercent?: number;
        BondReleased?: boolean;
        BondReleaseDate?: Date;
        Category?: string;
        City?: string;
        Comments?: string;
        ContractId?: number;
        ContractNumber?: string;
        Contractor?: Types.ContractorBase;
        ContractorSid?: number;
        ContractTemplateId?: number;
        ContractType?: string;
        CustFieldCatId?: number;
        DateTimeModified?: Date;
        Description?: string;
        DesignDate?: Date;
        District?: string;
        DomainId?: number;
        Duration?: number;
        DurationUnit?: Enums.RelativeDateUnit;
        EstimatedBudget?: number;
        FinalInspDate?: Date;
        FinalPLInspDate?: Date;
        FundingSource?: string;
        GuaranteeInspDate?: Date;
        GuaranteePLInspDate?: Date;
        InitiatedBySid?: number;
        IsTemplate?: boolean;
        Location?: string;
        NextWOSeqId?: number;
        OptionalPeriods?: number;
        PaymentBondPercent?: number;
        PerformanceBondDate?: Date;
        PerformanceBondPercent?: number;
        ScheduledFinishDate?: Date;
        SignedDate?: Date;
        StartDate?: Date;
        State?: string;
        Status?: string;
        TransmitDate?: Date;
        UseInspDate?: Date;
        UsePLInspDate?: Date;
        Viewable?: boolean;
        WOPrefix?: string;
        X?: number;
        Y?: number;
        Z?: number;
        Zip?: string;
    }
    interface ContractClaim extends Types.ContractClaimBase {
        Contract?: Types.Contract;
    }
    interface ContractClaimBase {
        Amount?: number;
        ClaimCode?: string;
        ClaimId?: number;
        ContractId?: number;
        Description?: string;
        Status?: string;
        UnitCost?: number;
        UnitOfMeasure?: string;
        Units?: number;
    }
    interface ContractFundSource {
        Amount?: number;
        ContractId?: number;
        Description?: string;
        FiscalYear?: number;
        FundSource?: string;
        FundSourceId?: number;
        Notes?: string;
    }
    interface ContractGroupRight extends Types.GroupRightBase {
        Contract?: Types.Contract;
        ContractId?: number;
    }
    interface ContractInvoice {
        AccountingDate?: Date;
        Attachment?: string;
        CheckIssuedDate?: Date;
        Comments?: string;
        Contract?: Types.Contract;
        ContractId?: number;
        CoverSentDate?: Date;
        Description?: string;
        EAODate?: Date;
        InvoiceId?: number;
        InvoiceItems?: Types.InvoiceItem[];
        InvoiceNumber?: string;
        OffialInvoiceReceivedDate?: Date;
        PencilInvoiceReceivedDate?: Date;
        PencilInvoiceReviewedDate?: Date;
        ValidateInvoiceDate?: Date;
    }
    interface ContractLineItem extends Types.LineItem {
        ActualBudget?: number;
        Contract?: Types.Contract;
        ContractId?: number;
        ContractLineItemId?: number;
        ContractorSid?: number;
        ContractPeriod?: number;
        EmployeeSid?: number;
        EstimatedBudget?: number;
        FundSourceId?: number;
        Phase?: string;
        PrjUnitPrice?: number;
        PrjUnits?: number;
        UnitPrice?: number;
        Units?: number;
        UnitsUsed?: number;
    }
    interface ContractLineItemSummary {
        ActualAmountRemaining?: number;
        ActualAmountSpent?: number;
        ActualPercentOfDesignAmount?: number;
        ActualPercentRemaining?: number;
        ActualPercentSpent?: number;
        ActualQtyAvailable?: number;
        ActualQtyUsed?: number;
        ContractAmount?: number;
        ContractId?: number;
        ContractUnitCost?: number;
        ContractUnits?: number;
        Description?: string;
        DesignAmount?: number;
        DesignUnitCost?: number;
        EstimatedAmountRemaining?: number;
        EstimatedAmountSpent?: number;
        EstimatedPercentOfDesignAmount?: number;
        EstimatedPercentRemaining?: number;
        EstimatedPercentSpent?: number;
        EstimatedQtyAvailable?: number;
        EstimatedQtyUsed?: number;
        Id?: number;
        ItemNumber?: string;
        TotalAmountRemaining?: number;
        TotalAmountSpent?: number;
        TotalPercentRemaining?: number;
        TotalPercentSpent?: number;
        TotalQtyAvailable?: number;
        TotalQtyUsed?: number;
        UnitType?: string;
    }
    interface ContractorBase {
        Address?: string;
        AutomobileInsAmount?: number;
        AutomobileInsCertificate?: string;
        AutomobileInsEffectDate?: Date;
        AutomobileInsExpireDate?: Date;
        CellPhone?: string;
        City?: string;
        Comments?: string;
        ContactName?: string;
        ContractorName?: string;
        ContractorNumber?: string;
        ContractorSid?: number;
        Description?: string;
        Email?: string;
        EmergencyFactor?: number;
        Fax?: string;
        FederalTaxId?: string;
        FMSNo?: string;
        GeneralLiabilityAmount?: number;
        GeneralLiabilityCertificate?: string;
        GeneralLiabilityEffectDate?: Date;
        GeneralLiabilityExpireDate?: Date;
        LiabilityInsAmount?: number;
        LiabilityInsCertificate?: string;
        LiabilityInsEffectDate?: Date;
        LiabilityInsExpireDate?: Date;
        Licensed?: boolean;
        LicensedWork?: string;
        LicenseExpDate?: Date;
        LocallyBased?: boolean;
        MWBE?: boolean;
        OfficePhone?: string;
        OtherPhone?: string;
        OverheadRate?: number;
        OverheadType?: Enums.RateAddMethod;
        OvertimeFactor?: number;
        PIN?: string;
        ProviderType?: string;
        ProvidesEquipment?: boolean;
        ProvidesLabor?: boolean;
        ProvidesMaterial?: boolean;
        Rate?: number;
        RateType?: Enums.ContractorRateType;
        RegistrationDate?: Date;
        State?: string;
        Viewable?: boolean;
        WorkersCompAmount?: number;
        WorkersCompCertificate?: string;
        WorkersCompEffectDate?: Date;
        WorkersCompExpireDate?: Date;
        Zip?: string;
    }
    interface ContractorItem {
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        AvailableEscrowAmount?: number;
        BusinessName?: string;
        CityName?: string;
        CommentText?: string;
        ContractorId?: number;
        CountryCode?: string;
        CountryName?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        Email?: string;
        EscrowAmount?: number;
        ExpiredFlag?: string;
        FaxNumber?: string;
        FirstName?: string;
        GenLiability?: string;
        GenLiabilityExpDate?: Date;
        HoldFlag?: string;
        LastName?: string;
        LoginId?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        PhoneHome?: string;
        PhoneMobile?: string;
        PhoneWork?: string;
        PhoneWorkExtension?: string;
        StateCode?: string;
        StateName?: string;
        UserId?: number;
        WcLiabilityCompany?: string;
        WcLiabilityExpireDate?: Date;
        ZipCode?: string;
    }
    interface ContractorKeywordBase {
        ContractorSid?: number;
        Keyword?: string;
    }
    interface ContractorTypeItem {
        ContractorDesc?: string;
        ContractorType?: string;
        ContractorTypeId?: number;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        TableName?: string;
    }
    interface ContractPermit {
        Contract?: Types.Contract;
        ContractId?: number;
        PermitSid?: number;
    }
    interface ContractSecurity {
        CanAdd?: boolean;
        CanAddAssets?: boolean;
        CanAddAttachment?: boolean;
        CanAddClaim?: boolean;
        CanAddComment?: boolean;
        CanAddInvoice?: boolean;
        CanAddLineItems?: boolean;
        CanAddPermit?: boolean;
        CanAddSubcontractor?: boolean;
        CanDelete?: boolean;
        CanDeleteAssets?: boolean;
        CanDeleteAttachment?: boolean;
        CanDeleteClaim?: boolean;
        CanDeleteComment?: boolean;
        CanDeleteInvoice?: boolean;
        CanDeleteLineItems?: boolean;
        CanDeletePermit?: boolean;
        CanDeleteSubcontractor?: boolean;
        CanSetSecurity?: boolean;
        CanTransferOwnership?: boolean;
        CanUpdate?: boolean;
        CanUpdateAttachment?: boolean;
        CanUpdateClaim?: boolean;
        CanUpdateComment?: boolean;
        CanUpdateInvoice?: boolean;
        CanUpdateLineItems?: boolean;
        CanUpdatePermit?: boolean;
        CanUpdateSubcontractor?: boolean;
        CanView?: boolean;
        CanViewAttachment?: boolean;
        CanViewClaim?: boolean;
        CanViewInvoice?: boolean;
        CanViewLineItems?: boolean;
        CanViewPermit?: boolean;
        CanViewSubcontractor?: boolean;
        ContractId?: number;
    }
    interface ContractSubcontractor {
        Approved?: boolean;
        Comments?: string;
        Contract?: Types.Contract;
        ContractId?: number;
        ContractorName?: string;
        ContractorSid?: number;
        ContractorType?: string;
        DateApproved?: Date;
        EndDate?: Date;
        StartDate?: Date;
        SubcontractorId?: number;
    }
    interface ContractSubmittal {
        Approved?: boolean;
        ApproveDate?: Date;
        Comments?: string;
        ContractId?: number;
        Description?: string;
        ReceiveDate?: Date;
        SubmittalId?: number;
        SubType?: string;
    }
    interface CoreDomainBase {
        Id?: number;
    }
    interface CostCode {
        Code?: string;
        Description?: string;
        SequenceId?: number;
    }
    interface CostSummaryBase {
        ActivityType?: string;
        AssetGroup?: string;
        AssetId?: string;
        AssetType?: string;
        CloseDate?: Date;
        EquipmentCost?: number;
        LaborCost?: number;
        LineItemCost?: number;
        MaterialCost?: number;
        StartDate?: Date;
        Status?: string;
        TotalHours?: number;
    }
    interface CountWidgetColumn {
        Field?: string;
        Title?: string;
    }
    interface CountWidgetFormatOptions {
        MainBackgroundColor?: string;
        MainTextColor?: string;
        NameColor?: string;
        UnitTextColor?: string;
    }
    interface CountWidgetOption extends Types.WidgetOptions {
        Column?: Types.CountWidgetColumn;
        CountWidgetType?: number;
        FormatOptions?: Types.CountWidgetFormatOptions;
        NumberFormat?: Enums.DashboardNumberFormat;
        QueryId?: number;
        Units?: string;
    }
    interface CrewBase {
        Category?: string;
        CrewId?: number;
        CrewName?: string;
        DefaultStoreroom?: string;
        Description?: string;
        DomainId?: number;
        SharedWithin?: Enums.ApplyLevel;
    }
    interface CustCallQuestionBase {
        Answer?: string;
        AnswerId?: number;
        CallQuestionId?: number;
        DispatchToField?: string;
        IncidentNum?: number;
        Question?: string;
        QuestionSequence?: number;
        SubmitToField?: string;
        SubmitToLayer?: string;
    }
    interface CustFieldCategoryBase {
        ApplyToTable?: string;
        Category?: string;
        CategoryId?: number;
        Description?: string;
        IsActive?: boolean;
    }
    interface CustomerAcct {
        AcctNum?: string;
        AcctSid?: number;
        AcctType?: string;
        AptNum?: string;
        CellPhone?: string;
        Comments?: string;
        CustAddress?: string;
        CustCity?: string;
        CustDistrict?: string;
        CustState?: string;
        CustZip?: string;
        Email?: string;
        Fax?: string;
        FirstName?: string;
        HomePhone?: string;
        LastName?: string;
        MiddleInitial?: string;
        OtherPhone?: string;
        Title?: string;
        WorkPhone?: string;
    }
    interface CustomerCallBase {
        AcctNum?: string;
        AptNum?: string;
        CallerType?: string;
        CCX?: number;
        CCY?: number;
        CCZ?: number;
        CellPhone?: string;
        Comments?: string;
        CustAddress?: string;
        CustAddType?: string;
        CustCallback?: boolean;
        CustCity?: string;
        CustContact?: boolean;
        CustDistrict?: string;
        CustState?: string;
        CustZip?: string;
        DateTimeCall?: Date;
        DateTimeCallback?: Date;
        DateTimeContact?: Date;
        Email?: string;
        Employee?: string;
        EmployeeSid?: number;
        Fax?: string;
        FirstName?: string;
        HomePhone?: string;
        IncidentNum?: number;
        IsFollowUpCall?: boolean;
        IsResident?: boolean;
        LastName?: string;
        MiddleInitial?: string;
        OtherPhone?: string;
        ProbDetails?: string;
        RequestId?: number;
        Text1?: string;
        Text2?: string;
        Text3?: string;
        Text4?: string;
        Text5?: string;
        Title?: string;
        WorkPhone?: string;
    }
    interface CWCodeType {
        CodeFormat?: string;
        CodeType?: string;
        Description?: string;
        Module?: string;
    }
    interface CwCustField {
        CustFieldId?: number;
        CustFieldName?: string;
        CustFieldValue?: string;
        TableName?: string;
        TableObjectId?: number;
    }
    interface CWDomain {
        Description?: string;
        DomainId?: number;
        DomainName?: string;
        EditButtonsOn?: boolean;
        ImageUrl?: string;
        MapServiceId?: number;
        MobileMapCacheId?: number;
        WebTitle?: string;
    }
    interface CWField {
        CodeType?: string;
        DefaultValue?: string;
        DomainId?: number;
        FieldAlias?: string;
        FieldId?: number;
        FieldName?: string;
        SequenceId?: number;
        TableName?: string;
        UseCodeDesc?: Enums.CodeDescUsage;
    }
    interface CWGroup {
        Description?: string;
        DomainId?: number;
        DomainName?: string;
        GISRight?: Enums.GISRight;
        GroupId?: number;
        GroupName?: string;
        MapServiceId?: number;
    }
    interface CwGroupEmployees extends Types.CWGroup {
        EmployeeSids?: number[];
    }
    interface CWMetaData {
        CWId?: string;
        CwSid?: number;
        DateModified?: Date;
        FieldName?: string;
        LoginName?: string;
        NewValue?: string;
        ObjectId?: number;
        OldValue?: string;
        TableName?: string;
    }
    interface CWUser {
        ADDomain?: string;
        Districts?: string[];
        DomainId?: number;
        Domains?: Types.CWDomain[];
        EmployeeSid?: number;
        FullName?: string;
        GISRight?: Enums.GISRight;
        GroupId?: number;
        GroupIds?: string;
        Groups?: number[];
        IsCwdba?: boolean;
        IsDomainSuperuser?: boolean;
        IsPAGuestUser?: boolean;
        IsPARegisteredUser?: boolean;
        IsWindowsIdentity?: boolean;
        LoginId?: string;
        LoginName?: string;
        MembershipId?: number;
        OrgId?: number;
        RoleId?: string;
        Roles?: string;
        StoreDomainId?: number;
        StoreDomainsWhereAdmin?: Types.StoreDomainBase[];
        TableName?: string;
        UniqueName?: string;
        UserId?: number;
        UserName?: string;
        UserPwd?: string;
        UserType?: string;
    }
    interface CwUserStatus {
        IsApproved?: boolean;
        IsLockedOut?: boolean;
    }
    interface DateFieldValue {
        DateEnd?: Date;
        DateIncrement?: number;
        DateSelectMode?: Enums.DateSelection;
        DateStart?: Date;
        DateUnit?: Enums.RelativeDateUnit;
        IncludeCurrent?: boolean;
        LastNext?: Enums.RelativeDate;
        NextDateIncrement?: number;
        NotInDateRange?: boolean;
    }
    interface DateFilterField {
        LastEnd?: Date;
        LastStart?: Date;
        NextEnd?: Date;
        NextStart?: Date;
    }
    interface DepartmentItem {
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        CityName?: string;
        CountryCode?: string;
        CountryName?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        DepartmentCode?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        ExpiredFlag?: string;
        FaxNumber?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        PhoneNumber?: string;
        PhoneNumberExt?: string;
        StateCode?: string;
        StateName?: string;
        ZipCode?: string;
    }
    interface DepositItemBase {
        AccountCode?: string;
        CreatedBy?: number;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        DepositCode?: string;
        DepositDesc?: string;
        DepositId?: number;
        DepositTypeId?: number;
        ExpiredFlag?: string;
        ModifiedBy?: number;
        OrgId?: number;
    }
    interface DescScore {
        CodeType?: string;
        Description?: string;
        Score?: number;
    }
    interface DisciplineItem {
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        DisciplineCode?: string;
        DisciplineDesc?: string;
        DisciplineId?: number;
        ExpiredFlag?: string;
        InspectorFirstName?: string;
        InspectorId?: number;
        InspectorLastName?: string;
        InspectorLoginID?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        UserId?: number;
    }
    interface DistressCode {
        Description?: string;
        Distress?: number;
        QuantityUnit?: string;
        RoadUse?: string;
        SeverityApply?: string;
        SurfaceType?: string;
    }
    interface DivisionItem {
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        CityName?: string;
        CountryCode?: string;
        CountryName?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        DepartmentCode?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        DivisionCode?: string;
        DivisionId?: number;
        DivisionName?: string;
        ExpiredFlag?: string;
        FaxNumber?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        PhoneNumber?: string;
        PhoneNumberExt?: string;
        StateCode?: string;
        StateName?: string;
        ZipCode?: string;
    }
    interface DomainPreference extends Types.Preference {
        DomainId?: number;
    }
    interface DownloadReceiptBase {
        Content?: number[];
        Name?: string;
    }
    interface DynamicObject {
    }
    interface DynamicResponseDefinition extends Types.DynamicObject {
        Item?: Object;
    }
    interface DynamicSearchResult extends Types.DynamicObject {
        Item?: Object;
    }
    interface DynamicVariableMap extends Types.DynamicObject {
        Item?: Object;
    }
    interface EmployeeBase {
        AdDomain?: string;
        BenefitRate?: number;
        BenefitType?: Enums.RateAddMethod;
        DefaultImgPath?: string;
        DomainId?: number;
        Email?: string;
        EmailReq?: string;
        EmployeeId?: string;
        EmployeeSid?: number;
        FirstName?: string;
        FullName?: string;
        HolidayRate?: number;
        HolidayType?: Enums.RateAddMethod;
        HourlyRate?: number;
        IsActive?: boolean;
        LastName?: string;
        LoginName?: string;
        MapServiceId?: number;
        MiddleInitial?: string;
        MobileMapCacheId?: number;
        Organization?: string;
        OtherRate?: number;
        OtherRateType?: Enums.RateAddMethod;
        OverheadRate?: number;
        OverheadType?: Enums.RateAddMethod;
        OvertimeRate?: number;
        OvertimeType?: Enums.RateAddMethod;
        Pager?: string;
        Password?: string;
        ShiftDiffRate?: number;
        ShiftDiffType?: Enums.RateAddMethod;
        StandbyRate?: number;
        StandbyType?: Enums.RateAddMethod;
        StoreroomDomainId?: number;
        Title?: string;
        UniqueName?: string;
        WorkPhone?: string;
    }
    interface EmployeeNameId {
        EmployeeName?: string;
        EmployeeSid?: number;
        IsActive?: boolean;
    }
    interface EmployeeRelate {
        DomainId?: number;
        EmployeeName?: string;
        EmployeeSid?: number;
        RelateName?: string;
    }
    interface EmployeeSecurity {
        ContractCanAccountant?: boolean;
        ContractCanAcctManager?: boolean;
        ContractCanCreate?: boolean;
        EmployeeSid?: number;
        EquipmentChangeOutCanChange?: boolean;
        InspectionCanCancel?: boolean;
        InspectionCanClose?: boolean;
        InspectionCanCreate?: boolean;
        InspectionCanEditAfterClose?: boolean;
        InspectionCanInspect?: boolean;
        InspectionCanSubmitTo?: boolean;
        ProblemLeafCanDispatchTo?: boolean;
        ProblemLeafCanSubmitTo?: boolean;
        ProjectCanApprovedBy?: boolean;
        ProjectCanAssignedTo?: boolean;
        ProjectCanInitiate?: boolean;
        RequestCanCancel?: boolean;
        RequestCanClose?: boolean;
        RequestCanCreate?: boolean;
        RequestCanDispatchTo?: boolean;
        RequestCanEditAfterClose?: boolean;
        RequestCanSubmitTo?: boolean;
        SearchCanViewContractCost?: boolean;
        SearchCanViewSrLaborCost?: boolean;
        SearchCanViewWoEquipmentCost?: boolean;
        SearchCanViewWoLaborCost?: boolean;
        SearchCanViewWoLineItemCost?: boolean;
        SearchCanViewWoMaterialCost?: boolean;
        StoreroomTransferCanRequest?: boolean;
        TaskCanAssignTo?: boolean;
        WorkOrderCanCancel?: boolean;
        WorkOrderCanClose?: boolean;
        WorkOrderCanComplete?: boolean;
        WorkOrderCanCreate?: boolean;
        WorkOrderCanEditAfterClose?: boolean;
        WorkOrderCanRequest?: boolean;
        WorkOrderCanSubmitTo?: boolean;
        WorkOrderCanSupervise?: boolean;
    }
    interface EmpRelTableField {
        FieldName?: string;
        Module?: string;
        TableName?: string;
    }
    interface EntityConfiguration {
        CondScoreDateField?: string;
        CondScoreField?: string;
        EntityType?: string;
        EntityUidField?: string;
        FacilityIdField?: string;
        FieldAlias?: string;
        FieldBackColor?: string;
        FieldFontBold?: boolean;
        FieldForeColor?: string;
        FieldName?: string;
        IdField?: string;
        ImageNameField?: string;
        ImagePath?: string;
        IsFeatClass?: boolean;
        IsFilePath?: boolean;
        IsPrintable?: boolean;
        IsRequired?: boolean;
        IsVisible?: boolean;
        LevelIdField?: string;
        ReservedCWFieldName?: string;
        SequenceId?: number;
        TableName?: string;
        Tag?: Object;
    }
    interface EntityCostTotal {
        EntityType?: string;
        EntityUid?: string;
        TotalCost?: number;
        TotalHours?: number;
    }
    interface EntityHistory {
        ActualFinish?: Date;
        ActualStart?: Date;
        Closed?: Date;
        Created?: Date;
        Description?: string;
        EntityType?: string;
        EntityUid?: string;
        ExpenseType?: Enums.WOExpenseType;
        Id?: string;
        Inspected?: Date;
        Kind?: string;
        Sid?: number;
        Status?: string;
    }
    interface EntityIdentifier {
        EntityType?: string;
        EntityUid?: string;
        Id?: number;
        Identifier?: string;
    }
    interface EntityReading {
        ActionType?: Enums.ReadingActionType;
        Comments?: string;
        EntityId?: string;
        EntityType?: string;
        Reading?: number;
        ReadingDate?: Date;
        ReadingId?: number;
        ReadingName?: string;
        WOReading?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface EntityReadingConfiguration {
        EntityId?: string;
        EntityType?: string;
        ReadingName?: string;
    }
    interface EntityUidSidUpdate {
        EntitySid?: number;
        EntityType?: string;
        EntityUid?: string;
        Message?: string;
        Success?: boolean;
    }
    interface EntityUrlInfo {
        BaseUrl?: string;
        ConfigDetails?: Types.GISServiceAssetDetails;
        Id?: number;
        IsSecure?: boolean;
    }
    interface EquipChangeOut extends Types.EquipChangeOutBase {
        ChangeOutOperations?: Types.ChangeOutOperation[];
        InspCustFields?: Types.InspCustField[];
    }
    interface EquipChangeOutBase extends Types.StandardInspBase {
        ChangeDate?: Date;
        ChangedById?: number;
        ChangeOutId?: number;
        Comments?: string;
        FeatureSid?: number;
        FeatureType?: string;
        FeatureUid?: string;
        InspCustFieldCatId?: number;
        InspectedBy?: string;
        InspectedBySid?: number;
        Location?: string;
        Num10?: number;
        Num11?: number;
        Num12?: number;
        Num13?: number;
        Num14?: number;
        Num15?: number;
        Num16?: number;
        Num17?: number;
        Num18?: number;
        Num19?: number;
        Num20?: number;
        Num6?: number;
        Num7?: number;
        Num8?: number;
        Num9?: number;
        Text11?: string;
        Text12?: string;
        Text13?: string;
        Text14?: string;
        Text15?: string;
        Text16?: string;
        Text17?: string;
        Text18?: string;
        Text19?: string;
        Text20?: string;
        UpdateMap?: boolean;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface EquipmentBase {
        Category?: string;
        DefaultImgPath?: string;
        Description?: string;
        EquipmentSid?: number;
        EquipmentUid?: string;
        ForCheckout?: string;
        Manufacturer?: string;
        Model?: string;
        RateType?: Enums.EquipmentRateType;
        UnitCost?: number;
        Viewable?: boolean;
        WarranteeDate?: Date;
    }
    interface EquipmentChangeOutHistory {
        EntityType?: string;
        EntityUid?: string;
        HistoryAsChild?: Types.ChangeOutOperation[];
        HistoryAsParent?: Types.EquipChangeOutBase[];
    }
    interface EquipmentCost {
        AcctNum?: string;
        Cost?: number;
        Description?: string;
        DomainId?: number;
        EntityType?: string;
        EntityUid?: string;
        EquipmentCostId?: number;
        EquipmentSid?: number;
        EquipmentUid?: string;
        FinishDate?: Date;
        HoursRequired?: number;
        RateType?: Enums.EquipmentRateType;
        ReserveTransId?: number;
        Source?: string;
        StartDate?: Date;
        TaskName?: string;
        TransDate?: Date;
        UnitsRequired?: number;
        UsageType?: Enums.CostUsage;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        WOTaskId?: number;
    }
    interface EquipmentReservationStatus {
        Availability?: Enums.EquipTransType;
        AvailableUntil?: Date;
        Description?: string;
        DueDate?: Date;
        EmployeeName?: string;
        EmployeeSid?: number;
        EquipmentSid?: number;
        EquipmentUid?: string;
        ReservedUntil?: Date;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface EquipTransHistory {
        Comments?: string;
        EmployeeSid?: number;
        EquipmentSid?: number;
        EquipmentUid?: string;
        FullName?: string;
        RecordDateTime?: Date;
        ReservedToDate?: Date;
        TransactionBy?: number;
        TransactionId?: number;
        TransDateTime?: Date;
        TransType?: Enums.EquipTransType;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface Error {
        ErrorType?: string;
    }
    interface EscrowPaymentItem {
        AvailableAmount?: number;
        BusinessName?: string;
        CommentText?: string;
        ContractorId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        DateReceived?: Date;
        DateVoided?: Date;
        EscrowPaymentId?: number;
        EscrowPaymentReceiptId?: number;
        FileName?: string;
        ModifiedBy?: number;
        PaymentAccount?: string;
        PaymentAmount?: number;
        PaymentDate?: Date;
        ReceivedBy?: number;
        ReceivedByUser?: string;
        ReferenceInfo?: string;
        TenderType?: string;
        TenderTypeDesc?: string;
        TenderTypeId?: number;
        Voided?: string;
        VoidedBy?: number;
    }
    interface EscrowPaymentReceiptItem {
        AmountBalance?: number;
        CommentText?: string;
        EscrowPaymentReceiptId?: number;
        LoginId?: string;
        OrgId?: number;
        ReceiptDate?: Date;
        ReceiptFileName?: string;
        TotalAmountDue?: number;
        TotalAmountTendered?: number;
        UserId?: number;
    }
    interface EsriAddUpdate {
        features?: Types.EsriRecord[];
    }
    interface EsriApplyEdit {
        adds?: Types.EsriRecord[];
        deletes?: number[];
        id?: number;
        updates?: Types.EsriRecord[];
    }
    interface EsriApplyEdits {
        features?: Types.EsriApplyEdit[];
    }
    interface EsriApplyEditsResults {
        addResults?: Types.EsriUpdateResult[];
        deleteResults?: Types.EsriUpdateResult[];
        id?: number;
        updateResults?: Types.EsriUpdateResult[];
    }
    interface EsriCodeValue {
        code?: Object;
        name?: string;
    }
    interface EsriDomain {
        codedValues?: Types.EsriCodeValue[];
        description?: string;
        IsEmpty?: boolean;
        mergePolicy?: string;
        name?: string;
        range?: number[];
        splitPolicy?: string;
        type?: string;
    }
    interface EsriEntityType {
        DatasetName?: string;
        DisplayName?: string;
        IsFeature?: boolean;
        LayerId?: number;
        SubTypeIdField?: string;
        SubTypes?: Types.EsriSubType[];
        TableName?: string;
    }
    interface EsriEntityTypeRequest {
        IncludeFeatures?: boolean;
        IncludeObjects?: boolean;
        IncludeSubTypes?: boolean;
        ServiceId?: number;
        ServiceSecurityId?: number;
    }
    interface EsriEntityTypeResponse {
        EntityTypes?: Types.EsriEntityType[];
        Message?: string;
        Status?: Enums.CoreResponseStatus;
    }
    interface EsriExtent {
        isEmpty?: boolean;
        spatialReference?: Types.EsriSpatialReference;
        xmax?: number;
        xmin?: number;
        ymax?: number;
        ymin?: number;
        zmax?: number;
        zmin?: number;
    }
    interface EsriMapPointRecord extends Types.EsriRecord {
    }
    interface EsriQueryParams extends Types.EsriQueryParamsBase {
        cityworksCurrentUserValue?: number;
        cityworksEntityType?: string;
        cityworksEventLayer?: boolean;
        cityworksIsCanceled?: boolean;
        cityworksIsClosed?: boolean;
        cityworksTemplateId?: number;
        cityworksType?: number;
        searchId?: number;
    }
    interface EsriQueryParamsBase {
        callback?: string;
        definitionExpression?: string;
        domainId?: number;
        f?: string;
        gdbVersion?: string;
        geometry?: string;
        geometryPrecision?: number;
        geometryType?: string;
        groupByFieldsForStatistics?: string;
        havingClause?: string;
        inSR?: string;
        isSample?: boolean;
        layerId?: number;
        layers?: string;
        localDates?: boolean;
        mapExtent?: Types.EsriExtent;
        maxAllowableOffset?: number;
        objectIds?: string;
        orderByFields?: string;
        outFields?: string;
        outSR?: string;
        outStatistics?: string;
        pretty?: boolean;
        relationshipId?: number;
        resultOffset?: number;
        resultRecordCount?: number;
        returnCountOnly?: boolean;
        returnDistinctValues?: boolean;
        returnExtentOnly?: boolean;
        returnGeometry?: boolean;
        returnIdsOnly?: boolean;
        returnM?: boolean;
        returnZ?: boolean;
        serviceName?: string;
        spatialRel?: string;
        sr?: number;
        text?: string;
        tolerance?: number;
        where?: string;
    }
    interface EsriQueryResult {
        count?: number;
        displayFieldName?: string;
        exceededTransferLimit?: boolean;
        extent?: Types.EsriExtent;
        features?: Types.EsriRecord[];
        fieldAliases?: {
            [key: string]: string;
        };
        fields?: Types.EsriServiceLayerAttribute[];
        geometryType?: string;
        globalIdFieldName?: string;
        objectIdFieldName?: string;
        spatialReference?: Types.EsriSpatialReference;
    }
    interface EsriRecord {
        attributes?: {
            [key: string]: Object;
        };
        geometry?: Types.IEsriGeometry;
    }
    interface EsriRelatedEntityTypeRequest {
        EntityType?: string;
        Role?: string;
    }
    interface EsriRelatedRecordBase {
        exceededTransferLimit?: boolean;
        fields?: Types.EsriServiceLayerAttribute[];
        geometryType?: string;
        hasM?: boolean;
        hasZ?: boolean;
        relatedRecordGroups?: Types.EsriRelatedRecordGroup[];
        spatialReference?: Types.EsriSpatialReference;
    }
    interface EsriRelatedRecordGroup {
        objectId?: number;
        relatedRecords?: Types.EsriRecord[];
    }
    interface EsriService {
        layers?: Types.EsriServiceLayerDescription[];
        spatialReference?: Types.EsriSpatialReference;
        tables?: Types.EsriServiceLayerDescription[];
    }
    interface EsriServiceErrorBase {
        code?: number;
        description?: string;
        message?: string;
    }
    interface EsriServiceLayerAttribute {
        alias?: string;
        domain?: Types.EsriDomain;
        editable?: boolean;
        length?: number;
        localizedNames?: {
            [key: string]: string;
        };
        modelName?: string;
        name?: string;
        nullable?: boolean;
        required?: boolean;
        Tag?: Object;
        type?: string;
        visible?: boolean;
    }
    interface EsriServiceLayerDescription {
        id?: number;
        name?: string;
        subLayerIds?: number[];
        url?: string;
    }
    interface EsriSpatialReference {
        latestVcsWkid?: number;
        latestWkid?: number;
        vcsWkid?: number;
        wkid?: number;
        wkt?: string;
    }
    interface EsriSubType {
        code?: Object;
        defaultValues?: {
            [key: string]: Object;
        };
        domains?: {
            [key: string]: Types.EsriDomain;
        };
        id?: Object;
        name?: string;
    }
    interface EsriTokenResponse {
        creationTime?: number;
        expires?: number;
        refreshThreshold?: number;
        server?: string;
        ssl?: boolean;
        token?: string;
        userId?: string;
    }
    interface EsriUpdateResult {
        error?: Types.EsriServiceErrorBase;
        globalId?: string;
        objectId?: number;
        success?: boolean;
    }
    interface EventBase {
        Description?: string;
        EventType?: Enums.SourceEventType;
        TriggerField?: string;
        TriggerType?: Enums.EventTriggerType;
        TriggerValue?: string;
    }
    interface EventLayer {
        AssetUrl?: string;
        CityworksDescriptionFieldName?: string;
        CityworksEntitySidFieldName?: string;
        CityworksEntityTypeFieldName?: string;
        CityworksEntityUidFieldName?: string;
        CityworksTemplateFieldName?: string;
        Description?: string;
        DomainFieldName?: string;
        DomainId?: number;
        Enabled?: boolean;
        EventKeyField?: string;
        EventType?: Enums.SearchType;
        FillColor?: string;
        FillSymbolEnum?: number;
        ImageURL?: string;
        LayerId?: number;
        LayerName?: string;
        LineSymbolEnum?: number;
        MapUrl?: string;
        MarkerSymbolEnum?: number;
        MarkerSymbolSize?: number;
        OffsetX?: number;
        OffsetY?: number;
        OutlineColor?: string;
        OutlineColorWidth?: number;
        RefreshInterval?: number;
        SearchId?: number;
        SearchName?: string;
        SharedWithin?: Enums.ApplyLevel;
        StatusFieldName?: string;
        TableName?: string;
        TableSqlAlias?: string;
        UserId?: number;
        XField?: string;
        YField?: string;
        ZField?: string;
    }
    interface ExpirationTypeItem {
        AfterDays?: number;
        AfterMonths?: number;
        AfterYear?: number;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        EomFlag?: string;
        ExpirationTypeCode?: string;
        ExpirationTypeDesc?: string;
        ExpirationTypeId?: number;
        ExpiredFlag?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        RenewalMargin?: number;
        SpecificMonthDay?: string;
        VersionNo?: string;
    }
    interface FeeSetupItemBase {
        AccountCode?: string;
        AnonymousFlag?: string;
        AutoRecalculate?: string;
        CaseDataDetailId?: number;
        CaseDataGroupId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        FeeCategory?: string;
        FeeCode?: string;
        FeeDesc?: string;
        FeeDetails?: string;
        FeeSetupId?: number;
        FeeTypeId?: number;
        GrandSumFlag?: string;
        LockOnPayment?: string;
        ModifiedBy?: number;
        OrgId?: number;
        RecalcCreateDate?: string;
        RegisteredFlag?: string;
        TableName?: string;
    }
    interface FilterCondition {
        FilterColumn?: string;
        FilterOperator?: string;
        FilterValue?: string;
    }
    interface FilterRecordToWorkOrderEntitiyRequest {
        Id?: number;
        Name?: string;
        Records?: Types.EsriMapPointRecord[];
    }
    interface FilterRecordToWorkOrderEntityResult {
        Configurations?: Types.EntityConfiguration[];
        ErrorIndexes?: number[];
        Id?: number;
        Name?: string;
        WorkOrderEntities?: Types.WorkOrderEntityBase[];
    }
    interface FiveNumberStatistic {
        FirstQuartile?: number;
        Maximum?: number;
        Median?: number;
        Minimum?: number;
        ThirdQuartile?: number;
    }
    interface GeneralCommentsItem {
        CommentCode?: string;
        CommentId?: number;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        GeneralComment?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
    }
    interface GeocodeRequest {
        Address?: string;
        City?: string;
        Country?: string;
        DispatchTo?: string;
        DispatchToField?: string;
        District?: string;
        DomainId?: number;
        ListWOSR?: boolean;
        MapPage?: string;
        MaxResults?: number;
        SearchExtent?: Types.GISExtent;
        Shop?: string;
        State?: string;
        StreetName?: string;
        SubmitTo?: string;
        SubmitToField?: string;
        SubmitToLayer?: string;
        TileNo?: string;
        WithinDistance?: number;
        X?: number;
        Y?: number;
        Zip?: string;
    }
    interface GISAttribute {
        Alias?: string;
        Kind?: string;
        Name?: string;
        Tag?: Object;
        Value?: Object;
    }
    interface GISEntity {
        Attributes?: Types.GISAttribute[];
        EntityType?: string;
    }
    interface GISEntityUidField {
        EntityType?: string;
        EntityUidField?: Types.EsriServiceLayerAttribute;
    }
    interface GISEquipChangeoutData {
        ChangeOutType?: Enums.EquipChangeOutType;
        ChildEntityType?: string;
        ChildNewUid?: string;
        ChildOldUid?: string;
        ChildUidFieldName?: string;
        CreateNewObjectIfNotFound?: boolean;
        NewObjectAttributes?: Types.GISTableUpdate;
        ParentEntityType?: string;
        ParentSid?: number;
        ParentUid?: string;
        ParentUidFieldName?: string;
    }
    interface GISErrorBase {
        Error?: string;
        HasErrors?: boolean;
    }
    interface GISExtent {
        XMax?: number;
        XMin?: number;
        YMax?: number;
        YMin?: number;
        ZMax?: number;
        ZMin?: number;
    }
    interface GISNode {
        Children?: Types.GISNode[];
        Entity?: Types.WorkOrderEntity;
        Generation?: number;
    }
    interface GISParentChild {
        Child?: Types.WorkOrderEntity;
        ParentFeature?: Types.WorkOrderEntity;
        Path?: Types.WorkOrderEntity[];
        PathOrder?: string;
    }
    interface GISPoint {
        Tag?: Object;
        X?: number;
        Y?: number;
        Z?: number;
    }
    interface GisQueryTypeInfo extends Types.QueryTypeInfo {
        Entity?: Types.PWEntity;
        Module?: Types.PWModule;
    }
    interface GISResult extends Types.GISErrorBase {
        Alias?: string;
        EntityType?: string;
        Fields?: Types.EsriServiceLayerAttribute[];
        OidFieldName?: string;
        Records?: Types.EsriRecord[];
        RelatedEntity?: Types.EsriRecord;
        RelatedResults?: Types.GISResult[];
        TypeIdField?: string;
        Types?: Types.EsriSubType[];
        UidFieldName?: string;
    }
    interface GISResultTable extends Types.GISErrorBase {
        EntityType?: string;
        Fields?: Types.EsriServiceLayerAttribute[];
        Rows?: Types.GISResultTableRow[];
        TypeIdField?: string;
        Types?: Types.EsriSubType[];
        UidFieldName?: string;
    }
    interface GISResultTableRow {
        Values?: Object[];
    }
    interface GISServiceAssetDetails {
        Filter?: Types.NameValue[];
    }
    interface GISServiceDefinitionBase {
        DashboardUse?: boolean;
        DefinitionId?: number;
        DomainId?: number;
        Name?: string;
    }
    interface GISServiceEndPoint {
        AuthorizationUrl?: string;
        ClientId?: string;
        ClientSecret?: string;
        DomainId?: number;
        Service?: string;
        ServiceId?: number;
        ServiceName?: string;
        ServiceType?: Enums.GISServiceType;
        SharingUrl?: string;
        Timeout?: number;
        TokenUrl?: string;
    }
    interface GISServiceEndPointSecurity {
        MapCache?: Types.MobileMapCache;
        ServiceEndPoint?: Types.GISServiceEndPoint;
        ServiceSecurity?: Types.GISServiceSecurity;
    }
    interface GISServiceSecurity {
        AccessToken?: string;
        Expiration?: Date;
        IsPermanent?: boolean;
        Password?: string;
        RefreshToken?: string;
        SecurityId?: number;
        SecurityName?: string;
        SecurityType?: Enums.GISServiceSecurityType;
        ServiceId?: number;
        UserId?: string;
    }
    interface GISSubTypes {
        SubTypes?: Types.EsriSubType[];
        TypeIdField?: string;
    }
    interface GISTableUpdate {
        Attributes?: {
            [key: string]: Object;
        };
        OID?: number;
        UID?: string;
    }
    interface GlobalPreference extends Types.Preference {
    }
    interface GroupRightBase {
        CanAdd?: boolean;
        CanDelete?: boolean;
        CanUpdate?: boolean;
        CanView?: boolean;
        DomainName?: string;
        GroupId?: number;
        GroupName?: string;
        TableName?: string;
    }
    interface HolidaysItem {
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateModified?: Date;
        HalfDayFlag?: string;
        HolidayDate?: Date;
        HolidayDesc?: string;
        HolidayId?: number;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
    }
    interface HtmlWidget {
        Header?: string;
        Height?: string;
        Html?: string;
        Id?: number;
        Kind?: string;
        Position?: number;
        Url?: string;
        WidgetZoneId?: number;
    }
    interface HtmlWidgetFormatOptions {
        NameColor?: string;
    }
    interface HtmlWidgetOption extends Types.WidgetOptions {
        FormatOptions?: Types.HtmlWidgetFormatOptions;
        Html?: string;
        Url?: string;
    }
    interface IEsriGeometry {
        extent?: Types.EsriExtent;
        spatialReference?: Types.EsriSpatialReference;
    }
    interface ImportInspectionData {
        BranchId?: string;
        BranchIdField?: string;
        Comments?: string;
        InspectedBy?: string;
        InspectedBySid?: number;
        InspectedSurface?: string;
        InspectionDate?: Date;
        IsDirty?: boolean;
        NetworkId?: string;
        PavementSamples?: Types.PavementSample[];
        SectionClassName?: string;
        SectionUid?: string;
        TotalSamples?: number;
        WorkOrderId?: string;
    }
    interface ImportInventoryData {
        ConditionDateFieldName?: string;
        ConditionScoreFieldName?: string;
        ConstructionDateFieldName?: string;
        FieldAliases?: {
            [key: string]: string;
        };
        Items?: Types.ImportInventoryItem[];
        SurfaceMaterialFieldName?: string;
    }
    interface ImportInventoryItem {
        Attributes?: {
            [key: string]: Object;
        };
        BranchId?: string;
        Comments?: string;
        EntityType?: string;
        EntityUid?: string;
        From?: string;
        NetworkId?: string;
        To?: string;
    }
    interface ImportProjectData {
        Comments?: string;
        EstimatedBudget?: number;
        ProjectFinishDate?: Date;
        ProjectName?: string;
        ProjectStartDate?: Date;
        Title?: string;
    }
    interface ImportRecommendedWorkData {
        BranchId?: string;
        Comments?: string;
        Cost?: number;
        Description?: string;
        Entities?: Types.ImportRecommendedWorkDataEntity[];
        GetGisData?: boolean;
        GroupEntities?: boolean;
        InitiatedByApp?: string;
        NetworkId?: string;
        ProjectedStartDate?: Date;
        ProjectName?: string;
        ProjectSid?: number;
        SectionId?: string;
        Stage?: string;
        WOTemplateId?: string;
    }
    interface ImportRecommendedWorkDataEntity {
        EntityType?: string;
        EntityUid?: string;
    }
    interface InspAttachment extends Types.AttachmentExtendedBase {
        Id?: number;
        InspectionId?: number;
    }
    interface InspCostSummary extends Types.CostSummaryBase {
        InspectionId?: number;
    }
    interface InspCustField extends Types.CategoryCustField {
        InspId?: string;
        InspType?: Enums.StandardInspTableName;
        Parent?: Object;
    }
    interface InspectionAnswer {
        AnswerId?: number;
        AnswerValue?: string;
        InspectionId?: number;
        QuestionId?: number;
    }
    interface InspectionBase extends Types.UniversalCustomFieldsBase {
        ActFinishDate?: Date;
        Cancel?: boolean;
        CancelledBy?: string;
        CancelledBySid?: number;
        CancelReason?: string;
        ClosedBy?: string;
        ClosedBySid?: number;
        CloseSR?: boolean;
        CondRating?: number;
        CondScore?: number;
        CreatedByCycle?: boolean;
        CycleFrom?: Enums.RepeatFromDate;
        CycleIntervalNum?: number;
        CycleIntervalUnit?: Enums.RepeatIntervalUnit;
        CycleType?: Enums.RepeatType;
        DateCancelled?: Date;
        DateClosed?: Date;
        DateSubmitTo?: Date;
        District?: string;
        DomainId?: number;
        Effort?: number;
        EntitySid?: number;
        EntityType?: string;
        EntityUid?: string;
        Facility_Id?: string;
        FeatureId?: number;
        FeatureType?: string;
        FeatureUid?: string;
        ForemanRecomnd?: string;
        FromDate?: Date;
        InitiateDate?: Date;
        InitiatedBy?: string;
        InitiatedByApp?: string;
        InitiatedBySid?: number;
        InspDate?: Date;
        InspectedBy?: string;
        InspectedBySid?: number;
        InspectionId?: number;
        InspTemplateId?: number;
        InspTemplateName?: string;
        InspX?: number;
        InspY?: number;
        InspZ?: number;
        IsClosed?: boolean;
        Level_Id?: string;
        Location?: string;
        MapPage?: string;
        Metadata?: string;
        ObservationSum?: string;
        ParentInspId?: number;
        Priority?: string;
        PrjFinishDate?: Date;
        PrjStartDate?: Date;
        ProjectPhaseId?: number;
        ProjectSid?: number;
        RepairsMade?: string;
        RequestId?: number;
        Resolution?: string;
        Shop?: string;
        Status?: string;
        StreetName?: string;
        SubmitTo?: string;
        SubmitToEmployeeSid?: number;
        SubmitToName?: string;
        SubmitToSid?: number;
        TileNo?: string;
        UpdateMap?: boolean;
        WorkOrderId?: string;
    }
    interface InspectionEquipmentCost {
        AcctNum?: string;
        Cost?: number;
        Description?: string;
        DomainId?: number;
        EntityType?: string;
        EntityUid?: string;
        EquipmentCostId?: number;
        EquipmentSid?: number;
        EquipmentUid?: string;
        FinishDate?: Date;
        HoursRequired?: number;
        InspectionId?: number;
        RateType?: Enums.EquipmentRateType;
        ReserveTransId?: number;
        Source?: string;
        StartDate?: Date;
        TransDate?: Date;
        UnitsRequired?: number;
        UsageType?: Enums.CostUsage;
    }
    interface InspectionLaborCost {
        AcctNum?: string;
        BenefitCost?: number;
        ContractorNumber?: string;
        Cost?: number;
        Description?: string;
        DomainId?: number;
        EntityType?: string;
        EntityUid?: string;
        FinishDate?: Date;
        GroupName?: string;
        HolidayCost?: number;
        Hours?: number;
        InspectionId?: number;
        LaborCostDetails?: Types.LaborCostDetail[];
        LaborCostId?: number;
        LaborName?: string;
        LaborSid?: number;
        LaborType?: Enums.LaborCategory;
        OccupationCode?: string;
        OccupationId?: number;
        OtherCost?: number;
        OverheadCost?: number;
        OvertimeCost?: number;
        RateType?: Enums.LaborRateType;
        RegularCost?: number;
        ShiftDiffCost?: number;
        StandbyCost?: number;
        StartDate?: Date;
        TimesheetId?: number;
        TransDate?: Date;
        UsageType?: Enums.CostUsage;
    }
    interface InspectionQuestionDetails {
        Description?: string;
        Explanation?: string;
        Instruction?: string;
        QuestionId?: number;
    }
    interface InspectionRelatedInspection {
        InspectionId?: number;
        RelatedInspectionId?: number;
    }
    interface InspectionSecurity {
        CanAddEquipment?: boolean;
        CanAddLabor?: boolean;
        CanCancel?: boolean;
        CanClose?: boolean;
        CanDelete?: boolean;
        CanDeleteComment?: boolean;
        CanDeleteEquipment?: boolean;
        CanDeleteLabor?: boolean;
        CanUpdate?: boolean;
        CanUpdateComment?: boolean;
        CanUpdateEquipment?: boolean;
        CanUpdateLabor?: boolean;
        CanView?: boolean;
        CanViewCosts?: boolean;
        CanViewEquipment?: boolean;
        CanViewEquipmentCost?: boolean;
        CanViewLabor?: boolean;
        CanViewLaborCost?: boolean;
        InspectionId?: number;
    }
    interface InspectionTemplateSecurity {
        CanCreate?: boolean;
        InspTemplateId?: number;
    }
    interface InspectionTimeBlocksItem {
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        EndTime?: string;
        InspectionTimeBlockId?: number;
        InspTimeBlockDetails?: Types.InspTimeBlocksDetailItem[];
        LabelText?: string;
        ModifiedBy?: number;
        StartTime?: string;
    }
    interface InspectionZoneValues {
        District?: string;
        MapLayers?: Types.InstanceMapLayer[];
        MapPage?: string;
        Shop?: string;
        TileNo?: string;
    }
    interface InspQuestAnswer {
        Answer?: string;
        AnswerFormat?: Enums.QuestAnswerFormat;
        AnswerId?: number;
        CodeType?: string;
        Config?: string;
        Explanation?: string;
        Instruction?: string;
        MaxValue?: number;
        MinValue?: number;
        NextQuestionId?: number;
        QuestionId?: number;
        Score?: number;
        SequenceId?: number;
    }
    interface InspQuestion {
        Answer?: string;
        Description?: string;
        Explanation?: string;
        InspectionId?: number;
        InspQuestionId?: number;
        Instruction?: string;
        NumericAnswer?: number;
        Question?: string;
        QuestionId?: number;
        QuestionSequence?: number;
        Score?: number;
        Weight?: number;
    }
    interface InspQuestionPanelBase {
        InspTemplateId?: number;
        PanelId?: number;
        Sequence?: number;
        Title?: string;
    }
    interface InspTempEntityBase {
        ApplyToEntity?: string;
        InspTemplateId?: number;
    }
    interface InspTemplateBase {
        AllowSignature?: boolean;
        CalculateConditionScore?: boolean;
        Comments?: string;
        CycleFrom?: Enums.RepeatFromDate;
        CycleIncludeWeekends?: boolean;
        CycleIntervalNum?: number;
        CycleIntervalUnit?: Enums.RepeatIntervalUnit;
        CycleType?: Enums.RepeatType;
        DateModified?: Date;
        Description?: string;
        DomainId?: number;
        Duration?: number;
        DurationUnit?: Enums.WorkDurationUnit;
        Effort?: number;
        InspTemplateId?: number;
        InspTemplateName?: string;
        IsActive?: boolean;
        PrintTemplate?: string;
        Priority?: string;
        QAModel?: Enums.QASequenceModel;
        RatingMethod?: Enums.AssetRatingMethod;
        RequireAssetOnClose?: boolean;
        SubmitToEmployeeSid?: number;
        SubmitToName?: string;
        UpdateXY?: boolean;
        WorkMonth?: string;
    }
    interface InspTemplateQA {
        Answers?: Types.InspQuestAnswer[];
        BranchingModel?: boolean;
        ConditionalQuestions?: {
            [key: number]: Types.ConditionalQuestion;
        };
        InspTemplateId?: number;
        Panels?: Types.InspQuestionPanelBase[];
        Questions?: Types.InspTempQuestion[];
    }
    interface InspTempQuestion {
        AllAnswersVisible?: boolean;
        CalculateConditionScore?: boolean;
        Description?: string;
        InspTemplateId?: number;
        PanelId?: number;
        Question?: string;
        QuestionId?: number;
        QuestionSequence?: number;
        QuestionType?: Enums.InspQuestionType;
        Required?: boolean;
        Weight?: number;
    }
    interface InspTimeBlocksDetailItem {
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        EndTime?: string;
        InspectionTimeBlockId?: number;
        InspTimeBlocksDetailId?: number;
        LabelText?: string;
        ModifiedBy?: number;
        StartTime?: string;
        TaskCode?: string;
        TaskDesc?: string;
        TaskId?: number;
    }
    interface InstanceMapLayer {
        Id?: number;
        InstanceId?: number;
        InstanceUid?: string;
        MapLayer?: string;
        MapLayerField?: string;
        SourceType?: Enums.TemplateMapLayerSourceType;
        TemplateMapLayerId?: number;
        Value?: string;
    }
    interface InvoiceItem extends Types.LineItemCost {
        ContractInvoice?: Types.ContractInvoice;
        InvoiceId?: number;
        InvoiceItemId?: number;
    }
    interface IResponseFieldSchema {
        Choices?: Types.Choice[];
        DeprecatedRemovalAtVersion?: string;
        DeprecationComments?: string;
        Description?: string;
        DisplayName?: string;
        FieldType?: string;
        IsDeprecated?: boolean;
        Name?: string;
    }
    interface IResponseSchema {
        ChildSchemas?: {
            [key: string]: {
                [key: string]: Types.IResponseFieldSchema;
            };
        };
        ResponseFields?: {
            [key: string]: Types.IResponseFieldSchema;
        };
    }
    interface ISchema {
        Name?: string;
        PrimarySearchFieldName?: string;
        Response?: Types.IResponseSchema;
        Search?: Types.ISearchSchema;
    }
    interface ISearchFieldSchema {
        Choices?: Types.Choice[];
        DeprecatedRemovalAtVersion?: string;
        DeprecationComments?: string;
        Description?: string;
        DisplayName?: string;
        FieldType?: string;
        IsDeprecated?: boolean;
        Name?: string;
    }
    interface ISearchSchema {
        ChildSchemas?: {
            [key: string]: {
                [key: string]: Types.ISearchFieldSchema;
            };
        };
        SearchFields?: {
            [key: string]: Types.ISearchFieldSchema;
        };
    }
    interface Issue extends Types.Transaction {
        AcctNum?: string;
        EmpName?: string;
        IssueToEmpSid?: number;
        MaterialCostId?: number;
        Organization?: string;
        Quantity?: number;
        Source?: string;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface IssueResultSet {
        Issues?: Types.Issue[];
        WorkOrderMaterialCosts?: Types.MaterialCost[];
    }
    interface IWidget {
        Header?: string;
        Id?: number;
        Kind?: string;
        Position?: number;
        WidgetZoneId?: number;
    }
    interface IWidgetContainer {
        ContainerType?: Enums.WidgetContainerType;
        DomainId?: number;
        EmployeeSid?: number;
        Header?: string;
        Id?: number;
        Position?: number;
        TabId?: number;
        Zones?: Types.IWidgetZone[];
    }
    interface IWidgetContainerTab {
        Containers?: Types.IWidgetContainer[];
        DomainId?: number;
        EmployeeSid?: number;
        Header?: string;
        Id?: number;
        Position?: number;
        TabType?: Enums.WidgetContainerTabType;
    }
    interface IWidgetZone {
        Header?: string;
        Id?: number;
        Position?: number;
        WidgetContainerId?: number;
        Widgets?: Types.IWidget[];
        Width?: string;
    }
    interface JobCode {
        Code?: string;
        Description?: string;
    }
    interface LaborCostDetail {
        Cost?: number;
        CostCode?: string;
        Description?: string;
        LaborCostId?: number;
    }
    interface LayoutMessage {
        Comment?: string;
        Global?: boolean;
        Id?: string;
        InClientLibrary?: boolean;
        Title?: string;
        Value?: string;
    }
    interface LineItem {
        Description?: string;
        ItemNumber?: string;
        LineItemId?: number;
        UnitOfMeasure?: string;
    }
    interface LineItemCost {
        AssetId?: string;
        AssetType?: string;
        CheckIssuedDate?: Date;
        Comments?: string;
        ContractId?: number;
        ContractLineItemId?: number;
        ContractNumber?: string;
        ContractorSid?: number;
        Cost?: number;
        Description?: string;
        EmployeeSid?: number;
        ItemNumber?: string;
        LineItemCostId?: number;
        LineItemId?: number;
        PerformedBy?: string;
        PerformedBySid?: number;
        TaskName?: string;
        TransDate?: Date;
        UnitsUsed?: number;
        UpdatedCost?: number;
        UsageType?: Enums.CostUsage;
        Verification?: Enums.VerificationStatus;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        WorkPerformDate?: Date;
        WOTaskId?: number;
    }
    interface LocalizationSettings {
        CurrencyCode?: string;
        CurrencySymbol?: string;
        DateSeparator?: string;
        DecimalSymbol?: string;
        FirstDayOfWeek?: Enums.DayOfWeek;
        LanguageCode?: string;
        LongDateFormat?: string;
        LongDateTimeFormat?: string;
        LongTimeFormat?: string;
        PhoneNumberFormat?: string;
        ShortDateFormat?: string;
        ShortDateTimeFormat?: string;
        ShortTimeFormat?: string;
        StartOfYear?: number;
        ThousandsSeparator?: string;
        TimeSeparator?: string;
        Use12HourTime?: boolean;
        XYPrecision?: number;
    }
    interface ManholeInsp extends Types.ManholeInspBase {
        InspcustFields?: Types.InspCustField[];
        SMhInspImgs?: Types.SMhInspImg[];
        SMhiObservs?: Types.SMhiObserv[];
        SPipeInManholes?: Types.SPipeInManhole[];
    }
    interface ManholeInspBase extends Types.StandardInspBase {
        AccessType?: string;
        BarrelDiam?: number;
        BenchMaterial?: string;
        ChannelMaterial?: string;
        CondRating?: number;
        ConeMaterial?: string;
        Depth?: number;
        DepthOfDebris?: number;
        DepthOfFlow?: number;
        DepthOfSurchrg?: number;
        DistToHydrant?: number;
        FacilityId?: string;
        FeatureType?: string;
        FlowType?: string;
        FlowTypeScore?: number;
        ForemanRecomnd?: string;
        FrmMaterial?: string;
        GroundCond?: string;
        GroundCondScore?: number;
        HydRating?: number;
        InspCustFieldCatId?: number;
        InspDate?: Date;
        InspectedBy?: string;
        InspectedBySid?: number;
        InspectionId?: number;
        LidDiameter?: number;
        LidMaterial?: string;
        Location?: string;
        MapNumber?: string;
        MhLength?: number;
        MhMaterial?: string;
        MhWidth?: number;
        ObservationSum?: string;
        Ponding?: string;
        PondingScore?: number;
        PrecipType?: string;
        PrecipTypeScore?: number;
        RepairsMade?: string;
        RingMaterial?: string;
        Spot?: string;
        SpotScore?: number;
        StepMaterial?: string;
        StructRating?: number;
        SubType?: string;
        SuperAprvlComnts?: string;
        SurfaceType?: string;
        TribArea?: number;
        UpdateMap?: boolean;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        Xcoordinate?: number;
        Ycoordinate?: number;
        Zcoordinate?: number;
    }
    interface MapViewExtent {
        XMax?: number;
        XMin?: number;
        YMax?: number;
        YMin?: number;
    }
    interface MapWidgetFormatOptions {
        MainBackgroundColor?: string;
        NameColor?: string;
    }
    interface MapWidgetOption extends Types.WidgetOptions {
        FeatureLayerUrl?: string;
        FormatOptions?: Types.MapWidgetFormatOptions;
        GisServiceDefinitionId?: number;
        QueryDefinitionId?: number;
        QueryId?: number;
    }
    interface MaterialBase {
        AuditInterval?: string;
        BinImagePath?: string;
        BinLocation?: string;
        CatClass?: Enums.AbcCatClass;
        Category?: string;
        CostType?: Enums.MaterialCostType;
        CUCategory?: string;
        Custom1?: number;
        Custom2?: number;
        Custom3?: string;
        Custom4?: string;
        Custom5?: string;
        DefaultImgPath?: string;
        Description?: string;
        Detail?: string;
        ExpirationDate?: Date;
        GdbSubtype?: string;
        GdbTableName?: string;
        IsAssembly?: boolean;
        IsSerialized?: boolean;
        JustificationRequired?: boolean;
        Manufacturer?: string;
        MaterialSid?: number;
        MaterialUid?: string;
        MinQuantity?: number;
        Model?: string;
        PartNumber?: string;
        SecBinImagePath?: string;
        SecBinLocation?: string;
        Splittable?: boolean;
        StockOnHand?: number;
        Storeroom?: string;
        Supplier?: string;
        UnitCost?: number;
        UnitOfMeasure?: string;
        Viewable?: boolean;
    }
    interface MaterialCost {
        AcctNum?: string;
        Cost?: number;
        Description?: string;
        DomainId?: number;
        EntityType?: string;
        EntityUid?: string;
        MaterialCostId?: number;
        MaterialSid?: number;
        MaterialUid?: string;
        Source?: string;
        StockModified?: boolean;
        TaskName?: string;
        TransactionId?: number;
        TransDate?: Date;
        UnitsRequired?: number;
        UsageType?: Enums.CostUsage;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        WOTaskId?: number;
    }
    interface MaterialKeyword {
        Keyword?: string;
        MaterialSid?: number;
    }
    interface MaterialNode extends Types.NodeBase {
    }
    interface MaterialSerial {
        DateTimeInit?: Date;
        ExpirationDate?: Date;
        Id?: number;
        MaterialSid?: number;
        SerialNumber?: string;
        Storeroom?: string;
        UnitCost?: number;
        WarrantyDate?: Date;
    }
    interface MobileMapCache {
        DateModified?: Date;
        Description?: string;
        FileName?: string;
        FileSize?: number;
        MobileMapCacheId?: number;
    }
    interface MobilePreferences {
        Inspection?: Types.MobilePreferenceSection;
        PLL?: Types.MobilePreferenceSection;
        ServiceRequest?: Types.MobilePreferenceSection;
        WorkOrder?: Types.MobilePreferenceSection;
    }
    interface MobilePreferenceSection {
        CompleteStatus?: string;
        QueryIds?: number[];
        Searches?: Types.SearchDefinitionName[];
    }
    interface NameValue {
        Name?: string;
        Value?: Object;
    }
    interface NewMaterialSerial {
        DateTimeInit?: Date;
        ExpirationDate?: Date;
        MaterialSid?: number;
        SerialNumber?: string;
        Storeroom?: string;
        UnitCost?: number;
        WarrantyDate?: Date;
    }
    interface NodeBase {
        Description?: string;
        DomainId?: number;
        NodeName?: string;
        NodeSid?: number;
        NodeTextType?: Enums.TreeNodeTextType;
        NodeType?: Enums.TreeNodeType;
        ParentSid?: number;
        Uid?: string;
    }
    interface NotesWidget {
        Header?: string;
        Height?: string;
        Id?: number;
        Kind?: string;
        Notes?: string;
        Position?: number;
        WidgetZoneId?: number;
    }
    interface NotificationCaseItem {
        CaseCreatedInternalEmail?: string;
        CaseDesc?: string;
        CaseStatusInternalEmail?: string;
        CaseType?: string;
        CaseTypeId?: number;
        ContrNotificationCategory?: string;
        ContrNotificationTypeCode?: string;
        ContrNotificationTypeDesc?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        EventFlag?: string;
        EventFlagValue?: string;
        ExpiredFlag?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        NotificationCaseId?: number;
        NotificationTypeIdContractr?: number;
        NotificationTypeIdPeople?: number;
        NotifyContractorFlag?: string;
        NotifyPeopleRoleFlag?: string;
        RoleNotificationCategory?: string;
        RoleNotificationTypeCode?: string;
        RoleNotificationTypeDesc?: string;
    }
    interface NotificationTypeItem {
        CreatedBy?: number;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        EmailSubjectLine?: string;
        ExpiredFlag?: string;
        FileName?: string;
        ModifiedBy?: number;
        NotificationBodyText?: string;
        NotificationCategory?: string;
        NotificationTypeCode?: string;
        NotificationTypeDesc?: string;
        NotificationTypeId?: number;
        OrgId?: number;
        ReportId?: number;
        ReportName?: string;
    }
    interface NumberingGroupItem {
        CaseType?: string;
        CaseTypeDesc?: string;
        CaseTypeId?: number;
        CreatedBy?: number;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        IncrementBy?: number;
        LastNum?: number;
        LastNumDate?: Date;
        MaskedPaddedLength?: number;
        ModifiedBy?: number;
        NumberingGroupCode?: string;
        NumberingGroupDesc?: string;
        NumberingGroupId?: number;
        OrganizationCode?: string;
        OrganizationDesc?: string;
        OrganizationId?: number;
        PrefixYyyymmdd?: string;
        ResetYearEndFlag?: string;
        Separator?: string;
        StartWith?: number;
        VersionNo?: string;
    }
    interface NumericFieldValue {
        FieldValueList?: string[];
        IncludeNulls?: boolean;
        IsMaxValueExclusive?: boolean;
        IsMinValueExclusive?: boolean;
        MaxTableFieldMultiplier?: number;
        MaxTableFieldName?: string;
        MaxValue?: number;
        MinTableFieldMultiplier?: number;
        MinTableFieldName?: string;
        MinValue?: number;
        UseTableFieldForMax?: boolean;
        UseTableFieldForMin?: boolean;
        ValueMode?: Enums.NumericValueMode;
    }
    interface PacketConfiguration {
        Credential?: Types.PacketCredential;
        EpochDates?: boolean;
        HeaderData?: string;
        Model?: Enums.WebHookPacketModel;
        Referer?: string;
        Template?: string;
        Urgent?: boolean;
    }
    interface PacketCredential {
        Password?: string;
        UserName?: string;
    }
    interface ParChildType {
        ChildType?: string;
        ParentType?: string;
    }
    interface ParentChildItem {
        Child?: Types.WorkOrderEntity;
        Parent?: Types.WorkOrderEntity;
    }
    interface PavementInsp extends Types.PavementInspBase {
        BranchId?: string;
        BranchIdField?: string;
        BranchLocation?: string;
        BranchType?: string;
        PavementSamples?: Types.PavementSample[];
        RoadUse?: string;
        SectionArea?: string;
        SectionFrom?: string;
        SectionTo?: string;
    }
    interface PavementInspBase {
        Comments?: string;
        InspectedBy?: string;
        InspectedBySid?: number;
        InspectedSurface?: string;
        InspectionDate?: Date;
        InspectionId?: string;
        InspectionSid?: number;
        IsDirty?: boolean;
        SectionClassName?: string;
        SectionUid?: string;
        TotalSamples?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface PavementInspCodeDescs {
        SampleSizeUnitCodeDescs?: Types.CodeDesc[];
        SampleTypeCodeDescs?: Types.CodeDesc[];
    }
    interface PavementSample extends Types.PavementSampleBase {
        SampleDistresses?: Types.SampleDistress[];
    }
    interface PavementSampleBase {
        Comments?: string;
        InspectionId?: string;
        InspectionSid?: number;
        SampleId?: string;
        SampleNr?: string;
        SampleSize?: number;
        SampleSizeUnit?: string;
        SampleType?: string;
    }
    interface PaverAssetUpdates {
        BranchUpdates?: {
            [key: string]: Types.PaverUpdate[];
        };
        NetworkUpdates?: {
            [key: string]: Types.PaverUpdate[];
        };
        SectionUpdates?: {
            [key: string]: Types.PaverUpdate[];
        };
    }
    interface PaverDataFile {
        Content?: string;
        Extension?: string;
        Name?: string;
    }
    interface PaverInspectionUpdates {
        Distresses?: {
            [key: string]: Types.PaverUpdate[];
        };
        Inspections?: {
            [key: string]: Types.PaverUpdate[];
        };
        Samples?: {
            [key: string]: Types.PaverUpdate[];
        };
        SectionHistory?: Types.PaverUpdate[];
    }
    interface PaverUpdate {
        Field?: string;
        Value?: string;
    }
    interface PaverWorkCodeTemplate {
        ApplyToEntity?: string;
        Description?: string;
        DomainId?: number;
        WorkCategory?: string;
        WorkCode?: string;
        WOTemplateId?: string;
    }
    interface PeopleItem {
        AddressLine1?: string;
        AddressLine2?: string;
        AddressLine3?: string;
        CityName?: string;
        CommentText?: string;
        CompanyName?: string;
        CountryCode?: string;
        CountryName?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        Email?: string;
        ExpiredFlag?: string;
        FaxNumber?: string;
        LoginId?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        Name?: string;
        OrgId?: number;
        PeopleId?: number;
        PhoneHome?: string;
        PhoneMobile?: string;
        PhoneWork?: string;
        PhoneWorkExt?: string;
        Roles?: Types.PeopleRoleItemItem[];
        StateCode?: string;
        StateName?: string;
        TableName?: string;
        UserId?: number;
        WebSiteUrl?: string;
        ZipCode?: string;
    }
    interface PeopleRoleItem {
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        RequiredFields?: string;
        RoleCode?: string;
        RoleDesc?: string;
        RoleId?: number;
        TableName?: string;
    }
    interface PeopleRoleItemItem extends Types.PeopleRoleItemItemBase {
        CreatedByLoginId?: string;
        ModifiedByLoginId?: string;
        RoleCode?: string;
        RoleDesc?: string;
    }
    interface PeopleRoleItemItemBase {
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        ModifiedBy?: number;
        PeopleId?: number;
        PeopleRoleItemId?: number;
        RoleId?: number;
    }
    interface PermitBase extends Types.UniversalCustomFieldsBase3 {
        Address?: string;
        AddressType?: string;
        ApplicationDate?: Date;
        ApprovedBy?: string;
        AssignedTo?: string;
        City?: string;
        Comments?: string;
        DateExpires?: Date;
        DateIssued?: Date;
        Description?: string;
        ExtensionApprovedDate?: Date;
        ExtensionExpirationDate?: Date;
        ExtensionRequestedDate?: Date;
        FinalGuaranteeDate?: Date;
        FinalInspectionDate?: Date;
        InitiateDate?: Date;
        InitiatedGuaranteeDate?: Date;
        IssuedBy?: string;
        Location?: string;
        ParentPermitNumber?: string;
        PendingBy?: string;
        PermitCost?: number;
        PermitNumber?: string;
        PermitSid?: number;
        PermitType?: string;
        ProjectName?: string;
        ProjectSid?: number;
        RequestedBy?: string;
        Source?: string;
        State?: string;
        Status?: string;
        Viewable?: boolean;
        WorkApprovedBy?: string;
        Zip?: string;
    }
    interface PermitType {
        Comments?: string;
        Description?: string;
        PermitCost?: number;
        PermitName?: string;
        Source?: string;
    }
    interface PllPreferenceItem {
        Name?: string;
        OrgId?: number;
        Value?: string;
    }
    interface PluginLayoutDefinition {
        Id?: string;
        Messages?: {
            [key: string]: Types.LayoutMessage;
        };
    }
    interface Preference {
        Category?: string;
        DefaultValue?: string;
        Element?: string;
    }
    interface PriorityBase {
        Description?: string;
        Duration?: number;
        DurationUnit?: Enums.WorkDurationUnit;
        Priority?: string;
        PriorityId?: number;
        PriorityOrder?: number;
    }
    interface ProbGroupRight extends Types.GroupRightBase {
        CanViewCost?: boolean;
        ProblemLeaf?: Types.ProblemLeaf;
        ProblemSid?: number;
    }
    interface ProblemAttachment {
        Attachment?: string;
        ProblemLeaf?: Types.ProblemLeaf;
        ProblemSid?: number;
    }
    interface ProblemComment {
        Comments?: string;
        ObjectId?: number;
        ProblemSid?: number;
    }
    interface ProblemLeaf extends Types.ProblemLeafBase {
        ProbGroupRights?: Types.ProbGroupRight[];
        ProblemAttachments?: Types.ProblemAttachment[];
        ProblemComments?: Types.ProblemComment[];
        ProblemMapLayers?: Types.TemplateMapLayer[];
        ProblemPriorities?: Types.ProblemPriority[];
        ProblemQuestions?: Types.ProblemQuestion[];
        ProblemWOTemplates?: Types.ProblemWOTemplate[];
    }
    interface ProblemLeafBase {
        AutoClose?: boolean;
        Cancel?: boolean;
        Comments?: string;
        DateModified?: Date;
        DefaultProject?: string;
        DefaultProjectSid?: number;
        Description?: string;
        DispatchTo?: number;
        DomainId?: number;
        Duration?: number;
        DurationUnit?: Enums.WorkDurationUnit;
        Effort?: number;
        ForPublicSite?: boolean;
        OtherSysCode?: string;
        OtherSysCodeCWId?: number;
        OtherSysDesc1?: string;
        OtherSysDesc2?: string;
        Printer?: string;
        Priority?: string;
        ProbCategory?: string;
        ProblemCode?: string;
        ProblemSid?: number;
        QAModel?: Enums.QASequenceModel;
        ReqCustFieldCatId?: number;
        SRPrintTmpt?: string;
        SubmitTo?: number;
    }
    interface ProblemName {
        Description?: string;
        DomainId?: number;
        OtherSysCode?: string;
        OtherSysDesc1?: string;
        OtherSysDesc2?: string;
        ProblemCode?: string;
        ProblemSid?: number;
    }
    interface ProblemNode extends Types.NodeBase {
        Cancel?: boolean;
    }
    interface ProblemPriority extends Types.PriorityBase {
        ProblemLeaf?: Types.ProblemLeaf;
        ProblemSid?: number;
    }
    interface ProblemQA {
        Answers?: Types.QuestionAnswerBase[];
        BranchingModel?: boolean;
        ProblemSid?: number;
        Questions?: Types.ProblemQuestionBase[];
    }
    interface ProblemQuestion extends Types.ProblemQuestionBase {
        QuestionAnswers?: Types.QuestionAnswerBase[];
    }
    interface ProblemQuestionBase {
        ProblemSid?: number;
        Question?: string;
        QuestionId?: number;
        QuestionSequence?: number;
    }
    interface ProblemSecurity {
        CanCreate?: boolean;
        ProblemSid?: number;
    }
    interface ProblemWOTemplate extends Types.ProblemWOTemplateBase {
        ProblemLeaf?: Types.ProblemLeaf;
    }
    interface ProblemWOTemplateBase {
        ApplyToEntity?: string;
        Description?: string;
        ProblemSid?: number;
        WOTemplateId?: string;
    }
    interface ProjectBase extends Types.UniversalCustomFieldsBase {
        ActualEquipmentCost?: number;
        ActualLaborCost?: number;
        ActualMaterialCost?: number;
        ActualRevenue?: number;
        ActualTotalCost?: number;
        ApprovedBy?: string;
        ApprovedBySid?: number;
        AssignedTo?: string;
        AssignedToSid?: number;
        Cancel?: boolean;
        CancelledBySid?: number;
        Category?: string;
        ClosedBySid?: number;
        Comments?: string;
        DateCancelled?: Date;
        DateClosed?: Date;
        DateTimeModified?: Date;
        Description?: string;
        DomainId?: number;
        EstimatedBudget?: number;
        EstimatedEquipmentCost?: number;
        EstimatedLaborCost?: number;
        EstimatedMaterialCost?: number;
        EstimatedRevenue?: number;
        EstimatedTotalCost?: number;
        FiscalYear?: number;
        InitiateDate?: Date;
        InitiatedBy?: string;
        InitiatedBySid?: number;
        NoBudget?: boolean;
        ParentProjectSid?: number;
        ProjectFinishDate?: Date;
        ProjectName?: string;
        ProjectSid?: number;
        ProjectStartDate?: Date;
        QuickView?: boolean;
        Status?: string;
        X?: number;
        Y?: number;
        Z?: number;
    }
    interface ProjectEntity {
        EntitySid?: number;
        EntityType?: string;
        EntityUid?: string;
        FeatureId?: number;
        FeatureType?: string;
        FeatureUid?: string;
        Id?: number;
        ProjectSid?: number;
        X?: number;
        Y?: number;
        Z?: number;
    }
    interface ProjectNameDescription {
        Description?: string;
        DomainId?: number;
        ParentProjectSid?: number;
        ProjectName?: string;
        ProjectSid?: number;
        QuickView?: boolean;
        Status?: string;
    }
    interface ProjectSecurity {
        CanAddAssets?: boolean;
        CanAddAttachments?: boolean;
        CanAddComments?: boolean;
        CanCreateChild?: boolean;
        CanDelete?: boolean;
        CanDeleteAssets?: boolean;
        CanDeleteAttachments?: boolean;
        CanDeleteComments?: boolean;
        CanSetSecurity?: boolean;
        CanTransferOwnership?: boolean;
        CanUpdate?: boolean;
        CanUpdateAttachments?: boolean;
        CanUpdateComments?: boolean;
        CanView?: boolean;
        ProjectId?: number;
    }
    interface PWEntity {
        Code?: string;
        Description?: string;
        EntityTableType?: Enums.CWEntityType;
        Module?: string;
        Tag?: Object;
    }
    interface PWModule {
        Module?: string;
        ModuleName?: string;
    }
    interface QueryResult {
        HasMore?: boolean;
        Page?: number;
        Results?: Types.DynamicSearchResult[];
        TotalRecordCount?: number;
    }
    interface QueryTypeInfo {
        DynamicType?: string;
        QueryType?: string;
        SchemaName?: string;
        XFieldName?: string;
        YFieldName?: string;
        ZFieldName?: string;
    }
    interface QuestionAnswerBase {
        Answer?: string;
        AnswerFormat?: string;
        AnswerId?: number;
        AnswerSequence?: number;
        DispatchTo?: number;
        DispatchToFieldName?: string;
        NextQuestionId?: number;
        Priority?: string;
        QuestionId?: number;
        SubmitTo?: number;
        SubmitToFieldName?: string;
        SubmitToLayerName?: string;
        TellCaller?: string;
    }
    interface QueueMessage extends Types.QueueMessageBase {
        HookId?: number;
        Id?: number;
        Result?: string;
        Status?: Enums.QueueStatus;
    }
    interface QueueMessageBase {
        DateCreated?: Date;
        DateUpdated?: Date;
        HookType?: Enums.ActionType;
        Packet?: string;
    }
    interface QueueMessagePacket {
        SimpleHooks?: Types.WebHookPacket[];
        TemplateHooks?: Types.WebHookPacket[];
    }
    interface QuickSearchItem {
        Description?: string;
        Id?: string;
        Name?: string;
        Type?: string;
    }
    interface QuickSearchResult {
        Inspections?: Types.QuickSearchItem[];
        Permits?: Types.QuickSearchItem[];
        ServiceRequests?: Types.QuickSearchItem[];
        WorkOrders?: Types.QuickSearchItem[];
    }
    interface Receive extends Types.Transaction {
        AcctNum?: string;
        DamagedQuantity?: number;
        Destination?: string;
        EmployeeSid?: number;
        InvoiceNum?: string;
        MaterialCostId?: number;
        PoNum?: string;
        Quantity?: number;
        RequisitionNum?: string;
        SupplierUid?: string;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface RecentActivity extends Types.CoreDomainBase {
        ActivityId?: string;
        ActivitySid?: number;
        DateTimeStamp?: Date;
        Description?: string;
        DisplayId?: string;
        EmployeeSid?: number;
        Kind?: string;
    }
    interface RelEmpToField {
        DomainId?: number;
        EmployeeName?: string;
        EmployeeSid?: number;
        FieldName?: string;
        IsActive?: boolean;
        ObjectId?: number;
        TableName?: string;
    }
    interface ReportLinksWidget {
        Header?: string;
        Height?: number;
        Id?: number;
        Kind?: string;
        Position?: number;
        Settings?: Types.ReportLinksWidgetSettings;
        WidgetZoneId?: number;
    }
    interface ReportLinksWidgetSettings {
        ReportIdList?: number[];
    }
    interface ReqCustField extends Types.CategoryCustField {
        RequestId?: number;
    }
    interface RequestAttachment extends Types.AttachmentExtendedBase {
        Id?: number;
        RequestId?: number;
    }
    interface RequestBase extends Types.UniversalCustomFieldsBase2 {
        Cancel?: boolean;
        CancelledBy?: string;
        CancelledBySid?: number;
        CancelReason?: string;
        ClosedBy?: string;
        ClosedBySid?: number;
        DateCancelled?: Date;
        DateDispatchOpen?: Date;
        DateDispatchTo?: Date;
        DateInvtDone?: Date;
        DateSubmitTo?: Date;
        DateSubmitToOpen?: Date;
        DateTimeClosed?: Date;
        DateTimeInit?: Date;
        Description?: string;
        Details?: string;
        DispatchOpenBy?: string;
        DispatchOpenBySid?: number;
        DispatchTo?: string;
        DispatchToSid?: number;
        DomainId?: number;
        Effort?: number;
        Excursion?: boolean;
        Facility_Id?: string;
        FieldInvtDone?: boolean;
        InitiatedBy?: string;
        InitiatedByApp?: string;
        InitiatedBySid?: number;
        IsClosed?: boolean;
        LaborCost?: number;
        Level_Id?: string;
        LockedByDesktopUser?: string;
        MapPage?: string;
        OtherSystemCode?: string;
        OtherSystemDesc?: string;
        OtherSystemDesc2?: string;
        OtherSystemId?: string;
        OtherSystemStatus?: string;
        Priority?: string;
        PrjCompleteDate?: Date;
        ProbAddress?: string;
        ProbAddType?: string;
        ProbAptNum?: string;
        ProbCity?: string;
        ProbDistrict?: string;
        ProbLandmark?: string;
        ProblemCode?: string;
        ProblemSid?: number;
        ProbLocation?: string;
        ProbState?: string;
        ProbZip?: string;
        ProjectName?: string;
        ProjectPhaseId?: number;
        ProjectSid?: number;
        ReqCategory?: string;
        ReqCustFieldCatId?: number;
        RequestId?: number;
        Resolution?: string;
        Shop?: string;
        SRX?: number;
        SRY?: number;
        SRZ?: number;
        Status?: string;
        StreetName?: string;
        SubmitTo?: string;
        SubmitToEmail?: string;
        SubmitToOpenBy?: string;
        SubmitToOpenBySid?: number;
        SubmitToPager?: string;
        SubmitToPhone?: string;
        SubmitToSid?: number;
        TileNo?: string;
        WONeeded?: boolean;
        WorkOrderId?: string;
    }
    interface RequestInspection {
        InspectionId?: number;
        RequestId?: number;
    }
    interface RequestLaborCost {
        AcctNum?: string;
        BenefitCost?: number;
        Cost?: number;
        Description?: string;
        DomainId?: number;
        FinishTime?: Date;
        GroupName?: string;
        HolidayCost?: number;
        Hours?: number;
        LaborCostDetails?: Types.LaborCostDetail[];
        LaborCostId?: number;
        LaborName?: string;
        LaborSid?: number;
        OccupationCode?: string;
        OccupationId?: number;
        OtherCost?: number;
        OverheadCost?: number;
        OvertimeCost?: number;
        RateType?: Enums.LaborRateType;
        RegularCost?: number;
        RequestId?: number;
        ShiftDiffCost?: number;
        StandbyCost?: number;
        StartTime?: Date;
        TimesheetId?: number;
        TransDate?: Date;
    }
    interface RequestWorkOrder {
        RequestId?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface Requisition extends Types.RequisitionBase {
        RequisitionItems?: Types.RequisitionItem[];
    }
    interface RequisitionBase {
        Cancel?: boolean;
        Comments?: string;
        Complete?: boolean;
        ExpDeliveryDate?: Date;
        PoNumber?: string;
        ReqType?: string;
        RequisitionBy?: string;
        RequisitionBySid?: number;
        RequisitionDate?: Date;
        RequisitionId?: string;
        RequisitionSid?: number;
    }
    interface RequisitionItem {
        BackOrder?: boolean;
        BackOrderQuantity?: number;
        BoDeliveryDate?: Date;
        BoReceiveDate?: Date;
        Canceled?: boolean;
        Complete?: boolean;
        Description?: string;
        ItemCost?: number;
        Justification?: string;
        MaterialSid?: number;
        MaterialUid?: string;
        PartNumber?: string;
        QtyInPkg?: number;
        Quantity?: number;
        ReceivedQuantity?: number;
        RequisitionId?: string;
        RequisitionItemId?: number;
        RequisitionSid?: number;
        ReturnDate?: Date;
        ReturnDetail?: string;
        ReturnQuantity?: number;
        ReturnReason?: string;
        SupplierSid?: number;
        SupplierUid?: string;
        UnitCost?: number;
    }
    interface SampleDistress {
        Comments?: string;
        Description?: string;
        Distress?: number;
        DistressId?: string;
        Quantity?: number;
        QuantityUnit?: string;
        SampleId?: string;
        Severity?: Enums.DistressSeverity;
    }
    interface SavedQuery {
        CreatedBySid?: number;
        Id?: number;
        Name?: string;
        Query?: string;
        QueryType?: string;
    }
    interface SearchCustomField {
        AnswerList?: string[];
        Answers?: string;
        CustFieldId?: number;
        SearchId?: number;
        TableName?: string;
    }
    interface SearchDateField extends Types.DateFieldValue {
        FieldName?: string;
        SearchId?: number;
        TableName?: string;
    }
    interface SearchDefinition extends Types.SearchDefinitionName {
        SearchCustomFields?: Types.SearchCustomField[];
        SearchDateFields?: Types.SearchDateField[];
        SearchFields?: Types.SearchField[];
        SearchGroupByFields?: Types.SearchResultField[];
        SearchMapLayerFields?: Types.SearchMapLayerField[];
        SearchNumericFields?: Types.SearchNumericField[];
        SearchPolygonFields?: Types.SearchPolygonField[];
        SearchQAFields?: Types.SearchQAField[];
        SearchQANumericFields?: Types.SearchQANumericField[];
        SearchResultFields?: Types.SearchResultField[];
    }
    interface SearchDefinitionName {
        AlternateCsvUrl?: string;
        AlternateMapUrl?: string;
        AlternateServiceUrl?: string;
        AlternateShapeFileUrl?: string;
        ApplyToEntity?: string;
        ApplyToEventLayer?: boolean;
        ApplyToInbox?: boolean;
        CalculationId?: number;
        CsvUrl?: string;
        DateTimeModified?: Date;
        Description?: string;
        DomainId?: number;
        EmployeeName?: string;
        EmployeeSid?: number;
        EnableEurl?: boolean;
        Keywords?: string;
        MapUrl?: string;
        QueryId?: number;
        SearchFor?: Enums.SearchType;
        SearchId?: number;
        SearchName?: string;
        ServiceUrl?: string;
        ShapeFileUrl?: string;
        SharedWithin?: Enums.ApplyLevel;
        StartDayOfWeek?: Enums.DayOfWeek;
        TableName?: string;
    }
    interface SearchDisplayField {
        BackColor?: string;
        Caption?: string;
        DataType?: string;
        FieldName?: string;
        ForeColor?: string;
        FormName?: string;
        IsPublic?: boolean;
        Selected?: boolean;
        SeqId?: number;
        ShapeFileField?: string;
        TableName?: string;
        Visible?: boolean;
    }
    interface SearchField {
        FieldName?: string;
        FieldValueList?: string[];
        FieldValues?: string;
        SearchId?: number;
        TableName?: string;
    }
    interface SearchMapLayerField {
        FieldValueList?: string[];
        FieldValues?: string;
        MapLayer?: string;
        MapLayerField?: string;
        SearchId?: number;
        TemplateId?: number;
    }
    interface SearchNumericField extends Types.NumericFieldValue {
        FieldName?: string;
        FieldValues?: string;
        FormattedString?: string;
        SearchId?: number;
        TableName?: string;
    }
    interface SearchPolygonField {
        FieldName?: string;
        SearchId?: number;
        TableName?: string;
    }
    interface SearchQAField {
        AnswerList?: string[];
        Answers?: string;
        FieldName?: string;
        QuestionId?: number;
        SearchId?: number;
        TableName?: string;
        TemplateId?: number;
    }
    interface SearchQANumericField extends Types.NumericFieldValue {
        FieldName?: string;
        FieldValues?: string;
        QuestionId?: number;
        SearchId?: number;
        TableName?: string;
        TemplateId?: number;
    }
    interface SearchResultField {
        DescendingOrder?: boolean;
        FieldCaption?: string;
        FieldName?: string;
        GroupBy?: boolean;
        GroupBySequence?: number;
        IsOrderByField?: boolean;
        OrderBySequence?: number;
        SearchId?: number;
        SequenceId?: number;
        TableName?: string;
    }
    interface SearchResultsWidget {
        Header?: string;
        Height?: number;
        Id?: number;
        Kind?: string;
        Position?: number;
        SearchId?: number;
        SearchType?: Enums.SearchType;
        Settings?: Types.SearchResultsWidgetSettings;
        WidgetZoneId?: number;
    }
    interface SearchResultsWidgetSettings {
        AutosizeColumns?: boolean;
        RefreshInterval?: number;
        Rows?: number;
        SearchView?: Enums.SearchView;
    }
    interface SearchSecurity {
        ContractCanViewCost?: boolean;
        EmployeeSid?: number;
        RequestCanViewLaborCost?: boolean;
        WorkOrderCanViewEquipmentCost?: boolean;
        WorkOrderCanViewLaborCost?: boolean;
        WorkOrderCanViewLineItemCost?: boolean;
        WorkOrderCanViewMaterialCost?: boolean;
    }
    interface SearchTypeInfo {
        DisplayName?: string;
        Name?: string;
        SearchType?: Enums.SearchType;
    }
    interface ServiceRequestAnswer {
        AnswerId?: number;
        AnswerValue?: string;
    }
    interface ServiceRequestSecurity {
        CanAddCaller?: boolean;
        CanAddLabor?: boolean;
        CanCancel?: boolean;
        CanClose?: boolean;
        CanDelete?: boolean;
        CanDeleteCaller?: boolean;
        CanDeleteComment?: boolean;
        CanDeleteLabor?: boolean;
        CanUpdate?: boolean;
        CanUpdateCaller?: boolean;
        CanUpdateComment?: boolean;
        CanUpdateLabor?: boolean;
        CanView?: boolean;
        CanViewCaller?: boolean;
        CanViewLabor?: boolean;
        CanViewLaborCost?: boolean;
        RequestId?: number;
    }
    interface ServiceRequestZoneValues {
        DispatchTo?: string;
        District?: string;
        MapLayers?: Types.InstanceMapLayer[];
        MapPage?: string;
        Shop?: string;
        SubmitTo?: string;
        TileNo?: string;
    }
    interface SimpleGisServiceInfo {
        Active?: boolean;
        DefinitionId?: number;
        DomainId?: number;
        MobileSync?: boolean;
        RefreshInterval?: number;
        Security?: string[];
        SecurityId?: number;
        SequenceId?: number;
        Service?: string;
        ServiceId?: number;
        ServiceName?: string;
        ServiceType?: Enums.GISServiceType;
        SharingUrl?: string;
        TokenRequired?: boolean;
    }
    interface SMhInspImg {
        AttachedBy?: string;
        AttachedBySid?: number;
        Comments?: string;
        DateTimeAttached?: Date;
        Id?: number;
        ImagePath?: string;
        InspectionId?: number;
    }
    interface SMhiObserv {
        Condition?: string;
        ConditionScore?: number;
        DistFromRim?: number;
        EstMhIandI?: number;
        InspectionId?: number;
        LeakCategory?: string;
        LeakCatScore?: number;
        LeakType?: string;
        LeakTypeScore?: number;
        MhObservId?: number;
        MhPart?: string;
        Position?: string;
        TestMethod?: string;
    }
    interface SortData {
        Column?: string;
        Descending?: boolean;
    }
    interface SPipeInManhole {
        BypassPipe?: boolean;
        Diameter?: number;
        DropConnection?: boolean;
        EstPipeIandI?: number;
        FlowDepth?: number;
        InOut?: Enums.PipeInOut;
        InspectionId?: number;
        Material?: string;
        PipeCond?: string;
        PipeCondScore?: number;
        PipeDepth?: number;
        PipeDirection?: string;
        PipeElev?: number;
        PipeId?: string;
        PipeInMhId?: number;
        PipeType?: string;
    }
    interface StandardInspBase extends Types.UniversalCustomFieldsBase {
    }
    interface StoreDomainBase {
        Description?: string;
        DomainId?: number;
        DomainName?: string;
    }
    interface StorermStock {
        BinImagePath?: string;
        BinLocation?: string;
        Comments?: string;
        CycleIntervalNum?: number;
        CycleIntervalUnit?: Enums.RepeatIntervalUnit;
        MaterialSid?: number;
        MaxQuantity?: number;
        MinQuantity?: number;
        NextAuditDate?: Date;
        SecBinImagePath?: string;
        SecBinLocation?: string;
        StockOnHand?: number;
        Storerm?: string;
    }
    interface StoreroomAccessSecurity {
        CanAddGroups?: boolean;
        CanAddRequisitions?: boolean;
        CanAddStoreGroupPermissions?: boolean;
        CanAddStoreroomMaterial?: boolean;
        CanAddStorerooms?: boolean;
        CanDeleteGroups?: boolean;
        CanDeleteRequisitions?: boolean;
        CanDeleteStoreGroupPermissions?: boolean;
        CanDeleteStoreroomMaterial?: boolean;
        CanDeleteStorerooms?: boolean;
        CanUpdateDefaultStoreroomDomain?: boolean;
        CanUpdateGroups?: boolean;
        CanUpdateRequisitions?: boolean;
        CanUpdateStoreGroupPermissions?: boolean;
        CanUpdateStoreroomMaterial?: boolean;
        CanUpdateStorerooms?: boolean;
        CanViewGroupConfigGroups?: boolean;
        CanViewRequisitions?: boolean;
        CanViewStoreroomConfigMaterials?: boolean;
        CanViewStoreroomConfigStorerooms?: boolean;
    }
    interface StoreroomSecurityBase {
        CanAudit?: boolean;
        CanIssue?: boolean;
        CanReceive?: boolean;
        CanTransfer?: boolean;
    }
    interface StreetCode {
        City?: string;
        Code?: string;
        District?: string;
        Id?: number;
        State?: string;
        StreetName?: string;
        Zone?: string;
    }
    interface SubTypeItem {
        AnonymousFlag?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        DefaultText?: string;
        ExpiredFlag?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        RegisteredFlag?: string;
        SubType?: string;
        SubTypeDesc?: string;
        SubTypeId?: number;
        VersionNo?: string;
    }
    interface Supplier extends Types.SupplierBase {
        SupplierMaterials?: Types.SupplierMaterialBase[];
    }
    interface SupplierBase {
        Address?: string;
        City?: string;
        ContactPerson?: string;
        ContactPerson2?: string;
        IsActive?: boolean;
        Name?: string;
        State?: string;
        SupplierEmail?: string;
        SupplierEmail2?: string;
        SupplierFax?: string;
        SupplierNotes?: string;
        SupplierPhone?: string;
        SupplierPhone2?: string;
        SupplierPhone3?: string;
        SupplierSid?: number;
        SupplierUid?: string;
        Zipcode?: string;
    }
    interface SupplierMaterialBase {
        CatalogNum?: string;
        ContractNum?: string;
        Description?: string;
        InfoDate?: Date;
        LeadTime?: number;
        LeadTimeUnit?: Enums.TimeIntervalUnit;
        MaterialSid?: number;
        MaterialUid?: string;
        NoInPack?: number;
        Notes?: string;
        OrderQuant?: number;
        PackCost?: number;
        PartNumber?: string;
        SupMatName?: string;
        SupPartNumber?: string;
        SupplierMaterialId?: number;
        SupplierSid?: number;
        SupplierUid?: string;
        UnitOfMeasure?: string;
    }
    interface SystemTimeZone {
        DaylightName?: string;
        DisplayName?: string;
        Id?: string;
        StandardName?: string;
        SupportsDaylightSavingTime?: boolean;
        TotalHoursBaseUtcOffset?: number;
    }
    interface TableWidgetFormatOptions {
        MainBackgroundColor?: string;
        MainTextColor?: string;
        NameColor?: string;
    }
    interface TableWidgetOption extends Types.WidgetOptions {
        Columns?: string[];
        FormatOptions?: Types.TableWidgetFormatOptions;
        GridSort?: Types.SortData;
        QueryId?: number;
    }
    interface TaskCode {
        ResponseCode?: string;
        TaskSid?: number;
    }
    interface TaskKeyword {
        Keyword?: string;
        TaskSid?: number;
    }
    interface TaskLeafBase {
        AssignedTo?: number;
        AssignedToName?: string;
        Cancel?: boolean;
        Comments?: string;
        Description?: string;
        DomainId?: number;
        Duration?: number;
        NotifyMM?: boolean;
        ResponseLabel?: string;
        Shop?: string;
        TaskName?: string;
        TaskSid?: number;
    }
    interface TaskNode extends Types.NodeBase {
    }
    interface TaskReportItem {
        CreatedBy?: number;
        DateCreated?: Date;
        DateModified?: Date;
        FileName?: string;
        ModifiedBy?: number;
        OrgId?: number;
        ReportId?: number;
        ReportName?: string;
        TaskId?: number;
        TaskReportId?: number;
    }
    interface TaskResultDetailItem {
        CaseStatus?: string;
        CaseStatusId?: number;
        CloseTaskFlag?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateModified?: Date;
        ExtendExpirationDateFlag?: string;
        InsertFlag?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        NextTaskFlag?: string;
        ReInsertFlag?: string;
        ResultCode?: string;
        ResultDesc?: string;
        ResultDetailId?: number;
        ResultDisplay?: string;
        ResultId?: number;
        ResultSequence?: number;
        ResultSetDesc?: string;
        ResultSetId?: number;
        SkipTaskFlag?: string;
        StatusCode?: string;
    }
    interface TaskResultFeeInsertItem {
        FeeCode?: string;
        FeeDesc?: string;
        FeeSetupId?: number;
        TaskId?: number;
        TaskResultFeeInsertId?: number;
        TaskResultId?: number;
    }
    interface TemplateMapLayer {
        Id?: number;
        MapLayer?: string;
        MapLayerField?: string;
        SourceType?: Enums.TemplateMapLayerSourceType;
        TemplateId?: number;
        TemplateUid?: string;
    }
    interface TenderTypeItem {
        AccountCode?: string;
        AnonymousFlag?: string;
        CreatedBy?: number;
        CreatedByLoginId?: string;
        DateCreated?: Date;
        DateExpired?: Date;
        DateModified?: Date;
        ExpiredFlag?: string;
        ModifiedBy?: number;
        ModifiedByLoginId?: string;
        OrgId?: number;
        OverPaymentFlag?: string;
        PaymentGatewayFlag?: string;
        PaymentGatewayId?: number;
        RegisteredFlag?: string;
        TableName?: string;
        TenderDesc?: string;
        TenderType?: string;
        TenderTypeId?: number;
        VersionNo?: string;
    }
    interface TestType {
        Code?: string;
        Description?: string;
        Entity?: string;
    }
    interface Transaction {
        Comments?: string;
        Description?: string;
        MaterialSerials?: Types.MaterialSerial[];
        MaterialSid?: number;
        MaterialUid?: string;
        PartNumber?: string;
        Personnel?: string;
        PersonnelSid?: number;
        RecordDateTime?: Date;
        TagNum?: string;
        TransactionId?: number;
        TransDateTime?: Date;
        TransType?: Enums.TransactionType;
        UnitCost?: number;
    }
    interface Transfer extends Types.Transaction {
        AcctNum?: string;
        Destination?: string;
        Quantity?: number;
        RequestedBy?: string;
        RequestedBySid?: number;
        Source?: string;
    }
    interface TvInspAttachment extends Types.AttachmentExtendedBase {
        Id?: number;
        TvId?: number;
    }
    interface TvInspection extends Types.TvInspectionBase {
        InspCustFields?: Types.InspCustField[];
        TvObservations?: Types.TvObservation[];
    }
    interface TvInspectionBase extends Types.StandardInspBase {
        CertificateNumber?: string;
        City?: string;
        Coating_Method?: string;
        CondRating?: number;
        Consequence_Of_Failure?: string;
        CounterStart?: string;
        CounterStop?: string;
        Customer?: string;
        DateCleaned?: Date;
        Deterioration?: string;
        DeterScore?: number;
        Diameter?: number;
        Down_Easting?: string;
        Down_Elevation?: string;
        Down_Northing?: string;
        DownLocation?: string;
        DownMh?: string;
        DownType?: string;
        DrainageArea?: string;
        DwnDepth?: number;
        DyeId?: number;
        FlowControl?: string;
        FlowDepth?: number;
        ForemanRecomnd?: string;
        GPS_Accuracy?: string;
        GroundCond?: string;
        GroundCondScore?: number;
        HydRating?: number;
        InitiatedByApp?: string;
        InspCustFieldCatId?: number;
        InspectedBy?: string;
        InspectedBySid?: number;
        Inspection_Status?: string;
        Inspection_Technology_Used?: string;
        IsImperial?: boolean;
        JointLength?: number;
        JointType?: string;
        LiningMethod?: string;
        Location?: string;
        Location_Code?: string;
        Location_Details?: string;
        MapNumber?: string;
        MasterTapeNum?: string;
        Material?: string;
        MH_Coordinate_System?: string;
        ObservationSum?: string;
        ObservMethod?: Enums.TvObservationMethod;
        OmRating?: number;
        Owner?: string;
        PipeId?: string;
        PipeLength?: number;
        PipeType?: string;
        PoNumber?: string;
        PrecipType?: string;
        PrecipTypeScore?: number;
        PreCleaning?: string;
        Pressure_Value?: number;
        Project?: string;
        RehabStatus?: string;
        RepairsMade?: string;
        Reverse_Setup_Flag?: number;
        ReverseSetup?: boolean;
        ReviewedBySid?: number;
        Reviewer_Certificate_Number?: string;
        RimToGradeD?: number;
        RimToGradeU?: number;
        RimToInvertD?: number;
        RimToInvertU?: number;
        RootRating?: number;
        SewerCategory?: string;
        SewerUse?: string;
        Shape?: string;
        SmokeId?: number;
        Spot?: string;
        SpotScore?: number;
        Street?: string;
        StructRating?: number;
        SuperAprvlComnts?: string;
        SurfaceType?: string;
        TapeLibraryNum?: string;
        TotalLength?: number;
        TvDate?: Date;
        TvId?: number;
        TvReason?: string;
        Up_Easting?: string;
        Up_Elevation?: string;
        Up_Northing?: string;
        UpdateMap?: boolean;
        UpDepth?: number;
        UpLocation?: string;
        UpMh?: string;
        UpType?: string;
        Vertical_Datum?: string;
        VideoLocation?: string;
        VideoTapeNum?: string;
        VtrFormat?: string;
        Weather?: string;
        Width?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        X?: number;
        Y?: number;
        YearLaid?: number;
        YearRenewed?: number;
        Z?: number;
    }
    interface TvInspectionCodeDescs {
        NodeTypeCodeDescs?: Types.CodeDesc[];
        PipeDiameterCodeDescs?: Types.CodeDesc[];
    }
    interface TvInspectionDescScores {
        DeteriorationDescScores?: Types.DescScore[];
        GroundCondDescScores?: Types.DescScore[];
        PrecipTypeDescScores?: Types.DescScore[];
        SpotDescScores?: Types.DescScore[];
    }
    interface TvInspectionFieldUnits {
        Diameter?: string;
        DwnDepth?: string;
        FlowDepth?: string;
        JointLength?: string;
        PipeLength?: string;
        UpDepth?: string;
    }
    interface TvObservation {
        Cause?: Enums.TvObservationCause;
        CctvCode?: string;
        ClockTo?: number;
        Continuous?: string;
        DistFromDown?: number;
        DistFromUp?: number;
        Grade?: number;
        Joint?: string;
        ObservationId?: number;
        ObservDesc?: string;
        ObservDescScore?: number;
        ObservPos?: string;
        ObservRemarks?: string;
        ObservType?: string;
        TapeRead?: string;
        TvId?: number;
        TvImage?: string;
        TvTape?: string;
        ValueDimension1?: number;
        ValueDimension2?: number;
        ValuePercent?: number;
        VCR_Time?: string;
    }
    interface TvObsvAttachment extends Types.AttachmentExtendedBase {
        Id?: number;
        ObservationId?: number;
    }
    interface UniversalCustomFieldsBase {
        Date1?: Date;
        Date2?: Date;
        Date3?: Date;
        Date4?: Date;
        Date5?: Date;
        Num1?: number;
        Num2?: number;
        Num3?: number;
        Num4?: number;
        Num5?: number;
        Text1?: string;
        Text10?: string;
        Text2?: string;
        Text3?: string;
        Text4?: string;
        Text5?: string;
        Text6?: string;
        Text7?: string;
        Text8?: string;
        Text9?: string;
    }
    interface UniversalCustomFieldsBase2 extends Types.UniversalCustomFieldsBase {
        Text11?: string;
        Text12?: string;
        Text13?: string;
        Text14?: string;
        Text15?: string;
        Text16?: string;
        Text17?: string;
        Text18?: string;
        Text19?: string;
        Text20?: string;
    }
    interface UniversalCustomFieldsBase3 extends Types.UniversalCustomFieldsBase2 {
        Num10?: number;
        Num6?: number;
        Num7?: number;
        Num8?: number;
        Num9?: number;
    }
    interface UserMapExtent extends Types.MapViewExtent {
        DateTimeModified?: Date;
        ExtentId?: number;
        ExtentName?: string;
        IsDefault?: boolean;
        SharedWithin?: Enums.ApplyLevel;
        UserId?: number;
    }
    interface UserMapScale {
        DateTimeModified?: Date;
        Scale?: number;
        ScaleId?: number;
        SharedWithin?: Enums.ApplyLevel;
        UserId?: number;
    }
    interface UserPreference extends Types.Preference {
        EmployeeSid?: number;
    }
    interface UserPreferences {
        ClusterEventLayers?: boolean;
        Data?: Types.UserPreference[];
        DistrictFieldName?: string;
        DistrictLayerName?: string;
        EquipmentTreeDisplayText?: string;
        MapFavorites?: string[];
        MapPageFieldName?: string;
        MapPageLayerName?: string;
        MapSelectionBaseColor?: string;
        MapSelectionBaseFill?: string;
        MapSelectionBaseStroke?: string;
        MapSelectionSelectedColor?: string;
        MapSelectionSelectedFill?: string;
        MapSelectionSelectedStroke?: string;
        MaterialTreeDisplayText?: string;
        ShopFieldName?: string;
        ShopLayerName?: string;
        SpatialReference?: number;
        TileNoFieldName?: string;
        TileNoLayerName?: string;
    }
    interface ViewDataUploadFilesResult {
        AttachedBy?: string;
        CaObjectId?: number;
        CaReceiptId?: number;
        CaTaskId?: number;
        Comments?: string;
        Date?: Date;
        DeleteType?: string;
        DeleteUrl?: string;
        Description?: string;
        LabelText?: string;
        Name?: string;
        ReldocsId?: number;
        Size?: number;
        Tags?: Types.AttachmentActivityTagsItem[];
        TaskCode?: string;
        TaskDesc?: string;
        ThumbnailUrl?: string;
        Title?: string;
        Type?: string;
        Url?: string;
    }
    interface WeatherWidget {
        Header?: string;
        Id?: number;
        Kind?: string;
        Position?: number;
        WidgetZoneId?: number;
        ZipCode?: string;
    }
    interface WebHookBase {
        Description?: string;
        DomainId?: number;
        Fields?: string[];
        Id?: number;
        Method?: string;
        OutputType?: Enums.WebHookOutputType;
        PacketConfig?: Types.PacketConfiguration;
        ParameterName?: string;
        SourceType?: Enums.EventSourceType;
        Url?: string;
    }
    interface WebHookPacket {
        Credential?: Types.PacketCredential;
        Data?: string;
        Destination?: string;
        HeaderData?: Types.NameValue[];
        HookId?: number;
        Method?: string;
        Model?: Enums.WebHookPacketModel;
        OutputType?: Enums.WebHookOutputType;
        Referer?: string;
        SourceEvent?: Enums.SourceEventType;
        SourceType?: Enums.EventSourceType;
        Urgent?: boolean;
    }
    interface WidgetOptions {
        ActionIds?: string[];
    }
    interface WOAttachment extends Types.AttachmentExtendedBase {
        Id?: number;
        TaskName?: string;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        WOTaskId?: number;
    }
    interface WOCustField extends Types.CategoryCustField {
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface WOPermitBase {
        PermitCost?: number;
        PermitNumber?: string;
        PermitSid?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface WorkOrderBase extends Types.UniversalCustomFieldsBase2 {
        AcctNum?: string;
        ActivityZone?: string;
        ActualFinishDate?: Date;
        ActualStartDate?: Date;
        ApplyToEntity?: string;
        AssetGroup?: string;
        Cancel?: boolean;
        CancelledBy?: string;
        CancelledBySid?: number;
        CancelReason?: string;
        ClosedBySid?: number;
        ContractorName?: string;
        ContractorSid?: number;
        ContractWOId?: string;
        ContrBillable?: boolean;
        CreatedByCycle?: boolean;
        CycleFrom?: Enums.RepeatFromDate;
        CycleIntervalNum?: number;
        CycleIntervalUnit?: Enums.RepeatIntervalUnit;
        CycleType?: Enums.RepeatType;
        DateCancelled?: Date;
        DatePrinted?: Date;
        DateSubmitTo?: Date;
        DateSubmitToOpen?: Date;
        DateToBePrinted?: Date;
        DateWOClosed?: Date;
        Description?: string;
        District?: string;
        DomainId?: number;
        Effort?: number;
        ExpenseType?: Enums.WOExpenseType;
        Facility_Id?: string;
        FromDate?: Date;
        InitiateDate?: Date;
        InitiatedBy?: string;
        InitiatedByApp?: string;
        InitiatedBySid?: number;
        IsClosed?: boolean;
        IsReactive?: boolean;
        LegalBillable?: boolean;
        Level_Id?: string;
        Location?: string;
        LockedByDesktopUser?: string;
        MapPage?: string;
        MapTemplateName?: string;
        NumDaysBefore?: number;
        PerformanceBudgetId?: number;
        PrimaryContractId?: number;
        Priority?: string;
        ProjectName?: string;
        ProjectPhaseId?: number;
        ProjectSid?: number;
        ProjFinishDate?: Date;
        ProjStartDate?: Date;
        RequestedBy?: string;
        RequestedBySid?: number;
        Resolution?: string;
        ScheduleDate?: Date;
        Shop?: string;
        SourceWOId?: string;
        Stage?: Enums.WOStage;
        Status?: string;
        StreetName?: string;
        SubmitTo?: string;
        SubmitToOpenBy?: string;
        SubmitToOpenBySid?: number;
        SubmitToSid?: number;
        Supervisor?: string;
        SupervisorSid?: number;
        TileNo?: string;
        TransToWOId?: string;
        Unattached?: boolean;
        UnitsAccompDesc?: string;
        UnitsAccompDescLock?: boolean;
        UnitsAccomplished?: number;
        UpdateMap?: boolean;
        WOAddress?: string;
        WOCategory?: string;
        WOClosedBy?: string;
        WOCost?: number;
        WOCustFieldCatId?: number;
        WOEquipCost?: number;
        WOLaborCost?: number;
        WOMapScale?: number;
        WOMatCost?: number;
        WOOutput?: Enums.WOOutputType;
        WOPermitCost?: number;
        WorkCompletedBy?: string;
        WorkCompletedBySid?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        WOTemplateId?: string;
        WOXCoordinate?: number;
        WOYCoordinate?: number;
        WOZCoordinate?: number;
    }
    interface WorkOrderCostSummary extends Types.CostSummaryBase {
        WOCategory?: string;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface WorkOrderEntity extends Types.WorkOrderEntityBase {
        AttributeOIDFieldName?: string;
        Attributes?: {
            [key: string]: Object;
        };
        AttributeUIDFieldName?: string;
        RelatedFeature?: Types.WorkOrderEntity;
        Tag?: {
            [key: string]: Object;
        };
    }
    interface WorkOrderEntityBase {
        Address?: string;
        EntitySid?: number;
        EntityType?: string;
        EntityUid?: string;
        Facility_Id?: string;
        FeatureId?: number;
        FeatureType?: string;
        FeatureUid?: string;
        IsBlank?: boolean;
        LegacyId?: string;
        Level_Id?: string;
        Location?: string;
        ObjectId?: number;
        TileNo?: string;
        WarrantyDate?: Date;
        WorkCompleted?: boolean;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        X?: number;
        Y?: number;
        Z?: number;
    }
    interface WorkOrderEntityCostSummary extends Types.UniversalCustomFieldsBase2 {
        ActualFinishDate?: Date;
        ActualStartDate?: Date;
        Address?: string;
        Cancel?: boolean;
        CancelledBy?: string;
        CancelledBySid?: number;
        ClosedBySid?: number;
        DateCancelled?: Date;
        DateSubmitTo?: Date;
        DateWoClosed?: Date;
        Description?: string;
        DomainId?: number;
        EntitySid?: number;
        EntityType?: string;
        EntityUid?: string;
        EquipmentCost?: number;
        Facility_Id?: string;
        FeatureId?: number;
        FeatureType?: string;
        FeatureUid?: string;
        InitiatedByApp?: string;
        IsReactive?: boolean;
        LaborCost?: number;
        LegacyId?: string;
        Level_Id?: string;
        LineItemCost?: number;
        Location?: string;
        MaterialCost?: number;
        ObjectId?: number;
        Priority?: string;
        ProjFinishDate?: Date;
        ProjStartDate?: Date;
        Sequence?: number;
        Status?: string;
        SubmitTo?: string;
        SubmitToSid?: number;
        TileNo?: string;
        TotalCost?: number;
        TotalHours?: number;
        WarrantyDate?: Date;
        WoCategory?: string;
        WoClosedBy?: string;
        WorkCompleted?: boolean;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        WoTemplateId?: string;
        X?: number;
        Y?: number;
        Z?: number;
    }
    interface WorkOrderInspection {
        InspectionId?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface WorkOrderLaborCost {
        AcctNum?: string;
        BenefitCost?: number;
        ContractorNumber?: string;
        Cost?: number;
        Description?: string;
        DomainId?: number;
        EntityType?: string;
        EntityUid?: string;
        FinishDate?: Date;
        GroupName?: string;
        HolidayCost?: number;
        Hours?: number;
        LaborCostDetails?: Types.LaborCostDetail[];
        LaborCostId?: number;
        LaborName?: string;
        LaborSid?: number;
        LaborType?: Enums.LaborCategory;
        OccupationCode?: string;
        OccupationId?: number;
        OtherCost?: number;
        OverheadCost?: number;
        OvertimeCost?: number;
        RateType?: Enums.LaborRateType;
        RegularCost?: number;
        ShiftDiffCost?: number;
        StandbyCost?: number;
        StartDate?: Date;
        TaskName?: string;
        TimesheetId?: number;
        TransDate?: Date;
        UsageType?: Enums.CostUsage;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        WOTaskId?: number;
    }
    interface WorkOrderRelatedWorkOrder {
        RelatedWorkOrderId?: string;
        RelatedWorkOrderSid?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface WorkOrderSecurity {
        CanAddEquipment?: boolean;
        CanAddLabor?: boolean;
        CanAddLineItems?: boolean;
        CanAddMaterial?: boolean;
        CanAddTasks?: boolean;
        CanCancel?: boolean;
        CanClose?: boolean;
        CanDelete?: boolean;
        CanDeleteComment?: boolean;
        CanDeleteEquipment?: boolean;
        CanDeleteLabor?: boolean;
        CanDeleteLineItems?: boolean;
        CanDeleteMaterial?: boolean;
        CanDeleteTasks?: boolean;
        CanUpdate?: boolean;
        CanUpdateComment?: boolean;
        CanUpdateEquipment?: boolean;
        CanUpdateLabor?: boolean;
        CanUpdateLineItems?: boolean;
        CanUpdateMaterial?: boolean;
        CanUpdateTasks?: boolean;
        CanView?: boolean;
        CanViewCosts?: boolean;
        CanViewEquipment?: boolean;
        CanViewEquipmentCost?: boolean;
        CanViewLabor?: boolean;
        CanViewLaborCost?: boolean;
        CanViewLineItems?: boolean;
        CanViewMaterial?: boolean;
        CanViewMaterialCost?: boolean;
        CanViewTasks?: boolean;
        WorkOrderId?: string;
        WorkOrderSid?: number;
    }
    interface WorkOrderTemplateSecurity {
        CanCreate?: boolean;
        IsTemplateClass?: boolean;
        WOTemplateId?: string;
    }
    interface WorkOrderZoneValues {
        District?: string;
        MapLayers?: Types.InstanceMapLayer[];
        MapPage?: string;
        Shop?: string;
        TileNo?: string;
    }
    interface WOTask {
        ActFinishDate?: Date;
        ActStartDate?: Date;
        AssignedTo?: number;
        AssignedToName?: string;
        Comments?: string;
        Description?: string;
        DomainId?: number;
        Duration?: number;
        Effort?: number;
        EntityType?: string;
        EntityUid?: string;
        IsRework?: boolean;
        PermitNum?: string;
        PermitSid?: number;
        ProceedOk?: boolean;
        ProjFinishDate?: Date;
        ProjStartDate?: Date;
        Shop?: string;
        Status?: string;
        TaskCode?: string;
        TaskName?: string;
        TaskSeqId?: number;
        TaskSid?: number;
        WorkOrderId?: string;
        WorkOrderSid?: number;
        WOTaskId?: number;
    }
    interface WOTemplateBase {
        AcctNum?: string;
        ApplyToEntity?: string;
        AutoCreateTask?: boolean;
        Cancel?: boolean;
        Comments?: string;
        CopyCustomFieldVal?: Enums.CustomFieldValueSource;
        CreateDate?: Date;
        CycleFrom?: Enums.RepeatFromDate;
        CycleIncludeWeekends?: boolean;
        CycleIntervalNum?: number;
        CycleIntervalUnit?: Enums.RepeatIntervalUnit;
        CycleType?: Enums.RepeatType;
        DateModified?: Date;
        DaysToComplete?: number;
        DefaultProject?: string;
        DefaultProjectSid?: number;
        Description?: string;
        DomainId?: number;
        Effort?: number;
        ExpenseType?: Enums.WOExpenseType;
        Instructions?: string;
        IsReactive?: boolean;
        MaintScore?: number;
        MapTemplateName?: string;
        NumDaysBefore?: number;
        Printer?: string;
        Priority?: string;
        RequireAssetOnClose?: boolean;
        Shop?: string;
        Stage?: Enums.WOStage;
        Status?: string;
        SubmitToEmployeeSid?: number;
        SupervisorEmployeeSid?: number;
        UnitsAccompDesc?: string;
        UnitsAccompDescLock?: boolean;
        UpdateXY?: boolean;
        WarrantyDuration?: number;
        WarrantyDurationUnit?: Enums.RepeatIntervalUnit;
        WOCategory?: string;
        WOCustFieldCatId?: number;
        WOMapExtent?: string;
        WOMapScale?: number;
        WOOutput?: Enums.WOOutputType;
        WOPrintTmpt?: string;
        WorkMonth?: string;
        WOTemplateId?: string;
    }
    interface WOTemplateDefaultTestBase {
        AutoCreate?: boolean;
        CreateOnEvent?: Enums.WOEvent;
        InspTemplateDesc?: string;
        InspTemplateId?: number;
        InspTemplateName?: string;
        IntervalNum?: number;
        IntervalUnit?: Enums.RepeatIntervalUnit;
        TestCode?: string;
        TestDesc?: string;
        WOTemplateId?: string;
        WOTempTestId?: number;
    }
    interface WOTemplateName {
        ApplyToEntity?: string;
        Description?: string;
        DomainId?: number;
        IsTemplateClass?: boolean;
        WOCategory?: string;
        WOTemplateId?: string;
    }
    interface WOTempTask {
        AssignedTo?: number;
        AssignedToName?: string;
        Comments?: string;
        Description?: string;
        DomainId?: number;
        Duration?: number;
        Effort?: number;
        Shop?: string;
        TaskName?: string;
        TaskSeqId?: number;
        TaskSid?: number;
        WOTemplateId?: string;
        WOTempTaskId?: number;
    }
}
