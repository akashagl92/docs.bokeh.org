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
      };var element = document.getElementById("ca97faa2-3a3e-4cbe-9a41-0ce99bc033ad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca97faa2-3a3e-4cbe-9a41-0ce99bc033ad' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"6a62e052-91d5-4592-a7b6-059c10484257":{"roots":{"references":[{"attributes":{"formatter":{"id":"454f0d57-a493-40d6-9701-03fec85494fc","type":"BasicTickFormatter"},"plot":{"id":"e107ad0c-0fea-469f-bd2e-0e992198b390","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f486e44-24ad-426b-8393-dbf661416166","type":"BasicTicker"}},"id":"b4ada5ca-8f8e-467a-9b8e-7e92def4fc92","type":"LinearAxis"},{"attributes":{},"id":"4f486e44-24ad-426b-8393-dbf661416166","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"45de2d1b-d04b-43a6-be33-d4c821fe3f1d","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"e107ad0c-0fea-469f-bd2e-0e992198b390","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f486e44-24ad-426b-8393-dbf661416166","type":"BasicTicker"}},"id":"4d019db6-e1d0-4e85-907a-4b71567a2379","type":"Grid"},{"attributes":{},"id":"19f117a4-2839-48eb-afcc-eefc795593ef","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f31200fb-95cb-4506-a748-c2deed68539d","type":"ColumnDataSource"},"glyph":{"id":"0a641e7a-b7c1-4f0a-b5a8-539b0f1d278a","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"45de2d1b-d04b-43a6-be33-d4c821fe3f1d","type":"Rect"},"selection_glyph":null,"view":{"id":"35842588-cdc4-4dca-809c-f06001d13bab","type":"CDSView"}},"id":"35526f62-42e7-423d-9853-e69caf38508a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"f31200fb-95cb-4506-a748-c2deed68539d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f31200fb-95cb-4506-a748-c2deed68539d","type":"ColumnDataSource"}},"id":"35842588-cdc4-4dca-809c-f06001d13bab","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"464d35f2-e2f8-4de0-9790-6ae0e0cc2007","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"05c54362-71c1-4877-83b6-963303927d80","type":"LinearAxis"}],"left":[{"id":"b4ada5ca-8f8e-467a-9b8e-7e92def4fc92","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"05c54362-71c1-4877-83b6-963303927d80","type":"LinearAxis"},{"id":"01ca9092-43e1-445c-b53a-83c39be368c0","type":"Grid"},{"id":"b4ada5ca-8f8e-467a-9b8e-7e92def4fc92","type":"LinearAxis"},{"id":"4d019db6-e1d0-4e85-907a-4b71567a2379","type":"Grid"},{"id":"464d35f2-e2f8-4de0-9790-6ae0e0cc2007","type":"BoxAnnotation"},{"id":"35526f62-42e7-423d-9853-e69caf38508a","type":"GlyphRenderer"}],"title":{"id":"ff1990a9-0e35-4923-9359-d5d8e269c9e9","type":"Title"},"toolbar":{"id":"3df73745-c17c-443c-8dda-3166e4d16039","type":"Toolbar"},"x_range":{"id":"1f91e09a-825d-4d21-a3af-520654621e7e","type":"DataRange1d"},"x_scale":{"id":"452a5c39-849a-45e9-ba32-9087f12f1de7","type":"LinearScale"},"y_range":{"id":"e949c31a-8ebf-480c-b6f7-2f55af0e2bd8","type":"DataRange1d"},"y_scale":{"id":"7c79af8b-631b-4c24-8c44-03329d497567","type":"LinearScale"}},"id":"e107ad0c-0fea-469f-bd2e-0e992198b390","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9982651a-b955-4f1c-b310-df1c3eb1df6a","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9982651a-b955-4f1c-b310-df1c3eb1df6a","type":"PanTool"},{"id":"373906cf-1d8b-4a7e-82a5-f206cace1b74","type":"WheelZoomTool"},{"id":"8ece43c1-193d-480d-a5a2-eac766a328ab","type":"BoxZoomTool"},{"id":"e75e853d-6c7f-4a4c-8cf6-bb18ddc04783","type":"SaveTool"},{"id":"89aa7caa-00aa-464a-8eef-b396f9f639bc","type":"ResetTool"},{"id":"61fc1d6b-f46b-40ba-9106-d487f933d907","type":"HelpTool"}]},"id":"3df73745-c17c-443c-8dda-3166e4d16039","type":"Toolbar"},{"attributes":{"callback":null},"id":"1f91e09a-825d-4d21-a3af-520654621e7e","type":"DataRange1d"},{"attributes":{},"id":"373906cf-1d8b-4a7e-82a5-f206cace1b74","type":"WheelZoomTool"},{"attributes":{},"id":"f69ea907-a07b-44e9-a28a-64e40e8d5c97","type":"BasicTicker"},{"attributes":{"overlay":{"id":"464d35f2-e2f8-4de0-9790-6ae0e0cc2007","type":"BoxAnnotation"}},"id":"8ece43c1-193d-480d-a5a2-eac766a328ab","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a641e7a-b7c1-4f0a-b5a8-539b0f1d278a","type":"Rect"},{"attributes":{},"id":"e75e853d-6c7f-4a4c-8cf6-bb18ddc04783","type":"SaveTool"},{"attributes":{"formatter":{"id":"19f117a4-2839-48eb-afcc-eefc795593ef","type":"BasicTickFormatter"},"plot":{"id":"e107ad0c-0fea-469f-bd2e-0e992198b390","subtype":"Figure","type":"Plot"},"ticker":{"id":"f69ea907-a07b-44e9-a28a-64e40e8d5c97","type":"BasicTicker"}},"id":"05c54362-71c1-4877-83b6-963303927d80","type":"LinearAxis"},{"attributes":{},"id":"89aa7caa-00aa-464a-8eef-b396f9f639bc","type":"ResetTool"},{"attributes":{"callback":null},"id":"e949c31a-8ebf-480c-b6f7-2f55af0e2bd8","type":"DataRange1d"},{"attributes":{},"id":"61fc1d6b-f46b-40ba-9106-d487f933d907","type":"HelpTool"},{"attributes":{},"id":"452a5c39-849a-45e9-ba32-9087f12f1de7","type":"LinearScale"},{"attributes":{},"id":"454f0d57-a493-40d6-9701-03fec85494fc","type":"BasicTickFormatter"},{"attributes":{},"id":"7c79af8b-631b-4c24-8c44-03329d497567","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"ff1990a9-0e35-4923-9359-d5d8e269c9e9","type":"Title"},{"attributes":{"plot":{"id":"e107ad0c-0fea-469f-bd2e-0e992198b390","subtype":"Figure","type":"Plot"},"ticker":{"id":"f69ea907-a07b-44e9-a28a-64e40e8d5c97","type":"BasicTicker"}},"id":"01ca9092-43e1-445c-b53a-83c39be368c0","type":"Grid"}],"root_ids":["e107ad0c-0fea-469f-bd2e-0e992198b390"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"6a62e052-91d5-4592-a7b6-059c10484257","elementid":"ca97faa2-3a3e-4cbe-9a41-0ce99bc033ad","modelid":"e107ad0c-0fea-469f-bd2e-0e992198b390"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
