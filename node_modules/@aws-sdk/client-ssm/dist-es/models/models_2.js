import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { AssociationDescriptionFilterSensitiveLog, PatchSourceFilterSensitiveLog, } from "./models_0";
import { CommandFilterSensitiveLog, MaintenanceWindowTaskInvocationParametersFilterSensitiveLog, } from "./models_1";
import { SSMServiceException as __BaseException } from "./SSMServiceException";
export class FeatureNotAvailableException extends __BaseException {
    name = "FeatureNotAvailableException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "FeatureNotAvailableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, FeatureNotAvailableException.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationStepNotFoundException extends __BaseException {
    name = "AutomationStepNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationStepNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationStepNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAutomationSignalException extends __BaseException {
    name = "InvalidAutomationSignalException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAutomationSignalException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAutomationSignalException.prototype);
        this.Message = opts.Message;
    }
}
export const SignalType = {
    APPROVE: "Approve",
    REJECT: "Reject",
    RESUME: "Resume",
    REVOKE: "Revoke",
    START_STEP: "StartStep",
    STOP_STEP: "StopStep",
};
export class InvalidNotificationConfig extends __BaseException {
    name = "InvalidNotificationConfig";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidNotificationConfig",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidNotificationConfig.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidOutputFolder extends __BaseException {
    name = "InvalidOutputFolder";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidOutputFolder",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidOutputFolder.prototype);
    }
}
export class InvalidRole extends __BaseException {
    name = "InvalidRole";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidRole",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidRole.prototype);
        this.Message = opts.Message;
    }
}
export class ServiceQuotaExceededException extends __BaseException {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    Message;
    ResourceId;
    ResourceType;
    QuotaCode;
    ServiceCode;
    constructor(opts) {
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
        this.Message = opts.Message;
        this.ResourceId = opts.ResourceId;
        this.ResourceType = opts.ResourceType;
        this.QuotaCode = opts.QuotaCode;
        this.ServiceCode = opts.ServiceCode;
    }
}
export class InvalidAssociation extends __BaseException {
    name = "InvalidAssociation";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAssociation",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAssociation.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationDefinitionNotFoundException extends __BaseException {
    name = "AutomationDefinitionNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationDefinitionNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationDefinitionNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationDefinitionVersionNotFoundException extends __BaseException {
    name = "AutomationDefinitionVersionNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationDefinitionVersionNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationDefinitionVersionNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationExecutionLimitExceededException extends __BaseException {
    name = "AutomationExecutionLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationExecutionLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationExecutionLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAutomationExecutionParametersException extends __BaseException {
    name = "InvalidAutomationExecutionParametersException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAutomationExecutionParametersException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAutomationExecutionParametersException.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationDefinitionNotApprovedException extends __BaseException {
    name = "AutomationDefinitionNotApprovedException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationDefinitionNotApprovedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationDefinitionNotApprovedException.prototype);
        this.Message = opts.Message;
    }
}
export var ExecutionInputs;
(function (ExecutionInputs) {
    ExecutionInputs.visit = (value, visitor) => {
        if (value.Automation !== undefined)
            return visitor.Automation(value.Automation);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ExecutionInputs || (ExecutionInputs = {}));
export class TargetNotConnected extends __BaseException {
    name = "TargetNotConnected";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TargetNotConnected",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TargetNotConnected.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAutomationStatusUpdateException extends __BaseException {
    name = "InvalidAutomationStatusUpdateException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAutomationStatusUpdateException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAutomationStatusUpdateException.prototype);
        this.Message = opts.Message;
    }
}
export const StopType = {
    CANCEL: "Cancel",
    COMPLETE: "Complete",
};
export class AssociationVersionLimitExceeded extends __BaseException {
    name = "AssociationVersionLimitExceeded";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AssociationVersionLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationVersionLimitExceeded.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidUpdate extends __BaseException {
    name = "InvalidUpdate";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidUpdate",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidUpdate.prototype);
        this.Message = opts.Message;
    }
}
export class StatusUnchanged extends __BaseException {
    name = "StatusUnchanged";
    $fault = "client";
    constructor(opts) {
        super({
            name: "StatusUnchanged",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, StatusUnchanged.prototype);
    }
}
export class DocumentVersionLimitExceeded extends __BaseException {
    name = "DocumentVersionLimitExceeded";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DocumentVersionLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DocumentVersionLimitExceeded.prototype);
        this.Message = opts.Message;
    }
}
export class DuplicateDocumentContent extends __BaseException {
    name = "DuplicateDocumentContent";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DuplicateDocumentContent",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateDocumentContent.prototype);
        this.Message = opts.Message;
    }
}
export class DuplicateDocumentVersionName extends __BaseException {
    name = "DuplicateDocumentVersionName";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DuplicateDocumentVersionName",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateDocumentVersionName.prototype);
        this.Message = opts.Message;
    }
}
export const DocumentReviewAction = {
    Approve: "Approve",
    Reject: "Reject",
    SendForReview: "SendForReview",
    UpdateReview: "UpdateReview",
};
export class OpsMetadataKeyLimitExceededException extends __BaseException {
    name = "OpsMetadataKeyLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataKeyLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataKeyLimitExceededException.prototype);
    }
}
export class ResourceDataSyncConflictException extends __BaseException {
    name = "ResourceDataSyncConflictException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceDataSyncConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncConflictException.prototype);
        this.Message = opts.Message;
    }
}
export const RegisterTargetWithMaintenanceWindowRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const RegisterTaskWithMaintenanceWindowRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParametersFilterSensitiveLog(obj.TaskInvocationParameters),
    }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const SendCommandRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});
export const SendCommandResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Command && { Command: CommandFilterSensitiveLog(obj.Command) }),
});
export const UpdateAssociationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: SENSITIVE_STRING }),
});
export const UpdateAssociationResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AssociationDescription && {
        AssociationDescription: AssociationDescriptionFilterSensitiveLog(obj.AssociationDescription),
    }),
});
export const UpdateAssociationStatusResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AssociationDescription && {
        AssociationDescription: AssociationDescriptionFilterSensitiveLog(obj.AssociationDescription),
    }),
});
export const UpdateMaintenanceWindowRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const UpdateMaintenanceWindowResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const UpdateMaintenanceWindowTargetRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const UpdateMaintenanceWindowTargetResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const UpdateMaintenanceWindowTaskRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParametersFilterSensitiveLog(obj.TaskInvocationParameters),
    }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const UpdateMaintenanceWindowTaskResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParametersFilterSensitiveLog(obj.TaskInvocationParameters),
    }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
});
export const UpdatePatchBaselineRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});
export const UpdatePatchBaselineResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSourceFilterSensitiveLog(item)) }),
});
