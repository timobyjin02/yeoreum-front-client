import theme from '../styles/theme';

export type PostStatusType = number;

export const statusMaker = (status: number) => {
  if (status === 0) return '모집 중';
  if (status === 1) return '여름 마감';
};

export function ProgressColor({ status }: { status: PostStatusType }) {
  if (!(typeof status === 'number') || status < 0 || status > 1) return;
  if (status === 0) return theme.palette.main;
  if (status === 1) return theme.palette.fontGrey;
}
