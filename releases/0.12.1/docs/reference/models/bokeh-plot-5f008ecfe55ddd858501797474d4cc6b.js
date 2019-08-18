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
      };var element = document.getElementById("9a17a39d-4054-4468-86de-81f0a7d4bc7a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a17a39d-4054-4468-86de-81f0a7d4bc7a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f66969a1-6aba-4334-8cc8-9402b5d9ac43":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"cce672e3-e7eb-4cd9-80ea-7718296800a8","type":"ColumnDataSource"},{"attributes":{},"id":"90d25378-44f8-4733-ad00-bb8d6884c03d","type":"BasicTicker"},{"attributes":{},"id":"1b39c611-362a-475c-9442-29bcde09d3fa","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8dd7182b-fcd9-4275-a7a3-5e9275034b1c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e126ab5-0f58-40f4-8ded-b7e3075c6c93","type":"SquareX"},{"attributes":{},"id":"3dcfb8ec-6e97-4ce3-b132-a2f0dcc75b55","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3dcfb8ec-6e97-4ce3-b132-a2f0dcc75b55","type":"BasicTickFormatter"},"plot":{"id":"caefda75-7acf-40dc-aee4-88689bc930b6","type":"Plot"},"ticker":{"id":"90d25378-44f8-4733-ad00-bb8d6884c03d","type":"BasicTicker"}},"id":"d5fed663-4a57-49d9-a53f-79e5c4f323cb","type":"LinearAxis"},{"attributes":{"plot":{"id":"caefda75-7acf-40dc-aee4-88689bc930b6","type":"Plot"},"ticker":{"id":"1b39c611-362a-475c-9442-29bcde09d3fa","type":"BasicTicker"}},"id":"dc910a86-0eb8-4b6d-873e-ab8e540a1747","type":"Grid"},{"attributes":{"callback":null},"id":"1722e7b8-0b84-4d57-ae71-d549768e8e81","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"caefda75-7acf-40dc-aee4-88689bc930b6","type":"Plot"},"ticker":{"id":"90d25378-44f8-4733-ad00-bb8d6884c03d","type":"BasicTicker"}},"id":"fd344ae6-cc0d-43d6-a859-93826aebbb89","type":"Grid"},{"attributes":{},"id":"e21b7e35-943b-4a90-9bd3-32dedc378eb5","type":"ToolEvents"},{"attributes":{"formatter":{"id":"c28cf0c2-470c-4cae-a31f-61970420313a","type":"BasicTickFormatter"},"plot":{"id":"caefda75-7acf-40dc-aee4-88689bc930b6","type":"Plot"},"ticker":{"id":"1b39c611-362a-475c-9442-29bcde09d3fa","type":"BasicTicker"}},"id":"a67a3c26-96ba-4a09-b475-d0ae4c6e056f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"cce672e3-e7eb-4cd9-80ea-7718296800a8","type":"ColumnDataSource"},"glyph":{"id":"7e126ab5-0f58-40f4-8ded-b7e3075c6c93","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e4c64466-9647-4d4b-8302-4ddda3b0c576","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c25b040a-a645-4426-8085-087e409293d1","type":"Toolbar"},{"attributes":{},"id":"c28cf0c2-470c-4cae-a31f-61970420313a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a67a3c26-96ba-4a09-b475-d0ae4c6e056f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d5fed663-4a57-49d9-a53f-79e5c4f323cb","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e4c64466-9647-4d4b-8302-4ddda3b0c576","type":"GlyphRenderer"},{"id":"a67a3c26-96ba-4a09-b475-d0ae4c6e056f","type":"LinearAxis"},{"id":"d5fed663-4a57-49d9-a53f-79e5c4f323cb","type":"LinearAxis"},{"id":"dc910a86-0eb8-4b6d-873e-ab8e540a1747","type":"Grid"},{"id":"fd344ae6-cc0d-43d6-a859-93826aebbb89","type":"Grid"}],"title":null,"tool_events":{"id":"e21b7e35-943b-4a90-9bd3-32dedc378eb5","type":"ToolEvents"},"toolbar":{"id":"c25b040a-a645-4426-8085-087e409293d1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8dd7182b-fcd9-4275-a7a3-5e9275034b1c","type":"DataRange1d"},"y_range":{"id":"1722e7b8-0b84-4d57-ae71-d549768e8e81","type":"DataRange1d"}},"id":"caefda75-7acf-40dc-aee4-88689bc930b6","type":"Plot"}],"root_ids":["caefda75-7acf-40dc-aee4-88689bc930b6"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"f66969a1-6aba-4334-8cc8-9402b5d9ac43","elementid":"9a17a39d-4054-4468-86de-81f0a7d4bc7a","modelid":"caefda75-7acf-40dc-aee4-88689bc930b6"}];
              
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