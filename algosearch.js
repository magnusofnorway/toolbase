
  const { autocomplete, getAlgoliaResults } = window['@algolia/autocomplete-js'];
  const appId = "YYGOUXJ8KT";
  const apiKey = "90ac0df6acacc4203abb8fcc40c5d0f3";
  const searchClient = algoliasearch(appId, apiKey);
  const indexName = "tools";

  
 
  const { setIsOpen } = autocomplete({
      container: "#autocomplete",

      placeholder: "Search ( ⌘ + k )",
      detachedMediaQuery: '',
      openOnFocus: true,
      getSources({ query, state }) {
        if (!query) {
          return [];
        }

        return [
          {
            sourceId: "tools",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: indexName,
                    query,
                    params: {
                      attributesToSnippet: ['Name:10', 'Headline:35'],
                      snippetEllipsisText: '…',
                      hitsPerPage: 10
                    }
                  }
                ]
              });
            },
            templates: {
          		header({ items, html }) {
  					return html`<span class="aa-SourceHeaderTitle">Tools</span>
              		<div class="aa-SourceHeaderLine" />`;
          },
              item({ item, components, html }) {
                return html`<a class="aa-ItemLink" href="/aitools/${item.Slug}">
                  <div class="aa-ItemContent">
                    <div class="algolia-cloneables-image_div">
                      <a href="/aitools/${item.Slug}"><img
                        src="${item.CoverImage}"
                        alt="${item.Name}"
                        class="algolia-cloneable_image"
                      /></a>
                    </div>
                    <div class="aa-ItemContentBody">
                      <div class="algolia-cloneables-title_text">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Name',
                        })}
                      </div>
                      <div class="aa-ItemContentSubtitle hide">
                        Published in <strong>${item["Cloneable Categories"]}</strong>
                      </div>
                      <div class="aa-ItemContentDescription text-style-3lines">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Webflow Description',
                        })}
                      </div>
                    </div>
                  </div>
                </a>`;
              },
              noResults() {
                return "No posts for this query.";
              }
            },
            getItemUrl({ item }) {
              return "/aitools/" + item.Slug;
            },
          },
          {
            sourceId: "templates",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'templates',
                    query,
                    params: {
                      attributesToSnippet: ['name:10', 'summary:35'],
                      snippetEllipsisText: '…',
                      hitsPerPage: 10
                    }
                  }
                ]
              });
            },
            templates: {
              header({ items, html }) {
  					return html`<span class="aa-SourceHeaderTitle">Templates</span>
              		<div class="aa-SourceHeaderLine" />`;
          },
              item({ item, components, html }) {
                return html`<a class="aa-ItemLink" href="/templates/${item.Slug}">
                  <div class="aa-ItemContent">
                    <div class="algolia-cloneables-image_div">
                      <a href="/templates/${item.Slug}"><img
                        src="${item.Screenshot}"
                        alt="${item.Name}"
                        class="algolia-template_image"
                      /></a>
                    </div>
                    <div class="aa-ItemContentBody hide">
                      <div class="algolia-cloneables-title_text">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Name',
                        })}
                      </div>
                      <div class="hide">
                        Published in <strong>${item["Template Categories"]}</strong>
                      </div>
                      <div class="aa-ItemContentDescription text-style-3lines hide">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Description',
                        })}
                      </div>
                    </div>
                  </div>
                </a>`;
              },
              noResults() {
                return "No posts for this query.";
              }
            },
            getItemUrl({ item }) {
              return "/templates/" + item.Slug;
            },
          },
          {
            sourceId: "customcode",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'customcode',
                    query,
                    params: {
                      attributesToSnippet: ['name:10', 'summary:35'],
                      snippetEllipsisText: '…',
                      hitsPerPage: 10
                    }
                  }
                ]
              });
            },
            templates: {
              header({ items, html }) {
  					return html`<span class="aa-SourceHeaderTitle">Code snippets</span>
              		<div class="aa-SourceHeaderLine" />`;
          },
              item({ item, components, html }) {
                return html`<a class="aa-ItemLink" href="/custom-code/${item.Slug}">
                  <div class="aa-ItemContent">
                    <div class="algolia-cloneables-image_div">
                      <a href="/templates/${item.Slug}"><img
                        src="${item['Custom code - Small']}"
                        alt="${item.Name}"
						class="algolia-cloneable_image"
                      /></a>
                    </div>
                    <div class="aa-ItemContentBody">
                      <div class="algolia-cloneables-title_text">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Name',
                        })}
                      </div>
                      <div class="hide">
                        Published in <strong>${item["Code - Categories"]}</strong>
                      </div>
                      <div class="aa-ItemContentDescription text-style-3lines">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Description',
                        })}
                      </div>
                    </div>
                  </div>
                </a>`;
              },
              noResults() {
                return "No posts for this query.";
              }
            },
            getItemUrl({ item }) {
              return "/custom-code/" + item.Slug;
            },
          },
          {
            sourceId: "integrations",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'integrations',
                    query,
                    params: {
                      attributesToSnippet: ['name:10', 'summary:35'],
                      snippetEllipsisText: '…',
                      hitsPerPage: 10
                    }
                  }
                ]
              });
            },
            templates: {
              header({ items, html }) {
  					return html`<span class="aa-SourceHeaderTitle">Integrations</span>
              		<div class="aa-SourceHeaderLine" />`;
          },
              item({ item, components, html }) {
                return html`<a class="aa-ItemLink" href="/integrations/${item.Slug}">
                  <div class="aa-ItemContent">
                    <div class="algolia-cloneables-image_div">
                      <a href="/templates/${item.Slug}"><img
                        src="${item.Logo}"
                        alt="${item.Name}"
                        class="algolia-cloneable_image small"
                      /></a>
                    </div>
                    <div class="aa-ItemContentBody">
                      <div class="algolia-cloneables-title_text">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Name',
                        })}
                      </div>
                      <div class="hide">
                        Published in <strong>${item["Integration - Categories"]}</strong>
                      </div>
                      <div class="aa-ItemContentDescription text-style-2lines">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Description',
                        })}
                      </div>
                    </div>
                  </div>
                </a>`;
              },
              noResults() {
                return "No posts for this query.";
              }
            },
            getItemUrl({ item }) {
              return "/integrations/" + item.Slug;
            },
          },
          {
            sourceId: "tutorials",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'tutorials',
                    query,
                    params: {
                      attributesToSnippet: ['name:10', 'summary:35'],
                      snippetEllipsisText: '…',
                      hitsPerPage: 10
                    }
                  }
                ]
              });
            },
            templates: {
              header({ items, html }) {
  					return html`<span class="aa-SourceHeaderTitle">Tutorials</span>
              		<div class="aa-SourceHeaderLine" />`;
          },
              item({ item, components, html }) {
                return html`<a class="aa-ItemLink" href="/tutorials/${item.Slug}">
                  <div class="aa-ItemContent">
                    <div class="algolia-cloneables-image_div">
                      <a href="/templates/${item.Slug}"><img
                        src="${item['Youtube thumbnail - normal (320x180)']}"
                        alt="${item.Name}"
                        class="algolia-cloneable_image"
                      /></a>
                    </div>
                    <div class="aa-ItemContentBody">
                      <div class="algolia-cloneables-title_text">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Name',
                        })}
                      </div>
                      <div class="hide">
                        Published in <strong>${item["Integrations mentioned/utilized"]}</strong>
                      </div>
                      <div class="aa-ItemContentDescription text-style-2lines">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Description',
                        })}
                      </div>
                    </div>
                  </div>
                </a>`;
              },
              noResults() {
                return "No posts for this query.";
              }
            },
            getItemUrl({ item }) {
              return "/tutorials/" + item.Slug;
            },
          },
          {
            sourceId: "experts",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'experts',
                    query,
                    params: {
                      attributesToSnippet: ['name:10', 'summary:35'],
                      snippetEllipsisText: '…',
                      hitsPerPage: 7
                    }
                  }
                ]
              });
            },
            templates: {
              header({ items, html }) {
  					return html`<span class="aa-SourceHeaderTitle">Experts</span>
              		<div class="aa-SourceHeaderLine" />`;
          },
              item({ item, components, html }) {
                return html`<a class="aa-ItemLink" href="/experts/${item.Slug}">
                  <div class="aa-ItemContent">
                    <div class="algolia-cloneables-image_div">
                      <a href="/templates/${item.Slug}"><img
                        src="${item['Profile image - Small']}"
                        alt="${item.Name}"
                        class="algolia-cloneable_image experts"
                      /></a>
                    </div>
                    <div class="aa-ItemContentBody">
                      <div class="algolia-cloneables-title_text">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Name',
                        })}
                      </div>
                      <div class="hide">
                        Published in <strong>${item.Categories}</strong>
                      </div>
                      <div class="algolia-experts-items_div">
                      	<div class="algolia-stats-cloneables_div"><div class="algolia-stats-icon_text"></div><div class="algolia-stats_text">${item['# of Templates']}</div></div>
                      	<div class="algolia-stats-cloneables_div"><div class="algolia-stats-icon_text"></div><div class="algolia-stats_text">${item['# of Cloneables']}</div></div>
                      	<div class="algolia-stats-cloneables_div"><div class="algolia-stats-icon_text"></div><div class="algolia-stats_text">${item['# of Tutorials']}</div></div>
                      	<div class="algolia-stats-cloneables_div"><div class="algolia-stats-icon_text"></div><div class="algolia-stats_text">${item['# of Code Snippets']}</div></div>
                      </div>
                    </div>
                  </div>
                </a>`;
              },
              noResults() {
                return "No posts for this query.";
              }
            },
            getItemUrl({ item }) {
              return "/experts/" + item.Slug;
            },
          },
          {
            sourceId: "illustrations",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'illustrations',
                    query,
                    params: {
                      attributesToSnippet: ['name:10', 'summary:35'],
                      snippetEllipsisText: '…',
                      hitsPerPage: 5
                    }
                  }
                ]
              });
            },
            templates: {
              header({ items, html }) {
  					return html`<span class="aa-SourceHeaderTitle">Illustrations</span>
              		<div class="aa-SourceHeaderLine" />`;
          },
              item({ item, components, html }) {
                return html`<a class="aa-ItemLink" href="/illustrations/${item.Slug}">
                  <div class="aa-ItemContent">
                    <div class="algolia-cloneables-image_div">
                      <a href="/templates/${item.Slug}"><img
                        src="${item.Image}"
                        class="algolia-template_image"
                      /></a>
                    </div>
                    <div class="aa-ItemContentBody hide">
                      <div class="algolia-cloneables-title_text">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Name',
                        })}
                      </div>
                      <div class="hide">
                        Published in <strong>${item.Formats}</strong>
                      </div>
                      <div class="aa-ItemContentDescription text-style-3lines hide">
                        ${components.Snippet({
                          hit: item,
                          attribute: 'Description',
                        })}
                      </div>
                    </div>
                  </div>
                </a>`;
              },
              noResults() {
                return "No posts for this query.";
              }
            },
            getItemUrl({ item }) {
              return "/illustrations/" + item.Slug;
            },
          },
        ];
      }
    });
  
    document.addEventListener('keydown', (event) => {
    if (event.metaKey && event.key.toLowerCase() === 'k') {
      setIsOpen(true);
    }
  });

