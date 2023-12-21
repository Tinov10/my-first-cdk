export const handler = async (event: { name: string }) => {
  const result: string = event.name
    ? `Very good Job ${event.name}!`
    : 'Good Job';
  return result;
};
