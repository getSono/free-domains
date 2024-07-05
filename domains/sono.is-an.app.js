// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'domain for homeüage', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'sono', // desired subdomain name
  owner: {
    repo: 'https://github.com/getsono/free-domains',
    email: 'sono.arbeit@gmail.com',
  },
  record: {
    NS: ['jasmine.ns.cloudflare.com', 'trace.ns.cloudflare.com'],
  },
  proxy: false
