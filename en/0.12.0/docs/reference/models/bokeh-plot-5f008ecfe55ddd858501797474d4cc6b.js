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
      };var element = document.getElementById("863683eb-2e3c-4843-b641-a99ee4fc6dda");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '863683eb-2e3c-4843-b641-a99ee4fc6dda' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6d379ec2-c217-4794-90f2-8a869c597dd5":{"roots":{"references":[{"attributes":{"below":[{"id":"feb86950-60d6-4ace-8b4c-296ab9bc6671","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"be324431-b660-4de2-88e2-c5bdbd0a2c00","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4b46f1d7-4a9f-4794-a7d1-b9de8fd5eef6","type":"GlyphRenderer"},{"id":"feb86950-60d6-4ace-8b4c-296ab9bc6671","type":"LinearAxis"},{"id":"be324431-b660-4de2-88e2-c5bdbd0a2c00","type":"LinearAxis"},{"id":"4beaa4d6-227a-4756-b456-fc20b2b97893","type":"Grid"},{"id":"90e20e1b-595d-4089-a178-0c2e6210c527","type":"Grid"}],"title":null,"tool_events":{"id":"05dbc112-71d0-4828-854f-fd059c1316ea","type":"ToolEvents"},"toolbar":{"id":"4103d372-1d8b-4150-92e3-d683f1e3ffac","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a174f770-ec2d-4b2d-97e9-00f545ad2a4a","type":"DataRange1d"},"y_range":{"id":"8c72319e-66d9-4472-9072-c57d410ee37f","type":"DataRange1d"}},"id":"16fc8ec8-1bc0-4d8a-8db5-5b3552bece6e","type":"Plot"},{"attributes":{},"id":"05dbc112-71d0-4828-854f-fd059c1316ea","type":"ToolEvents"},{"attributes":{},"id":"dee6729c-7486-422f-a2eb-ebcfef0d9dfd","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"16fc8ec8-1bc0-4d8a-8db5-5b3552bece6e","type":"Plot"},"ticker":{"id":"d16524b5-f934-4895-8725-e9feb7e99139","type":"BasicTicker"}},"id":"90e20e1b-595d-4089-a178-0c2e6210c527","type":"Grid"},{"attributes":{},"id":"c8eac43b-401c-4353-9f31-e984bd453870","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c8eac43b-401c-4353-9f31-e984bd453870","type":"BasicTickFormatter"},"plot":{"id":"16fc8ec8-1bc0-4d8a-8db5-5b3552bece6e","type":"Plot"},"ticker":{"id":"dee6729c-7486-422f-a2eb-ebcfef0d9dfd","type":"BasicTicker"}},"id":"feb86950-60d6-4ace-8b4c-296ab9bc6671","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"1e57bb74-9506-4328-88d6-969cbf07a300","type":"ColumnDataSource"},{"attributes":{},"id":"d16524b5-f934-4895-8725-e9feb7e99139","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1e57bb74-9506-4328-88d6-969cbf07a300","type":"ColumnDataSource"},"glyph":{"id":"8d2882fb-d1b7-4ac4-af66-5d05c62539d0","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4b46f1d7-4a9f-4794-a7d1-b9de8fd5eef6","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8c72319e-66d9-4472-9072-c57d410ee37f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"fbaabee2-4114-4233-a52d-bae00e5c6f54","type":"BasicTickFormatter"},"plot":{"id":"16fc8ec8-1bc0-4d8a-8db5-5b3552bece6e","type":"Plot"},"ticker":{"id":"d16524b5-f934-4895-8725-e9feb7e99139","type":"BasicTicker"}},"id":"be324431-b660-4de2-88e2-c5bdbd0a2c00","type":"LinearAxis"},{"attributes":{},"id":"fbaabee2-4114-4233-a52d-bae00e5c6f54","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"16fc8ec8-1bc0-4d8a-8db5-5b3552bece6e","type":"Plot"},"ticker":{"id":"dee6729c-7486-422f-a2eb-ebcfef0d9dfd","type":"BasicTicker"}},"id":"4beaa4d6-227a-4756-b456-fc20b2b97893","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d2882fb-d1b7-4ac4-af66-5d05c62539d0","type":"SquareX"},{"attributes":{"callback":null},"id":"a174f770-ec2d-4b2d-97e9-00f545ad2a4a","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4103d372-1d8b-4150-92e3-d683f1e3ffac","type":"Toolbar"}],"root_ids":["16fc8ec8-1bc0-4d8a-8db5-5b3552bece6e"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6d379ec2-c217-4794-90f2-8a869c597dd5","elementid":"863683eb-2e3c-4843-b641-a99ee4fc6dda","modelid":"16fc8ec8-1bc0-4d8a-8db5-5b3552bece6e"}];
              
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