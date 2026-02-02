import { treaty } from '@elysiajs/eden';
import type { App } from '../../../api/src/index';

// 1. Initialize the client once here
export const api = treaty<App>(import.meta.env.VITE_BACKEND_URL);