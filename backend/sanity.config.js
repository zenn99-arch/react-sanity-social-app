import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'shareme',

  projectId: 'jh54hmj0',
  dataset: 'sharme',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
