(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("434ab9bd-0980-4b14-855c-0fea842b7928");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '434ab9bd-0980-4b14-855c-0fea842b7928' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"e1d68950-d4ab-43e5-b11a-f85c99a93458":{"roots":{"references":[{"attributes":{"plot":{"id":"ce14d0b0-cc1d-43a9-8c84-24968f01af0e","type":"Plot"},"ticker":{"id":"2338e2c3-9e79-47a8-9590-ec3263d371ac","type":"BasicTicker"}},"id":"a3eeb56f-c856-4059-bd61-51c4cb5188bd","type":"Grid"},{"attributes":{"below":[{"id":"e451cf65-2e94-441e-ad68-34677969d6c9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"26cae216-19eb-408a-912c-81acc3074f4d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1009ef57-0383-4f53-80f3-b3dfdc344a53","type":"GlyphRenderer"},{"id":"e451cf65-2e94-441e-ad68-34677969d6c9","type":"LinearAxis"},{"id":"26cae216-19eb-408a-912c-81acc3074f4d","type":"LinearAxis"},{"id":"a3eeb56f-c856-4059-bd61-51c4cb5188bd","type":"Grid"},{"id":"39d3fc85-28cb-41c5-9c01-c5c242b3f560","type":"Grid"}],"title":null,"toolbar":{"id":"f1d67b12-5beb-4b99-b066-c34108f61850","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e743a01c-b577-4abf-96e8-b94a88d7cbaf","type":"DataRange1d"},"x_scale":{"id":"99e45030-b64b-4892-a536-b0ca9f9321a5","type":"LinearScale"},"y_range":{"id":"b1c878dd-1637-4f5c-8369-f1155cec744f","type":"DataRange1d"},"y_scale":{"id":"f37ae371-6a23-45bc-8288-bc411e70f1ec","type":"LinearScale"}},"id":"ce14d0b0-cc1d-43a9-8c84-24968f01af0e","type":"Plot"},{"attributes":{"formatter":{"id":"9ab01c38-2408-4ff8-9074-bbfb4a2d58bf","type":"BasicTickFormatter"},"plot":{"id":"ce14d0b0-cc1d-43a9-8c84-24968f01af0e","type":"Plot"},"ticker":{"id":"3909f781-d9a8-42f2-b811-2956d068ea25","type":"BasicTicker"}},"id":"26cae216-19eb-408a-912c-81acc3074f4d","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"ce14d0b0-cc1d-43a9-8c84-24968f01af0e","type":"Plot"},"ticker":{"id":"3909f781-d9a8-42f2-b811-2956d068ea25","type":"BasicTicker"}},"id":"39d3fc85-28cb-41c5-9c01-c5c242b3f560","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f1d67b12-5beb-4b99-b066-c34108f61850","type":"Toolbar"},{"attributes":{},"id":"3909f781-d9a8-42f2-b811-2956d068ea25","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"48f4531e-1fb3-4ccf-b4e3-e85850af996a","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"78cf7e00-c874-4b61-b017-cb9be6f65420","type":"CircleCross"},{"attributes":{},"id":"99e45030-b64b-4892-a536-b0ca9f9321a5","type":"LinearScale"},{"attributes":{},"id":"2338e2c3-9e79-47a8-9590-ec3263d371ac","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2111ef7c-f665-469f-a82f-8c2fe69d9077","type":"BasicTickFormatter"},"plot":{"id":"ce14d0b0-cc1d-43a9-8c84-24968f01af0e","type":"Plot"},"ticker":{"id":"2338e2c3-9e79-47a8-9590-ec3263d371ac","type":"BasicTicker"}},"id":"e451cf65-2e94-441e-ad68-34677969d6c9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b1c878dd-1637-4f5c-8369-f1155cec744f","type":"DataRange1d"},{"attributes":{},"id":"2111ef7c-f665-469f-a82f-8c2fe69d9077","type":"BasicTickFormatter"},{"attributes":{},"id":"f37ae371-6a23-45bc-8288-bc411e70f1ec","type":"LinearScale"},{"attributes":{"source":{"id":"48f4531e-1fb3-4ccf-b4e3-e85850af996a","type":"ColumnDataSource"}},"id":"f23438ef-b368-4b63-aef1-2790a16e1432","type":"CDSView"},{"attributes":{},"id":"9ab01c38-2408-4ff8-9074-bbfb4a2d58bf","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e743a01c-b577-4abf-96e8-b94a88d7cbaf","type":"DataRange1d"},{"attributes":{"data_source":{"id":"48f4531e-1fb3-4ccf-b4e3-e85850af996a","type":"ColumnDataSource"},"glyph":{"id":"78cf7e00-c874-4b61-b017-cb9be6f65420","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f23438ef-b368-4b63-aef1-2790a16e1432","type":"CDSView"}},"id":"1009ef57-0383-4f53-80f3-b3dfdc344a53","type":"GlyphRenderer"}],"root_ids":["ce14d0b0-cc1d-43a9-8c84-24968f01af0e"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e1d68950-d4ab-43e5-b11a-f85c99a93458","elementid":"434ab9bd-0980-4b14-855c-0fea842b7928","modelid":"ce14d0b0-cc1d-43a9-8c84-24968f01af0e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
