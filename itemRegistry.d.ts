export interface RegisteredItem {
    id: string;
    name: string;
    imageData: number[];
    width: number;
    height: number;
}
export interface MatchResult {
    item: RegisteredItem | null;
    confidence: number;
}
export declare class ItemRegistry {
    private items;
    constructor();
    /**
     * Register a new item with its image data
     */
    registerItem(name: string, imageData: ImageData): RegisteredItem;
    /**
     * Remove an item from the registry
     */
    removeItem(id: string): boolean;
    /**
     * Get all registered items
     */
    getAllItems(): RegisteredItem[];
    /**
     * Get item by ID
     */
    getItem(id: string): RegisteredItem | undefined;
    /**
     * Find the best matching registered item for a slot image
     */
    findMatch(slotImageData: ImageData): MatchResult;
    /**
     * Compare a slot image to a registered item's stored image
     * Returns a similarity percentage (0-100)
     */
    private compareImages;
    /**
     * Generate a unique ID for an item
     */
    private generateId;
    /**
     * Save registry to localStorage
     */
    private saveToStorage;
    /**
     * Load registry from localStorage
     */
    private loadFromStorage;
    /**
     * Export registry as JSON string
     */
    exportRegistry(): string;
    /**
     * Import registry from JSON string
     */
    importRegistry(jsonString: string, merge?: boolean): boolean;
    /**
     * Clear all items from registry
     */
    clearRegistry(): void;
    /**
     * Get the number of registered items
     */
    get count(): number;
}
export declare const itemRegistry: ItemRegistry;
