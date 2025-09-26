import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { SSMServiceException as __BaseException } from "./SSMServiceException";
export declare class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException";
  readonly $fault: "client";
  Message: string | undefined;
  constructor(
    opts: __ExceptionOptionType<AccessDeniedException, __BaseException>
  );
}
export declare const AccessRequestStatus: {
  readonly APPROVED: "Approved";
  readonly EXPIRED: "Expired";
  readonly PENDING: "Pending";
  readonly REJECTED: "Rejected";
  readonly REVOKED: "Revoked";
};
export type AccessRequestStatus =
  (typeof AccessRequestStatus)[keyof typeof AccessRequestStatus];
export declare const AccessType: {
  readonly JUSTINTIME: "JustInTime";
  readonly STANDARD: "Standard";
};
export type AccessType = (typeof AccessType)[keyof typeof AccessType];
export interface AccountSharingInfo {
  AccountId?: string | undefined;
  SharedDocumentVersion?: string | undefined;
}
export interface Tag {
  Key: string | undefined;
  Value: string | undefined;
}
export interface Activation {
  ActivationId?: string | undefined;
  Description?: string | undefined;
  DefaultInstanceName?: string | undefined;
  IamRole?: string | undefined;
  RegistrationLimit?: number | undefined;
  RegistrationsCount?: number | undefined;
  ExpirationDate?: Date | undefined;
  Expired?: boolean | undefined;
  CreatedDate?: Date | undefined;
  Tags?: Tag[] | undefined;
}
export declare const ResourceTypeForTagging: {
  readonly ASSOCIATION: "Association";
  readonly AUTOMATION: "Automation";
  readonly DOCUMENT: "Document";
  readonly MAINTENANCE_WINDOW: "MaintenanceWindow";
  readonly MANAGED_INSTANCE: "ManagedInstance";
  readonly OPSMETADATA: "OpsMetadata";
  readonly OPS_ITEM: "OpsItem";
  readonly PARAMETER: "Parameter";
  readonly PATCH_BASELINE: "PatchBaseline";
};
export type ResourceTypeForTagging =
  (typeof ResourceTypeForTagging)[keyof typeof ResourceTypeForTagging];
export interface AddTagsToResourceRequest {
  ResourceType: ResourceTypeForTagging | undefined;
  ResourceId: string | undefined;
  Tags: Tag[] | undefined;
}
export interface AddTagsToResourceResult {}
export declare class InternalServerError extends __BaseException {
  readonly name: "InternalServerError";
  readonly $fault: "server";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InternalServerError, __BaseException>
  );
}
export declare class InvalidResourceId extends __BaseException {
  readonly name: "InvalidResourceId";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<InvalidResourceId, __BaseException>);
}
export declare class InvalidResourceType extends __BaseException {
  readonly name: "InvalidResourceType";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidResourceType, __BaseException>
  );
}
export declare class TooManyTagsError extends __BaseException {
  readonly name: "TooManyTagsError";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<TooManyTagsError, __BaseException>);
}
export declare class TooManyUpdates extends __BaseException {
  readonly name: "TooManyUpdates";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<TooManyUpdates, __BaseException>);
}
export interface Alarm {
  Name: string | undefined;
}
export interface AlarmConfiguration {
  IgnorePollAlarmFailure?: boolean | undefined;
  Alarms: Alarm[] | undefined;
}
export declare const ExternalAlarmState: {
  readonly ALARM: "ALARM";
  readonly UNKNOWN: "UNKNOWN";
};
export type ExternalAlarmState =
  (typeof ExternalAlarmState)[keyof typeof ExternalAlarmState];
export interface AlarmStateInformation {
  Name: string | undefined;
  State: ExternalAlarmState | undefined;
}
export declare class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>
  );
}
export interface AssociateOpsItemRelatedItemRequest {
  OpsItemId: string | undefined;
  AssociationType: string | undefined;
  ResourceType: string | undefined;
  ResourceUri: string | undefined;
}
export interface AssociateOpsItemRelatedItemResponse {
  AssociationId?: string | undefined;
}
export declare class OpsItemConflictException extends __BaseException {
  readonly name: "OpsItemConflictException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<OpsItemConflictException, __BaseException>
  );
}
export declare class OpsItemInvalidParameterException extends __BaseException {
  readonly name: "OpsItemInvalidParameterException";
  readonly $fault: "client";
  ParameterNames?: string[] | undefined;
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      OpsItemInvalidParameterException,
      __BaseException
    >
  );
}
export declare class OpsItemLimitExceededException extends __BaseException {
  readonly name: "OpsItemLimitExceededException";
  readonly $fault: "client";
  ResourceTypes?: string[] | undefined;
  Limit?: number | undefined;
  LimitType?: string | undefined;
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<OpsItemLimitExceededException, __BaseException>
  );
}
export declare class OpsItemNotFoundException extends __BaseException {
  readonly name: "OpsItemNotFoundException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<OpsItemNotFoundException, __BaseException>
  );
}
export declare class OpsItemRelatedItemAlreadyExistsException extends __BaseException {
  readonly name: "OpsItemRelatedItemAlreadyExistsException";
  readonly $fault: "client";
  Message?: string | undefined;
  ResourceUri?: string | undefined;
  OpsItemId?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      OpsItemRelatedItemAlreadyExistsException,
      __BaseException
    >
  );
}
export interface CancelCommandRequest {
  CommandId: string | undefined;
  InstanceIds?: string[] | undefined;
}
export interface CancelCommandResult {}
export declare class DuplicateInstanceId extends __BaseException {
  readonly name: "DuplicateInstanceId";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<DuplicateInstanceId, __BaseException>
  );
}
export declare class InvalidCommandId extends __BaseException {
  readonly name: "InvalidCommandId";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<InvalidCommandId, __BaseException>);
}
export declare class InvalidInstanceId extends __BaseException {
  readonly name: "InvalidInstanceId";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidInstanceId, __BaseException>);
}
export interface CancelMaintenanceWindowExecutionRequest {
  WindowExecutionId: string | undefined;
}
export interface CancelMaintenanceWindowExecutionResult {
  WindowExecutionId?: string | undefined;
}
export declare class DoesNotExistException extends __BaseException {
  readonly name: "DoesNotExistException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<DoesNotExistException, __BaseException>
  );
}
export interface RegistrationMetadataItem {
  Key: string | undefined;
  Value: string | undefined;
}
export interface CreateActivationRequest {
  Description?: string | undefined;
  DefaultInstanceName?: string | undefined;
  IamRole: string | undefined;
  RegistrationLimit?: number | undefined;
  ExpirationDate?: Date | undefined;
  Tags?: Tag[] | undefined;
  RegistrationMetadata?: RegistrationMetadataItem[] | undefined;
}
export interface CreateActivationResult {
  ActivationId?: string | undefined;
  ActivationCode?: string | undefined;
}
export declare class InvalidParameters extends __BaseException {
  readonly name: "InvalidParameters";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidParameters, __BaseException>);
}
export declare class AssociationAlreadyExists extends __BaseException {
  readonly name: "AssociationAlreadyExists";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<AssociationAlreadyExists, __BaseException>
  );
}
export declare class AssociationLimitExceeded extends __BaseException {
  readonly name: "AssociationLimitExceeded";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<AssociationLimitExceeded, __BaseException>
  );
}
export declare const AssociationComplianceSeverity: {
  readonly Critical: "CRITICAL";
  readonly High: "HIGH";
  readonly Low: "LOW";
  readonly Medium: "MEDIUM";
  readonly Unspecified: "UNSPECIFIED";
};
export type AssociationComplianceSeverity =
  (typeof AssociationComplianceSeverity)[keyof typeof AssociationComplianceSeverity];
export interface S3OutputLocation {
  OutputS3Region?: string | undefined;
  OutputS3BucketName?: string | undefined;
  OutputS3KeyPrefix?: string | undefined;
}
export interface InstanceAssociationOutputLocation {
  S3Location?: S3OutputLocation | undefined;
}
export declare const AssociationSyncCompliance: {
  readonly Auto: "AUTO";
  readonly Manual: "MANUAL";
};
export type AssociationSyncCompliance =
  (typeof AssociationSyncCompliance)[keyof typeof AssociationSyncCompliance];
