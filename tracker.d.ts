export interface ItemStats {
    current: number;
    gathered: number;
    used: number;
}
export interface SessionData {
    items: Map<string, ItemStats>;
    startTime: Date;
}
export declare class SessionTracker {
    private sessionData;
    private previousCounts;
    constructor();
    /**
     * Create a new empty session
     */
    private createNewSession;
    /**
     * Update tracking with new inventory scan results
     * @param itemCounts Map of item ID to current count
     */
    updateCounts(itemCounts: Map<string, number>): void;
    /**
     * Get stats for a specific item
     */
    getItemStats(itemId: string): ItemStats | undefined;
    /**
     * Get all item stats
     */
    getAllStats(): Map<string, ItemStats>;
    /**
     * Get items with non-zero activity
     */
    getActiveItems(): [string, ItemStats][];
    /**
     * Get session start time
     */
    getSessionStartTime(): Date;
    /**
     * Get session duration in milliseconds
     */
    getSessionDuration(): number;
    /**
     * Format session duration as readable string
     */
    getFormattedDuration(): string;
    /**
     * Reset the session (clear all tracking data)
     */
    resetSession(): void;
    /**
     * Get summary statistics
     */
    getSummary(): {
        totalGathered: number;
        totalUsed: number;
        uniqueItems: number;
    };
    /**
     * Save session data to localStorage
     */
    private saveToStorage;
    /**
     * Load session data from localStorage
     */
    private loadFromStorage;
    /**
     * Export session data as JSON
     */
    exportSession(): string;
}
export declare const sessionTracker: SessionTracker;
