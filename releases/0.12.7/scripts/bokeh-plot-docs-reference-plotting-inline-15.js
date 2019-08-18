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
      };var element = document.getElementById("dc91803c-4e3a-4d63-92b8-b8254320d848");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc91803c-4e3a-4d63-92b8-b8254320d848' but no matching script tag was found. ")
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
                var docs_json = {"a2b24da7-dd8d-4716-ac6f-bf7ea134c4a8":{"roots":{"references":[{"attributes":{},"id":"ebec71a8-f8b1-48dd-9116-e726d95bede4","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d3eb6833-0485-4b22-983e-1a35debf604a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebec71a8-f8b1-48dd-9116-e726d95bede4","type":"BasicTicker"}},"id":"a5c0c582-5e43-4990-890c-cff4375fd689","type":"Grid"},{"attributes":{},"id":"b8e8e78a-2bd9-49b4-85ff-d1668beddf42","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69896d48-55a4-468b-829e-cd3142d91a75","type":"Patches"},{"attributes":{"data_source":{"id":"22494053-2d2f-458b-9f6b-477bf06fe244","type":"ColumnDataSource"},"glyph":{"id":"f87e1f6d-76ba-4d9d-b21e-14e7b882c043","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69896d48-55a4-468b-829e-cd3142d91a75","type":"Patches"},"selection_glyph":null,"view":{"id":"4f5d16f9-7ff3-4991-8ea8-929e089eaf22","type":"CDSView"}},"id":"b32b0e20-f061-49a6-9753-feab70c842b6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color","line_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"22494053-2d2f-458b-9f6b-477bf06fe244","type":"ColumnDataSource"},{"attributes":{"source":{"id":"22494053-2d2f-458b-9f6b-477bf06fe244","type":"ColumnDataSource"}},"id":"4f5d16f9-7ff3-4991-8ea8-929e089eaf22","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3d6a43e3-77b6-4094-9da1-6bb8b2ab377f","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"77030ece-dfa6-45a9-9666-9726d37a05af","type":"LinearAxis"}],"left":[{"id":"31fa0b9f-85af-48de-afba-cc974eff6c40","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"77030ece-dfa6-45a9-9666-9726d37a05af","type":"LinearAxis"},{"id":"2926c207-ca12-485d-9da0-0e4c09987dba","type":"Grid"},{"id":"31fa0b9f-85af-48de-afba-cc974eff6c40","type":"LinearAxis"},{"id":"a5c0c582-5e43-4990-890c-cff4375fd689","type":"Grid"},{"id":"3d6a43e3-77b6-4094-9da1-6bb8b2ab377f","type":"BoxAnnotation"},{"id":"b32b0e20-f061-49a6-9753-feab70c842b6","type":"GlyphRenderer"}],"title":{"id":"68a01fe1-0472-43b6-a35a-4827e221f6da","type":"Title"},"toolbar":{"id":"9c7a3f82-b98b-407e-805b-76ac1078c7c8","type":"Toolbar"},"x_range":{"id":"da5a97fd-cb15-41e9-adec-e9b37cb20fd7","type":"DataRange1d"},"x_scale":{"id":"0d30c312-70db-4285-966c-7f5a989e3680","type":"LinearScale"},"y_range":{"id":"09a58bae-e0b3-43a4-b591-ac840b2b8f43","type":"DataRange1d"},"y_scale":{"id":"255fb752-3eca-4f03-8e2d-d3390bb7a49f","type":"LinearScale"}},"id":"d3eb6833-0485-4b22-983e-1a35debf604a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"361be53e-033a-4578-8eff-a9264674f99b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"361be53e-033a-4578-8eff-a9264674f99b","type":"PanTool"},{"id":"33b0ce50-c84c-41b7-9d92-9d1b8a609e38","type":"WheelZoomTool"},{"id":"173a5252-35f8-4075-b457-0c8883676625","type":"BoxZoomTool"},{"id":"10d3a2fe-a132-4102-9629-968589a868aa","type":"SaveTool"},{"id":"07ac9a8b-d0c9-4578-bf7f-fd7cfb205fd0","type":"ResetTool"},{"id":"fdfc43ba-b4d5-40a9-ba89-8052a48f1bff","type":"HelpTool"}]},"id":"9c7a3f82-b98b-407e-805b-76ac1078c7c8","type":"Toolbar"},{"attributes":{},"id":"99c48494-37a0-457d-99f9-11ecb0c76f53","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b8e8e78a-2bd9-49b4-85ff-d1668beddf42","type":"BasicTickFormatter"},"plot":{"id":"d3eb6833-0485-4b22-983e-1a35debf604a","subtype":"Figure","type":"Plot"},"ticker":{"id":"d875611f-25e2-42ea-ba1e-2cf61ec53727","type":"BasicTicker"}},"id":"77030ece-dfa6-45a9-9666-9726d37a05af","type":"LinearAxis"},{"attributes":{},"id":"33b0ce50-c84c-41b7-9d92-9d1b8a609e38","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"da5a97fd-cb15-41e9-adec-e9b37cb20fd7","type":"DataRange1d"},{"attributes":{"overlay":{"id":"3d6a43e3-77b6-4094-9da1-6bb8b2ab377f","type":"BoxAnnotation"}},"id":"173a5252-35f8-4075-b457-0c8883676625","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"d3eb6833-0485-4b22-983e-1a35debf604a","subtype":"Figure","type":"Plot"},"ticker":{"id":"d875611f-25e2-42ea-ba1e-2cf61ec53727","type":"BasicTicker"}},"id":"2926c207-ca12-485d-9da0-0e4c09987dba","type":"Grid"},{"attributes":{},"id":"10d3a2fe-a132-4102-9629-968589a868aa","type":"SaveTool"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"f87e1f6d-76ba-4d9d-b21e-14e7b882c043","type":"Patches"},{"attributes":{},"id":"07ac9a8b-d0c9-4578-bf7f-fd7cfb205fd0","type":"ResetTool"},{"attributes":{"callback":null},"id":"09a58bae-e0b3-43a4-b591-ac840b2b8f43","type":"DataRange1d"},{"attributes":{},"id":"fdfc43ba-b4d5-40a9-ba89-8052a48f1bff","type":"HelpTool"},{"attributes":{},"id":"0d30c312-70db-4285-966c-7f5a989e3680","type":"LinearScale"},{"attributes":{},"id":"255fb752-3eca-4f03-8e2d-d3390bb7a49f","type":"LinearScale"},{"attributes":{},"id":"d875611f-25e2-42ea-ba1e-2cf61ec53727","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"68a01fe1-0472-43b6-a35a-4827e221f6da","type":"Title"},{"attributes":{"formatter":{"id":"99c48494-37a0-457d-99f9-11ecb0c76f53","type":"BasicTickFormatter"},"plot":{"id":"d3eb6833-0485-4b22-983e-1a35debf604a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebec71a8-f8b1-48dd-9116-e726d95bede4","type":"BasicTicker"}},"id":"31fa0b9f-85af-48de-afba-cc974eff6c40","type":"LinearAxis"}],"root_ids":["d3eb6833-0485-4b22-983e-1a35debf604a"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a2b24da7-dd8d-4716-ac6f-bf7ea134c4a8","elementid":"dc91803c-4e3a-4d63-92b8-b8254320d848","modelid":"d3eb6833-0485-4b22-983e-1a35debf604a"}];
                
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
