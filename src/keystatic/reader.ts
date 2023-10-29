import { createReader } from '@keystatic/core/reader';

import { config } from './config';

export const reader = createReader(process.cwd(), config);
