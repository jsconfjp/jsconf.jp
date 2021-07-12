declare module "pretty-quick" {
  export interface IPrettyQuickOptions {
    staged: boolean
    onFoundSinceRevision: (scm: string, revision: string) => void
    onFoundChangedFiles: (changedFiles: string[]) => void
    onPartiallyStagedFile: (file: string) => void
    onWriteFile: (file: string) => void
    onCheckFile: (file: string, isFormatted: boolean) => void
    onExamineFile: (file: string) => void
  }
  export default function prettyQuick(
    path: string,
    options: IPrettyQuickOptions,
  ): {
    success: boolean
    errors: string[]
  }
}
