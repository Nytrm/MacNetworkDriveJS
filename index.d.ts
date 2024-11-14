declare module "macNetworkDrive" {
    /**
     * Lists all network drives currently mounted on the system.
     * @returns A promise that resolves to an object where keys are network drive paths and values are local mount points.
     */
    export function list(): Promise<{ [drivePath: string]: string }>;
  
    /**
     * Finds a network drive by its path.
     * @param drivePath - The path of the network drive to find.
     * @returns A promise that resolves to the local mount point if found, or `undefined` if not found.
     */
    export function find(drivePath: string): Promise<string | undefined>;
  
    /**
     * Mounts a network drive.
     * @param drivePath - The network drive path to mount.
     * @param localPath - Optional local path to mount to (unused in current implementation).
     * @param username - Optional username for authentication.
     * @param password - Optional password for authentication.
     * @returns A promise that resolves to the local mount point if successfully mounted.
     */
    export function mount(
      drivePath: string,
      localPath?: string | null,
      username?: string | null,
      password?: string | null
    ): Promise<string>;
  
    /**
     * Unmounts a network drive.
     * @returns A promise that resolves when the drive has been unmounted.
     */
    export function unmount(): Promise<void>;
  }