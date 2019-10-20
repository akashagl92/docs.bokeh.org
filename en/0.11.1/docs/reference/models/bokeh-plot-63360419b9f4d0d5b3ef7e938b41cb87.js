
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("c830d2a9-8b05-44ea-83bd-5945261b5135");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c830d2a9-8b05-44ea-83bd-5945261b5135' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8b04a69d-ec64-4b46-a70a-d57296ac0767":{"roots":{"references":[{"attributes":{"data_source":{"id":"3da80a9c-dc27-4b8c-8e3d-5167023d4c79","type":"ColumnDataSource"},"glyph":{"id":"14f7ce00-63a1-47e6-8f93-a10fe508ff6b","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7696530e-de9f-4be3-b40a-53cfc98ffa0b","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":0.0},"y":{"value":-90.0}},"id":"0cb3e36e-a30d-412c-8601-753db6018bc7","type":"Gear"},{"attributes":{"callback":null},"id":"32206361-20b7-4225-8fb1-5d1c7370814b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3807ba0d-d257-47be-9ad5-e76851d860dd","type":"ColumnDataSource"},"glyph":{"id":"0cb3e36e-a30d-412c-8601-753db6018bc7","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c05e5944-582a-4c14-8455-4080bc00fa0e","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":-90.0},"y":{"value":0.0}},"id":"55bd6f49-6b72-452d-b6f6-abec1d47c343","type":"Gear"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":0.0},"y":{"value":90.0}},"id":"14f7ce00-63a1-47e6-8f93-a10fe508ff6b","type":"Gear"},{"attributes":{"callback":null,"end":150,"start":-150},"id":"fc100f32-a4af-4ba3-988b-b38650158d50","type":"Range1d"},{"attributes":{"callback":null},"id":"3da80a9c-dc27-4b8c-8e3d-5167023d4c79","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e5b7419b-de6f-4f8d-9f1e-28c9179fda31","type":"ColumnDataSource"},"glyph":{"id":"55bd6f49-6b72-452d-b6f6-abec1d47c343","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cd8a1715-5b1c-4a3c-b4d7-44a8f2239a86","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"09a6e7bc-cebd-4f72-a874-1ae069d0d9a4","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":90.0},"y":{"value":0.0}},"id":"cd675d2f-e7d1-4274-bcc5-271e7850f04b","type":"Gear"},{"attributes":{"fill_color":{"value":"#ddddd0"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":24},"x":{"value":0},"y":{"value":0}},"id":"0ed0d49e-34ac-4db8-8c91-45ffcca0e8a8","type":"Gear"},{"attributes":{"data_source":{"id":"32206361-20b7-4225-8fb1-5d1c7370814b","type":"ColumnDataSource"},"glyph":{"id":"0ed0d49e-34ac-4db8-8c91-45ffcca0e8a8","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8a617577-fdb4-4d6c-9385-c73c37ad7c47","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":150,"start":-150},"id":"9f97d080-2058-436c-9fe1-57923b87f4e3","type":"Range1d"},{"attributes":{"callback":null},"id":"3807ba0d-d257-47be-9ad5-e76851d860dd","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9f92816a-929e-4a69-8ace-f52233ee52dd","type":"ColumnDataSource"},"glyph":{"id":"a465ae67-04d5-450d-b970-30cd9634e373","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"09a70d0f-e109-49a3-a8bd-1bcc0c37ddcb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"9f92816a-929e-4a69-8ace-f52233ee52dd","type":"ColumnDataSource"},{"attributes":{"h_symmetry":false,"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"09a70d0f-e109-49a3-a8bd-1bcc0c37ddcb","type":"GlyphRenderer"},{"id":"8a617577-fdb4-4d6c-9385-c73c37ad7c47","type":"GlyphRenderer"},{"id":"359d7f18-48ff-46ae-835f-fcdd7d5e1801","type":"GlyphRenderer"},{"id":"7696530e-de9f-4be3-b40a-53cfc98ffa0b","type":"GlyphRenderer"},{"id":"cd8a1715-5b1c-4a3c-b4d7-44a8f2239a86","type":"GlyphRenderer"},{"id":"c05e5944-582a-4c14-8455-4080bc00fa0e","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"57e658b3-b3ac-4448-b14b-264999df9dcd","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"9f97d080-2058-436c-9fe1-57923b87f4e3","type":"Range1d"},"y_range":{"id":"fc100f32-a4af-4ba3-988b-b38650158d50","type":"Range1d"}},"id":"5c76b730-fdc9-491b-975f-be9c0f8bfd27","type":"Plot"},{"attributes":{"callback":null},"id":"e5b7419b-de6f-4f8d-9f1e-28c9179fda31","type":"ColumnDataSource"},{"attributes":{},"id":"57e658b3-b3ac-4448-b14b-264999df9dcd","type":"ToolEvents"},{"attributes":{"data_source":{"id":"09a6e7bc-cebd-4f72-a874-1ae069d0d9a4","type":"ColumnDataSource"},"glyph":{"id":"cd675d2f-e7d1-4274-bcc5-271e7850f04b","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"359d7f18-48ff-46ae-835f-fcdd7d5e1801","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#ddd0dd"},"internal":{"value":true},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":48},"x":{"value":0},"y":{"value":0}},"id":"a465ae67-04d5-450d-b970-30cd9634e373","type":"Gear"}],"root_ids":["5c76b730-fdc9-491b-975f-be9c0f8bfd27"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8b04a69d-ec64-4b46-a70a-d57296ac0767","elementid":"c830d2a9-8b05-44ea-83bd-5945261b5135","modelid":"5c76b730-fdc9-491b-975f-be9c0f8bfd27"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));