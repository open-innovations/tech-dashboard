import lume from "lume/mod.ts";

import base_path from "lume/plugins/base_path.ts";
import date from "lume/plugins/date.ts";
import metas from "lume/plugins/metas.ts";
import postcss from "lume/plugins/postcss.ts";
import vento from "lume/plugins/vento.ts";

const site = lume({
  src: './src',
  location: new URL("https://open-innovations.github.io/tech-dashboard/"),
});

site.use(base_path());
site.use(metas({
  defaultPageData: {
    title: 'title',
  },
}));
site.use(date());
site.use(postcss({}));
site.use(vento());

site.copy('CNAME');
site.copy('.nojekyll');

site.filter('objectToArray', (o) => Object.entries(o).reduce((a, [key, v]) => [...a, { key, ...v }], []))

export default site;
