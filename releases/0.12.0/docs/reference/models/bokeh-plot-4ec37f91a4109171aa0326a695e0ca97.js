document.addEventListener("DOMContentLoaded", function(event) {
    
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
      };var element = document.getElementById("abd95f6f-91f2-4693-a468-95cdf22c3e0f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'abd95f6f-91f2-4693-a468-95cdf22c3e0f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"b5501dc3-4c00-4bd6-90b3-e662510037e2":{"roots":{"references":[{"attributes":{},"id":"fe564894-8cbe-4b81-a3e2-21e57ee6f8b4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"14e24768-280d-44ad-bf87-450267ab43ad","type":"Plot"},"ticker":{"id":"5989f6f5-e06b-4327-8bb5-f942cb7aa0df","type":"BasicTicker"}},"id":"0d6164c8-5927-4ef5-a9ea-b7c0a9c4f9e9","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"8fb68ca3-72df-49d0-a8e0-6f41042f36a9","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"fe564894-8cbe-4b81-a3e2-21e57ee6f8b4","type":"BasicTickFormatter"},"plot":{"id":"14e24768-280d-44ad-bf87-450267ab43ad","type":"Plot"},"ticker":{"id":"5989f6f5-e06b-4327-8bb5-f942cb7aa0df","type":"BasicTicker"}},"id":"a9ba8feb-394e-4dc6-aea5-47f595b2079d","type":"LinearAxis"},{"attributes":{},"id":"7ef21cab-9aaf-45a5-8314-f3e43188d4c2","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae014242-7dee-4ce7-8697-a61ad41e602e","type":"Diamond"},{"attributes":{"formatter":{"id":"e73d1979-877e-4cf5-b6f7-462871cd6fe3","type":"BasicTickFormatter"},"plot":{"id":"14e24768-280d-44ad-bf87-450267ab43ad","type":"Plot"},"ticker":{"id":"7ef21cab-9aaf-45a5-8314-f3e43188d4c2","type":"BasicTicker"}},"id":"cfd00865-70d5-46cd-8aff-48514c848cee","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"71406ad0-805f-4b68-a730-5d6de2ed2da7","type":"Toolbar"},{"attributes":{},"id":"5989f6f5-e06b-4327-8bb5-f942cb7aa0df","type":"BasicTicker"},{"attributes":{},"id":"e73d1979-877e-4cf5-b6f7-462871cd6fe3","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8fb68ca3-72df-49d0-a8e0-6f41042f36a9","type":"ColumnDataSource"},"glyph":{"id":"ae014242-7dee-4ce7-8697-a61ad41e602e","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"00427355-d32b-4616-9f5b-17b615a1710b","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a9ba8feb-394e-4dc6-aea5-47f595b2079d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"cfd00865-70d5-46cd-8aff-48514c848cee","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"00427355-d32b-4616-9f5b-17b615a1710b","type":"GlyphRenderer"},{"id":"a9ba8feb-394e-4dc6-aea5-47f595b2079d","type":"LinearAxis"},{"id":"cfd00865-70d5-46cd-8aff-48514c848cee","type":"LinearAxis"},{"id":"0d6164c8-5927-4ef5-a9ea-b7c0a9c4f9e9","type":"Grid"},{"id":"b67b7ade-9d09-4fdf-bf84-6a11974400b4","type":"Grid"}],"title":null,"tool_events":{"id":"385a87f0-0cb1-413d-8d53-abaee5d594f8","type":"ToolEvents"},"toolbar":{"id":"71406ad0-805f-4b68-a730-5d6de2ed2da7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fe10231b-4edb-4611-a4ee-525eb83bd565","type":"DataRange1d"},"y_range":{"id":"7571735e-bea8-42b0-a4de-f6c2b6f622ab","type":"DataRange1d"}},"id":"14e24768-280d-44ad-bf87-450267ab43ad","type":"Plot"},{"attributes":{"callback":null},"id":"7571735e-bea8-42b0-a4de-f6c2b6f622ab","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"14e24768-280d-44ad-bf87-450267ab43ad","type":"Plot"},"ticker":{"id":"7ef21cab-9aaf-45a5-8314-f3e43188d4c2","type":"BasicTicker"}},"id":"b67b7ade-9d09-4fdf-bf84-6a11974400b4","type":"Grid"},{"attributes":{"callback":null},"id":"fe10231b-4edb-4611-a4ee-525eb83bd565","type":"DataRange1d"},{"attributes":{},"id":"385a87f0-0cb1-413d-8d53-abaee5d594f8","type":"ToolEvents"}],"root_ids":["14e24768-280d-44ad-bf87-450267ab43ad"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"b5501dc3-4c00-4bd6-90b3-e662510037e2","elementid":"abd95f6f-91f2-4693-a468-95cdf22c3e0f","modelid":"14e24768-280d-44ad-bf87-450267ab43ad"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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