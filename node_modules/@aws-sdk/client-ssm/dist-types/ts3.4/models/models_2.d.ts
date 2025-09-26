import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import {
  AlarmConfiguration,
  AssociationComplianceSeverity,
  AssociationDescription,
  AssociationStatus,
  AssociationSyncCompliance,
  AttachmentsSource,
  DocumentDescription,
  DocumentFormat,
  DocumentHashType,
  ExecutionMode,
  InstanceAssociationOutputLocation,
  MaintenanceWindowTaskType,
  MetadataValue,
  OperatingSystem,
  OpsItemDataValue,
  OpsItemNotification,
  PatchAction,
  PatchComplianceLevel,
  PatchComplianceStatus,
  PatchFilterGroup,
  PatchRuleGroup,
  PatchSource,
  RelatedOpsItem,
  ResourceDataSyncSource,
  ResourceTypeForTagging,
  Runbook,
  Tag,
  Target,
  TargetLocation,
} from "./models_0";
import {
  CloudWatchOutputConfig,
  Command,
  DocumentReviewCommentSource,
  InventoryFilter,
  InventoryGroup,
  LoggingInfo,
  MaintenanceWindowResourceType,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskInvocationParameters,
  MaintenanceWindowTaskParameterValueExpression,
  NodeAggregatorType,
  NodeAttributeName,
  NodeFilter,
  NodeTypeName,
  NotificationConfig,
  OpsFilter,
  OpsItemStatus,
  OpsResultAttribute,
  ResultAttribute,
  ServiceSetting,
} from "./models_1";
import { SSMServiceException as __BaseException } from "./SSMServiceException";
export interface RegisterPatchBaselineForPatchGroupResult {
  BaselineId?: string | undefined;
  PatchGroup?: string | undefined;
}
export interface RegisterTargetWithMaintenanceWindowRequest {
  WindowId: string | undefined;
  ResourceType: MaintenanceWindowResourceType | undefined;
  Targets: Target[] | undefined;
  OwnerInformation?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  ClientToken?: string | undefined;
}
export interface RegisterTargetWithMaintenanceWindowResult {
  WindowTargetId?: string | undefined;
}
export declare class FeatureNotAvailableException extends __BaseException {
  readonly name: "FeatureNotAvailableException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<FeatureNotAvailableException, __BaseException>
  );
}
export interface RegisterTaskWithMaintenanceWindowRequest {
  WindowId: string | undefined;
  Targets?: Target[] | undefined;
  TaskArn: string | undefined;
  ServiceRoleArn?: string | undefined;
  TaskType: MaintenanceWindowTaskType | undefined;
  TaskParameters?:
    | Record<string, MaintenanceWindowTaskParameterValueExpression>
    | undefined;
  TaskInvocationParameters?:
    | MaintenanceWindowTaskInvocationParameters
    | undefined;
  Priority?: number | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  LoggingInfo?: LoggingInfo | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  ClientToken?: string | undefined;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface RegisterTaskWithMaintenanceWindowResult {
  WindowTaskId?: string | undefined;
}
export interface RemoveTagsFromResourceRequest {
  ResourceType: ResourceTypeForTagging | undefined;
  ResourceId: string | undefined;
  TagKeys: string[] | undefined;
}
export interface RemoveTagsFromResourceResult {}
export interface ResetServiceSettingRequest {
  SettingId: string | undefined;
}
export interface ResetServiceSettingResult {
  ServiceSetting?: ServiceSetting | undefined;
}
export interface ResumeSessionRequest {
  SessionId: string | undefined;
}
export interface ResumeSessionResponse {
  SessionId?: string | undefined;
  TokenValue?: string | undefined;
  StreamUrl?: string | undefined;
}
export declare class AutomationStepNotFoundException extends __BaseException {
  readonly name: "AutomationStepNotFoundException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AutomationStepNotFoundException,
      __BaseException
    >
  );
}
export declare class InvalidAutomationSignalException extends __BaseException {
  readonly name: "InvalidAutomationSignalException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      InvalidAutomationSignalException,
      __BaseException
    >
  );
}
export declare const SignalType: {
  readonly APPROVE: "Approve";
  readonly REJECT: "Reject";
  readonly RESUME: "Resume";
  readonly REVOKE: "Revoke";
  readonly START_STEP: "StartStep";
  readonly STOP_STEP: "StopStep";
};
export type SignalType = (typeof SignalType)[keyof typeof SignalType];
export interface SendAutomationSignalRequest {
  AutomationExecutionId: string | undefined;
  SignalType: SignalType | undefined;
  Payload?: Record<string, string[]> | undefined;
}
export interface SendAutomationSignalResult {}
export declare class InvalidNotificationConfig extends __BaseException {
  readonly name: "InvalidNotificationConfig";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidNotificationConfig, __BaseException>
  );
}
export declare class InvalidOutputFolder extends __BaseException {
  readonly name: "InvalidOutputFolder";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidOutputFolder, __BaseException>
  );
}
export declare class InvalidRole extends __BaseException {
  readonly name: "InvalidRole";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidRole, __BaseException>);
}
export interface SendCommandRequest {
  InstanceIds?: string[] | undefined;
  Targets?: Target[] | undefined;
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  DocumentHash?: string | undefined;
  DocumentHashType?: DocumentHashType | undefined;
  TimeoutSeconds?: number | undefined;
  Comment?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  OutputS3Region?: string | undefined;
  OutputS3BucketName?: string | undefined;
  OutputS3KeyPrefix?: string | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  ServiceRoleArn?: string | undefined;
  NotificationConfig?: NotificationConfig | undefined;
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface SendCommandResult {
  Command?: Command | undefined;
}
export declare class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException";
  readonly $fault: "client";
  Message: string | undefined;
  ResourceId?: string | undefined;
  ResourceType?: string | undefined;
  QuotaCode: string | undefined;
  ServiceCode: string | undefined;
  constructor(
    opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>
  );
}
export interface StartAccessRequestRequest {
  Reason: string | undefined;
  Targets: Target[] | undefined;
  Tags?: Tag[] | undefined;
}
export interface StartAccessRequestResponse {
  AccessRequestId?: string | undefined;
}
export declare class InvalidAssociation extends __BaseException {
  readonly name: "InvalidAssociation";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidAssociation, __BaseException>);
}
export interface StartAssociationsOnceRequest {
  AssociationIds: string[] | undefined;
}
export interface StartAssociationsOnceResult {}
export declare class AutomationDefinitionNotFoundException extends __BaseException {
  readonly name: "AutomationDefinitionNotFoundException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AutomationDefinitionNotFoundException,
      __BaseException
    >
  );
}
export declare class AutomationDefinitionVersionNotFoundException extends __BaseException {
  readonly name: "AutomationDefinitionVersionNotFoundException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AutomationDefinitionVersionNotFoundException,
      __BaseException
    >
  );
}
export declare class AutomationExecutionLimitExceededException extends __BaseException {
  readonly name: "AutomationExecutionLimitExceededException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AutomationExecutionLimitExceededException,
      __BaseException
    >
  );
}
export declare class InvalidAutomationExecutionParametersException extends __BaseException {
  readonly name: "InvalidAutomationExecutionParametersException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      InvalidAutomationExecutionParametersException,
      __BaseException
    >
  );
}
export interface StartAutomationExecutionRequest {
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  ClientToken?: string | undefined;
  Mode?: ExecutionMode | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  Tags?: Tag[] | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TargetLocationsURL?: string | undefined;
}
export interface StartAutomationExecutionResult {
  AutomationExecutionId?: string | undefined;
}
export declare class AutomationDefinitionNotApprovedException extends __BaseException {
  readonly name: "AutomationDefinitionNotApprovedException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AutomationDefinitionNotApprovedException,
      __BaseException
    >
  );
}
export interface StartChangeRequestExecutionRequest {
  ScheduledTime?: Date | undefined;
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  ChangeRequestName?: string | undefined;
  ClientToken?: string | undefined;
  AutoApprove?: boolean | undefined;
  Runbooks: Runbook[] | undefined;
  Tags?: Tag[] | undefined;
  ScheduledEndTime?: Date | undefined;
  ChangeDetails?: string | undefined;
}
export interface StartChangeRequestExecutionResult {
  AutomationExecutionId?: string | undefined;
}
export interface AutomationExecutionInputs {
  Parameters?: Record<string, string[]> | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  TargetLocationsURL?: string | undefined;
}
export type ExecutionInputs =
  | ExecutionInputs.AutomationMember
  | ExecutionInputs.$UnknownMember;