export interface Target {
  Key?: string | undefined;
  Values?: string[] | undefined;
}
export interface TargetLocation {
  Accounts?: string[] | undefined;
  Regions?: string[] | undefined;
  TargetLocationMaxConcurrency?: string | undefined;
  TargetLocationMaxErrors?: string | undefined;
  ExecutionRoleName?: string | undefined;
  TargetLocationAlarmConfiguration?: AlarmConfiguration | undefined;
  IncludeChildOrganizationUnits?: boolean | undefined;
  ExcludeAccounts?: string[] | undefined;
  Targets?: Target[] | undefined;
  TargetsMaxConcurrency?: string | undefined;
  TargetsMaxErrors?: string | undefined;
}
export interface CreateAssociationRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  InstanceId?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  Targets?: Target[] | undefined;
  ScheduleExpression?: string | undefined;
  OutputLocation?: InstanceAssociationOutputLocation | undefined;
  AssociationName?: string | undefined;
  AutomationTargetParameterName?: string | undefined;
  MaxErrors?: string | undefined;
  MaxConcurrency?: string | undefined;
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;
  SyncCompliance?: AssociationSyncCompliance | undefined;
  ApplyOnlyAtCronInterval?: boolean | undefined;
  CalendarNames?: string[] | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  Tags?: Tag[] | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface AssociationOverview {
  Status?: string | undefined;
  DetailedStatus?: string | undefined;
  AssociationStatusAggregatedCount?: Record<string, number> | undefined;
}
export declare const AssociationStatusName: {
  readonly Failed: "Failed";
  readonly Pending: "Pending";
  readonly Success: "Success";
};
export type AssociationStatusName =
  (typeof AssociationStatusName)[keyof typeof AssociationStatusName];
export interface AssociationStatus {
  Date: Date | undefined;
  Name: AssociationStatusName | undefined;
  Message: string | undefined;
  AdditionalInfo?: string | undefined;
}
export interface AssociationDescription {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  AssociationVersion?: string | undefined;
  Date?: Date | undefined;
  LastUpdateAssociationDate?: Date | undefined;
  Status?: AssociationStatus | undefined;
  Overview?: AssociationOverview | undefined;
  DocumentVersion?: string | undefined;
  AutomationTargetParameterName?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  AssociationId?: string | undefined;
  Targets?: Target[] | undefined;
  ScheduleExpression?: string | undefined;
  OutputLocation?: InstanceAssociationOutputLocation | undefined;
  LastExecutionDate?: Date | undefined;
  LastSuccessfulExecutionDate?: Date | undefined;
  AssociationName?: string | undefined;
  MaxErrors?: string | undefined;
  MaxConcurrency?: string | undefined;
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;
  SyncCompliance?: AssociationSyncCompliance | undefined;
  ApplyOnlyAtCronInterval?: boolean | undefined;
  CalendarNames?: string[] | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}
export interface CreateAssociationResult {
  AssociationDescription?: AssociationDescription | undefined;
}
export declare class InvalidDocument extends __BaseException {
  readonly name: "InvalidDocument";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidDocument, __BaseException>);
}
export declare class InvalidDocumentVersion extends __BaseException {
  readonly name: "InvalidDocumentVersion";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidDocumentVersion, __BaseException>
  );
}
export declare class InvalidOutputLocation extends __BaseException {
  readonly name: "InvalidOutputLocation";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidOutputLocation, __BaseException>
  );
}
export declare class InvalidSchedule extends __BaseException {
  readonly name: "InvalidSchedule";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidSchedule, __BaseException>);
}
export declare class InvalidTag extends __BaseException {
  readonly name: "InvalidTag";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidTag, __BaseException>);
}
export declare class InvalidTarget extends __BaseException {
  readonly name: "InvalidTarget";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidTarget, __BaseException>);
}
export declare class InvalidTargetMaps extends __BaseException {
  readonly name: "InvalidTargetMaps";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidTargetMaps, __BaseException>);
}
export declare class UnsupportedPlatformType extends __BaseException {
  readonly name: "UnsupportedPlatformType";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<UnsupportedPlatformType, __BaseException>
  );
}
export interface CreateAssociationBatchRequestEntry {
  Name: string | undefined;
  InstanceId?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  AutomationTargetParameterName?: string | undefined;
  DocumentVersion?: string | undefined;
  Targets?: Target[] | undefined;
  ScheduleExpression?: string | undefined;
  OutputLocation?: InstanceAssociationOutputLocation | undefined;
  AssociationName?: string | undefined;
  MaxErrors?: string | undefined;
  MaxConcurrency?: string | undefined;
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;
  SyncCompliance?: AssociationSyncCompliance | undefined;
  ApplyOnlyAtCronInterval?: boolean | undefined;
  CalendarNames?: string[] | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface CreateAssociationBatchRequest {
  Entries: CreateAssociationBatchRequestEntry[] | undefined;
}
export declare const Fault: {
  readonly Client: "Client";
  readonly Server: "Server";
  readonly Unknown: "Unknown";
};
export type Fault = (typeof Fault)[keyof typeof Fault];
export interface FailedCreateAssociation {
  Entry?: CreateAssociationBatchRequestEntry | undefined;
  Message?: string | undefined;
  Fault?: Fault | undefined;
}
export interface CreateAssociationBatchResult {
  Successful?: AssociationDescription[] | undefined;
  Failed?: FailedCreateAssociation[] | undefined;
}
export declare const AttachmentsSourceKey: {
  readonly AttachmentReference: "AttachmentReference";
  readonly S3FileUrl: "S3FileUrl";
  readonly SourceUrl: "SourceUrl";
};
export type AttachmentsSourceKey =
  (typeof AttachmentsSourceKey)[keyof typeof AttachmentsSourceKey];
export interface AttachmentsSource {
  Key?: AttachmentsSourceKey | undefined;
  Values?: string[] | undefined;
  Name?: string | undefined;
}
export declare const DocumentFormat: {
  readonly JSON: "JSON";
  readonly TEXT: "TEXT";
  readonly YAML: "YAML";
};
export type DocumentFormat =
  (typeof DocumentFormat)[keyof typeof DocumentFormat];
export declare const DocumentType: {
  readonly ApplicationConfiguration: "ApplicationConfiguration";
  readonly ApplicationConfigurationSchema: "ApplicationConfigurationSchema";
  readonly AutoApprovalPolicy: "AutoApprovalPolicy";
  readonly Automation: "Automation";
  readonly ChangeCalendar: "ChangeCalendar";
  readonly ChangeTemplate: "Automation.ChangeTemplate";
  readonly CloudFormation: "CloudFormation";
  readonly Command: "Command";
  readonly ConformancePackTemplate: "ConformancePackTemplate";
  readonly DeploymentStrategy: "DeploymentStrategy";
  readonly ManualApprovalPolicy: "ManualApprovalPolicy";
  readonly Package: "Package";
  readonly Policy: "Policy";
  readonly ProblemAnalysis: "ProblemAnalysis";
  readonly ProblemAnalysisTemplate: "ProblemAnalysisTemplate";
  readonly QuickSetup: "QuickSetup";
  readonly Session: "Session";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export interface DocumentRequires {
  Name: string | undefined;
  Version?: string | undefined;
  RequireType?: string | undefined;
  VersionName?: string | undefined;
}
export interface CreateDocumentRequest {
  Content: string | undefined;
  Requires?: DocumentRequires[] | undefined;
  Attachments?: AttachmentsSource[] | undefined;
  Name: string | undefined;
  DisplayName?: string | undefined;
  VersionName?: string | undefined;
  DocumentType?: DocumentType | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  TargetType?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface AttachmentInformation {
  Name?: string | undefined;
}
export declare const DocumentHashType: {
  readonly SHA1: "Sha1";
  readonly SHA256: "Sha256";
};
export type DocumentHashType =
  (typeof DocumentHashType)[keyof typeof DocumentHashType];
export declare const DocumentParameterType: {
  readonly String: "String";
  readonly StringList: "StringList";
};
export type DocumentParameterType =
  (typeof DocumentParameterType)[keyof typeof DocumentParameterType];
export interface DocumentParameter {
  Name?: string | undefined;
  Type?: DocumentParameterType | undefined;
  Description?: string | undefined;
  DefaultValue?: string | undefined;
}
export declare const PlatformType: {
  readonly LINUX: "Linux";
  readonly MACOS: "MacOS";
  readonly WINDOWS: "Windows";
};
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];
export declare const ReviewStatus: {
  readonly APPROVED: "APPROVED";
  readonly NOT_REVIEWED: "NOT_REVIEWED";
  readonly PENDING: "PENDING";
  readonly REJECTED: "REJECTED";
};
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus];
export interface ReviewInformation {
  ReviewedTime?: Date | undefined;
  Status?: ReviewStatus | undefined;
  Reviewer?: string | undefined;
}
export declare const DocumentStatus: {
  readonly Active: "Active";
  readonly Creating: "Creating";
  readonly Deleting: "Deleting";
  readonly Failed: "Failed";
  readonly Updating: "Updating";
};
export type DocumentStatus =
  (typeof DocumentStatus)[keyof typeof DocumentStatus];
export interface DocumentDescription {
  Sha1?: string | undefined;
  Hash?: string | undefined;
  HashType?: DocumentHashType | undefined;
  Name?: string | undefined;
  DisplayName?: string | undefined;
  VersionName?: string | undefined;
  Owner?: string | undefined;
  CreatedDate?: Date | undefined;
  Status?: DocumentStatus | undefined;
  StatusInformation?: string | undefined;
  DocumentVersion?: string | undefined;
  Description?: string | undefined;
  Parameters?: DocumentParameter[] | undefined;
  PlatformTypes?: PlatformType[] | undefined;
  DocumentType?: DocumentType | undefined;
  SchemaVersion?: string | undefined;
  LatestVersion?: string | undefined;
  DefaultVersion?: string | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  TargetType?: string | undefined;
  Tags?: Tag[] | undefined;
  AttachmentsInformation?: AttachmentInformation[] | undefined;
  Requires?: DocumentRequires[] | undefined;
  Author?: string | undefined;
  ReviewInformation?: ReviewInformation[] | undefined;
  ApprovedVersion?: string | undefined;
  PendingReviewVersion?: string | undefined;
  ReviewStatus?: ReviewStatus | undefined;
  Category?: string[] | undefined;
  CategoryEnum?: string[] | undefined;
}
export interface CreateDocumentResult {
  DocumentDescription?: DocumentDescription | undefined;
}
export declare class DocumentAlreadyExists extends __BaseException {
  readonly name: "DocumentAlreadyExists";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<DocumentAlreadyExists, __BaseException>
  );
}
export declare class DocumentLimitExceeded extends __BaseException {
  readonly name: "DocumentLimitExceeded";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<DocumentLimitExceeded, __BaseException>
  );
}
export declare class InvalidDocumentContent extends __BaseException {
  readonly name: "InvalidDocumentContent";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidDocumentContent, __BaseException>
  );
}
export declare class InvalidDocumentSchemaVersion extends __BaseException {
  readonly name: "InvalidDocumentSchemaVersion";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidDocumentSchemaVersion, __BaseException>
  );
}
export declare class MaxDocumentSizeExceeded extends __BaseException {
  readonly name: "MaxDocumentSizeExceeded";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<MaxDocumentSizeExceeded, __BaseException>
  );
}
export interface CreateMaintenanceWindowRequest {
  Name: string | undefined;
  Description?: string | undefined;
  StartDate?: string | undefined;
  EndDate?: string | undefined;
  Schedule: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  Duration: number | undefined;
  Cutoff: number | undefined;
  AllowUnassociatedTargets: boolean | undefined;
  ClientToken?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateMaintenanceWindowResult {
  WindowId?: string | undefined;
}
export declare class IdempotentParameterMismatch extends __BaseException {
  readonly name: "IdempotentParameterMismatch";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<IdempotentParameterMismatch, __BaseException>
  );
}
export declare class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>
  );
}
export interface OpsItemNotification {
  Arn?: string | undefined;
}
export declare const OpsItemDataType: {
  readonly SEARCHABLE_STRING: "SearchableString";
  readonly STRING: "String";
};
export type OpsItemDataType =
  (typeof OpsItemDataType)[keyof typeof OpsItemDataType];
