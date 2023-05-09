import { PrismaClient, StoredSong } from "@prisma/client";

type DbInteractorResponse<T> =
  | {
      data: T;
      error: undefined;
    }
  | {
      error: string;
      data: undefined;
    };

export class DBInteractor {
  async getMissingSongQueue(
    includeUploaded = true
  ): Promise<DbInteractorResponse<StoredSong[]>> {
    try {
      const prisma = new PrismaClient();

      const data = await prisma.storedSong.findMany();

      return { data, error: undefined };
    } catch (e) {
      console.error(e);
      return { error: (e as Error).message, data: undefined };
    }
  }
}
