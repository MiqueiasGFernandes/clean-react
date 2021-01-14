import LocalSaveAccessToken from '@/data/usecase/save-access-token/local-save-access-token';
import { SaveAccessToken } from '@/domain/usecases';
import { makeLocalStorageAdapter } from '@/main/cache/locals-storage-adapter';

export function makeLocalSaveAccessToken(): SaveAccessToken {
  return new LocalSaveAccessToken(makeLocalStorageAdapter());
}