export interface OpsItemDataValue {
  Value?: string | undefined;
  Type?: OpsItemDataType | undefined;
}
export interface RelatedOpsItem {
  OpsItemId: string | undefined;
}
export interface CreateOpsItemRequest {
  Description: string | undefined;
  OpsItemType?: string | undefined;
  OperationalData?: Record<string, OpsItemDataValue> | undefined;
  Notifications?: OpsItemNotification[] | undefined;
  Priority?: number | undefined;
  RelatedOpsItems?: RelatedOpsItem[] | undefined;
  Source: string | undefined;
  Title: string | undefined;
  Tags?: Tag[] | undefined;
  Category?: string | undefined;
  Severity?: string | undefined;
  ActualStartTime?: Date | undefined;
  ActualEndTime?: Date | undefined;
  PlannedStartTime?: Date | undefined;
  PlannedEndTime?: Date | undefined;
  AccountId?: string | undefined;
}
export interface CreateOpsItemResponse {
  OpsItemId?: string | undefined;
  OpsItemArn?: string | undefined;
}
export declare class OpsItemAccessDeniedException extends __BaseException {
  readonly name: "OpsItemAccessDeniedException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<OpsItemAccessDeniedException, __BaseException>
  );
}
export declare class OpsItemAlreadyExistsException extends __BaseException {
  readonly name: "OpsItemAlreadyExistsException";
  readonly $fault: "client";
  Message?: string | undefined;
  OpsItemId?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<OpsItemAlreadyExistsException, __BaseException>
  );
}
export interface MetadataValue {
  Value?: string | undefined;
}
export interface CreateOpsMetadataRequest {
  ResourceId: string | undefined;
  Metadata?: Record<string, MetadataValue> | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateOpsMetadataResult {
  OpsMetadataArn?: string | undefined;
}
export declare class OpsMetadataAlreadyExistsException extends __BaseException {
  readonly name: "OpsMetadataAlreadyExistsException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      OpsMetadataAlreadyExistsException,
      __BaseException
    >
  );
}
export declare class OpsMetadataInvalidArgumentException extends __BaseException {
  readonly name: "OpsMetadataInvalidArgumentException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      OpsMetadataInvalidArgumentException,
      __BaseException
    >
  );
}
export declare class OpsMetadataLimitExceededException extends __BaseException {
  readonly name: "OpsMetadataLimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      OpsMetadataLimitExceededException,
      __BaseException
    >
  );
}
export declare class OpsMetadataTooManyUpdatesException extends __BaseException {
  readonly name: "OpsMetadataTooManyUpdatesException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      OpsMetadataTooManyUpdatesException,
      __BaseException
    >
  );
}
export declare const PatchComplianceLevel: {
  readonly Critical: "CRITICAL";
  readonly High: "HIGH";
  readonly Informational: "INFORMATIONAL";
  readonly Low: "LOW";
  readonly Medium: "MEDIUM";
  readonly Unspecified: "UNSPECIFIED";
};
export type PatchComplianceLevel =
  (typeof PatchComplianceLevel)[keyof typeof PatchComplianceLevel];
export declare const PatchFilterKey: {
  readonly AdvisoryId: "ADVISORY_ID";
  readonly Arch: "ARCH";
  readonly BugzillaId: "BUGZILLA_ID";
  readonly CVEId: "CVE_ID";
  readonly Classification: "CLASSIFICATION";
  readonly Epoch: "EPOCH";
  readonly MsrcSeverity: "MSRC_SEVERITY";
  readonly Name: "NAME";
  readonly PatchId: "PATCH_ID";
  readonly PatchSet: "PATCH_SET";
  readonly Priority: "PRIORITY";
  readonly Product: "PRODUCT";
  readonly ProductFamily: "PRODUCT_FAMILY";
  readonly Release: "RELEASE";
  readonly Repository: "REPOSITORY";
  readonly Section: "SECTION";
  readonly Security: "SECURITY";
  readonly Severity: "SEVERITY";
  readonly Version: "VERSION";
};
export type PatchFilterKey =
  (typeof PatchFilterKey)[keyof typeof PatchFilterKey];
export interface PatchFilter {
  Key: PatchFilterKey | undefined;
  Values: string[] | undefined;
}
export interface PatchFilterGroup {
  PatchFilters: PatchFilter[] | undefined;
}
export interface PatchRule {
  PatchFilterGroup: PatchFilterGroup | undefined;
  ComplianceLevel?: PatchComplianceLevel | undefined;
  ApproveAfterDays?: number | undefined;
  ApproveUntilDate?: string | undefined;
  EnableNonSecurity?: boolean | undefined;
}
export interface PatchRuleGroup {
  PatchRules: PatchRule[] | undefined;
}
export declare const PatchComplianceStatus: {
  readonly Compliant: "COMPLIANT";
  readonly NonCompliant: "NON_COMPLIANT";
};
export type PatchComplianceStatus =
  (typeof PatchComplianceStatus)[keyof typeof PatchComplianceStatus];
export declare const OperatingSystem: {
  readonly AlmaLinux: "ALMA_LINUX";
  readonly AmazonLinux: "AMAZON_LINUX";
  readonly AmazonLinux2: "AMAZON_LINUX_2";
  readonly AmazonLinux2022: "AMAZON_LINUX_2022";
  readonly AmazonLinux2023: "AMAZON_LINUX_2023";
  readonly CentOS: "CENTOS";
  readonly Debian: "DEBIAN";
  readonly MacOS: "MACOS";
  readonly OracleLinux: "ORACLE_LINUX";
  readonly Raspbian: "RASPBIAN";
  readonly RedhatEnterpriseLinux: "REDHAT_ENTERPRISE_LINUX";
  readonly Rocky_Linux: "ROCKY_LINUX";
  readonly Suse: "SUSE";
  readonly Ubuntu: "UBUNTU";
  readonly Windows: "WINDOWS";
};
export type OperatingSystem =
  (typeof OperatingSystem)[keyof typeof OperatingSystem];
