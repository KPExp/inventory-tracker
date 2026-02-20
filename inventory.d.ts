import * as a1lib from 'alt1/base';
export interface InventorySlot {
    x: number;
    y: number;
    width: number;
    height: number;
    imageData: ImageData | null;
}
export interface InventoryGrid {
    x: number;
    y: number;
    width: number;
    height: number;
    slots: InventorySlot[];
    found: boolean;
}
export declare class InventoryDetector {
    private lastKnownPosition;
    /**
     * Attempt to find the inventory in the current screen capture
     */
    findInventory(img: a1lib.ImgRefBind): InventoryGrid | null;
    /**
     * Calculate inventory grid from bottom icons position
     */
    private calculateFromBottomIcons;
    /**
     * Build the inventory grid structure
     */
    private buildInventoryGrid;
    /**
     * Capture image data for all inventory slots
     */
    captureSlots(img: a1lib.ImgRefBind, grid: InventoryGrid): InventorySlot[];
    /**
     * Set inventory position manually (for calibration)
     */
    setInventoryPosition(x: number, y: number): void;
    /**
     * Clear cached position
     */
    clearPosition(): void;
    /**
     * Get the current known inventory position
     */
    getInventoryPosition(): {
        x: number;
        y: number;
    } | null;
    /**
     * Check if a slot appears to be empty based on color
     */
    isSlotEmpty(imageData: ImageData): boolean;
}
export declare const inventoryDetector: InventoryDetector;
