import { environment } from './environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
// You'll get this access token from Your Agent Dashboard > Settings > General > API keys > Developer access token
export const client = new ApiAiClient({accessToken: environment.dialogFlowKey});
