export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60fc6a9bd5d6428aff109431',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-8gfj8gke',
                  apiId: '43a12094-211a-4c12-95f0-c4c19012639e'
                },
                {
                  buildHookId: '60fc6a9b025ccc7e559284ad',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-p9k2dznb',
                  apiId: '1120eaac-3041-4e54-810e-6f259075f104'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robdodson/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-p9k2dznb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
