import Vue, { PluginFunction, VueConstructor } from 'vue';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const types: { install: InstallFunction };
export default types;

export const typesSample: VueConstructor<Vue>;
