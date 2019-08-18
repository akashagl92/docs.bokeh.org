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
      };var element = document.getElementById("c588c8e8-3de1-4bb8-8c37-e23fba3f5ee5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c588c8e8-3de1-4bb8-8c37-e23fba3f5ee5' but no matching script tag was found. ")
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
                    var docs_json = {"25b34152-818a-492b-b770-f1dd246d79be":{"roots":{"references":[{"attributes":{"below":[{"id":"0a17dba4-0d95-4ced-b8d7-b05d59885be4","type":"LinearAxis"}],"left":[{"id":"0de78153-10f1-40f1-bec7-3bb084692a35","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0a17dba4-0d95-4ced-b8d7-b05d59885be4","type":"LinearAxis"},{"id":"826d3add-eecf-4ee3-8c01-50f3e8d38f83","type":"Grid"},{"id":"0de78153-10f1-40f1-bec7-3bb084692a35","type":"LinearAxis"},{"id":"30dc062c-4f5e-4fc1-b7a9-d580f6739dc8","type":"Grid"},{"id":"94151598-6a01-4ca5-82c2-8ba05d8ea3ae","type":"BoxAnnotation"},{"id":"18553e1a-1cec-4996-bb47-0bd05e1b6bf6","type":"GlyphRenderer"}],"title":{"id":"25c77a9b-9fcc-46ff-bed6-99c8e3857e94","type":"Title"},"toolbar":{"id":"a5170582-9c63-4b09-9c60-aaca6bf25c84","type":"Toolbar"},"x_range":{"id":"88c47e3a-573f-4d7a-b4fd-43fd834cf0a5","type":"DataRange1d"},"x_scale":{"id":"0e4563d8-eba2-4c7a-b795-97117b76f738","type":"LinearScale"},"y_range":{"id":"e2a1d3ee-2861-4d04-931e-f441fcdc968b","type":"DataRange1d"},"y_scale":{"id":"cfd640a2-a027-430b-a4e0-9902a01d30ff","type":"LinearScale"}},"id":"2e0422a7-850c-4d2f-b240-e330a3d4903d","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"dde984a2-4ad4-4321-8d38-c781299c9bb6","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"94151598-6a01-4ca5-82c2-8ba05d8ea3ae","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"783b12f1-6fb9-4fb1-ad8c-b3fe79434e96","type":"PanTool"},{"id":"d4f2215f-565c-4e2b-88ab-afe8601ce663","type":"WheelZoomTool"},{"id":"65e192a0-2388-45eb-b0ee-babeed898344","type":"BoxZoomTool"},{"id":"185aab75-9c1e-4a2c-b85a-a5fb5a6260a6","type":"SaveTool"},{"id":"9716d3d0-422b-4a81-8145-ad9c1f4a8620","type":"ResetTool"},{"id":"aa5ef4d6-20e0-4221-a013-771d8d8cc7c4","type":"HelpTool"}]},"id":"a5170582-9c63-4b09-9c60-aaca6bf25c84","type":"Toolbar"},{"attributes":{},"id":"783b12f1-6fb9-4fb1-ad8c-b3fe79434e96","type":"PanTool"},{"attributes":{"callback":null},"id":"88c47e3a-573f-4d7a-b4fd-43fd834cf0a5","type":"DataRange1d"},{"attributes":{"data_source":{"id":"dde984a2-4ad4-4321-8d38-c781299c9bb6","type":"ColumnDataSource"},"glyph":{"id":"910084a0-a812-4a66-a8b1-e4175e81731b","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3caca62b-66f6-4ee1-ba40-08a02e14b024","type":"Wedge"},"selection_glyph":null,"view":{"id":"b1f8c79d-169a-49a1-9c24-6160d257d5fa","type":"CDSView"}},"id":"18553e1a-1cec-4996-bb47-0bd05e1b6bf6","type":"GlyphRenderer"},{"attributes":{},"id":"d4f2215f-565c-4e2b-88ab-afe8601ce663","type":"WheelZoomTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"910084a0-a812-4a66-a8b1-e4175e81731b","type":"Wedge"},{"attributes":{"overlay":{"id":"94151598-6a01-4ca5-82c2-8ba05d8ea3ae","type":"BoxAnnotation"}},"id":"65e192a0-2388-45eb-b0ee-babeed898344","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"d5d08fd3-893d-4210-8311-3ca4f0991272","type":"BasicTickFormatter"},"plot":{"id":"2e0422a7-850c-4d2f-b240-e330a3d4903d","subtype":"Figure","type":"Plot"},"ticker":{"id":"b63f8ed7-1509-482d-a974-0627478edf69","type":"BasicTicker"}},"id":"0de78153-10f1-40f1-bec7-3bb084692a35","type":"LinearAxis"},{"attributes":{},"id":"185aab75-9c1e-4a2c-b85a-a5fb5a6260a6","type":"SaveTool"},{"attributes":{"callback":null},"id":"e2a1d3ee-2861-4d04-931e-f441fcdc968b","type":"DataRange1d"},{"attributes":{},"id":"9716d3d0-422b-4a81-8145-ad9c1f4a8620","type":"ResetTool"},{"attributes":{},"id":"929629f2-c882-4cba-9a77-61999fa46bfd","type":"BasicTicker"},{"attributes":{},"id":"aa5ef4d6-20e0-4221-a013-771d8d8cc7c4","type":"HelpTool"},{"attributes":{},"id":"0e4563d8-eba2-4c7a-b795-97117b76f738","type":"LinearScale"},{"attributes":{},"id":"cfd640a2-a027-430b-a4e0-9902a01d30ff","type":"LinearScale"},{"attributes":{"source":{"id":"dde984a2-4ad4-4321-8d38-c781299c9bb6","type":"ColumnDataSource"}},"id":"b1f8c79d-169a-49a1-9c24-6160d257d5fa","type":"CDSView"},{"attributes":{"plot":{"id":"2e0422a7-850c-4d2f-b240-e330a3d4903d","subtype":"Figure","type":"Plot"},"ticker":{"id":"929629f2-c882-4cba-9a77-61999fa46bfd","type":"BasicTicker"}},"id":"826d3add-eecf-4ee3-8c01-50f3e8d38f83","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"25c77a9b-9fcc-46ff-bed6-99c8e3857e94","type":"Title"},{"attributes":{"formatter":{"id":"704019e3-9fe7-4a5a-aeaa-30af21828e14","type":"BasicTickFormatter"},"plot":{"id":"2e0422a7-850c-4d2f-b240-e330a3d4903d","subtype":"Figure","type":"Plot"},"ticker":{"id":"929629f2-c882-4cba-9a77-61999fa46bfd","type":"BasicTicker"}},"id":"0a17dba4-0d95-4ced-b8d7-b05d59885be4","type":"LinearAxis"},{"attributes":{},"id":"d5d08fd3-893d-4210-8311-3ca4f0991272","type":"BasicTickFormatter"},{"attributes":{},"id":"b63f8ed7-1509-482d-a974-0627478edf69","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2e0422a7-850c-4d2f-b240-e330a3d4903d","subtype":"Figure","type":"Plot"},"ticker":{"id":"b63f8ed7-1509-482d-a974-0627478edf69","type":"BasicTicker"}},"id":"30dc062c-4f5e-4fc1-b7a9-d580f6739dc8","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"3caca62b-66f6-4ee1-ba40-08a02e14b024","type":"Wedge"},{"attributes":{},"id":"704019e3-9fe7-4a5a-aeaa-30af21828e14","type":"BasicTickFormatter"}],"root_ids":["2e0422a7-850c-4d2f-b240-e330a3d4903d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"25b34152-818a-492b-b770-f1dd246d79be","elementid":"c588c8e8-3de1-4bb8-8c37-e23fba3f5ee5","modelid":"2e0422a7-850c-4d2f-b240-e330a3d4903d"}];
                
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
