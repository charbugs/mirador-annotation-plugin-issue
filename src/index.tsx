import React from 'react'
// @ts-ignore
import Mirador from 'mirador/dist/es/src/index'
// @ts-ignore
import annotationPlugins from 'mirador-annotations'
// @ts-ignore
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';


function TestPluginComponent(props: any) {
  const { TargetComponent, targetProps } = props
  return <TargetComponent {...targetProps} />
}

const testPlugin = {
  target: 'Window',
  mode: 'wrap',
  component: TestPluginComponent
}

Mirador.viewer({
  id: 'mirador',
  annotation: {
    adapter: (canvasId: any) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
  },
  window: {
    defaultSideBarPanel: 'annotations',
    sideBarOpenByDefault: true,
  },
  windows: [{
    loadedManifest: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
  }],
}, [testPlugin, ...annotationPlugins])