export declare namespace ExecutionInputs {
  interface AutomationMember {
    Automation: AutomationExecutionInputs;
    $unknown?: never;
  }
  interface $UnknownMember {
    Automation?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Automation: (value: AutomationExecutionInputs) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: ExecutionInputs, visitor: Visitor<T>) => T;
}
export interface StartExecutionPreviewRequest {
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  ExecutionInputs?: ExecutionInputs | undefined;
}
export interface StartExecutionPreviewResponse {
  ExecutionPreviewId?: string | undefined;
}
export interface StartSessionRequest {
  Target: string | undefined;
  DocumentName?: string | undefined;
  Reason?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
}
export interface StartSessionResponse {
  SessionId?: string | undefined;
  TokenValue?: string | undefined;
  StreamUrl?: string | undefined;
}
export declare class TargetNotConnected extends __BaseException {
  readonly name: "TargetNotConnected";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<TargetNotConnected, __BaseException>);
}
export declare class InvalidAutomationStatusUpdateException extends __BaseException {
  readonly name: "InvalidAutomationStatusUpdateException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      InvalidAutomationStatusUpdateException,
      __BaseException
    >
  );
}
export declare const StopType: {
  readonly CANCEL: "Cancel";
  readonly COMPLETE: "Complete";
};
export type StopType = (typeof StopType)[keyof typeof StopType];
export interface StopAutomationExecutionRequest {
  AutomationExecutionId: string | undefined;
  Type?: StopType | undefined;
}
export interface StopAutomationExecutionResult {}
export interface TerminateSessionRequest {
  SessionId: string | undefined;
}
export interface TerminateSessionResponse {
  SessionId?: string | undefined;
}
export interface UnlabelParameterVersionRequest {
  Name: string | undefined;
  ParameterVersion: number | undefined;
  Labels: string[] | undefined;
}
export interface UnlabelParameterVersionResult {
  RemovedLabels?: string[] | undefined;
  InvalidLabels?: string[] | undefined;
}
export declare class AssociationVersionLimitExceeded extends __BaseException {
  readonly name: "AssociationVersionLimitExceeded";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AssociationVersionLimitExceeded,
      __BaseException
    >
  );
}
export declare class InvalidUpdate extends __BaseException {
  readonly name: "InvalidUpdate";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(opts: __ExceptionOptionType<InvalidUpdate, __BaseException>);
}
export interface UpdateAssociationRequest {
  AssociationId: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  DocumentVersion?: string | undefined;
  ScheduleExpression?: string | undefined;
  OutputLocation?: InstanceAssociationOutputLocation | undefined;
  Name?: string | undefined;
  Targets?: Target[] | undefined;
  AssociationName?: string | undefined;
  AssociationVersion?: string | undefined;
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
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface UpdateAssociationResult {
  AssociationDescription?: AssociationDescription | undefined;
}
export declare class StatusUnchanged extends __BaseException {
  readonly name: "StatusUnchanged";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<StatusUnchanged, __BaseException>);
}
export interface UpdateAssociationStatusRequest {
  Name: string | undefined;
  InstanceId: string | undefined;
  AssociationStatus: AssociationStatus | undefined;
}
export interface UpdateAssociationStatusResult {
  AssociationDescription?: AssociationDescription | undefined;
}
export declare class DocumentVersionLimitExceeded extends __BaseException {
  readonly name: "DocumentVersionLimitExceeded";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<DocumentVersionLimitExceeded, __BaseException>
  );
}
export declare class DuplicateDocumentContent extends __BaseException {
  readonly name: "DuplicateDocumentContent";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<DuplicateDocumentContent, __BaseException>
  );
}
export declare class DuplicateDocumentVersionName extends __BaseException {
  readonly name: "DuplicateDocumentVersionName";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<DuplicateDocumentVersionName, __BaseException>
  );
}
export interface UpdateDocumentRequest {
  Content: string | undefined;
  Attachments?: AttachmentsSource[] | undefined;
  Name: string | undefined;
  DisplayName?: string | undefined;
  VersionName?: string | undefined;
  DocumentVersion?: string | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  TargetType?: string | undefined;
}
export interface UpdateDocumentResult {
  DocumentDescription?: DocumentDescription | undefined;
}
export interface UpdateDocumentDefaultVersionRequest {
  Name: string | undefined;
  DocumentVersion: string | undefined;
}
export interface DocumentDefaultVersionDescription {
  Name?: string | undefined;
  DefaultVersion?: string | undefined;
  DefaultVersionName?: string | undefined;
}
export interface UpdateDocumentDefaultVersionResult {
  Description?: DocumentDefaultVersionDescription | undefined;
}
export declare const DocumentReviewAction: {
  readonly Approve: "Approve";
  readonly Reject: "Reject";
  readonly SendForReview: "SendForReview";
  readonly UpdateReview: "UpdateReview";
};
export type DocumentReviewAction =
  (typeof DocumentReviewAction)[keyof typeof DocumentReviewAction];
