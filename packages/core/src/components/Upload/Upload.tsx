'use client';

import { forwardRef, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface UploadFile {
  uid: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'done' | 'error';
  percent?: number;
  url?: string;
  originFile?: File;
}

export interface UploadProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** File list */
  fileList?: UploadFile[];
  /** On change callback */
  onChange?: (fileList: UploadFile[]) => void;
  /** Custom upload handler */
  customRequest?: (file: File) => Promise<string>;
  /** Accept file types */
  accept?: string;
  /** Multiple files */
  multiple?: boolean;
  /** Max file count */
  maxCount?: number;
  /** Max file size (bytes) */
  maxSize?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Show file list */
  showFileList?: boolean;
  /** List type */
  listType?: 'text' | 'picture' | 'picture-card';
  /** Custom content */
  children?: ReactNode;
}

export const Upload = forwardRef<HTMLDivElement, UploadProps>(
  (
    {
      fileList = [],
      onChange,
      customRequest,
      accept,
      multiple = false,
      maxCount,
      maxSize,
      disabled = false,
      showFileList = true,
      listType = 'text',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState(false);

    const handleClick = () => {
      if (!disabled) inputRef.current?.click();
    };

    const processFiles = async (files: FileList) => {
      const newFiles: UploadFile[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (maxCount && fileList.length + newFiles.length >= maxCount) break;
        if (maxSize && file.size > maxSize) continue;

        const uploadFile: UploadFile = {
          uid: `${Date.now()}-${i}`,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'uploading',
          percent: 0,
          originFile: file,
        };

        newFiles.push(uploadFile);
      }

      onChange?.([...fileList, ...newFiles]);

      // Process uploads
      for (const uploadFile of newFiles) {
        try {
          if (customRequest && uploadFile.originFile) {
            const url = await customRequest(uploadFile.originFile);
            uploadFile.status = 'done';
            uploadFile.url = url;
            uploadFile.percent = 100;
          } else {
            // Simulate upload
            uploadFile.status = 'done';
            uploadFile.percent = 100;
            if (uploadFile.originFile) {
              uploadFile.url = URL.createObjectURL(uploadFile.originFile);
            }
          }
        } catch {
          uploadFile.status = 'error';
        }
      }

      onChange?.([...fileList, ...newFiles]);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) processFiles(e.target.files);
      e.target.value = '';
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (!disabled && e.dataTransfer.files) {
        processFiles(e.dataTransfer.files);
      }
    };

    const handleRemove = (uid: string) => {
      onChange?.(fileList.filter((f) => f.uid !== uid));
    };

    return (
      <div ref={ref} className={cn('upload', `upload-${listType}`, className)} {...props}>
        <div
          className={cn(
            'upload-trigger',
            disabled && 'upload-disabled',
            dragOver && 'upload-drag-over'
          )}
          onClick={handleClick}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          {children || (
            <div className="upload-content">
              <svg className="upload-icon" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="upload-text">Click or drag files to upload</p>
            </div>
          )}
        </div>

        {showFileList && fileList.length > 0 && (
          <div className="upload-list">
            {fileList.map((file) => (
              <div key={file.uid} className={cn('upload-item', `upload-item-${file.status}`)}>
                {listType === 'picture-card' && file.url && (
                  <img src={file.url} alt={file.name} className="upload-item-image" />
                )}
                <div className="upload-item-info">
                  <span className="upload-item-name">{file.name}</span>
                  {file.status === 'uploading' && (
                    <div className="upload-item-progress" style={{ width: `${file.percent}%` }} />
                  )}
                </div>
                <button
                  type="button"
                  className="upload-item-remove"
                  onClick={() => handleRemove(file.uid)}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Upload.displayName = 'Upload';
