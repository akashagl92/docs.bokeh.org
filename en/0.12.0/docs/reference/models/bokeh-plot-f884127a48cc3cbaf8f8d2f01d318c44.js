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
      };var element = document.getElementById("22c4e825-203a-4ab0-b571-10c4dfcc8f8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '22c4e825-203a-4ab0-b571-10c4dfcc8f8a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"309bef1b-0b3a-4b23-ad1a-2c9874eca687":{"roots":{"references":[{"attributes":{"callback":null},"id":"a9e216b8-7bea-4047-b66e-5a517105ca3a","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"41c24cfa-60f3-4521-8777-9a7c56ee37ef","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"12e6cf9c-cff7-4e8d-87c4-edd6f5e2f893","type":"Toolbar"},{"attributes":{"formatter":{"id":"4bded777-b680-4123-a032-527baa1b9440","type":"BasicTickFormatter"},"plot":{"id":"12df54dd-53b5-4466-ae2d-b8765a6913ad","type":"Plot"},"ticker":{"id":"4e8abfed-92e2-41e7-9997-ba48568b61cf","type":"BasicTicker"}},"id":"64ec3c21-82a6-482d-9f0b-45def0661afc","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7c03b1d-4fc9-4864-b5c9-cffdd6e19401","type":"CircleCross"},{"attributes":{"callback":null},"id":"5029dc2b-cb80-4162-bd9b-f246d091aa3d","type":"DataRange1d"},{"attributes":{},"id":"52b55879-2899-4db3-8ab6-6f7a184f26fb","type":"BasicTickFormatter"},{"attributes":{},"id":"0d962a32-1d76-4007-8cdf-bca01accfe9c","type":"ToolEvents"},{"attributes":{"formatter":{"id":"52b55879-2899-4db3-8ab6-6f7a184f26fb","type":"BasicTickFormatter"},"plot":{"id":"12df54dd-53b5-4466-ae2d-b8765a6913ad","type":"Plot"},"ticker":{"id":"f9d5157e-479e-468d-acde-c614f1bf6599","type":"BasicTicker"}},"id":"204c425d-ac87-461c-8829-cb3001c8b5de","type":"LinearAxis"},{"attributes":{"data_source":{"id":"41c24cfa-60f3-4521-8777-9a7c56ee37ef","type":"ColumnDataSource"},"glyph":{"id":"e7c03b1d-4fc9-4864-b5c9-cffdd6e19401","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"694f7e9a-b444-4696-b98c-f4a57d95617e","type":"GlyphRenderer"},{"attributes":{},"id":"f9d5157e-479e-468d-acde-c614f1bf6599","type":"BasicTicker"},{"attributes":{},"id":"4bded777-b680-4123-a032-527baa1b9440","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"12df54dd-53b5-4466-ae2d-b8765a6913ad","type":"Plot"},"ticker":{"id":"4e8abfed-92e2-41e7-9997-ba48568b61cf","type":"BasicTicker"}},"id":"3692fced-ed61-4dae-bd81-67b2a20ef977","type":"Grid"},{"attributes":{"below":[{"id":"64ec3c21-82a6-482d-9f0b-45def0661afc","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"204c425d-ac87-461c-8829-cb3001c8b5de","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"694f7e9a-b444-4696-b98c-f4a57d95617e","type":"GlyphRenderer"},{"id":"64ec3c21-82a6-482d-9f0b-45def0661afc","type":"LinearAxis"},{"id":"204c425d-ac87-461c-8829-cb3001c8b5de","type":"LinearAxis"},{"id":"3692fced-ed61-4dae-bd81-67b2a20ef977","type":"Grid"},{"id":"2fe86a7d-f626-4765-9a9b-4dca1779adb2","type":"Grid"}],"title":null,"tool_events":{"id":"0d962a32-1d76-4007-8cdf-bca01accfe9c","type":"ToolEvents"},"toolbar":{"id":"12e6cf9c-cff7-4e8d-87c4-edd6f5e2f893","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a9e216b8-7bea-4047-b66e-5a517105ca3a","type":"DataRange1d"},"y_range":{"id":"5029dc2b-cb80-4162-bd9b-f246d091aa3d","type":"DataRange1d"}},"id":"12df54dd-53b5-4466-ae2d-b8765a6913ad","type":"Plot"},{"attributes":{},"id":"4e8abfed-92e2-41e7-9997-ba48568b61cf","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"12df54dd-53b5-4466-ae2d-b8765a6913ad","type":"Plot"},"ticker":{"id":"f9d5157e-479e-468d-acde-c614f1bf6599","type":"BasicTicker"}},"id":"2fe86a7d-f626-4765-9a9b-4dca1779adb2","type":"Grid"}],"root_ids":["12df54dd-53b5-4466-ae2d-b8765a6913ad"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"309bef1b-0b3a-4b23-ad1a-2c9874eca687","elementid":"22c4e825-203a-4ab0-b571-10c4dfcc8f8a","modelid":"12df54dd-53b5-4466-ae2d-b8765a6913ad"}];
              
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