document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("03cab413-3675-4738-9e59-42d621376da5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '03cab413-3675-4738-9e59-42d621376da5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"0c22b497-f492-467b-b7c8-0ab46fa2b48e":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8379b26f-5aee-439e-ab6a-5771f1747a5d","type":"Square"},{"attributes":{"data_source":{"id":"0a101ab2-d9cc-4d48-b3a4-ec0de31707a7","type":"ColumnDataSource"},"glyph":{"id":"db8ec0ca-bdd0-4f47-9617-e56ac4d475ec","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"8379b26f-5aee-439e-ab6a-5771f1747a5d","type":"Square"},"selection_glyph":null},"id":"02c97c21-dae8-4805-af35-f1b49589f6a8","type":"GlyphRenderer"},{"attributes":{},"id":"8b37764e-a6f2-4522-b2b3-79405a613b39","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3dba2d6-89f5-4f0b-b649-ba3b0c31275d","type":"BasicTicker"}},"id":"9b03b19b-0686-4ed8-bf80-942c6d994d02","type":"Grid"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"db8ec0ca-bdd0-4f47-9617-e56ac4d475ec","type":"Square"},{"attributes":{},"id":"6378158a-9251-4039-9005-967dd65c19fc","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"f8e77e34-24ec-406f-87ce-d1288a812d24","type":"Title"},{"attributes":{"below":[{"id":"942e3667-6619-437a-9fa7-d685cae67470","type":"LinearAxis"}],"left":[{"id":"16d0f710-1d3a-4564-bef2-4009b42e3e21","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"942e3667-6619-437a-9fa7-d685cae67470","type":"LinearAxis"},{"id":"9b03b19b-0686-4ed8-bf80-942c6d994d02","type":"Grid"},{"id":"16d0f710-1d3a-4564-bef2-4009b42e3e21","type":"LinearAxis"},{"id":"29950cb8-5954-455f-8700-0ec0292e433d","type":"Grid"},{"id":"93c3febf-f187-4575-9fc4-1b13d9180368","type":"BoxAnnotation"},{"id":"02c97c21-dae8-4805-af35-f1b49589f6a8","type":"GlyphRenderer"}],"title":{"id":"f8e77e34-24ec-406f-87ce-d1288a812d24","type":"Title"},"tool_events":{"id":"59619df0-4f07-4b05-aad9-cac3197f4edd","type":"ToolEvents"},"toolbar":{"id":"0783337c-3fe9-4fff-b80a-790bde803b82","type":"Toolbar"},"x_range":{"id":"9df15cf1-ceed-4700-b9ce-9091bce604eb","type":"DataRange1d"},"y_range":{"id":"92add73c-aced-4103-a8e3-b9e0e3a4e52d","type":"DataRange1d"}},"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"9df15cf1-ceed-4700-b9ce-9091bce604eb","type":"DataRange1d"},{"attributes":{"overlay":{"id":"93c3febf-f187-4575-9fc4-1b13d9180368","type":"BoxAnnotation"},"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"}},"id":"1ed4d154-1e6c-4862-9f3c-dde1e497a92c","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b35374b4-e459-4928-b53e-c745f9850dbc","type":"PanTool"},{"id":"f078fbd1-1218-4ee2-b04a-69a36dc4b402","type":"WheelZoomTool"},{"id":"1ed4d154-1e6c-4862-9f3c-dde1e497a92c","type":"BoxZoomTool"},{"id":"35474d6e-b301-41e0-b7e6-0bb0b37176e3","type":"SaveTool"},{"id":"33fdc3f3-8bb4-4df3-ab3c-00714ab120ac","type":"ResetTool"},{"id":"4d9fe5bc-751f-4de1-8d3a-dc83a7e0b5d8","type":"HelpTool"}]},"id":"0783337c-3fe9-4fff-b80a-790bde803b82","type":"Toolbar"},{"attributes":{"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"}},"id":"4d9fe5bc-751f-4de1-8d3a-dc83a7e0b5d8","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6378158a-9251-4039-9005-967dd65c19fc","type":"BasicTicker"}},"id":"29950cb8-5954-455f-8700-0ec0292e433d","type":"Grid"},{"attributes":{"formatter":{"id":"1fc511ec-0e11-4f7e-94c7-43ec3489a556","type":"BasicTickFormatter"},"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3dba2d6-89f5-4f0b-b649-ba3b0c31275d","type":"BasicTicker"}},"id":"942e3667-6619-437a-9fa7-d685cae67470","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8b37764e-a6f2-4522-b2b3-79405a613b39","type":"BasicTickFormatter"},"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6378158a-9251-4039-9005-967dd65c19fc","type":"BasicTicker"}},"id":"16d0f710-1d3a-4564-bef2-4009b42e3e21","type":"LinearAxis"},{"attributes":{},"id":"c3dba2d6-89f5-4f0b-b649-ba3b0c31275d","type":"BasicTicker"},{"attributes":{"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"}},"id":"b35374b4-e459-4928-b53e-c745f9850dbc","type":"PanTool"},{"attributes":{"callback":null},"id":"92add73c-aced-4103-a8e3-b9e0e3a4e52d","type":"DataRange1d"},{"attributes":{"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"}},"id":"35474d6e-b301-41e0-b7e6-0bb0b37176e3","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93c3febf-f187-4575-9fc4-1b13d9180368","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"}},"id":"33fdc3f3-8bb4-4df3-ab3c-00714ab120ac","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"0a101ab2-d9cc-4d48-b3a4-ec0de31707a7","type":"ColumnDataSource"},{"attributes":{},"id":"59619df0-4f07-4b05-aad9-cac3197f4edd","type":"ToolEvents"},{"attributes":{},"id":"1fc511ec-0e11-4f7e-94c7-43ec3489a556","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e","subtype":"Figure","type":"Plot"}},"id":"f078fbd1-1218-4ee2-b04a-69a36dc4b402","type":"WheelZoomTool"}],"root_ids":["e3145d6d-e3fe-47dc-a383-f2bb263c2d6e"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"0c22b497-f492-467b-b7c8-0ab46fa2b48e","elementid":"03cab413-3675-4738-9e59-42d621376da5","modelid":"e3145d6d-e3fe-47dc-a383-f2bb263c2d6e"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});