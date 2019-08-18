
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
  };var element = document.getElementById("401f7022-ea09-44aa-beba-27b5ab8d5738");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '401f7022-ea09-44aa-beba-27b5ab8d5738' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d403d8de-ef82-48da-96e1-602068e1d112":{"roots":{"references":[{"attributes":{"data_source":{"id":"e1bad627-f64b-4f75-a79b-a365f0c3f2be","type":"ColumnDataSource"},"glyph":{"id":"e0d4921c-cb13-4ecd-97d6-1cc545600abd","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"0a3805a4-15bb-4b5a-b786-cd9a5a877eb1","type":"Segment"},"selection_glyph":null},"id":"68d39c6a-ae47-4789-ac21-1b537489a2a5","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e0d4921c-cb13-4ecd-97d6-1cc545600abd","type":"Segment"},{"attributes":{"callback":{"id":"4c788eff-ed39-4787-ab85-d849c3d2f8d7","type":"CustomJS"},"plot":{"id":"7fee89de-b8d2-4fd1-94dd-b48d7635164c","subtype":"Figure","type":"Plot"},"renderers":[{"id":"0c8bfa4c-5b79-480f-acbd-e4056d0db529","type":"GlyphRenderer"}],"tooltips":null},"id":"805273e5-9e64-4f6b-8deb-1121685923b6","type":"HoverTool"},{"attributes":{"below":[{"id":"6dec8c61-07d4-46c8-8d7b-fda2146ce597","type":"LinearAxis"}],"left":[{"id":"c18f910c-e884-40eb-adb1-29b8ac0a9815","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6dec8c61-07d4-46c8-8d7b-fda2146ce597","type":"LinearAxis"},{"id":"7ecd7337-0040-426b-b707-bfb3c8e9875d","type":"Grid"},{"id":"c18f910c-e884-40eb-adb1-29b8ac0a9815","type":"LinearAxis"},{"id":"46859515-9d7f-4044-9e88-505f7ad0b5e1","type":"Grid"},{"id":"68d39c6a-ae47-4789-ac21-1b537489a2a5","type":"GlyphRenderer"},{"id":"0c8bfa4c-5b79-480f-acbd-e4056d0db529","type":"GlyphRenderer"}],"title":"Hover over points","tool_events":{"id":"9256ab0f-cb6b-4848-8d59-601c66e22d3c","type":"ToolEvents"},"toolbar_location":null,"tools":[{"id":"805273e5-9e64-4f6b-8deb-1121685923b6","type":"HoverTool"}],"x_range":{"id":"d21b4892-4fcd-40fe-8392-085a36b939fd","type":"DataRange1d"},"y_range":{"id":"43a6122f-060e-4a37-8103-57ce1319d512","type":"DataRange1d"}},"id":"7fee89de-b8d2-4fd1-94dd-b48d7635164c","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"16349d93-728d-442a-aef4-67cbf30fff15","type":"Circle"},{"attributes":{},"id":"bb88e7b4-81ae-41c9-ae7d-6f7357202c4d","type":"BasicTicker"},{"attributes":{},"id":"9256ab0f-cb6b-4848-8d59-601c66e22d3c","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"e1bad627-f64b-4f75-a79b-a365f0c3f2be","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f4f0c0a-a8d4-4388-891c-6dd2afcb2233","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"7fee89de-b8d2-4fd1-94dd-b48d7635164c","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb88e7b4-81ae-41c9-ae7d-6f7357202c4d","type":"BasicTicker"}},"id":"46859515-9d7f-4044-9e88-505f7ad0b5e1","type":"Grid"},{"attributes":{"formatter":{"id":"4de93042-5f4a-4a53-b928-b104758d9d58","type":"BasicTickFormatter"},"plot":{"id":"7fee89de-b8d2-4fd1-94dd-b48d7635164c","subtype":"Figure","type":"Plot"},"ticker":{"id":"94e8939c-357a-4e2a-ba92-38d8dae3e581","type":"BasicTicker"}},"id":"6dec8c61-07d4-46c8-8d7b-fda2146ce597","type":"LinearAxis"},{"attributes":{"callback":null},"id":"43a6122f-060e-4a37-8103-57ce1319d512","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a57f5c89-1176-4f46-83ec-3a570b7005ab","type":"ColumnDataSource"},"glyph":{"id":"16349d93-728d-442a-aef4-67cbf30fff15","type":"Circle"},"hover_glyph":{"id":"9f4f0c0a-a8d4-4388-891c-6dd2afcb2233","type":"Circle"},"nonselection_glyph":{"id":"737ac817-5035-4818-ba2c-89ef6e5275b4","type":"Circle"},"selection_glyph":null},"id":"0c8bfa4c-5b79-480f-acbd-e4056d0db529","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"a57f5c89-1176-4f46-83ec-3a570b7005ab","type":"ColumnDataSource"},{"attributes":{},"id":"4de93042-5f4a-4a53-b928-b104758d9d58","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"737ac817-5035-4818-ba2c-89ef6e5275b4","type":"Circle"},{"attributes":{},"id":"cefb8c9c-d07f-4b0f-a484-6e3cfd771fc8","type":"BasicTickFormatter"},{"attributes":{},"id":"94e8939c-357a-4e2a-ba92-38d8dae3e581","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0a3805a4-15bb-4b5a-b786-cd9a5a877eb1","type":"Segment"},{"attributes":{"plot":{"id":"7fee89de-b8d2-4fd1-94dd-b48d7635164c","subtype":"Figure","type":"Plot"},"ticker":{"id":"94e8939c-357a-4e2a-ba92-38d8dae3e581","type":"BasicTicker"}},"id":"7ecd7337-0040-426b-b707-bfb3c8e9875d","type":"Grid"},{"attributes":{"formatter":{"id":"cefb8c9c-d07f-4b0f-a484-6e3cfd771fc8","type":"BasicTickFormatter"},"plot":{"id":"7fee89de-b8d2-4fd1-94dd-b48d7635164c","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb88e7b4-81ae-41c9-ae7d-6f7357202c4d","type":"BasicTicker"}},"id":"c18f910c-e884-40eb-adb1-29b8ac0a9815","type":"LinearAxis"},{"attributes":{"args":{"circle":{"id":"a57f5c89-1176-4f46-83ec-3a570b7005ab","type":"ColumnDataSource"},"segment":{"id":"e1bad627-f64b-4f75-a79b-a365f0c3f2be","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.get('data');\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.set('data', data);\n"},"id":"4c788eff-ed39-4787-ab85-d849c3d2f8d7","type":"CustomJS"},{"attributes":{"callback":null},"id":"d21b4892-4fcd-40fe-8392-085a36b939fd","type":"DataRange1d"}],"root_ids":["7fee89de-b8d2-4fd1-94dd-b48d7635164c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"d403d8de-ef82-48da-96e1-602068e1d112","elementid":"401f7022-ea09-44aa-beba-27b5ab8d5738","modelid":"7fee89de-b8d2-4fd1-94dd-b48d7635164c"}];
          
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