export interface DocumentReviews {
  Action: DocumentReviewAction | undefined;
  Comment?: DocumentReviewCommentSource[] | undefined;
}
export interface UpdateDocumentMetadataRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  DocumentReviews: DocumentReviews | undefined;
}
export interface UpdateDocumentMetadataResponse {}
export interface UpdateMaintenanceWindowRequest {
  WindowId: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  StartDate?: string | undefined;
  EndDate?: string | undefined;
  Schedule?: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  Cutoff?: number | undefined;
  AllowUnassociatedTargets?: boolean | undefined;
  Enabled?: boolean | undefined;
  Replace?: boolean | undefined;
}
export interface UpdateMaintenanceWindowResult {
  WindowId?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  StartDate?: string | undefined;
  EndDate?: string | undefined;
  Schedule?: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  Cutoff?: number | undefined;
  AllowUnassociatedTargets?: boolean | undefined;
  Enabled?: boolean | undefined;
}
export interface UpdateMaintenanceWindowTargetRequest {
  WindowId: string | undefined;
  WindowTargetId: string | undefined;
  Targets?: Target[] | undefined;
  OwnerInformation?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  Replace?: boolean | undefined;
}
export interface UpdateMaintenanceWindowTargetResult {
  WindowId?: string | undefined;
  WindowTargetId?: string | undefined;
  Targets?: Target[] | undefined;
  OwnerInformation?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
}
export interface UpdateMaintenanceWindowTaskRequest {
  WindowId: string | undefined;
  WindowTaskId: string | undefined;
  Targets?: Target[] | undefined;
  TaskArn?: string | undefined;
  ServiceRoleArn?: string | undefined;
  TaskParameters?:
    | Record<string, MaintenanceWindowTaskParameterValueExpression>
    | undefined;
  TaskInvocationParameters?:
    | MaintenanceWindowTaskInvocationParameters
    | undefined;
  Priority?: number | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  LoggingInfo?: LoggingInfo | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  Replace?: boolean | undefined;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface UpdateMaintenanceWindowTaskResult {
  WindowId?: string | undefined;
  WindowTaskId?: string | undefined;
  Targets?: Target[] | undefined;
  TaskArn?: string | undefined;
  ServiceRoleArn?: string | undefined;
  TaskParameters?:
    | Record<string, MaintenanceWindowTaskParameterValueExpression>
    | undefined;
  TaskInvocationParameters?:
    | MaintenanceWindowTaskInvocationParameters
    | undefined;
  Priority?: number | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  LoggingInfo?: LoggingInfo | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface UpdateManagedInstanceRoleRequest {
  InstanceId: string | undefined;
  IamRole: string | undefined;
}
export interface UpdateManagedInstanceRoleResult {}
export interface UpdateOpsItemRequest {
  Description?: string | undefined;
  OperationalData?: Record<string, OpsItemDataValue> | undefined;
  OperationalDataToDelete?: string[] | undefined;
  Notifications?: OpsItemNotification[] | undefined;
  Priority?: number | undefined;
  RelatedOpsItems?: RelatedOpsItem[] | undefined;
  Status?: OpsItemStatus | undefined;
  OpsItemId: string | undefined;
  Title?: string | undefined;
  Category?: string | undefined;
  Severity?: string | undefined;
  ActualStartTime?: Date | undefined;
  ActualEndTime?: Date | undefined;
  PlannedStartTime?: Date | undefined;
  PlannedEndTime?: Date | undefined;
  OpsItemArn?: string | undefined;
}
export interface UpdateOpsItemResponse {}
export declare class OpsMetadataKeyLimitExceededException extends __BaseException {
  readonly name: "OpsMetadataKeyLimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      OpsMetadataKeyLimitExceededException,
      __BaseException
    >
  );
}
export interface UpdateOpsMetadataRequest {
  OpsMetadataArn: string | undefined;
  MetadataToUpdate?: Record<string, MetadataValue> | undefined;
  KeysToDelete?: string[] | undefined;
}
export interface UpdateOpsMetadataResult {
  OpsMetadataArn?: string | undefined;
}
export interface UpdatePatchBaselineRequest {
  BaselineId: string | undefined;
  Name?: string | undefined;
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
  Replace?: boolean | undefined;
}
export interface UpdatePatchBaselineResult {
  BaselineId?: string | undefined;
  Name?: string | undefined;
  OperatingSystem?: OperatingSystem | undefined;
  GlobalFilters?: PatchFilterGroup | undefined;
  ApprovalRules?: PatchRuleGroup | undefined;
  ApprovedPatches?: string[] | undefined;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;
  RejectedPatches?: string[] | undefined;
  RejectedPatchesAction?: PatchAction | undefined;
  CreatedDate?: Date | undefined;
  ModifiedDate?: Date | undefined;
  Description?: string | undefined;
  Sources?: PatchSource[] | undefined;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}
export declare class ResourceDataSyncConflictException extends __BaseException {
  readonly name: "ResourceDataSyncConflictException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ResourceDataSyncConflictException,
      __BaseException
    >
  );
}
export interface UpdateResourceDataSyncRequest {
  SyncName: string | undefined;
  SyncType: string | undefined;
  SyncSource: ResourceDataSyncSource | undefined;
}
export interface UpdateResourceDataSyncResult {}
export interface UpdateServiceSettingRequest {
  SettingId: string | undefined;
  SettingValue: string | undefined;
}
export interface UpdateServiceSettingResult {}
export interface InventoryAggregator {
  Expression?: string | undefined;
  Aggregators?: InventoryAggregator[] | undefined;
  Groups?: InventoryGroup[] | undefined;
}
export interface NodeAggregator {
  AggregatorType: NodeAggregatorType | undefined;
  TypeName: NodeTypeName | undefined;
  AttributeName: NodeAttributeName | undefined;
  Aggregators?: NodeAggregator[] | undefined;
}
export interface OpsAggregator {
  AggregatorType?: string | undefined;
  TypeName?: string | undefined;
  AttributeName?: string | undefined;
  Values?: Record<string, string> | undefined;
  Filters?: OpsFilter[] | undefined;
  Aggregators?: OpsAggregator[] | undefined;
}
export interface GetInventoryRequest {
  Filters?: InventoryFilter[] | undefined;
  Aggregators?: InventoryAggregator[] | undefined;
  ResultAttributes?: ResultAttribute[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface GetOpsSummaryRequest {
  SyncName?: string | undefined;
  Filters?: OpsFilter[] | undefined;
  Aggregators?: OpsAggregator[] | undefined;
  ResultAttributes?: OpsResultAttribute[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface ListNodesSummaryRequest {
  SyncName?: string | undefined;
  Filters?: NodeFilter[] | undefined;
  Aggregators: NodeAggregator[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export declare const RegisterTargetWithMaintenanceWindowRequestFilterSensitiveLog: (
  obj: RegisterTargetWithMaintenanceWindowRequest
) => any;
export declare const RegisterTaskWithMaintenanceWindowRequestFilterSensitiveLog: (
  obj: RegisterTaskWithMaintenanceWindowRequest
) => any;
export declare const SendCommandRequestFilterSensitiveLog: (
  obj: SendCommandRequest
) => any;
export declare const SendCommandResultFilterSensitiveLog: (
  obj: SendCommandResult
) => any;
export declare const UpdateAssociationRequestFilterSensitiveLog: (
  obj: UpdateAssociationRequest
) => any;
export declare const UpdateAssociationResultFilterSensitiveLog: (
  obj: UpdateAssociationResult
) => any;
export declare const UpdateAssociationStatusResultFilterSensitiveLog: (
  obj: UpdateAssociationStatusResult
) => any;
export declare const UpdateMaintenanceWindowRequestFilterSensitiveLog: (
  obj: UpdateMaintenanceWindowRequest
) => any;
export declare const UpdateMaintenanceWindowResultFilterSensitiveLog: (
  obj: UpdateMaintenanceWindowResult
) => any;
export declare const UpdateMaintenanceWindowTargetRequestFilterSensitiveLog: (
  obj: UpdateMaintenanceWindowTargetRequest
) => any;
export declare const UpdateMaintenanceWindowTargetResultFilterSensitiveLog: (
  obj: UpdateMaintenanceWindowTargetResult
) => any;
export declare const UpdateMaintenanceWindowTaskRequestFilterSensitiveLog: (
  obj: UpdateMaintenanceWindowTaskRequest
) => any;
export declare const UpdateMaintenanceWindowTaskResultFilterSensitiveLog: (
  obj: UpdateMaintenanceWindowTaskResult
) => any;
export declare const UpdatePatchBaselineRequestFilterSensitiveLog: (
  obj: UpdatePatchBaselineRequest
) => any;
export declare const UpdatePatchBaselineResultFilterSensitiveLog: (
  obj: UpdatePatchBaselineResult
) => any;
