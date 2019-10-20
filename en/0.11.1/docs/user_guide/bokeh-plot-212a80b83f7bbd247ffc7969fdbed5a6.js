
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
  };var element = document.getElementById("056521b2-86f9-4dd1-993c-0f44147f0a59");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '056521b2-86f9-4dd1-993c-0f44147f0a59' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f3b0d2f2-5ca5-4baf-998c-bbb01445db65":{"roots":{"references":[{"attributes":{},"id":"98f49abf-3de5-4f61-8d74-b78dd1eab045","type":"BasicTickFormatter"},{"attributes":{},"id":"f11fd108-3cdf-4a41-8880-8ba8fc59c148","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"094be389-2664-4d46-848a-f75d51354d24","subtype":"Figure","type":"Plot"},"ticker":{"id":"034d7136-b3e6-4a78-8953-889a5279b778","type":"BasicTicker"}},"id":"d3cdeb99-48e1-42d7-bb5e-3ffe6fb59578","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f387cd4a-3e9f-48dd-b9ae-cf9e41f5b151","type":"Circle"},{"attributes":{"callback":null,"plot":{"id":"094be389-2664-4d46-848a-f75d51354d24","subtype":"Figure","type":"Plot"}},"id":"865596aa-7cf4-4d79-bb09-cc72eb1f2fb9","type":"TapTool"},{"attributes":{"callback":null},"id":"67812958-a2fd-4065-aadf-0e77761b57ef","type":"DataRange1d"},{"attributes":{"below":[{"id":"041263b8-392a-431b-99d5-84defee778a5","type":"LinearAxis"}],"left":[{"id":"2caee6cb-0ef8-4068-b28f-aa7f8903d51e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"041263b8-392a-431b-99d5-84defee778a5","type":"LinearAxis"},{"id":"ebe56552-0e99-4fed-8cc1-1c720b4a98e8","type":"Grid"},{"id":"2caee6cb-0ef8-4068-b28f-aa7f8903d51e","type":"LinearAxis"},{"id":"d3cdeb99-48e1-42d7-bb5e-3ffe6fb59578","type":"Grid"},{"id":"56ffa653-5bda-4bb7-b699-9b5a85a1ea31","type":"GlyphRenderer"}],"title":"Select a circle","tool_events":{"id":"ed760b5a-3c2f-49f3-8ca7-57f55c2da587","type":"ToolEvents"},"tools":[{"id":"865596aa-7cf4-4d79-bb09-cc72eb1f2fb9","type":"TapTool"}],"x_range":{"id":"1703aa60-1aa3-4b96-8997-b1881f49a955","type":"DataRange1d"},"y_range":{"id":"67812958-a2fd-4065-aadf-0e77761b57ef","type":"DataRange1d"}},"id":"094be389-2664-4d46-848a-f75d51354d24","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6199be37-a93a-4e6c-966e-d920476d9587","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"f11fd108-3cdf-4a41-8880-8ba8fc59c148","type":"BasicTickFormatter"},"plot":{"id":"094be389-2664-4d46-848a-f75d51354d24","subtype":"Figure","type":"Plot"},"ticker":{"id":"19190045-1d13-4a45-bed0-1f98dad4984e","type":"BasicTicker"}},"id":"041263b8-392a-431b-99d5-84defee778a5","type":"LinearAxis"},{"attributes":{},"id":"034d7136-b3e6-4a78-8953-889a5279b778","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1703aa60-1aa3-4b96-8997-b1881f49a955","type":"DataRange1d"},{"attributes":{"plot":{"id":"094be389-2664-4d46-848a-f75d51354d24","subtype":"Figure","type":"Plot"},"ticker":{"id":"19190045-1d13-4a45-bed0-1f98dad4984e","type":"BasicTicker"}},"id":"ebe56552-0e99-4fed-8cc1-1c720b4a98e8","type":"Grid"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7401af5d-6890-4a5d-b2cb-14e0a3cbfc43","type":"Circle"},{"attributes":{"formatter":{"id":"98f49abf-3de5-4f61-8d74-b78dd1eab045","type":"BasicTickFormatter"},"plot":{"id":"094be389-2664-4d46-848a-f75d51354d24","subtype":"Figure","type":"Plot"},"ticker":{"id":"034d7136-b3e6-4a78-8953-889a5279b778","type":"BasicTicker"}},"id":"2caee6cb-0ef8-4068-b28f-aa7f8903d51e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6199be37-a93a-4e6c-966e-d920476d9587","type":"ColumnDataSource"},"glyph":{"id":"f387cd4a-3e9f-48dd-b9ae-cf9e41f5b151","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7c3247bd-136d-41f9-b9d9-15bf3035071e","type":"Circle"},"selection_glyph":{"id":"7401af5d-6890-4a5d-b2cb-14e0a3cbfc43","type":"Circle"}},"id":"56ffa653-5bda-4bb7-b699-9b5a85a1ea31","type":"GlyphRenderer"},{"attributes":{},"id":"ed760b5a-3c2f-49f3-8ca7-57f55c2da587","type":"ToolEvents"},{"attributes":{},"id":"19190045-1d13-4a45-bed0-1f98dad4984e","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c3247bd-136d-41f9-b9d9-15bf3035071e","type":"Circle"}],"root_ids":["094be389-2664-4d46-848a-f75d51354d24"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"f3b0d2f2-5ca5-4baf-998c-bbb01445db65","elementid":"056521b2-86f9-4dd1-993c-0f44147f0a59","modelid":"094be389-2664-4d46-848a-f75d51354d24"}];
          
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