export declare const PatchAction: {
  readonly AllowAsDependency: "ALLOW_AS_DEPENDENCY";
  readonly Block: "BLOCK";
};
export type PatchAction = (typeof PatchAction)[keyof typeof PatchAction];
export interface PatchSource {
  Name: string | undefined;
  Products: string[] | undefined;
  Configuration: string | undefined;
}
export interface CreatePatchBaselineRequest {
  OperatingSystem?: OperatingSystem | undefined;
  Name: string | undefined;
  GlobalFilters?: PatchFilterGroup | undefined;
  ApprovalRules?: PatchRuleGroup | undefined;
  ApprovedPatches?: string[] | undefined;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;
  RejectedPatches?: string[] | undefined;
  RejectedPatchesAction?: PatchAction | undefined;
  Description?: string | undefined;
  Sources?: PatchSource[] | undefined;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
  ClientToken?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreatePatchBaselineResult {
  BaselineId?: string | undefined;
}
export interface ResourceDataSyncDestinationDataSharing {
  DestinationDataSharingType?: string | undefined;
}
export declare const ResourceDataSyncS3Format: {
  readonly JSON_SERDE: "JsonSerDe";
};
export type ResourceDataSyncS3Format =
  (typeof ResourceDataSyncS3Format)[keyof typeof ResourceDataSyncS3Format];
export interface ResourceDataSyncS3Destination {
  BucketName: string | undefined;
  Prefix?: string | undefined;
  SyncFormat: ResourceDataSyncS3Format | undefined;
  Region: string | undefined;
  AWSKMSKeyARN?: string | undefined;
  DestinationDataSharing?: ResourceDataSyncDestinationDataSharing | undefined;
}
export interface ResourceDataSyncOrganizationalUnit {
  OrganizationalUnitId?: string | undefined;
}
export interface ResourceDataSyncAwsOrganizationsSource {
  OrganizationSourceType: string | undefined;
  OrganizationalUnits?: ResourceDataSyncOrganizationalUnit[] | undefined;
}
export interface ResourceDataSyncSource {
  SourceType: string | undefined;
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | undefined;
  SourceRegions: string[] | undefined;
  IncludeFutureRegions?: boolean | undefined;
  EnableAllOpsDataSources?: boolean | undefined;
}
export interface CreateResourceDataSyncRequest {
  SyncName: string | undefined;
  S3Destination?: ResourceDataSyncS3Destination | undefined;
  SyncType?: string | undefined;
  SyncSource?: ResourceDataSyncSource | undefined;
}
export interface CreateResourceDataSyncResult {}
export declare class ResourceDataSyncAlreadyExistsException extends __BaseException {
  readonly name: "ResourceDataSyncAlreadyExistsException";
  readonly $fault: "client";
  SyncName?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ResourceDataSyncAlreadyExistsException,
      __BaseException
    >
  );
}
export declare class ResourceDataSyncCountExceededException extends __BaseException {
  readonly name: "ResourceDataSyncCountExceededException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ResourceDataSyncCountExceededException,
      __BaseException
    >
  );
}
export declare class ResourceDataSyncInvalidConfigurationException extends __BaseException {
  readonly name: "ResourceDataSyncInvalidConfigurationException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ResourceDataSyncInvalidConfigurationException,
      __BaseException
    >
  );
}
export interface DeleteActivationRequest {
  ActivationId: string | undefined;
}
export interface DeleteActivationResult {}
export declare class InvalidActivation extends __BaseException {
  readonly name: "InvalidActivation";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidActivation, __BaseException>);
}
export declare class InvalidActivationId extends __BaseException {
  readonly name: "InvalidActivationId";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidActivationId, __BaseException>
  );
}
export declare class AssociationDoesNotExist extends __BaseException {
  readonly name: "AssociationDoesNotExist";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<AssociationDoesNotExist, __BaseException>
  );
}
export interface DeleteAssociationRequest {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  AssociationId?: string | undefined;
}
export interface DeleteAssociationResult {}
export declare class AssociatedInstances extends __BaseException {
  readonly name: "AssociatedInstances";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<AssociatedInstances, __BaseException>
  );
}
export interface DeleteDocumentRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  VersionName?: string | undefined;
  Force?: boolean | undefined;
}
export interface DeleteDocumentResult {}
export declare class InvalidDocumentOperation extends __BaseException {
  readonly name: "InvalidDocumentOperation";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidDocumentOperation, __BaseException>
  );
}
export declare const InventorySchemaDeleteOption: {
  readonly DELETE_SCHEMA: "DeleteSchema";
  readonly DISABLE_SCHEMA: "DisableSchema";
};
export type InventorySchemaDeleteOption =
  (typeof InventorySchemaDeleteOption)[keyof typeof InventorySchemaDeleteOption];
export interface DeleteInventoryRequest {
  TypeName: string | undefined;
  SchemaDeleteOption?: InventorySchemaDeleteOption | undefined;
  DryRun?: boolean | undefined;
  ClientToken?: string | undefined;
}
export interface InventoryDeletionSummaryItem {
  Version?: string | undefined;
  Count?: number | undefined;
  RemainingCount?: number | undefined;
}
export interface InventoryDeletionSummary {
  TotalCount?: number | undefined;
  RemainingCount?: number | undefined;
  SummaryItems?: InventoryDeletionSummaryItem[] | undefined;
}
export interface DeleteInventoryResult {
  DeletionId?: string | undefined;
  TypeName?: string | undefined;
  DeletionSummary?: InventoryDeletionSummary | undefined;
}
export declare class InvalidDeleteInventoryParametersException extends __BaseException {
  readonly name: "InvalidDeleteInventoryParametersException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      InvalidDeleteInventoryParametersException,
      __BaseException
    >
  );
}
export declare class InvalidInventoryRequestException extends __BaseException {
  readonly name: "InvalidInventoryRequestException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      InvalidInventoryRequestException,
      __BaseException
    >
  );
}
export declare class InvalidOptionException extends __BaseException {
  readonly name: "InvalidOptionException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidOptionException, __BaseException>
  );
}
export declare class InvalidTypeNameException extends __BaseException {
  readonly name: "InvalidTypeNameException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidTypeNameException, __BaseException>
  );
}
export interface DeleteMaintenanceWindowRequest {
  WindowId: string | undefined;
}
export interface DeleteMaintenanceWindowResult {
  WindowId?: string | undefined;
}
export interface DeleteOpsItemRequest {
  OpsItemId: string | undefined;
}
export interface DeleteOpsItemResponse {}
export interface DeleteOpsMetadataRequest {
  OpsMetadataArn: string | undefined;
}
export interface DeleteOpsMetadataResult {}
export declare class OpsMetadataNotFoundException extends __BaseException {
  readonly name: "OpsMetadataNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<OpsMetadataNotFoundException, __BaseException>
  );
}
export interface DeleteParameterRequest {
  Name: string | undefined;
}
export interface DeleteParameterResult {}
export declare class ParameterNotFound extends __BaseException {
  readonly name: "ParameterNotFound";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<ParameterNotFound, __BaseException>);
}
export interface DeleteParametersRequest {
  Names: string[] | undefined;
}
export interface DeleteParametersResult {
  DeletedParameters?: string[] | undefined;
  InvalidParameters?: string[] | undefined;
}
export interface DeletePatchBaselineRequest {
  BaselineId: string | undefined;
}
export interface DeletePatchBaselineResult {
  BaselineId?: string | undefined;
}
export declare class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<ResourceInUseException, __BaseException>
  );
}
export interface DeleteResourceDataSyncRequest {
  SyncName: string | undefined;
  SyncType?: string | undefined;
}
export interface DeleteResourceDataSyncResult {}
export declare class ResourceDataSyncNotFoundException extends __BaseException {
  readonly name: "ResourceDataSyncNotFoundException";
  readonly $fault: "client";
  SyncName?: string | undefined;
  SyncType?: string | undefined;
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ResourceDataSyncNotFoundException,
      __BaseException
    >
  );
}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string | undefined;
  PolicyId: string | undefined;
  PolicyHash: string | undefined;
}
export interface DeleteResourcePolicyResponse {}
export declare class MalformedResourcePolicyDocumentException extends __BaseException {
  readonly name: "MalformedResourcePolicyDocumentException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      MalformedResourcePolicyDocumentException,
      __BaseException
    >
  );
}
export declare class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>
  );
}
export declare class ResourcePolicyConflictException extends __BaseException {
  readonly name: "ResourcePolicyConflictException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ResourcePolicyConflictException,
      __BaseException
    >
  );
}
export declare class ResourcePolicyInvalidParameterException extends __BaseException {
  readonly name: "ResourcePolicyInvalidParameterException";
  readonly $fault: "client";
  ParameterNames?: string[] | undefined;
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ResourcePolicyInvalidParameterException,
      __BaseException
    >
  );
}
export declare class ResourcePolicyNotFoundException extends __BaseException {
  readonly name: "ResourcePolicyNotFoundException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ResourcePolicyNotFoundException,
      __BaseException
    >
  );
}
export interface DeregisterManagedInstanceRequest {
  InstanceId: string | undefined;
}
export interface DeregisterManagedInstanceResult {}
export interface DeregisterPatchBaselineForPatchGroupRequest {
  BaselineId: string | undefined;
  PatchGroup: string | undefined;
}
export interface DeregisterPatchBaselineForPatchGroupResult {
  BaselineId?: string | undefined;
  PatchGroup?: string | undefined;
}
export interface DeregisterTargetFromMaintenanceWindowRequest {
  WindowId: string | undefined;
  WindowTargetId: string | undefined;
  Safe?: boolean | undefined;
}
export interface DeregisterTargetFromMaintenanceWindowResult {
  WindowId?: string | undefined;
  WindowTargetId?: string | undefined;
}
export declare class TargetInUseException extends __BaseException {
  readonly name: "TargetInUseException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<TargetInUseException, __BaseException>
  );
}
export interface DeregisterTaskFromMaintenanceWindowRequest {
  WindowId: string | undefined;
  WindowTaskId: string | undefined;
}
export interface DeregisterTaskFromMaintenanceWindowResult {
  WindowId?: string | undefined;
  WindowTaskId?: string | undefined;
}
export declare const DescribeActivationsFilterKeys: {
  readonly ACTIVATION_IDS: "ActivationIds";
  readonly DEFAULT_INSTANCE_NAME: "DefaultInstanceName";
  readonly IAM_ROLE: "IamRole";
};
export type DescribeActivationsFilterKeys =
  (typeof DescribeActivationsFilterKeys)[keyof typeof DescribeActivationsFilterKeys];
