import { TanStackWeb, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const web = new TanStackWeb({
    appDirectory: './'
  });

  return {
    resources: { web }
  };
});
