/**
 * Global type declarations for mint-tsdocs
 * Auto-generated during documentation build.
 *
 * This file provides:
 * - Mintlify component type declarations (ResponseField, Expandable)
 * - Window object augmentations for runtime scripts
 * - Type-safe ValidRefId and ValidPageId unions
 *
 * @generated
 */

// ============================================================================
// Mintlify Component Declarations
// ============================================================================

/**
 * Global type declarations for Mintlify components.
 * These components are provided by Mintlify at runtime.
 */
declare namespace JSX {
  interface IntrinsicElements {
    ResponseField: any;
    Expandable: any;
  }
}

// Also declare as global React components
declare const ResponseField: React.FC<any>;
declare const Expandable: React.FC<any>;

// ============================================================================
// ValidRefs Types
// ============================================================================

/**
 * Union type of all valid API reference IDs
 *
 * Generated from the API model structure during documentation build.
 * Used by RefLink component for type-safe reference validation.
 */
export type ValidRefId =
  | "core-editor"
  | "core-editor.CoreEvents"
  | "core-editor.EditorEvents"
  | "core-editor.EventEmitter"
  | "core-editor.EventEmitter.constructor"
  | "core-editor.EventEmitter.emit"
  | "core-editor.EventEmitter.on"
  | "core-editor.EventEmitter.runEvents"
  | "core-editor.NanoforgeClient"
  | "core-editor.NanoforgeClient.useGraphics"
  | "core-editor.NanoforgeClient.useInput"
  | "core-editor.NanoforgeClient.useSound"
  | "core-editor.NanoforgeFactory"
  | "core-editor.NanoforgeServer";

/**
 * Check if a RefId is valid
 *
 * @param refId - The reference ID to check
 * @returns True if the refId is valid
 */
export function isValidRef(refId: string): refId is ValidRefId;

// ============================================================================
// ValidPages Types
// ============================================================================

/**
 * Union type of all valid page IDs from docs.json
 *
 * Generated from docs.json navigation structure during documentation build.
 * Used by PageLink component for type-safe page validation.
 */
export type ValidPageId =
  never;

/**
 * Check if a PageId is valid
 *
 * @param pageId - The page ID to check
 * @returns True if the pageId is valid
 */
export function isValidPage(pageId: string): pageId is ValidPageId;

// ============================================================================
// TsdocsConfig Types
// ============================================================================

/**
 * Runtime configuration for TSDocs components
 *
 * Available via window.TSDOCS_CONFIG after tsdocs-config.js loads.
 */
export interface TsdocsConfig {
  /** Base path for API reference pages (e.g., "/reference") */
  basePath: string;

  /** Package name */
  packageName: string;

  /** Generated timestamp (ISO 8601) */
  generatedAt: string;
}

// ============================================================================
// Window Object Augmentation
// ============================================================================

declare global {
  interface Window {
    /**
     * Set of all valid RefIds in the documentation
     * Populated by ValidRefs.js at runtime
     */
    VALID_REFS?: Set<ValidRefId>;

    /**
     * Set of all valid PageIds in the documentation
     * Populated by ValidPages.js at runtime
     */
    VALID_PAGES?: Set<ValidPageId>;

    /**
     * Runtime configuration object
     * Populated by tsdocs-config.js at runtime
     */
    TSDOCS_CONFIG?: TsdocsConfig;

    /**
     * Get absolute path for an API reference
     *
     * @param refId - The RefId (e.g., "mint-tsdocs.MarkdownDocumenter")
     * @returns Absolute path (e.g., "/reference/mint-tsdocs/MarkdownDocumenter")
     *
     * @example
     * getRefPath("mint-tsdocs.MarkdownDocumenter")
     * // Returns: "/reference/mint-tsdocs/MarkdownDocumenter"
     */
    getRefPath?: (refId: string) => string;
  }
}

export {};
