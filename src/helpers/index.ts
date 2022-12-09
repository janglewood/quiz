import { TableData } from '@/interfaces/table';

export const getTableData = (): TableData[] => {
  const parsedData: { [key: string]: number } = JSON.parse(
    localStorage.getItem('user_stats') || '{}',
  );

  return Object.keys(parsedData)
    .sort((a, b) => parsedData[b] - parsedData[a])
    .map((key) => ({ name: key, record: parsedData[key], key }));
};
