import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { MaintenanceWindowIdentityFilterSensitiveLog, PatchSourceFilterSensitiveLog, } from "./models_0";
import { SSMServiceException as __BaseException } from "./SSMServiceException";
export const MaintenanceWindowResourceType = {
    Instance: "INSTANCE",
    ResourceGroup: "RESOURCE_GROUP",
};
export const MaintenanceWindowTaskCutoffBehavior = {
    CancelTask: "CANCEL_TASK",
    ContinueTask: "CONTINUE_TASK",
};
export const OpsItemFilterKey = {
    ACCESS_REQUEST_APPROVER_ARN: "AccessRequestByApproverArn",
    ACCESS_REQUEST_APPROVER_ID: "AccessRequestByApproverId",
    ACCESS_REQUEST_IS_REPLICA: "AccessRequestByIsReplica",
    ACCESS_REQUEST_REQUESTER_ARN: "AccessRequestByRequesterArn",
    ACCESS_REQUEST_REQUESTER_ID: "AccessRequestByRequesterId",
    ACCESS_REQUEST_SOURCE_ACCOUNT_ID: "AccessRequestBySourceAccountId",
    ACCESS_REQUEST_SOURCE_OPS_ITEM_ID: "AccessRequestBySourceOpsItemId",
    ACCESS_REQUEST_SOURCE_REGION: "AccessRequestBySourceRegion",
    ACCESS_REQUEST_TARGET_RESOURCE_ID: "AccessRequestByTargetResourceId",
    ACCOUNT_ID: "AccountId",
    ACTUAL_END_TIME: "ActualEndTime",
    ACTUAL_START_TIME: "ActualStartTime",
    AUTOMATION_ID: "AutomationId",
    CATEGORY: "Category",
    CHANGE_REQUEST_APPROVER_ARN: "ChangeRequestByApproverArn",
    CHANGE_REQUEST_APPROVER_NAME: "ChangeRequestByApproverName",
    CHANGE_REQUEST_REQUESTER_ARN: "ChangeRequestByRequesterArn",
    CHANGE_REQUEST_REQUESTER_NAME: "ChangeRequestByRequesterName",
    CHANGE_REQUEST_TARGETS_RESOURCE_GROUP: "ChangeRequestByTargetsResourceGroup",
    CHANGE_REQUEST_TEMPLATE: "ChangeRequestByTemplate",
    CREATED_BY: "CreatedBy",
    CREATED_TIME: "CreatedTime",
    INSIGHT_TYPE: "InsightByType",
    LAST_MODIFIED_TIME: "LastModifiedTime",
    OPERATIONAL_DATA: "OperationalData",
    OPERATIONAL_DATA_KEY: "OperationalDataKey",
    OPERATIONAL_DATA_VALUE: "OperationalDataValue",
    OPSITEM_ID: "OpsItemId",
    OPSITEM_TYPE: "OpsItemType",
    PLANNED_END_TIME: "PlannedEndTime",
    PLANNED_START_TIME: "PlannedStartTime",
    PRIORITY: "Priority",
    RESOURCE_ID: "ResourceId",
    SEVERITY: "Severity",
    SOURCE: "Source",
    STATUS: "Status",
    TITLE: "Title",
};
export const OpsItemFilterOperator = {
    CONTAINS: "Contains",
    EQUAL: "Equal",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
};
export const OpsItemStatus = {
    APPROVED: "Approved",
    CANCELLED: "Cancelled",
    CANCELLING: "Cancelling",
    CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved",
    CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected",
    CLOSED: "Closed",
    COMPLETED_WITH_FAILURE: "CompletedWithFailure",
    COMPLETED_WITH_SUCCESS: "CompletedWithSuccess",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    OPEN: "Open",
    PENDING: "Pending",
    PENDING_APPROVAL: "PendingApproval",
    PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride",
    REJECTED: "Rejected",
    RESOLVED: "Resolved",
    REVOKED: "Revoked",
    RUNBOOK_IN_PROGRESS: "RunbookInProgress",
    SCHEDULED: "Scheduled",
    TIMED_OUT: "TimedOut",
};
export const ParametersFilterKey = {
    KEY_ID: "KeyId",
    NAME: "Name",
    TYPE: "Type",
};
export const ParameterTier = {
    ADVANCED: "Advanced",
    INTELLIGENT_TIERING: "Intelligent-Tiering",
    STANDARD: "Standard",
};
export const ParameterType = {
    SECURE_STRING: "SecureString",
    STRING: "String",
    STRING_LIST: "StringList",
};
export class InvalidFilterOption extends __BaseException {
    name = "InvalidFilterOption";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidFilterOption",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFilterOption.prototype);
    }
}
export const PatchSet = {
    Application: "APPLICATION",
    Os: "OS",
};
export const PatchProperty = {
    PatchClassification: "CLASSIFICATION",
    PatchMsrcSeverity: "MSRC_SEVERITY",
    PatchPriority: "PRIORITY",
    PatchProductFamily: "PRODUCT_FAMILY",
    PatchSeverity: "SEVERITY",
    Product: "PRODUCT",
};
export const SessionFilterKey = {
    ACCESS_TYPE: "AccessType",
    INVOKED_AFTER: "InvokedAfter",
    INVOKED_BEFORE: "InvokedBefore",
    OWNER: "Owner",
    SESSION_ID: "SessionId",
    STATUS: "Status",
    TARGET_ID: "Target",
};
export const SessionState = {
    ACTIVE: "Active",
    HISTORY: "History",
};
export const SessionStatus = {
    CONNECTED: "Connected",
    CONNECTING: "Connecting",
    DISCONNECTED: "Disconnected",
    FAILED: "Failed",
    TERMINATED: "Terminated",
    TERMINATING: "Terminating",
};
export class OpsItemRelatedItemAssociationNotFoundException extends __BaseException {
    name = "OpsItemRelatedItemAssociationNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OpsItemRelatedItemAssociationNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemRelatedItemAssociationNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class ThrottlingException extends __BaseException {
    name = "ThrottlingException";
    $fault = "client";
    Message;
    QuotaCode;
    ServiceCode;
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ThrottlingException.prototype);
        this.Message = opts.Message;
        this.QuotaCode = opts.QuotaCode;
        this.ServiceCode = opts.ServiceCode;
    }
}
export class ValidationException extends __BaseException {
    name = "ValidationException";
    $fault = "client";
    Message;
    ReasonCode;
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.Message = opts.Message;
        this.ReasonCode = opts.ReasonCode;
    }
}
export const CalendarState = {
    CLOSED: "CLOSED",
    OPEN: "OPEN",
};
export class InvalidDocumentType extends __BaseException {
    name = "InvalidDocumentType";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentType.prototype);
        this.Message = opts.Message;
    }
}
export class UnsupportedCalendarException extends __BaseException {
    name = "UnsupportedCalendarException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedCalendarException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedCalendarException.prototype);
        this.Message = opts.Message;
    }
}
export const CommandInvocationStatus = {
    CANCELLED: "Cancelled",
    CANCELLING: "Cancelling",
    DELAYED: "Delayed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PENDING: "Pending",
    SUCCESS: "Success",
    TIMED_OUT: "TimedOut",
};
export class InvalidPluginName extends __BaseException {
    name = "InvalidPluginName";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidPluginName",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPluginName.prototype);
    }
}
export class InvocationDoesNotExist extends __BaseException {
    name = "InvocationDoesNotExist";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvocationDoesNotExist",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvocationDoesNotExist.prototype);
    }
}
export const ConnectionStatus = {
    CONNECTED: "connected",
    NOT_CONNECTED: "notconnected",
};
export class UnsupportedFeatureRequiredException extends __BaseException {
    name = "UnsupportedFeatureRequiredException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedFeatureRequiredException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedFeatureRequiredException.prototype);
        this.Message = opts.Message;
    }
}
export const AttachmentHashType = {
    SHA256: "Sha256",
};
export const ImpactType = {
    MUTATING: "Mutating",
    NON_MUTATING: "NonMutating",
    UNDETERMINED: "Undetermined",
};
export var ExecutionPreview;
(function (ExecutionPreview) {
    ExecutionPreview.visit = (value, visitor) => {
        if (value.Automation !== undefined)
            return visitor.Automation(value.Automation);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ExecutionPreview || (ExecutionPreview = {}));
export const ExecutionPreviewStatus = {
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PENDING: "Pending",
    SUCCESS: "Success",
};
export const InventoryQueryOperatorType = {
    BEGIN_WITH: "BeginWith",
    EQUAL: "Equal",
    EXISTS: "Exists",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
    NOT_EQUAL: "NotEqual",
};
export class InvalidAggregatorException extends __BaseException {
    name = "InvalidAggregatorException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAggregatorException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAggregatorException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidInventoryGroupException extends __BaseException {
    name = "InvalidInventoryGroupException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidInventoryGroupException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInventoryGroupException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidResultAttributeException extends __BaseException {
    name = "InvalidResultAttributeException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidResultAttributeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidResultAttributeException.prototype);
        this.Message = opts.Message;
    }
}
export const InventoryAttributeDataType = {
    NUMBER: "number",
    STRING: "string",
};
export const NotificationEvent = {
    ALL: "All",
    CANCELLED: "Cancelled",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    SUCCESS: "Success",
    TIMED_OUT: "TimedOut",
};
export const NotificationType = {
    Command: "Command",
    Invocation: "Invocation",
};
export const OpsFilterOperatorType = {
    BEGIN_WITH: "BeginWith",
    EQUAL: "Equal",
    EXISTS: "Exists",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
    NOT_EQUAL: "NotEqual",
};
export class InvalidKeyId extends __BaseException {
    name = "InvalidKeyId";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidKeyId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidKeyId.prototype);
    }
}
export class ParameterVersionNotFound extends __BaseException {
    name = "ParameterVersionNotFound";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterVersionNotFound",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterVersionNotFound.prototype);
    }
}
export class ServiceSettingNotFound extends __BaseException {
    name = "ServiceSettingNotFound";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ServiceSettingNotFound",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceSettingNotFound.prototype);
        this.Message = opts.Message;
    }
}
export class ParameterVersionLabelLimitExceeded extends __BaseException {
    name = "ParameterVersionLabelLimitExceeded";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterVersionLabelLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterVersionLabelLimitExceeded.prototype);
    }
}
export const AssociationFilterKey = {
    AssociationId: "AssociationId",
    AssociationName: "AssociationName",
    InstanceId: "InstanceId",
    LastExecutedAfter: "LastExecutedAfter",
    LastExecutedBefore: "LastExecutedBefore",
    Name: "Name",
    ResourceGroupName: "ResourceGroupName",
    Status: "AssociationStatusName",
};
export const CommandFilterKey = {
    DOCUMENT_NAME: "DocumentName",
    EXECUTION_STAGE: "ExecutionStage",
    INVOKED_AFTER: "InvokedAfter",
    INVOKED_BEFORE: "InvokedBefore",
    STATUS: "Status",
};
export const CommandPluginStatus = {
    CANCELLED: "Cancelled",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PENDING: "Pending",
    SUCCESS: "Success",
    TIMED_OUT: "TimedOut",
};
export const CommandStatus = {
    CANCELLED: "Cancelled",
    CANCELLING: "Cancelling",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PENDING: "Pending",
    SUCCESS: "Success",
    TIMED_OUT: "TimedOut",
};
export const ComplianceQueryOperatorType = {
    BeginWith: "BEGIN_WITH",
    Equal: "EQUAL",
    GreaterThan: "GREATER_THAN",
    LessThan: "LESS_THAN",
    NotEqual: "NOT_EQUAL",
};
export const ComplianceSeverity = {
    Critical: "CRITICAL",
    High: "HIGH",
    Informational: "INFORMATIONAL",
    Low: "LOW",
    Medium: "MEDIUM",
    Unspecified: "UNSPECIFIED",
};
export const ComplianceStatus = {
    Compliant: "COMPLIANT",
    NonCompliant: "NON_COMPLIANT",
};
export const DocumentMetadataEnum = {
    DocumentReviews: "DocumentReviews",
};
export const DocumentReviewCommentType = {
    Comment: "Comment",
};
export const DocumentFilterKey = {
    DocumentType: "DocumentType",
    Name: "Name",
    Owner: "Owner",
    PlatformTypes: "PlatformTypes",
};
export const NodeFilterKey = {
    ACCOUNT_ID: "AccountId",
    AGENT_TYPE: "AgentType",
    AGENT_VERSION: "AgentVersion",
    COMPUTER_NAME: "ComputerName",
    INSTANCE_ID: "InstanceId",
    INSTANCE_STATUS: "InstanceStatus",
    IP_ADDRESS: "IpAddress",
    MANAGED_STATUS: "ManagedStatus",
    ORGANIZATIONAL_UNIT_ID: "OrganizationalUnitId",
    ORGANIZATIONAL_UNIT_PATH: "OrganizationalUnitPath",
    PLATFORM_NAME: "PlatformName",
    PLATFORM_TYPE: "PlatformType",
    PLATFORM_VERSION: "PlatformVersion",
    REGION: "Region",
    RESOURCE_TYPE: "ResourceType",
};
export const NodeFilterOperatorType = {
    BEGIN_WITH: "BeginWith",
    EQUAL: "Equal",
    NOT_EQUAL: "NotEqual",
};
export const ManagedStatus = {
    ALL: "All",
    MANAGED: "Managed",
    UNMANAGED: "Unmanaged",
};
export var NodeType;
(function (NodeType) {
    NodeType.visit = (value, visitor) => {
        if (value.Instance !== undefined)
            return visitor.Instance(value.Instance);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(NodeType || (NodeType = {}));
export class UnsupportedOperationException extends __BaseException {
    name = "UnsupportedOperationException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedOperationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
        this.Message = opts.Message;
    }
}
export const NodeAggregatorType = {
    COUNT: "Count",
};
export const NodeAttributeName = {
    AGENT_VERSION: "AgentVersion",
    PLATFORM_NAME: "PlatformName",
    PLATFORM_TYPE: "PlatformType",
    PLATFORM_VERSION: "PlatformVersion",
    REGION: "Region",
    RESOURCE_TYPE: "ResourceType",
};
export const NodeTypeName = {
    INSTANCE: "Instance",
};
export const OpsItemEventFilterKey = {
    OPSITEM_ID: "OpsItemId",
};
export const OpsItemEventFilterOperator = {
    EQUAL: "Equal",
};
export const OpsItemRelatedItemsFilterKey = {
    ASSOCIATION_ID: "AssociationId",
    RESOURCE_TYPE: "ResourceType",
    RESOURCE_URI: "ResourceUri",
};
export const OpsItemRelatedItemsFilterOperator = {
    EQUAL: "Equal",
};
export const LastResourceDataSyncStatus = {
    FAILED: "Failed",
    INPROGRESS: "InProgress",
    SUCCESSFUL: "Successful",
};
export class DocumentPermissionLimit extends __BaseException {
    name = "DocumentPermissionLimit";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DocumentPermissionLimit",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DocumentPermissionLimit.prototype);
        this.Message = opts.Message;
    }
}
export class ComplianceTypeCountLimitExceededException extends __BaseException {
    name = "ComplianceTypeCountLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ComplianceTypeCountLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ComplianceTypeCountLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidItemContentException extends __BaseException {
    name = "InvalidItemContentException";
    $fault = "client";
    TypeName;
    Message;
    constructor(opts) {
        super({
            name: "InvalidItemContentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidItemContentException.prototype);
        this.TypeName = opts.TypeName;
        this.Message = opts.Message;
    }
}
export class ItemSizeLimitExceededException extends __BaseException {
    name = "ItemSizeLimitExceededException";
    $fault = "client";
    TypeName;
    Message;
    constructor(opts) {
        super({
            name: "ItemSizeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ItemSizeLimitExceededException.prototype);
        this.TypeName = opts.TypeName;
        this.Message = opts.Message;
    }
}
export const ComplianceUploadType = {
    Complete: "COMPLETE",
    Partial: "PARTIAL",
};
export class TotalSizeLimitExceededException extends __BaseException {
    name = "TotalSizeLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TotalSizeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TotalSizeLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class CustomSchemaCountLimitExceededException extends __BaseException {
    name = "CustomSchemaCountLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "CustomSchemaCountLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CustomSchemaCountLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidInventoryItemContextException extends __BaseException {
    name = "InvalidInventoryItemContextException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidInventoryItemContextException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInventoryItemContextException.prototype);
        this.Message = opts.Message;
    }
}
export class ItemContentMismatchException extends __BaseException {
    name = "ItemContentMismatchException";
    $fault = "client";
    TypeName;
    Message;
    constructor(opts) {
        super({
            name: "ItemContentMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ItemContentMismatchException.prototype);
        this.TypeName = opts.TypeName;
        this.Message = opts.Message;
    }
}
export class SubTypeCountLimitExceededException extends __BaseException {
    name = "SubTypeCountLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "SubTypeCountLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, SubTypeCountLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class UnsupportedInventoryItemContextException extends __BaseException {
    name = "UnsupportedInventoryItemContextException";
    $fault = "client";
    TypeName;
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedInventoryItemContextException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedInventoryItemContextException.prototype);
        this.TypeName = opts.TypeName;
        this.Message = opts.Message;
    }
}
export class UnsupportedInventorySchemaVersionException extends __BaseException {
    name = "UnsupportedInventorySchemaVersionException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedInventorySchemaVersionException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedInventorySchemaVersionException.prototype);
        this.Message = opts.Message;
    }
}
export class HierarchyLevelLimitExceededException extends __BaseException {
    name = "HierarchyLevelLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "HierarchyLevelLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, HierarchyLevelLimitExceededException.prototype);
    }
}
export class HierarchyTypeMismatchException extends __BaseException {
    name = "HierarchyTypeMismatchException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "HierarchyTypeMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, HierarchyTypeMismatchException.prototype);
    }
}
export class IncompatiblePolicyException extends __BaseException {
    name = "IncompatiblePolicyException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "IncompatiblePolicyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, IncompatiblePolicyException.prototype);
    }
}
export class InvalidAllowedPatternException extends __BaseException {
    name = "InvalidAllowedPatternException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidAllowedPatternException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAllowedPatternException.prototype);
    }
}
export class InvalidPolicyAttributeException extends __BaseException {
    name = "InvalidPolicyAttributeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidPolicyAttributeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPolicyAttributeException.prototype);
    }
}
export class InvalidPolicyTypeException extends __BaseException {
    name = "InvalidPolicyTypeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidPolicyTypeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPolicyTypeException.prototype);
    }
}
export class ParameterAlreadyExists extends __BaseException {
    name = "ParameterAlreadyExists";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterAlreadyExists",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterAlreadyExists.prototype);
    }
}
export class ParameterLimitExceeded extends __BaseException {
    name = "ParameterLimitExceeded";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterLimitExceeded.prototype);
    }
}
export class ParameterMaxVersionLimitExceeded extends __BaseException {
    name = "ParameterMaxVersionLimitExceeded";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterMaxVersionLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterMaxVersionLimitExceeded.prototype);
    }
}
export class ParameterPatternMismatchException extends __BaseException {
    name = "ParameterPatternMismatchException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterPatternMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterPatternMismatchException.prototype);
    }
}
export class PoliciesLimitExceededException extends __BaseException {
    name = "PoliciesLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PoliciesLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PoliciesLimitExceededException.prototype);
    }
}
export class UnsupportedParameterType extends __BaseException {
    name = "UnsupportedParameterType";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnsupportedParameterType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedParameterType.prototype);
    }
}
export class ResourcePolicyLimitExceededException extends __BaseException {
    name = "ResourcePolicyLimitExceededException";
    $fault = "client";
    Limit;
    LimitType;
    Message;
    constructor(opts) {
        super({
            name: "ResourcePolicyLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourcePolicyLimitExceededException.prototype);
        this.Limit = opts.Limit;
        this.LimitType = opts.LimitType;
        this.Message = opts.Message;
    }
}
export const DescribeMaintenanceWindowsResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.WindowIdentities && {
        WindowIdentities: obj.WindowIdentities.map((item) => MaintenanceWindowIdentityFilterSensitiveLog(item)),
    }),
});
export const MaintenanceWindowTargetFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const DescribeMaintenanceWindowTargetsResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Targets && { Targets: obj.Targets.map((item) => MaintenanceWindowTargetFilterSensitiveLog(item)) }),
});
export const MaintenanceWindowTaskParameterValueExpressionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Values && { Values: SENSITIVE_STRING }),
});
export const MaintenanceWindowTaskFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const DescribeMaintenanceWindowTasksResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tasks && { Tasks: obj.Tasks.map((item) => MaintenanceWindowTaskFilterSensitiveLog(item)) }),
});
export const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }),
    ...(obj.SessionToken && { SessionToken: SENSITIVE_STRING }),
});
export const GetAccessTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
export const BaselineOverrideFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});
export const GetDeployablePatchSnapshotForInstanceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetMaintenanceWindowResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const GetMaintenanceWindowExecutionTaskResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
});
export const GetMaintenanceWindowExecutionTaskInvocationResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
});
export const MaintenanceWindowLambdaParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
});
export const MaintenanceWindowRunCommandParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});
export const MaintenanceWindowStepFunctionsParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Input && { Input: SENSITIVE_STRING }),
});
export const MaintenanceWindowTaskInvocationParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RunCommand && { RunCommand: MaintenanceWindowRunCommandParametersFilterSensitiveLog(obj.RunCommand) }),
    ...(obj.StepFunctions && {
        StepFunctions: MaintenanceWindowStepFunctionsParametersFilterSensitiveLog(obj.StepFunctions),
    }),
    ...(obj.Lambda && { Lambda: MaintenanceWindowLambdaParametersFilterSensitiveLog(obj.Lambda) }),
});
export const GetMaintenanceWindowTaskResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParametersFilterSensitiveLog(obj.TaskInvocationParameters),
    }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const ParameterFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: SENSITIVE_STRING }),
});
export const GetParameterResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameter && { Parameter: ParameterFilterSensitiveLog(obj.Parameter) }),
});
export const ParameterHistoryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: SENSITIVE_STRING }),
});
export const GetParameterHistoryResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => ParameterHistoryFilterSensitiveLog(item)) }),
});
export const GetParametersResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => ParameterFilterSensitiveLog(item)) }),
});
export const GetParametersByPathResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => ParameterFilterSensitiveLog(item)) }),
});
export const GetPatchBaselineResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});
export const AssociationVersionInfoFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});
export const ListAssociationVersionsResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AssociationVersions && {
        AssociationVersions: obj.AssociationVersions.map((item) => AssociationVersionInfoFilterSensitiveLog(item)),
    }),
});
export const CommandFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});
export const ListCommandsResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Commands && { Commands: obj.Commands.map((item) => CommandFilterSensitiveLog(item)) }),
});
export const InstanceInfoFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
});
export const NodeTypeFilterSensitiveLog = (obj) => {
    if (obj.Instance !== undefined)
        return { Instance: InstanceInfoFilterSensitiveLog(obj.Instance) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const NodeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NodeType && { NodeType: NodeTypeFilterSensitiveLog(obj.NodeType) }),
});
export const ListNodesResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Nodes && { Nodes: obj.Nodes.map((item) => NodeFilterSensitiveLog(item)) }),
});
export const PutParameterRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: SENSITIVE_STRING }),
});
