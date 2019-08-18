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
      };var element = document.getElementById("936fe71c-8c4a-44a9-87cf-fe3ba3362146");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '936fe71c-8c4a-44a9-87cf-fe3ba3362146' but no matching script tag was found. ")
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
                var docs_json = {"3ad48a5e-c049-4053-8a01-c77662cd9f4c":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"649a3307-5c1b-452f-8698-e8671b94629c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"9037dc4d-2b19-4e95-8487-5df79fbafed1","type":"Plot"},"ticker":{"id":"7b352d11-4d8f-4cc3-bc3c-be887e1fa9c9","type":"BasicTicker"}},"id":"64ff3bc0-7ea5-4438-86c4-314ce0f96889","type":"Grid"},{"attributes":{},"id":"5f4a7330-dff3-43f0-93d3-870874357c8b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"649a3307-5c1b-452f-8698-e8671b94629c","type":"ColumnDataSource"},"glyph":{"id":"ff333767-76ce-4b60-a8da-446cf7f36490","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8cc01b4d-af8a-414e-bfe0-336a8fea57e4","type":"CDSView"}},"id":"c8d3bfa9-dfcf-402f-a097-1b0dba118a30","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b6b99797-6002-4bb5-aeb5-c27598246047","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff333767-76ce-4b60-a8da-446cf7f36490","type":"DiamondCross"},{"attributes":{"callback":null},"id":"dc1034b4-ae17-4c42-b8bf-a6edde3fd863","type":"DataRange1d"},{"attributes":{},"id":"7b352d11-4d8f-4cc3-bc3c-be887e1fa9c9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fc60cd1d-0694-4ec0-97de-365421fcb52e","type":"BasicTickFormatter"},"plot":{"id":"9037dc4d-2b19-4e95-8487-5df79fbafed1","type":"Plot"},"ticker":{"id":"7b352d11-4d8f-4cc3-bc3c-be887e1fa9c9","type":"BasicTicker"}},"id":"f5f997ac-f72f-4e2c-9b4d-61013f9dfe6d","type":"LinearAxis"},{"attributes":{"formatter":{"id":"5f4a7330-dff3-43f0-93d3-870874357c8b","type":"BasicTickFormatter"},"plot":{"id":"9037dc4d-2b19-4e95-8487-5df79fbafed1","type":"Plot"},"ticker":{"id":"445008fa-40ef-46b3-bbad-61c9580cd570","type":"BasicTicker"}},"id":"383a32ec-3790-49a7-8e6b-fbdd492180cf","type":"LinearAxis"},{"attributes":{"source":{"id":"649a3307-5c1b-452f-8698-e8671b94629c","type":"ColumnDataSource"}},"id":"8cc01b4d-af8a-414e-bfe0-336a8fea57e4","type":"CDSView"},{"attributes":{"below":[{"id":"f5f997ac-f72f-4e2c-9b4d-61013f9dfe6d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"383a32ec-3790-49a7-8e6b-fbdd492180cf","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c8d3bfa9-dfcf-402f-a097-1b0dba118a30","type":"GlyphRenderer"},{"id":"f5f997ac-f72f-4e2c-9b4d-61013f9dfe6d","type":"LinearAxis"},{"id":"383a32ec-3790-49a7-8e6b-fbdd492180cf","type":"LinearAxis"},{"id":"64ff3bc0-7ea5-4438-86c4-314ce0f96889","type":"Grid"},{"id":"87a13f33-0071-4fda-a0b0-cc25da0ee2f5","type":"Grid"}],"title":null,"toolbar":{"id":"b6b99797-6002-4bb5-aeb5-c27598246047","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dc1034b4-ae17-4c42-b8bf-a6edde3fd863","type":"DataRange1d"},"x_scale":{"id":"bd4e1816-112c-41ac-8e6b-fd3596c2031d","type":"LinearScale"},"y_range":{"id":"ce71eeb3-926e-47ba-9de5-fc1ad5248ecf","type":"DataRange1d"},"y_scale":{"id":"796c4dcf-5d60-47d8-a4cd-1ede3688ccf7","type":"LinearScale"}},"id":"9037dc4d-2b19-4e95-8487-5df79fbafed1","type":"Plot"},{"attributes":{},"id":"bd4e1816-112c-41ac-8e6b-fd3596c2031d","type":"LinearScale"},{"attributes":{},"id":"fc60cd1d-0694-4ec0-97de-365421fcb52e","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"9037dc4d-2b19-4e95-8487-5df79fbafed1","type":"Plot"},"ticker":{"id":"445008fa-40ef-46b3-bbad-61c9580cd570","type":"BasicTicker"}},"id":"87a13f33-0071-4fda-a0b0-cc25da0ee2f5","type":"Grid"},{"attributes":{},"id":"796c4dcf-5d60-47d8-a4cd-1ede3688ccf7","type":"LinearScale"},{"attributes":{},"id":"445008fa-40ef-46b3-bbad-61c9580cd570","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ce71eeb3-926e-47ba-9de5-fc1ad5248ecf","type":"DataRange1d"}],"root_ids":["9037dc4d-2b19-4e95-8487-5df79fbafed1"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"3ad48a5e-c049-4053-8a01-c77662cd9f4c","elementid":"936fe71c-8c4a-44a9-87cf-fe3ba3362146","modelid":"9037dc4d-2b19-4e95-8487-5df79fbafed1"}];
                
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
