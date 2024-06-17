import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-kumbuka extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-kumbuka:plugin',
  description: 'Remember cell outputs',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-kumbuka is activated!');
  }
};

export default plugin;
