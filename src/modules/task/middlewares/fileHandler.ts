/* eslint-disable no-console */
import multer from 'multer';
import path from 'path';

import {formatBytes} from '../helpers/functions/formatBytes.function';

const acceptedFiles = [
  'jpeg',
  'jpg',
  'png',
  'rar',
  'zip',
  'txt',
  'pdf',
  'mp4',
  'mpeg',
  'gif',
  'webm',
  'doc',
  'docx',
  'pptx',
  'xlsx',
];

export const fileHandler = multer({
  fileFilter(_, file, callback) {
    const ext = path.extname(file.originalname);

    if (file?.size > 5242880) {
      return callback(
        new Error(
          `O arquivo deve ser menor que 5 MB. O arquivo enviado tem ${formatBytes(
            file.size,
          )}`,
        ),
      );
    }

    if (!acceptedFiles.includes(ext.slice(1))) {
      return callback(
        new Error(
          `Apenas esses formatos de arquivo são permitidos: ${acceptedFiles.join(
            ' ',
          )}`,
        ),
      );
    }

    return callback(null, true);
  },
});
