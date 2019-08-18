
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
  };var element = document.getElementById("cb854f8e-3ce4-4d78-83c0-f0c1a902bdfa");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb854f8e-3ce4-4d78-83c0-f0c1a902bdfa' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"898edbc3-a21c-4c1b-984f-b32adaffbf35":{"roots":{"references":[{"attributes":{"callback":null},"id":"685466dd-275a-4d75-aa5c-abb02aebb83f","type":"DataRange1d"},{"attributes":{},"id":"24b75d8a-21cc-491b-8031-48ac62fbf942","type":"ToolEvents"},{"attributes":{"plot":{"id":"7ca7e531-662a-47ad-935b-921554a46741","subtype":"Figure","type":"Plot"},"ticker":{"id":"8dfccd21-3dd5-415e-95ac-03e1ede19ff4","type":"BasicTicker"}},"id":"291ec218-f940-41fe-af57-ab51ee8f5a51","type":"Grid"},{"attributes":{},"id":"8dfccd21-3dd5-415e-95ac-03e1ede19ff4","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","desc"],"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"facb82bc-0e6a-4ada-8c08-3fec436edfbf","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2425bcc3-af58-4e90-a478-0ff2f21493e3","type":"Circle"},{"attributes":{},"id":"d6a13a5c-a210-419d-b41e-334878ae01de","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ae21b8a8-ada0-490a-8269-d97f4108d2f9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2b4ce0c1-0b40-46de-bd57-e75f6a6417a9","type":"BasicTickFormatter"},"plot":{"id":"7ca7e531-662a-47ad-935b-921554a46741","subtype":"Figure","type":"Plot"},"ticker":{"id":"3dec7252-8e32-4722-81d6-818afc21a3a2","type":"BasicTicker"}},"id":"be4dda28-32dd-46d4-91b1-d30c6ed01ffd","type":"LinearAxis"},{"attributes":{"data_source":{"id":"facb82bc-0e6a-4ada-8c08-3fec436edfbf","type":"ColumnDataSource"},"glyph":{"id":"2425bcc3-af58-4e90-a478-0ff2f21493e3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"24f4b553-e459-4d58-83ab-9cbab3ed72e0","type":"Circle"},"selection_glyph":null},"id":"f3acf83a-e40e-458c-b4f3-9d1e1f9968ef","type":"GlyphRenderer"},{"attributes":{"callback":null,"plot":{"id":"7ca7e531-662a-47ad-935b-921554a46741","subtype":"Figure","type":"Plot"},"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"cea5d020-00d6-4c28-978f-ebd440445956","type":"HoverTool"},{"attributes":{"formatter":{"id":"d6a13a5c-a210-419d-b41e-334878ae01de","type":"BasicTickFormatter"},"plot":{"id":"7ca7e531-662a-47ad-935b-921554a46741","subtype":"Figure","type":"Plot"},"ticker":{"id":"8dfccd21-3dd5-415e-95ac-03e1ede19ff4","type":"BasicTicker"}},"id":"57813c9c-8253-4af8-8b68-6aac5315bb47","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"24f4b553-e459-4d58-83ab-9cbab3ed72e0","type":"Circle"},{"attributes":{},"id":"3dec7252-8e32-4722-81d6-818afc21a3a2","type":"BasicTicker"},{"attributes":{"below":[{"id":"57813c9c-8253-4af8-8b68-6aac5315bb47","type":"LinearAxis"}],"left":[{"id":"be4dda28-32dd-46d4-91b1-d30c6ed01ffd","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"57813c9c-8253-4af8-8b68-6aac5315bb47","type":"LinearAxis"},{"id":"291ec218-f940-41fe-af57-ab51ee8f5a51","type":"Grid"},{"id":"be4dda28-32dd-46d4-91b1-d30c6ed01ffd","type":"LinearAxis"},{"id":"2f05521c-5401-44e0-a6fa-1bde1ac57933","type":"Grid"},{"id":"f3acf83a-e40e-458c-b4f3-9d1e1f9968ef","type":"GlyphRenderer"}],"title":"Mouse over the dots","tool_events":{"id":"24b75d8a-21cc-491b-8031-48ac62fbf942","type":"ToolEvents"},"tools":[{"id":"cea5d020-00d6-4c28-978f-ebd440445956","type":"HoverTool"}],"x_range":{"id":"ae21b8a8-ada0-490a-8269-d97f4108d2f9","type":"DataRange1d"},"y_range":{"id":"685466dd-275a-4d75-aa5c-abb02aebb83f","type":"DataRange1d"}},"id":"7ca7e531-662a-47ad-935b-921554a46741","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2b4ce0c1-0b40-46de-bd57-e75f6a6417a9","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"7ca7e531-662a-47ad-935b-921554a46741","subtype":"Figure","type":"Plot"},"ticker":{"id":"3dec7252-8e32-4722-81d6-818afc21a3a2","type":"BasicTicker"}},"id":"2f05521c-5401-44e0-a6fa-1bde1ac57933","type":"Grid"}],"root_ids":["7ca7e531-662a-47ad-935b-921554a46741"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"898edbc3-a21c-4c1b-984f-b32adaffbf35","elementid":"cb854f8e-3ce4-4d78-83c0-f0c1a902bdfa","modelid":"7ca7e531-662a-47ad-935b-921554a46741"}];
          
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