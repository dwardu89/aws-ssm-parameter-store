import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { SSMServiceException as __BaseException } from "./SSMServiceException";
export class AccessDeniedException extends __BaseException {
    name = "AccessDeniedException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.Message = opts.Message;
    }
}
export const AccessRequestStatus = {
    APPROVED: "Approved",
    EXPIRED: "Expired",
    PENDING: "Pending",
    REJECTED: "Rejected",
    REVOKED: "Revoked",
};
export const AccessType = {
    JUSTINTIME: "JustInTime",
    STANDARD: "Standard",
};
export const ResourceTypeForTagging = {
    ASSOCIATION: "Association",
    AUTOMATION: "Automation",
    DOCUMENT: "Document",
    MAINTENANCE_WINDOW: "MaintenanceWindow",
    MANAGED_INSTANCE: "ManagedInstance",
    OPSMETADATA: "OpsMetadata",
    OPS_ITEM: "OpsItem",
    PARAMETER: "Parameter",
    PATCH_BASELINE: "PatchBaseline",
};
export class InternalServerError extends __BaseException {
    name = "InternalServerError";
    $fault = "server";
    Message;
    constructor(opts) {
        super({
            name: "InternalServerError",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidResourceId extends __BaseException {
    name = "InvalidResourceId";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidResourceId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidResourceId.prototype);
    }
}
export class InvalidResourceType extends __BaseException {
    name = "InvalidResourceType";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidResourceType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidResourceType.prototype);
    }
}
export class TooManyTagsError extends __BaseException {
    name = "TooManyTagsError";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TooManyTagsError",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TooManyTagsError.prototype);
    }
}
export class TooManyUpdates extends __BaseException {
    name = "TooManyUpdates";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TooManyUpdates",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TooManyUpdates.prototype);
        this.Message = opts.Message;
    }
}
export const ExternalAlarmState = {
    ALARM: "ALARM",
    UNKNOWN: "UNKNOWN",
};
export class AlreadyExistsException extends __BaseException {
    name = "AlreadyExistsException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AlreadyExistsException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemConflictException extends __BaseException {
    name = "OpsItemConflictException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OpsItemConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemConflictException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemInvalidParameterException extends __BaseException {
    name = "OpsItemInvalidParameterException";
    $fault = "client";
    ParameterNames;
    Message;
    constructor(opts) {
        super({
            name: "OpsItemInvalidParameterException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemInvalidParameterException.prototype);
        this.ParameterNames = opts.ParameterNames;
        this.Message = opts.Message;
    }
}
export class OpsItemLimitExceededException extends __BaseException {
    name = "OpsItemLimitExceededException";
    $fault = "client";
    ResourceTypes;
    Limit;
    LimitType;
    Message;
    constructor(opts) {
        super({
            name: "OpsItemLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemLimitExceededException.prototype);
        this.ResourceTypes = opts.ResourceTypes;
        this.Limit = opts.Limit;
        this.LimitType = opts.LimitType;
        this.Message = opts.Message;
    }
}
export class OpsItemNotFoundException extends __BaseException {
    name = "OpsItemNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OpsItemNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemRelatedItemAlreadyExistsException extends __BaseException {
    name = "OpsItemRelatedItemAlreadyExistsException";
    $fault = "client";
    Message;
    ResourceUri;
    OpsItemId;
    constructor(opts) {
        super({
            name: "OpsItemRelatedItemAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemRelatedItemAlreadyExistsException.prototype);
        this.Message = opts.Message;
        this.ResourceUri = opts.ResourceUri;
        this.OpsItemId = opts.OpsItemId;
    }
}
export class DuplicateInstanceId extends __BaseException {
    name = "DuplicateInstanceId";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DuplicateInstanceId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateInstanceId.prototype);
    }
}
export class InvalidCommandId extends __BaseException {
    name = "InvalidCommandId";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidCommandId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidCommandId.prototype);
    }
}
export class InvalidInstanceId extends __BaseException {
    name = "InvalidInstanceId";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidInstanceId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInstanceId.prototype);
        this.Message = opts.Message;
    }
}
export class DoesNotExistException extends __BaseException {
    name = "DoesNotExistException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DoesNotExistException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DoesNotExistException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidParameters extends __BaseException {
    name = "InvalidParameters";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidParameters",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidParameters.prototype);
        this.Message = opts.Message;
    }
}
export class AssociationAlreadyExists extends __BaseException {
    name = "AssociationAlreadyExists";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AssociationAlreadyExists",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationAlreadyExists.prototype);
    }
}
export class AssociationLimitExceeded extends __BaseException {
    name = "AssociationLimitExceeded";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AssociationLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationLimitExceeded.prototype);
    }
}
export const AssociationComplianceSeverity = {
    Critical: "CRITICAL",
    High: "HIGH",
    Low: "LOW",
    Medium: "MEDIUM",
    Unspecified: "UNSPECIFIED",
};
export const AssociationSyncCompliance = {
    Auto: "AUTO",
    Manual: "MANUAL",
};
export const AssociationStatusName = {
    Failed: "Failed",
    Pending: "Pending",
    Success: "Success",
};
export class InvalidDocument extends __BaseException {
    name = "InvalidDocument";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocument",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocument.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidDocumentVersion extends __BaseException {
    name = "InvalidDocumentVersion";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentVersion",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentVersion.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidOutputLocation extends __BaseException {
    name = "InvalidOutputLocation";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidOutputLocation",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidOutputLocation.prototype);
    }
}
export class InvalidSchedule extends __BaseException {
    name = "InvalidSchedule";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidSchedule",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidSchedule.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidTag extends __BaseException {
    name = "InvalidTag";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidTag",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidTag.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidTarget extends __BaseException {
    name = "InvalidTarget";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidTarget",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidTarget.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidTargetMaps extends __BaseException {
    name = "InvalidTargetMaps";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidTargetMaps",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidTargetMaps.prototype);
        this.Message = opts.Message;
    }
}
export class UnsupportedPlatformType extends __BaseException {
    name = "UnsupportedPlatformType";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedPlatformType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedPlatformType.prototype);
        this.Message = opts.Message;
    }
}
export const Fault = {
    Client: "Client",
    Server: "Server",
    Unknown: "Unknown",
};
export const AttachmentsSourceKey = {
    AttachmentReference: "AttachmentReference",
    S3FileUrl: "S3FileUrl",
    SourceUrl: "SourceUrl",
};
export const DocumentFormat = {
    JSON: "JSON",
    TEXT: "TEXT",
    YAML: "YAML",
};
export const DocumentType = {
    ApplicationConfiguration: "ApplicationConfiguration",
    ApplicationConfigurationSchema: "ApplicationConfigurationSchema",
    AutoApprovalPolicy: "AutoApprovalPolicy",
    Automation: "Automation",
    ChangeCalendar: "ChangeCalendar",
    ChangeTemplate: "Automation.ChangeTemplate",
    CloudFormation: "CloudFormation",
    Command: "Command",
    ConformancePackTemplate: "ConformancePackTemplate",
    DeploymentStrategy: "DeploymentStrategy",
    ManualApprovalPolicy: "ManualApprovalPolicy",
    Package: "Package",
    Policy: "Policy",
    ProblemAnalysis: "ProblemAnalysis",
    ProblemAnalysisTemplate: "ProblemAnalysisTemplate",
    QuickSetup: "QuickSetup",
    Session: "Session",
};
export const DocumentHashType = {
    SHA1: "Sha1",
    SHA256: "Sha256",
};
export const DocumentParameterType = {
    String: "String",
    StringList: "StringList",
};
export const PlatformType = {
    LINUX: "Linux",
    MACOS: "MacOS",
    WINDOWS: "Windows",
};
export const ReviewStatus = {
    APPROVED: "APPROVED",
    NOT_REVIEWED: "NOT_REVIEWED",
    PENDING: "PENDING",
    REJECTED: "REJECTED",
};
export const DocumentStatus = {
    Active: "Active",
    Creating: "Creating",
    Deleting: "Deleting",
    Failed: "Failed",
    Updating: "Updating",
};
export class DocumentAlreadyExists extends __BaseException {
    name = "DocumentAlreadyExists";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DocumentAlreadyExists",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DocumentAlreadyExists.prototype);
        this.Message = opts.Message;
    }
}
export class DocumentLimitExceeded extends __BaseException {
    name = "DocumentLimitExceeded";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DocumentLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DocumentLimitExceeded.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidDocumentContent extends __BaseException {
    name = "InvalidDocumentContent";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentContent",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentContent.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidDocumentSchemaVersion extends __BaseException {
    name = "InvalidDocumentSchemaVersion";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentSchemaVersion",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentSchemaVersion.prototype);
        this.Message = opts.Message;
    }
}
export class MaxDocumentSizeExceeded extends __BaseException {
    name = "MaxDocumentSizeExceeded";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "MaxDocumentSizeExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MaxDocumentSizeExceeded.prototype);
        this.Message = opts.Message;
    }
}
export class IdempotentParameterMismatch extends __BaseException {
    name = "IdempotentParameterMismatch";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "IdempotentParameterMismatch",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, IdempotentParameterMismatch.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceLimitExceededException extends __BaseException {
    name = "ResourceLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export const OpsItemDataType = {
    SEARCHABLE_STRING: "SearchableString",
    STRING: "String",
};
export class OpsItemAccessDeniedException extends __BaseException {
    name = "OpsItemAccessDeniedException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OpsItemAccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemAccessDeniedException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemAlreadyExistsException extends __BaseException {
    name = "OpsItemAlreadyExistsException";
    $fault = "client";
    Message;
    OpsItemId;
    constructor(opts) {
        super({
            name: "OpsItemAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemAlreadyExistsException.prototype);
        this.Message = opts.Message;
        this.OpsItemId = opts.OpsItemId;
    }
}
export class OpsMetadataAlreadyExistsException extends __BaseException {
    name = "OpsMetadataAlreadyExistsException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataAlreadyExistsException.prototype);
    }
}
export class OpsMetadataInvalidArgumentException extends __BaseException {
    name = "OpsMetadataInvalidArgumentException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataInvalidArgumentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataInvalidArgumentException.prototype);
    }
}
export class OpsMetadataLimitExceededException extends __BaseException {
    name = "OpsMetadataLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataLimitExceededException.prototype);
    }
}
export class OpsMetadataTooManyUpdatesException extends __BaseException {
    name = "OpsMetadataTooManyUpdatesException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataTooManyUpdatesException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataTooManyUpdatesException.prototype);
    }
}
export const PatchComplianceLevel = {
    Critical: "CRITICAL",
    High: "HIGH",
    Informational: "INFORMATIONAL",
    Low: "LOW",
    Medium: "MEDIUM",
    Unspecified: "UNSPECIFIED",
};
export const PatchFilterKey = {
    AdvisoryId: "ADVISORY_ID",
    Arch: "ARCH",
    BugzillaId: "BUGZILLA_ID",
    CVEId: "CVE_ID",
    Classification: "CLASSIFICATION",
    Epoch: "EPOCH",
    MsrcSeverity: "MSRC_SEVERITY",
    Name: "NAME",
    PatchId: "PATCH_ID",
    PatchSet: "PATCH_SET",
    Priority: "PRIORITY",
    Product: "PRODUCT",
    ProductFamily: "PRODUCT_FAMILY",
    Release: "RELEASE",
    Repository: "REPOSITORY",
    Section: "SECTION",
    Security: "SECURITY",
    Severity: "SEVERITY",
    Version: "VERSION",
};
export const PatchComplianceStatus = {
    Compliant: "COMPLIANT",
    NonCompliant: "NON_COMPLIANT",
};
export const OperatingSystem = {
    AlmaLinux: "ALMA_LINUX",
    AmazonLinux: "AMAZON_LINUX",
    AmazonLinux2: "AMAZON_LINUX_2",
    AmazonLinux2022: "AMAZON_LINUX_2022",
    AmazonLinux2023: "AMAZON_LINUX_2023",
    CentOS: "CENTOS",
    Debian: "DEBIAN",
    MacOS: "MACOS",
    OracleLinux: "ORACLE_LINUX",
    Raspbian: "RASPBIAN",
    RedhatEnterpriseLinux: "REDHAT_ENTERPRISE_LINUX",
    Rocky_Linux: "ROCKY_LINUX",
    Suse: "SUSE",
    Ubuntu: "UBUNTU",
    Windows: "WINDOWS",
};
export const PatchAction = {
    AllowAsDependency: "ALLOW_AS_DEPENDENCY",
    Block: "BLOCK",
};
export const ResourceDataSyncS3Format = {
    JSON_SERDE: "JsonSerDe",
};
export class ResourceDataSyncAlreadyExistsException extends __BaseException {
    name = "ResourceDataSyncAlreadyExistsException";
    $fault = "client";
    SyncName;
    constructor(opts) {
        super({
            name: "ResourceDataSyncAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncAlreadyExistsException.prototype);
        this.SyncName = opts.SyncName;
    }
}
export class ResourceDataSyncCountExceededException extends __BaseException {
    name = "ResourceDataSyncCountExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceDataSyncCountExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncCountExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceDataSyncInvalidConfigurationException extends __BaseException {
    name = "ResourceDataSyncInvalidConfigurationException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceDataSyncInvalidConfigurationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncInvalidConfigurationException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidActivation extends __BaseException {
    name = "InvalidActivation";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidActivation",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidActivation.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidActivationId extends __BaseException {
    name = "InvalidActivationId";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidActivationId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidActivationId.prototype);
        this.Message = opts.Message;
    }
}
export class AssociationDoesNotExist extends __BaseException {
    name = "AssociationDoesNotExist";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AssociationDoesNotExist",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationDoesNotExist.prototype);
        this.Message = opts.Message;
    }
}
export class AssociatedInstances extends __BaseException {
    name = "AssociatedInstances";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AssociatedInstances",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociatedInstances.prototype);
    }
}
export class InvalidDocumentOperation extends __BaseException {
    name = "InvalidDocumentOperation";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentOperation",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentOperation.prototype);
        this.Message = opts.Message;
    }
}
export const InventorySchemaDeleteOption = {
    DELETE_SCHEMA: "DeleteSchema",
    DISABLE_SCHEMA: "DisableSchema",
};
export class InvalidDeleteInventoryParametersException extends __BaseException {
    name = "InvalidDeleteInventoryParametersException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDeleteInventoryParametersException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDeleteInventoryParametersException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidInventoryRequestException extends __BaseException {
    name = "InvalidInventoryRequestException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidInventoryRequestException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInventoryRequestException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidOptionException extends __BaseException {
    name = "InvalidOptionException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidOptionException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidOptionException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidTypeNameException extends __BaseException {
    name = "InvalidTypeNameException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidTypeNameException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidTypeNameException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsMetadataNotFoundException extends __BaseException {
    name = "OpsMetadataNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataNotFoundException.prototype);
    }
}
export class ParameterNotFound extends __BaseException {
    name = "ParameterNotFound";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterNotFound",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterNotFound.prototype);
    }
}
export class ResourceInUseException extends __BaseException {
    name = "ResourceInUseException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceDataSyncNotFoundException extends __BaseException {
    name = "ResourceDataSyncNotFoundException";
    $fault = "client";
    SyncName;
    SyncType;
    Message;
    constructor(opts) {
        super({
            name: "ResourceDataSyncNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncNotFoundException.prototype);
        this.SyncName = opts.SyncName;
        this.SyncType = opts.SyncType;
        this.Message = opts.Message;
    }
}
export class MalformedResourcePolicyDocumentException extends __BaseException {
    name = "MalformedResourcePolicyDocumentException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "MalformedResourcePolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MalformedResourcePolicyDocumentException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceNotFoundException extends __BaseException {
    name = "ResourceNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourcePolicyConflictException extends __BaseException {
    name = "ResourcePolicyConflictException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourcePolicyConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourcePolicyConflictException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourcePolicyInvalidParameterException extends __BaseException {
    name = "ResourcePolicyInvalidParameterException";
    $fault = "client";
    ParameterNames;
    Message;
    constructor(opts) {
        super({
            name: "ResourcePolicyInvalidParameterException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourcePolicyInvalidParameterException.prototype);
        this.ParameterNames = opts.ParameterNames;
        this.Message = opts.Message;
    }
}
export class ResourcePolicyNotFoundException extends __BaseException {
    name = "ResourcePolicyNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourcePolicyNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourcePolicyNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class TargetInUseException extends __BaseException {
    name = "TargetInUseException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TargetInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TargetInUseException.prototype);
        this.Message = opts.Message;
    }
}
export const DescribeActivationsFilterKeys = {
    ACTIVATION_IDS: "ActivationIds",
    DEFAULT_INSTANCE_NAME: "DefaultInstanceName",
    IAM_ROLE: "IamRole",
};
export class InvalidFilter extends __BaseException {
    name = "InvalidFilter";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidFilter",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFilter.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidNextToken extends __BaseException {
    name = "InvalidNextToken";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidNextToken",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidNextToken.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAssociationVersion extends __BaseException {
    name = "InvalidAssociationVersion";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAssociationVersion",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAssociationVersion.prototype);
        this.Message = opts.Message;
    }
}
export const AssociationExecutionFilterKey = {
    CreatedTime: "CreatedTime",
    ExecutionId: "ExecutionId",
    Status: "Status",
};
export const AssociationFilterOperatorType = {
    Equal: "EQUAL",
    GreaterThan: "GREATER_THAN",
    LessThan: "LESS_THAN",
};
export class AssociationExecutionDoesNotExist extends __BaseException {
    name = "AssociationExecutionDoesNotExist";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AssociationExecutionDoesNotExist",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationExecutionDoesNotExist.prototype);
        this.Message = opts.Message;
    }
}
export const AssociationExecutionTargetsFilterKey = {
    ResourceId: "ResourceId",
    ResourceType: "ResourceType",
    Status: "Status",
};
export const AutomationExecutionFilterKey = {
    AUTOMATION_SUBTYPE: "AutomationSubtype",
    AUTOMATION_TYPE: "AutomationType",
    CURRENT_ACTION: "CurrentAction",
    DOCUMENT_NAME_PREFIX: "DocumentNamePrefix",
    EXECUTION_ID: "ExecutionId",
    EXECUTION_STATUS: "ExecutionStatus",
    OPS_ITEM_ID: "OpsItemId",
    PARENT_EXECUTION_ID: "ParentExecutionId",
    START_TIME_AFTER: "StartTimeAfter",
    START_TIME_BEFORE: "StartTimeBefore",
    TAG_KEY: "TagKey",
    TARGET_RESOURCE_GROUP: "TargetResourceGroup",
};
export const AutomationExecutionStatus = {
    APPROVED: "Approved",
    CANCELLED: "Cancelled",
    CANCELLING: "Cancelling",
    CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved",
    CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected",
    COMPLETED_WITH_FAILURE: "CompletedWithFailure",
    COMPLETED_WITH_SUCCESS: "CompletedWithSuccess",
    EXITED: "Exited",
    FAILED: "Failed",
    INPROGRESS: "InProgress",
    PENDING: "Pending",
    PENDING_APPROVAL: "PendingApproval",
    PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride",
    REJECTED: "Rejected",
    RUNBOOK_INPROGRESS: "RunbookInProgress",
    SCHEDULED: "Scheduled",
    SUCCESS: "Success",
    TIMEDOUT: "TimedOut",
    WAITING: "Waiting",
};
export const AutomationSubtype = {
    AccessRequest: "AccessRequest",
    ChangeRequest: "ChangeRequest",
};
export const AutomationType = {
    CrossAccount: "CrossAccount",
    Local: "Local",
};
export const ExecutionMode = {
    Auto: "Auto",
    Interactive: "Interactive",
};
export class InvalidFilterKey extends __BaseException {
    name = "InvalidFilterKey";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidFilterKey",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFilterKey.prototype);
    }
}
export class InvalidFilterValue extends __BaseException {
    name = "InvalidFilterValue";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidFilterValue",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFilterValue.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationExecutionNotFoundException extends __BaseException {
    name = "AutomationExecutionNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationExecutionNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationExecutionNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export const StepExecutionFilterKey = {
    ACTION: "Action",
    PARENT_STEP_EXECUTION_ID: "ParentStepExecutionId",
    PARENT_STEP_ITERATION: "ParentStepIteration",
    PARENT_STEP_ITERATOR_VALUE: "ParentStepIteratorValue",
    START_TIME_AFTER: "StartTimeAfter",
    START_TIME_BEFORE: "StartTimeBefore",
    STEP_EXECUTION_ID: "StepExecutionId",
    STEP_EXECUTION_STATUS: "StepExecutionStatus",
    STEP_NAME: "StepName",
};
export const DocumentPermissionType = {
    SHARE: "Share",
};
export class InvalidPermissionType extends __BaseException {
    name = "InvalidPermissionType";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidPermissionType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPermissionType.prototype);
        this.Message = opts.Message;
    }
}
export const PatchDeploymentStatus = {
    Approved: "APPROVED",
    ExplicitApproved: "EXPLICIT_APPROVED",
    ExplicitRejected: "EXPLICIT_REJECTED",
    PendingApproval: "PENDING_APPROVAL",
};
export class UnsupportedOperatingSystem extends __BaseException {
    name = "UnsupportedOperatingSystem";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedOperatingSystem",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedOperatingSystem.prototype);
        this.Message = opts.Message;
    }
}
export const InstanceInformationFilterKey = {
    ACTIVATION_IDS: "ActivationIds",
    AGENT_VERSION: "AgentVersion",
    ASSOCIATION_STATUS: "AssociationStatus",
    IAM_ROLE: "IamRole",
    INSTANCE_IDS: "InstanceIds",
    PING_STATUS: "PingStatus",
    PLATFORM_TYPES: "PlatformTypes",
    RESOURCE_TYPE: "ResourceType",
};
export const PingStatus = {
    CONNECTION_LOST: "ConnectionLost",
    INACTIVE: "Inactive",
    ONLINE: "Online",
};
export const ResourceType = {
    EC2_INSTANCE: "EC2Instance",
    MANAGED_INSTANCE: "ManagedInstance",
};
export const SourceType = {
    AWS_EC2_INSTANCE: "AWS::EC2::Instance",
    AWS_IOT_THING: "AWS::IoT::Thing",
    AWS_SSM_MANAGEDINSTANCE: "AWS::SSM::ManagedInstance",
};
export class InvalidInstanceInformationFilterValue extends __BaseException {
    name = "InvalidInstanceInformationFilterValue";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidInstanceInformationFilterValue",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInstanceInformationFilterValue.prototype);
    }
}
export const PatchComplianceDataState = {
    AvailableSecurityUpdate: "AVAILABLE_SECURITY_UPDATE",
    Failed: "FAILED",
    Installed: "INSTALLED",
    InstalledOther: "INSTALLED_OTHER",
    InstalledPendingReboot: "INSTALLED_PENDING_REBOOT",
    InstalledRejected: "INSTALLED_REJECTED",
    Missing: "MISSING",
    NotApplicable: "NOT_APPLICABLE",
};
export const PatchOperationType = {
    INSTALL: "Install",
    SCAN: "Scan",
};
export const RebootOption = {
    NO_REBOOT: "NoReboot",
    REBOOT_IF_NEEDED: "RebootIfNeeded",
};
export const InstancePatchStateOperatorType = {
    EQUAL: "Equal",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
    NOT_EQUAL: "NotEqual",
};
export const InstancePropertyFilterOperator = {
    BEGIN_WITH: "BeginWith",
    EQUAL: "Equal",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
    NOT_EQUAL: "NotEqual",
};
export const InstancePropertyFilterKey = {
    ACTIVATION_IDS: "ActivationIds",
    AGENT_VERSION: "AgentVersion",
    ASSOCIATION_STATUS: "AssociationStatus",
    DOCUMENT_NAME: "DocumentName",
    IAM_ROLE: "IamRole",
    INSTANCE_IDS: "InstanceIds",
    PING_STATUS: "PingStatus",
    PLATFORM_TYPES: "PlatformTypes",
    RESOURCE_TYPE: "ResourceType",
};
export class InvalidInstancePropertyFilterValue extends __BaseException {
    name = "InvalidInstancePropertyFilterValue";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidInstancePropertyFilterValue",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInstancePropertyFilterValue.prototype);
    }
}
export const InventoryDeletionStatus = {
    COMPLETE: "Complete",
    IN_PROGRESS: "InProgress",
};
export class InvalidDeletionIdException extends __BaseException {
    name = "InvalidDeletionIdException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDeletionIdException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDeletionIdException.prototype);
        this.Message = opts.Message;
    }
}
export const MaintenanceWindowExecutionStatus = {
    Cancelled: "CANCELLED",
    Cancelling: "CANCELLING",
    Failed: "FAILED",
    InProgress: "IN_PROGRESS",
    Pending: "PENDING",
    SkippedOverlapping: "SKIPPED_OVERLAPPING",
    Success: "SUCCESS",
    TimedOut: "TIMED_OUT",
};
export const MaintenanceWindowTaskType = {
    Automation: "AUTOMATION",
    Lambda: "LAMBDA",
    RunCommand: "RUN_COMMAND",
    StepFunctions: "STEP_FUNCTIONS",
};
export const CreateAssociationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});
export const AssociationDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});
export const CreateAssociationResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AssociationDescription && {
        AssociationDescription: AssociationDescriptionFilterSensitiveLog(obj.AssociationDescription),
    }),
});
export const CreateAssociationBatchRequestEntryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});
export const CreateAssociationBatchRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Entries && {
        Entries: obj.Entries.map((item) => CreateAssociationBatchRequestEntryFilterSensitiveLog(item)),
    }),
});
export const FailedCreateAssociationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Entry && { Entry: CreateAssociationBatchRequestEntryFilterSensitiveLog(obj.Entry) }),
});
export const CreateAssociationBatchResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Successful && { Successful: obj.Successful.map((item) => AssociationDescriptionFilterSensitiveLog(item)) }),
    ...(obj.Failed && { Failed: obj.Failed.map((item) => FailedCreateAssociationFilterSensitiveLog(item)) }),
});
export const CreateMaintenanceWindowRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const PatchSourceFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Configuration && { Configuration: SENSITIVE_STRING }),
});
export const CreatePatchBaselineRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});
export const DescribeAssociationResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AssociationDescription && {
        AssociationDescription: AssociationDescriptionFilterSensitiveLog(obj.AssociationDescription),
    }),
});
export const InstanceInformationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.IPAddress && { IPAddress: SENSITIVE_STRING }),
});
export const DescribeInstanceInformationResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InstanceInformationList && {
        InstanceInformationList: obj.InstanceInformationList.map((item) => InstanceInformationFilterSensitiveLog(item)),
    }),
});
export const InstancePatchStateFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
});
export const DescribeInstancePatchStatesResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InstancePatchStates && {
        InstancePatchStates: obj.InstancePatchStates.map((item) => InstancePatchStateFilterSensitiveLog(item)),
    }),
});
export const DescribeInstancePatchStatesForPatchGroupResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InstancePatchStates && {
        InstancePatchStates: obj.InstancePatchStates.map((item) => InstancePatchStateFilterSensitiveLog(item)),
    }),
});
export const InstancePropertyFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.IPAddress && { IPAddress: SENSITIVE_STRING }),
});
export const DescribeInstancePropertiesResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InstanceProperties && {
        InstanceProperties: obj.InstanceProperties.map((item) => InstancePropertyFilterSensitiveLog(item)),
    }),
});
export const MaintenanceWindowExecutionTaskInvocationIdentityFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
});
export const DescribeMaintenanceWindowExecutionTaskInvocationsResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.WindowExecutionTaskInvocationIdentities && {
        WindowExecutionTaskInvocationIdentities: obj.WindowExecutionTaskInvocationIdentities.map((item) => MaintenanceWindowExecutionTaskInvocationIdentityFilterSensitiveLog(item)),
    }),
});
export const MaintenanceWindowIdentityFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