export interface DescribeActivationsFilter {
  FilterKey?: DescribeActivationsFilterKeys | undefined;
  FilterValues?: string[] | undefined;
}
export interface DescribeActivationsRequest {
  Filters?: DescribeActivationsFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface DescribeActivationsResult {
  ActivationList?: Activation[] | undefined;
  NextToken?: string | undefined;
}
export declare class InvalidFilter extends __BaseException {
  readonly name: "InvalidFilter";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidFilter, __BaseException>);
}
export declare class InvalidNextToken extends __BaseException {
  readonly name: "InvalidNextToken";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidNextToken, __BaseException>);
}
export interface DescribeAssociationRequest {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  AssociationId?: string | undefined;
  AssociationVersion?: string | undefined;
}
export interface DescribeAssociationResult {
  AssociationDescription?: AssociationDescription | undefined;
}
export declare class InvalidAssociationVersion extends __BaseException {
  readonly name: "InvalidAssociationVersion";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidAssociationVersion, __BaseException>
  );
}
export declare const AssociationExecutionFilterKey: {
  readonly CreatedTime: "CreatedTime";
  readonly ExecutionId: "ExecutionId";
  readonly Status: "Status";
};
export type AssociationExecutionFilterKey =
  (typeof AssociationExecutionFilterKey)[keyof typeof AssociationExecutionFilterKey];
export declare const AssociationFilterOperatorType: {
  readonly Equal: "EQUAL";
  readonly GreaterThan: "GREATER_THAN";
  readonly LessThan: "LESS_THAN";
};
export type AssociationFilterOperatorType =
  (typeof AssociationFilterOperatorType)[keyof typeof AssociationFilterOperatorType];
export interface AssociationExecutionFilter {
  Key: AssociationExecutionFilterKey | undefined;
  Value: string | undefined;
  Type: AssociationFilterOperatorType | undefined;
}
export interface DescribeAssociationExecutionsRequest {
  AssociationId: string | undefined;
  Filters?: AssociationExecutionFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface AssociationExecution {
  AssociationId?: string | undefined;
  AssociationVersion?: string | undefined;
  ExecutionId?: string | undefined;
  Status?: string | undefined;
  DetailedStatus?: string | undefined;
  CreatedTime?: Date | undefined;
  LastExecutionDate?: Date | undefined;
  ResourceCountByStatus?: string | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}
export interface DescribeAssociationExecutionsResult {
  AssociationExecutions?: AssociationExecution[] | undefined;
  NextToken?: string | undefined;
}
export declare class AssociationExecutionDoesNotExist extends __BaseException {
  readonly name: "AssociationExecutionDoesNotExist";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AssociationExecutionDoesNotExist,
      __BaseException
    >
  );
}
export declare const AssociationExecutionTargetsFilterKey: {
  readonly ResourceId: "ResourceId";
  readonly ResourceType: "ResourceType";
  readonly Status: "Status";
};
export type AssociationExecutionTargetsFilterKey =
  (typeof AssociationExecutionTargetsFilterKey)[keyof typeof AssociationExecutionTargetsFilterKey];
export interface AssociationExecutionTargetsFilter {
  Key: AssociationExecutionTargetsFilterKey | undefined;
  Value: string | undefined;
}
export interface DescribeAssociationExecutionTargetsRequest {
  AssociationId: string | undefined;
  ExecutionId: string | undefined;
  Filters?: AssociationExecutionTargetsFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface OutputSource {
  OutputSourceId?: string | undefined;
  OutputSourceType?: string | undefined;
}
export interface AssociationExecutionTarget {
  AssociationId?: string | undefined;
  AssociationVersion?: string | undefined;
  ExecutionId?: string | undefined;
  ResourceId?: string | undefined;
  ResourceType?: string | undefined;
  Status?: string | undefined;
  DetailedStatus?: string | undefined;
  LastExecutionDate?: Date | undefined;
  OutputSource?: OutputSource | undefined;
}
export interface DescribeAssociationExecutionTargetsResult {
  AssociationExecutionTargets?: AssociationExecutionTarget[] | undefined;
  NextToken?: string | undefined;
}
export declare const AutomationExecutionFilterKey: {
  readonly AUTOMATION_SUBTYPE: "AutomationSubtype";
  readonly AUTOMATION_TYPE: "AutomationType";
  readonly CURRENT_ACTION: "CurrentAction";
  readonly DOCUMENT_NAME_PREFIX: "DocumentNamePrefix";
  readonly EXECUTION_ID: "ExecutionId";
  readonly EXECUTION_STATUS: "ExecutionStatus";
  readonly OPS_ITEM_ID: "OpsItemId";
  readonly PARENT_EXECUTION_ID: "ParentExecutionId";
  readonly START_TIME_AFTER: "StartTimeAfter";
  readonly START_TIME_BEFORE: "StartTimeBefore";
  readonly TAG_KEY: "TagKey";
  readonly TARGET_RESOURCE_GROUP: "TargetResourceGroup";
};
export type AutomationExecutionFilterKey =
  (typeof AutomationExecutionFilterKey)[keyof typeof AutomationExecutionFilterKey];
export interface AutomationExecutionFilter {
  Key: AutomationExecutionFilterKey | undefined;
  Values: string[] | undefined;
}
export interface DescribeAutomationExecutionsRequest {
  Filters?: AutomationExecutionFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export declare const AutomationExecutionStatus: {
  readonly APPROVED: "Approved";
  readonly CANCELLED: "Cancelled";
  readonly CANCELLING: "Cancelling";
  readonly CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved";
  readonly CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected";
  readonly COMPLETED_WITH_FAILURE: "CompletedWithFailure";
  readonly COMPLETED_WITH_SUCCESS: "CompletedWithSuccess";
  readonly EXITED: "Exited";
  readonly FAILED: "Failed";
  readonly INPROGRESS: "InProgress";
  readonly PENDING: "Pending";
  readonly PENDING_APPROVAL: "PendingApproval";
  readonly PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride";
  readonly REJECTED: "Rejected";
  readonly RUNBOOK_INPROGRESS: "RunbookInProgress";
  readonly SCHEDULED: "Scheduled";
  readonly SUCCESS: "Success";
  readonly TIMEDOUT: "TimedOut";
  readonly WAITING: "Waiting";
};
export type AutomationExecutionStatus =
  (typeof AutomationExecutionStatus)[keyof typeof AutomationExecutionStatus];
export declare const AutomationSubtype: {
  readonly AccessRequest: "AccessRequest";
  readonly ChangeRequest: "ChangeRequest";
};
export type AutomationSubtype =
  (typeof AutomationSubtype)[keyof typeof AutomationSubtype];
export declare const AutomationType: {
  readonly CrossAccount: "CrossAccount";
  readonly Local: "Local";
};
export type AutomationType =
  (typeof AutomationType)[keyof typeof AutomationType];
export declare const ExecutionMode: {
  readonly Auto: "Auto";
  readonly Interactive: "Interactive";
};
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];
export interface ResolvedTargets {
  ParameterValues?: string[] | undefined;
  Truncated?: boolean | undefined;
}
export interface Runbook {
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  TargetLocations?: TargetLocation[] | undefined;
}
export interface AutomationExecutionMetadata {
  AutomationExecutionId?: string | undefined;
  DocumentName?: string | undefined;
  DocumentVersion?: string | undefined;
  AutomationExecutionStatus?: AutomationExecutionStatus | undefined;
  ExecutionStartTime?: Date | undefined;
  ExecutionEndTime?: Date | undefined;
  ExecutedBy?: string | undefined;
  LogFile?: string | undefined;
  Outputs?: Record<string, string[]> | undefined;
  Mode?: ExecutionMode | undefined;
  ParentAutomationExecutionId?: string | undefined;
  CurrentStepName?: string | undefined;
  CurrentAction?: string | undefined;
  FailureMessage?: string | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  ResolvedTargets?: ResolvedTargets | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  Target?: string | undefined;
  AutomationType?: AutomationType | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
  TargetLocationsURL?: string | undefined;
  AutomationSubtype?: AutomationSubtype | undefined;
  ScheduledTime?: Date | undefined;
  Runbooks?: Runbook[] | undefined;
  OpsItemId?: string | undefined;
  AssociationId?: string | undefined;
  ChangeRequestName?: string | undefined;
}
export interface DescribeAutomationExecutionsResult {
  AutomationExecutionMetadataList?: AutomationExecutionMetadata[] | undefined;
  NextToken?: string | undefined;
}
export declare class InvalidFilterKey extends __BaseException {
  readonly name: "InvalidFilterKey";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<InvalidFilterKey, __BaseException>);
}
export declare class InvalidFilterValue extends __BaseException {
  readonly name: "InvalidFilterValue";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidFilterValue, __BaseException>);
}
export declare class AutomationExecutionNotFoundException extends __BaseException {
  readonly name: "AutomationExecutionNotFoundException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AutomationExecutionNotFoundException,
      __BaseException
    >
  );
}
export declare const StepExecutionFilterKey: {
  readonly ACTION: "Action";
  readonly PARENT_STEP_EXECUTION_ID: "ParentStepExecutionId";
  readonly PARENT_STEP_ITERATION: "ParentStepIteration";
  readonly PARENT_STEP_ITERATOR_VALUE: "ParentStepIteratorValue";
  readonly START_TIME_AFTER: "StartTimeAfter";
  readonly START_TIME_BEFORE: "StartTimeBefore";
  readonly STEP_EXECUTION_ID: "StepExecutionId";
  readonly STEP_EXECUTION_STATUS: "StepExecutionStatus";
  readonly STEP_NAME: "StepName";
};
export type StepExecutionFilterKey =
  (typeof StepExecutionFilterKey)[keyof typeof StepExecutionFilterKey];
