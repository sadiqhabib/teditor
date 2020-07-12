/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(["require", "exports", "vs/platform/instantiation/common/extensions", "vs/platform/accessibility/common/accessibility", "vs/platform/contextview/browser/contextView", "vs/platform/contextview/browser/contextMenuService", "vs/workbench/services/backup/common/backup", "vs/workbench/services/backup/common/backupFileService", "vs/platform/extensionManagement/common/extensionManagement", "vs/platform/extensionManagement/common/extensionTipsService", "vs/workbench/services/extensionManagement/common/extensionManagementService", "vs/platform/remote/common/tunnel", "vs/platform/log/common/log", "vs/platform/log/common/fileLogService", "vs/platform/userDataSync/common/userDataSyncMachines", "vs/platform/userDataSync/common/userDataSync", "vs/platform/userDataSync/common/storageKeys", "vs/platform/userDataSync/common/userDataSyncLog", "vs/platform/userDataSync/common/userDataSyncStoreService", "vs/platform/userDataSync/common/userDataSyncBackupStoreService", "vs/platform/userDataSync/common/userDataSyncService", "vs/platform/userDataSync/common/userDataSyncAccount", "vs/workbench/contrib/userDataSync/browser/userDataAutoSyncService", "vs/platform/accessibility/common/accessibilityService", "vs/workbench/services/title/common/titleService", "vs/workbench/browser/parts/titlebar/titlebarPart", "vs/workbench/workbench.common.main", "vs/workbench/browser/web.main", "vs/workbench/services/integrity/browser/integrityService", "vs/workbench/services/textMate/browser/textMateService", "vs/workbench/services/search/common/searchService", "vs/workbench/services/output/common/outputChannelModelService", "vs/workbench/services/textfile/browser/browserTextFileService", "vs/workbench/services/keybinding/browser/keymapService", "vs/workbench/services/extensions/browser/extensionService", "vs/workbench/services/extensionManagement/common/extensionManagementServerService", "vs/workbench/services/telemetry/browser/telemetryService", "vs/workbench/services/configurationResolver/browser/configurationResolverService", "vs/workbench/services/credentials/browser/credentialsService", "vs/workbench/services/url/browser/urlService", "vs/workbench/services/update/browser/updateService", "vs/workbench/contrib/tags/browser/workspaceTagsService", "vs/workbench/services/workspaces/browser/workspacesService", "vs/workbench/services/workspaces/browser/workspaceEditingService", "vs/workbench/services/dialogs/browser/dialogService", "vs/workbench/services/dialogs/browser/fileDialogService", "vs/workbench/services/host/browser/browserHostService", "vs/workbench/services/request/browser/requestService", "vs/workbench/services/lifecycle/browser/lifecycleService", "vs/workbench/services/clipboard/browser/clipboardService", "vs/workbench/services/extensionResourceLoader/browser/extensionResourceLoaderService", "vs/workbench/services/path/browser/pathService", "vs/workbench/contrib/files/browser/files.web.contribution", "vs/workbench/contrib/backup/browser/backup.web.contribution", "vs/workbench/contrib/preferences/browser/keyboardLayoutPicker", "vs/workbench/contrib/debug/browser/extensionHostDebugService", "vs/workbench/contrib/webview/browser/webviewService", "vs/workbench/contrib/webview/browser/webviewWorkbenchService", "vs/workbench/contrib/terminal/browser/terminal.web.contribution", "vs/workbench/contrib/terminal/browser/terminalInstanceService", "vs/workbench/contrib/tasks/browser/taskService", "vs/workbench/contrib/welcome/telemetryOptOut/browser/telemetryOptOut.contribution", "vs/workbench/contrib/issue/browser/issue.web.contribution"], function (require, exports, extensions_1, accessibility_1, contextView_1, contextMenuService_1, backup_1, backupFileService_1, extensionManagement_1, extensionTipsService_1, extensionManagementService_1, tunnel_1, log_1, fileLogService_1, userDataSyncMachines_1, userDataSync_1, storageKeys_1, userDataSyncLog_1, userDataSyncStoreService_1, userDataSyncBackupStoreService_1, userDataSyncService_1, userDataSyncAccount_1, userDataAutoSyncService_1, accessibilityService_1, titleService_1, titlebarPart_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    extensions_1.registerSingleton(extensionManagement_1.IExtensionManagementService, extensionManagementService_1.ExtensionManagementService);
    extensions_1.registerSingleton(backup_1.IBackupFileService, backupFileService_1.BackupFileService);
    extensions_1.registerSingleton(accessibility_1.IAccessibilityService, accessibilityService_1.AccessibilityService, true);
    extensions_1.registerSingleton(contextView_1.IContextMenuService, contextMenuService_1.ContextMenuService);
    extensions_1.registerSingleton(tunnel_1.ITunnelService, tunnel_1.TunnelService, true);
    extensions_1.registerSingleton(log_1.ILoggerService, fileLogService_1.FileLoggerService);
    extensions_1.registerSingleton(userDataSync_1.IUserDataSyncLogService, userDataSyncLog_1.UserDataSyncLogService);
    extensions_1.registerSingleton(userDataSync_1.IUserDataSyncStoreService, userDataSyncStoreService_1.UserDataSyncStoreService);
    extensions_1.registerSingleton(userDataSyncMachines_1.IUserDataSyncMachinesService, userDataSyncMachines_1.UserDataSyncMachinesService);
    extensions_1.registerSingleton(userDataSync_1.IUserDataSyncBackupStoreService, userDataSyncBackupStoreService_1.UserDataSyncBackupStoreService);
    extensions_1.registerSingleton(storageKeys_1.IStorageKeysSyncRegistryService, storageKeys_1.StorageKeysSyncRegistryService);
    extensions_1.registerSingleton(userDataSyncAccount_1.IUserDataSyncAccountService, userDataSyncAccount_1.UserDataSyncAccountService);
    extensions_1.registerSingleton(userDataSync_1.IUserDataAutoSyncService, userDataAutoSyncService_1.UserDataAutoSyncService);
    extensions_1.registerSingleton(userDataSync_1.IUserDataSyncService, userDataSyncService_1.UserDataSyncService);
    extensions_1.registerSingleton(titleService_1.ITitleService, titlebarPart_1.TitlebarPart);
    extensions_1.registerSingleton(extensionManagement_1.IExtensionTipsService, extensionTipsService_1.ExtensionTipsService);
});
//#endregion
//# __sourceMappingURL=workbench.web.main.js.map