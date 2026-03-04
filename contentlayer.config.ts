import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    technologies: { type: 'string', of: { type: 'string' }, required: false },
    repository: { type: 'string', required: false },
    date: { type: 'string', required: false },
    published: { type: 'boolean', required: false },
    url: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => project._raw.sourceFileName.split('.')[0],
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project],
});