export interface StepExecutionFilter {
  Key: StepExecutionFilterKey | undefined;
  Values: string[] | undefined;
}
export interface DescribeAutomationStepExecutionsRequest {
  AutomationExecutionId: string | undefined;
  Filters?: StepExecutionFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
  ReverseOrder?: boolean | undefined;
}
export interface FailureDetails {
  FailureStage?: string | undefined;
  FailureType?: string | undefined;
  Details?: Record<string, string[]> | undefined;
}
export interface ParentStepDetails {
  StepExecutionId?: string | undefined;
  StepName?: string | undefined;
  Action?: string | undefined;
  Iteration?: number | undefined;
  IteratorValue?: string | undefined;
}
export interface StepExecution {
  StepName?: string | undefined;
  Action?: string | undefined;
  TimeoutSeconds?: number | undefined;
  OnFailure?: string | undefined;
  MaxAttempts?: number | undefined;
  ExecutionStartTime?: Date | undefined;
  ExecutionEndTime?: Date | undefined;
  StepStatus?: AutomationExecutionStatus | undefined;
  ResponseCode?: string | undefined;
  Inputs?: Record<string, string> | undefined;
  Outputs?: Record<string, string[]> | undefined;
  Response?: string | undefined;
  FailureMessage?: string | undefined;
  FailureDetails?: FailureDetails | undefined;
  StepExecutionId?: string | undefined;
  OverriddenParameters?: Record<string, string[]> | undefined;
  IsEnd?: boolean | undefined;
  NextStep?: string | undefined;
  IsCritical?: boolean | undefined;
  ValidNextSteps?: string[] | undefined;
  Targets?: Target[] | undefined;
  TargetLocation?: TargetLocation | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
  ParentStepDetails?: ParentStepDetails | undefined;
}
export interface DescribeAutomationStepExecutionsResult {
  StepExecutions?: StepExecution[] | undefined;
  NextToken?: string | undefined;
}
export interface PatchOrchestratorFilter {
  Key?: string | undefined;
  Values?: string[] | undefined;
}
export interface DescribeAvailablePatchesRequest {
  Filters?: PatchOrchestratorFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface Patch {
  Id?: string | undefined;
  ReleaseDate?: Date | undefined;
  Title?: string | undefined;
  Description?: string | undefined;
  ContentUrl?: string | undefined;
  Vendor?: string | undefined;
  ProductFamily?: string | undefined;
  Product?: string | undefined;
  Classification?: string | undefined;
  MsrcSeverity?: string | undefined;
  KbNumber?: string | undefined;
  MsrcNumber?: string | undefined;
  Language?: string | undefined;
  AdvisoryIds?: string[] | undefined;
  BugzillaIds?: string[] | undefined;
  CVEIds?: string[] | undefined;
  Name?: string | undefined;
  Epoch?: number | undefined;
  Version?: string | undefined;
  Release?: string | undefined;
  Arch?: string | undefined;
  Severity?: string | undefined;
  Repository?: string | undefined;
}
export interface DescribeAvailablePatchesResult {
  Patches?: Patch[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeDocumentRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  VersionName?: string | undefined;
}
export interface DescribeDocumentResult {
  Document?: DocumentDescription | undefined;
}
export declare const DocumentPermissionType: {
  readonly SHARE: "Share";
};
export type DocumentPermissionType =
  (typeof DocumentPermissionType)[keyof typeof DocumentPermissionType];
export interface DescribeDocumentPermissionRequest {
  Name: string | undefined;
  PermissionType: DocumentPermissionType | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface DescribeDocumentPermissionResponse {
  AccountIds?: string[] | undefined;
  AccountSharingInfoList?: AccountSharingInfo[] | undefined;
  NextToken?: string | undefined;
}
export declare class InvalidPermissionType extends __BaseException {
  readonly name: "InvalidPermissionType";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidPermissionType, __BaseException>
  );
}
export interface DescribeEffectiveInstanceAssociationsRequest {
  InstanceId: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface InstanceAssociation {
  AssociationId?: string | undefined;
  InstanceId?: string | undefined;
  Content?: string | undefined;
  AssociationVersion?: string | undefined;
}
export interface DescribeEffectiveInstanceAssociationsResult {
  Associations?: InstanceAssociation[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeEffectivePatchesForPatchBaselineRequest {
  BaselineId: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export declare const PatchDeploymentStatus: {
  readonly Approved: "APPROVED";
  readonly ExplicitApproved: "EXPLICIT_APPROVED";
  readonly ExplicitRejected: "EXPLICIT_REJECTED";
  readonly PendingApproval: "PENDING_APPROVAL";
};
export type PatchDeploymentStatus =
  (typeof PatchDeploymentStatus)[keyof typeof PatchDeploymentStatus];
export interface PatchStatus {
  DeploymentStatus?: PatchDeploymentStatus | undefined;
  ComplianceLevel?: PatchComplianceLevel | undefined;
  ApprovalDate?: Date | undefined;
}
export interface EffectivePatch {
  Patch?: Patch | undefined;
  PatchStatus?: PatchStatus | undefined;
}
export interface DescribeEffectivePatchesForPatchBaselineResult {
  EffectivePatches?: EffectivePatch[] | undefined;
  NextToken?: string | undefined;
}
export declare class UnsupportedOperatingSystem extends __BaseException {
  readonly name: "UnsupportedOperatingSystem";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<UnsupportedOperatingSystem, __BaseException>
  );
}
export interface DescribeInstanceAssociationsStatusRequest {
  InstanceId: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface S3OutputUrl {
  OutputUrl?: string | undefined;
}
export interface InstanceAssociationOutputUrl {
  S3OutputUrl?: S3OutputUrl | undefined;
}
export interface InstanceAssociationStatusInfo {
  AssociationId?: string | undefined;
  Name?: string | undefined;
  DocumentVersion?: string | undefined;
  AssociationVersion?: string | undefined;
  InstanceId?: string | undefined;
  ExecutionDate?: Date | undefined;
  Status?: string | undefined;
  DetailedStatus?: string | undefined;
  ExecutionSummary?: string | undefined;
  ErrorCode?: string | undefined;
  OutputUrl?: InstanceAssociationOutputUrl | undefined;
  AssociationName?: string | undefined;
}
export interface DescribeInstanceAssociationsStatusResult {
  InstanceAssociationStatusInfos?: InstanceAssociationStatusInfo[] | undefined;
  NextToken?: string | undefined;
}
export interface InstanceInformationStringFilter {
  Key: string | undefined;
  Values: string[] | undefined;
}
export declare const InstanceInformationFilterKey: {
  readonly ACTIVATION_IDS: "ActivationIds";
  readonly AGENT_VERSION: "AgentVersion";
  readonly ASSOCIATION_STATUS: "AssociationStatus";
  readonly IAM_ROLE: "IamRole";
  readonly INSTANCE_IDS: "InstanceIds";
  readonly PING_STATUS: "PingStatus";
  readonly PLATFORM_TYPES: "PlatformTypes";
  readonly RESOURCE_TYPE: "ResourceType";
};
export type InstanceInformationFilterKey =
  (typeof InstanceInformationFilterKey)[keyof typeof InstanceInformationFilterKey];
export interface InstanceInformationFilter {
  key: InstanceInformationFilterKey | undefined;
  valueSet: string[] | undefined;
}
export interface DescribeInstanceInformationRequest {
  InstanceInformationFilterList?: InstanceInformationFilter[] | undefined;
  Filters?: InstanceInformationStringFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface InstanceAggregatedAssociationOverview {
  DetailedStatus?: string | undefined;
  InstanceAssociationStatusAggregatedCount?: Record<string, number> | undefined;
}
export declare const PingStatus: {
  readonly CONNECTION_LOST: "ConnectionLost";
  readonly INACTIVE: "Inactive";
  readonly ONLINE: "Online";
};
export type PingStatus = (typeof PingStatus)[keyof typeof PingStatus];
export declare const ResourceType: {
  readonly EC2_INSTANCE: "EC2Instance";
  readonly MANAGED_INSTANCE: "ManagedInstance";
};
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
export declare const SourceType: {
  readonly AWS_EC2_INSTANCE: "AWS::EC2::Instance";
  readonly AWS_IOT_THING: "AWS::IoT::Thing";
  readonly AWS_SSM_MANAGEDINSTANCE: "AWS::SSM::ManagedInstance";
};
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
export interface InstanceInformation {
  InstanceId?: string | undefined;
  PingStatus?: PingStatus | undefined;
  LastPingDateTime?: Date | undefined;
  AgentVersion?: string | undefined;
  IsLatestVersion?: boolean | undefined;
  PlatformType?: PlatformType | undefined;
  PlatformName?: string | undefined;
  PlatformVersion?: string | undefined;
  ActivationId?: string | undefined;
  IamRole?: string | undefined;
  RegistrationDate?: Date | undefined;
  ResourceType?: ResourceType | undefined;
  Name?: string | undefined;
  IPAddress?: string | undefined;
  ComputerName?: string | undefined;
  AssociationStatus?: string | undefined;
  LastAssociationExecutionDate?: Date | undefined;
  LastSuccessfulAssociationExecutionDate?: Date | undefined;
  AssociationOverview?: InstanceAggregatedAssociationOverview | undefined;
  SourceId?: string | undefined;
  SourceType?: SourceType | undefined;
}
export interface DescribeInstanceInformationResult {
  InstanceInformationList?: InstanceInformation[] | undefined;
  NextToken?: string | undefined;
}
export declare class InvalidInstanceInformationFilterValue extends __BaseException {
  readonly name: "InvalidInstanceInformationFilterValue";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      InvalidInstanceInformationFilterValue,
      __BaseException
    >
  );
}
export interface DescribeInstancePatchesRequest {
  InstanceId: string | undefined;
  Filters?: PatchOrchestratorFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export declare const PatchComplianceDataState: {
  readonly AvailableSecurityUpdate: "AVAILABLE_SECURITY_UPDATE";
  readonly Failed: "FAILED";
  readonly Installed: "INSTALLED";
  readonly InstalledOther: "INSTALLED_OTHER";
  readonly InstalledPendingReboot: "INSTALLED_PENDING_REBOOT";
  readonly InstalledRejected: "INSTALLED_REJECTED";
  readonly Missing: "MISSING";
  readonly NotApplicable: "NOT_APPLICABLE";
};
export type PatchComplianceDataState =
  (typeof PatchComplianceDataState)[keyof typeof PatchComplianceDataState];
export interface PatchComplianceData {
  Title: string | undefined;
  KBId: string | undefined;
  Classification: string | undefined;
  Severity: string | undefined;
  State: PatchComplianceDataState | undefined;
  InstalledTime: Date | undefined;
  CVEIds?: string | undefined;
}
export interface DescribeInstancePatchesResult {
  Patches?: PatchComplianceData[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeInstancePatchStatesRequest {
  InstanceIds: string[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export declare const PatchOperationType: {
  readonly INSTALL: "Install";
  readonly SCAN: "Scan";
};
export type PatchOperationType =
  (typeof PatchOperationType)[keyof typeof PatchOperationType];
export declare const RebootOption: {
  readonly NO_REBOOT: "NoReboot";
  readonly REBOOT_IF_NEEDED: "RebootIfNeeded";
};
export type RebootOption = (typeof RebootOption)[keyof typeof RebootOption];
export interface InstancePatchState {
  InstanceId: string | undefined;
  PatchGroup: string | undefined;
  BaselineId: string | undefined;
  SnapshotId?: string | undefined;
  InstallOverrideList?: string | undefined;
  OwnerInformation?: string | undefined;
  InstalledCount?: number | undefined;
  InstalledOtherCount?: number | undefined;
  InstalledPendingRebootCount?: number | undefined;
  InstalledRejectedCount?: number | undefined;
  MissingCount?: number | undefined;
  FailedCount?: number | undefined;
  UnreportedNotApplicableCount?: number | undefined;
  NotApplicableCount?: number | undefined;
  AvailableSecurityUpdateCount?: number | undefined;
  OperationStartTime: Date | undefined;
  OperationEndTime: Date | undefined;
  Operation: PatchOperationType | undefined;
  LastNoRebootInstallOperationTime?: Date | undefined;
  RebootOption?: RebootOption | undefined;
  CriticalNonCompliantCount?: number | undefined;
  SecurityNonCompliantCount?: number | undefined;
  OtherNonCompliantCount?: number | undefined;
}
export interface DescribeInstancePatchStatesResult {
  InstancePatchStates?: InstancePatchState[] | undefined;
  NextToken?: string | undefined;
}
export declare const InstancePatchStateOperatorType: {
  readonly EQUAL: "Equal";
  readonly GREATER_THAN: "GreaterThan";
  readonly LESS_THAN: "LessThan";
  readonly NOT_EQUAL: "NotEqual";
};
export type InstancePatchStateOperatorType =
  (typeof InstancePatchStateOperatorType)[keyof typeof InstancePatchStateOperatorType];
export interface InstancePatchStateFilter {
  Key: string | undefined;
  Values: string[] | undefined;
  Type: InstancePatchStateOperatorType | undefined;
}
export interface DescribeInstancePatchStatesForPatchGroupRequest {
  PatchGroup: string | undefined;
  Filters?: InstancePatchStateFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface DescribeInstancePatchStatesForPatchGroupResult {
  InstancePatchStates?: InstancePatchState[] | undefined;
  NextToken?: string | undefined;
}
export declare const InstancePropertyFilterOperator: {
  readonly BEGIN_WITH: "BeginWith";
  readonly EQUAL: "Equal";
  readonly GREATER_THAN: "GreaterThan";
  readonly LESS_THAN: "LessThan";
  readonly NOT_EQUAL: "NotEqual";
};
export type InstancePropertyFilterOperator =
  (typeof InstancePropertyFilterOperator)[keyof typeof InstancePropertyFilterOperator];
export interface InstancePropertyStringFilter {
  Key: string | undefined;
  Values: string[] | undefined;
  Operator?: InstancePropertyFilterOperator | undefined;
}
export declare const InstancePropertyFilterKey: {
  readonly ACTIVATION_IDS: "ActivationIds";
  readonly AGENT_VERSION: "AgentVersion";
  readonly ASSOCIATION_STATUS: "AssociationStatus";
  readonly DOCUMENT_NAME: "DocumentName";
  readonly IAM_ROLE: "IamRole";
  readonly INSTANCE_IDS: "InstanceIds";
  readonly PING_STATUS: "PingStatus";
  readonly PLATFORM_TYPES: "PlatformTypes";
  readonly RESOURCE_TYPE: "ResourceType";
};
export type InstancePropertyFilterKey =
  (typeof InstancePropertyFilterKey)[keyof typeof InstancePropertyFilterKey];
export interface InstancePropertyFilter {
  key: InstancePropertyFilterKey | undefined;
  valueSet: string[] | undefined;
}
export interface DescribeInstancePropertiesRequest {
  InstancePropertyFilterList?: InstancePropertyFilter[] | undefined;
  FiltersWithOperator?: InstancePropertyStringFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface InstanceProperty {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  InstanceType?: string | undefined;
  InstanceRole?: string | undefined;
  KeyName?: string | undefined;
  InstanceState?: string | undefined;
  Architecture?: string | undefined;
  IPAddress?: string | undefined;
  LaunchTime?: Date | undefined;
  PingStatus?: PingStatus | undefined;
  LastPingDateTime?: Date | undefined;
  AgentVersion?: string | undefined;
  PlatformType?: PlatformType | undefined;
  PlatformName?: string | undefined;
  PlatformVersion?: string | undefined;
  ActivationId?: string | undefined;
  IamRole?: string | undefined;
  RegistrationDate?: Date | undefined;
  ResourceType?: string | undefined;
  ComputerName?: string | undefined;
  AssociationStatus?: string | undefined;
  LastAssociationExecutionDate?: Date | undefined;
  LastSuccessfulAssociationExecutionDate?: Date | undefined;
  AssociationOverview?: InstanceAggregatedAssociationOverview | undefined;
  SourceId?: string | undefined;
  SourceType?: SourceType | undefined;
}
export interface DescribeInstancePropertiesResult {
  InstanceProperties?: InstanceProperty[] | undefined;
  NextToken?: string | undefined;
}
export declare class InvalidInstancePropertyFilterValue extends __BaseException {
  readonly name: "InvalidInstancePropertyFilterValue";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      InvalidInstancePropertyFilterValue,
      __BaseException
    >
  );
}
export interface DescribeInventoryDeletionsRequest {
  DeletionId?: string | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export declare const InventoryDeletionStatus: {
  readonly COMPLETE: "Complete";
  readonly IN_PROGRESS: "InProgress";
};
export type InventoryDeletionStatus =
  (typeof InventoryDeletionStatus)[keyof typeof InventoryDeletionStatus];
export interface InventoryDeletionStatusItem {
  DeletionId?: string | undefined;
  TypeName?: string | undefined;
  DeletionStartTime?: Date | undefined;
  LastStatus?: InventoryDeletionStatus | undefined;
  LastStatusMessage?: string | undefined;
  DeletionSummary?: InventoryDeletionSummary | undefined;
  LastStatusUpdateTime?: Date | undefined;
}
export interface DescribeInventoryDeletionsResult {
  InventoryDeletions?: InventoryDeletionStatusItem[] | undefined;
  NextToken?: string | undefined;
}
export declare class InvalidDeletionIdException extends __BaseException {
  readonly name: "InvalidDeletionIdException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidDeletionIdException, __BaseException>
  );
}
export interface MaintenanceWindowFilter {
  Key?: string | undefined;
  Values?: string[] | undefined;
}
export interface DescribeMaintenanceWindowExecutionsRequest {
  WindowId: string | undefined;
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export declare const MaintenanceWindowExecutionStatus: {
  readonly Cancelled: "CANCELLED";
  readonly Cancelling: "CANCELLING";
  readonly Failed: "FAILED";
  readonly InProgress: "IN_PROGRESS";
  readonly Pending: "PENDING";
  readonly SkippedOverlapping: "SKIPPED_OVERLAPPING";
  readonly Success: "SUCCESS";
  readonly TimedOut: "TIMED_OUT";
};
export type MaintenanceWindowExecutionStatus =
  (typeof MaintenanceWindowExecutionStatus)[keyof typeof MaintenanceWindowExecutionStatus];
export interface MaintenanceWindowExecution {
  WindowId?: string | undefined;
  WindowExecutionId?: string | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
}
export interface DescribeMaintenanceWindowExecutionsResult {
  WindowExecutions?: MaintenanceWindowExecution[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  WindowExecutionId: string | undefined;
  TaskId: string | undefined;
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export declare const MaintenanceWindowTaskType: {
  readonly Automation: "AUTOMATION";
  readonly Lambda: "LAMBDA";
  readonly RunCommand: "RUN_COMMAND";
  readonly StepFunctions: "STEP_FUNCTIONS";
};
export type MaintenanceWindowTaskType =
  (typeof MaintenanceWindowTaskType)[keyof typeof MaintenanceWindowTaskType];
export interface MaintenanceWindowExecutionTaskInvocationIdentity {
  WindowExecutionId?: string | undefined;
  TaskExecutionId?: string | undefined;
  InvocationId?: string | undefined;
  ExecutionId?: string | undefined;
  TaskType?: MaintenanceWindowTaskType | undefined;
  Parameters?: string | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
  OwnerInformation?: string | undefined;
  WindowTargetId?: string | undefined;
}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  WindowExecutionTaskInvocationIdentities?:
    | MaintenanceWindowExecutionTaskInvocationIdentity[]
    | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowExecutionTasksRequest {
  WindowExecutionId: string | undefined;
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowExecutionTaskIdentity {
  WindowExecutionId?: string | undefined;
  TaskExecutionId?: string | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
  TaskArn?: string | undefined;
  TaskType?: MaintenanceWindowTaskType | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}
export interface DescribeMaintenanceWindowExecutionTasksResult {
  WindowExecutionTaskIdentities?:
    | MaintenanceWindowExecutionTaskIdentity[]
    | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowsRequest {
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowIdentity {
  WindowId?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  Enabled?: boolean | undefined;
  Duration?: number | undefined;
  Cutoff?: number | undefined;
  Schedule?: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  EndDate?: string | undefined;
  StartDate?: string | undefined;
  NextExecutionTime?: string | undefined;
}
export declare const CreateAssociationRequestFilterSensitiveLog: (
  obj: CreateAssociationRequest
) => any;
export declare const AssociationDescriptionFilterSensitiveLog: (
  obj: AssociationDescription
) => any;
export declare const CreateAssociationResultFilterSensitiveLog: (
  obj: CreateAssociationResult
) => any;
export declare const CreateAssociationBatchRequestEntryFilterSensitiveLog: (
  obj: CreateAssociationBatchRequestEntry
) => any;
export declare const CreateAssociationBatchRequestFilterSensitiveLog: (
  obj: CreateAssociationBatchRequest
) => any;
export declare const FailedCreateAssociationFilterSensitiveLog: (
  obj: FailedCreateAssociation
) => any;
export declare const CreateAssociationBatchResultFilterSensitiveLog: (
  obj: CreateAssociationBatchResult
) => any;
export declare const CreateMaintenanceWindowRequestFilterSensitiveLog: (
  obj: CreateMaintenanceWindowRequest
) => any;
export declare const PatchSourceFilterSensitiveLog: (obj: PatchSource) => any;
export declare const CreatePatchBaselineRequestFilterSensitiveLog: (
  obj: CreatePatchBaselineRequest
) => any;
export declare const DescribeAssociationResultFilterSensitiveLog: (
  obj: DescribeAssociationResult
) => any;
export declare const InstanceInformationFilterSensitiveLog: (
  obj: InstanceInformation
) => any;
export declare const DescribeInstanceInformationResultFilterSensitiveLog: (
  obj: DescribeInstanceInformationResult
) => any;
export declare const InstancePatchStateFilterSensitiveLog: (
  obj: InstancePatchState
) => any;
export declare const DescribeInstancePatchStatesResultFilterSensitiveLog: (
  obj: DescribeInstancePatchStatesResult
) => any;
export declare const DescribeInstancePatchStatesForPatchGroupResultFilterSensitiveLog: (
  obj: DescribeInstancePatchStatesForPatchGroupResult
) => any;
export declare const InstancePropertyFilterSensitiveLog: (
  obj: InstanceProperty
) => any;
export declare const DescribeInstancePropertiesResultFilterSensitiveLog: (
  obj: DescribeInstancePropertiesResult
) => any;
export declare const MaintenanceWindowExecutionTaskInvocationIdentityFilterSensitiveLog: (
  obj: MaintenanceWindowExecutionTaskInvocationIdentity
) => any;
export declare const DescribeMaintenanceWindowExecutionTaskInvocationsResultFilterSensitiveLog: (
  obj: DescribeMaintenanceWindowExecutionTaskInvocationsResult
) => any;
export declare const MaintenanceWindowIdentityFilterSensitiveLog: (
  obj: MaintenanceWindowIdentity
) => any;
