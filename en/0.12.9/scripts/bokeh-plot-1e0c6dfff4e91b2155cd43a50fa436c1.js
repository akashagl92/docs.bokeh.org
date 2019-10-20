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
      };var element = document.getElementById("394e12de-f4f5-42bf-bb21-21e910ff0742");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '394e12de-f4f5-42bf-bb21-21e910ff0742' but no matching script tag was found. ")
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
                    var docs_json = {"df2b5b8b-e717-460a-a51b-cee4babce194":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"e7b13413-b2dd-486e-9eb5-61cfba10dd6f","type":"ColumnDataSource"},{"attributes":{},"id":"76fd5db9-918e-47f7-9d2e-1c39a15b6e59","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c73c5e0c-cb23-4e60-b2d3-5789f2199772","type":"BasicTickFormatter"},"plot":{"id":"91033825-e7ef-46b6-a60c-010ce9067301","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdea8ad2-fa0e-4b84-8b39-16f3aa0bada6","type":"BasicTicker"}},"id":"cc88954e-fcca-4c10-a1fa-5bf85c3c3eda","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"d2428315-b018-46ae-87a2-11f1f7e53392","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dba735bc-ff00-47c0-be8f-3894da6db5ce","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fee93738-4bbb-4da0-96cf-65013fe6fab3","type":"PanTool"},{"id":"fdc10573-6d20-4a24-acd2-8cfdc86d56c1","type":"WheelZoomTool"},{"id":"f3c959db-9582-4e40-aabd-3ce936d5b01e","type":"BoxZoomTool"},{"id":"19ccf0f2-c25c-4316-a8a4-fa35dbc74944","type":"SaveTool"},{"id":"e74f274f-6b8e-4ba5-95e8-6938ba1de28f","type":"ResetTool"},{"id":"d61f24c8-9736-4b54-ad40-836582504d71","type":"HelpTool"}]},"id":"da100d6b-a9f5-4fc9-9797-3dd16f73a3f6","type":"Toolbar"},{"attributes":{},"id":"a5bafe16-e02e-4c96-8d89-fb837b7f2888","type":"LinearScale"},{"attributes":{},"id":"cdea8ad2-fa0e-4b84-8b39-16f3aa0bada6","type":"BasicTicker"},{"attributes":{},"id":"fdc10573-6d20-4a24-acd2-8cfdc86d56c1","type":"WheelZoomTool"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"91033825-e7ef-46b6-a60c-010ce9067301","subtype":"Figure","type":"Plot"},"ticker":{"id":"76fd5db9-918e-47f7-9d2e-1c39a15b6e59","type":"BasicTicker"}},"id":"ea99087d-b54a-4077-9ec2-94528543d4fb","type":"Grid"},{"attributes":{"callback":null},"id":"d726b97c-016c-42e8-a9eb-db0f622603c7","type":"DataRange1d"},{"attributes":{},"id":"fee93738-4bbb-4da0-96cf-65013fe6fab3","type":"PanTool"},{"attributes":{},"id":"19ccf0f2-c25c-4316-a8a4-fa35dbc74944","type":"SaveTool"},{"attributes":{"formatter":{"id":"dad5b26a-2740-43f2-a371-1d4ad1d69207","type":"BasicTickFormatter"},"plot":{"id":"91033825-e7ef-46b6-a60c-010ce9067301","subtype":"Figure","type":"Plot"},"ticker":{"id":"76fd5db9-918e-47f7-9d2e-1c39a15b6e59","type":"BasicTicker"}},"id":"a02a094d-28c6-46c2-a8b7-4f9ef03db4bf","type":"LinearAxis"},{"attributes":{},"id":"c73c5e0c-cb23-4e60-b2d3-5789f2199772","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8bab5c7-84a9-401f-93af-64f7ac013422","type":"Circle"},{"attributes":{"source":{"id":"e7b13413-b2dd-486e-9eb5-61cfba10dd6f","type":"ColumnDataSource"}},"id":"bc8e17db-e895-4e80-af52-533eb38c3dbc","type":"CDSView"},{"attributes":{"callback":null},"id":"210e1bb0-98e3-4fac-baf0-a7016ea8336f","type":"DataRange1d"},{"attributes":{"overlay":{"id":"dba735bc-ff00-47c0-be8f-3894da6db5ce","type":"BoxAnnotation"}},"id":"f3c959db-9582-4e40-aabd-3ce936d5b01e","type":"BoxZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"91033825-e7ef-46b6-a60c-010ce9067301","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdea8ad2-fa0e-4b84-8b39-16f3aa0bada6","type":"BasicTicker"}},"id":"89ed2c82-c2e1-4365-a7ba-a441aa2bb7bb","type":"Grid"},{"attributes":{},"id":"d61f24c8-9736-4b54-ad40-836582504d71","type":"HelpTool"},{"attributes":{},"id":"5357948f-17fe-4c91-9753-17305abcb411","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0154216-89d5-4e21-bb02-75c877ff8412","type":"Circle"},{"attributes":{},"id":"dad5b26a-2740-43f2-a371-1d4ad1d69207","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e7b13413-b2dd-486e-9eb5-61cfba10dd6f","type":"ColumnDataSource"},"glyph":{"id":"e0154216-89d5-4e21-bb02-75c877ff8412","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b8bab5c7-84a9-401f-93af-64f7ac013422","type":"Circle"},"selection_glyph":null,"view":{"id":"bc8e17db-e895-4e80-af52-533eb38c3dbc","type":"CDSView"}},"id":"0ac87024-7397-4194-a0c6-da8c38b9a7f0","type":"GlyphRenderer"},{"attributes":{},"id":"e74f274f-6b8e-4ba5-95e8-6938ba1de28f","type":"ResetTool"},{"attributes":{"below":[{"id":"cc88954e-fcca-4c10-a1fa-5bf85c3c3eda","type":"LinearAxis"}],"left":[{"id":"a02a094d-28c6-46c2-a8b7-4f9ef03db4bf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cc88954e-fcca-4c10-a1fa-5bf85c3c3eda","type":"LinearAxis"},{"id":"89ed2c82-c2e1-4365-a7ba-a441aa2bb7bb","type":"Grid"},{"id":"a02a094d-28c6-46c2-a8b7-4f9ef03db4bf","type":"LinearAxis"},{"id":"ea99087d-b54a-4077-9ec2-94528543d4fb","type":"Grid"},{"id":"dba735bc-ff00-47c0-be8f-3894da6db5ce","type":"BoxAnnotation"},{"id":"0ac87024-7397-4194-a0c6-da8c38b9a7f0","type":"GlyphRenderer"}],"title":{"id":"d2428315-b018-46ae-87a2-11f1f7e53392","type":"Title"},"toolbar":{"id":"da100d6b-a9f5-4fc9-9797-3dd16f73a3f6","type":"Toolbar"},"x_range":{"id":"210e1bb0-98e3-4fac-baf0-a7016ea8336f","type":"DataRange1d"},"x_scale":{"id":"5357948f-17fe-4c91-9753-17305abcb411","type":"LinearScale"},"y_range":{"id":"d726b97c-016c-42e8-a9eb-db0f622603c7","type":"DataRange1d"},"y_scale":{"id":"a5bafe16-e02e-4c96-8d89-fb837b7f2888","type":"LinearScale"}},"id":"91033825-e7ef-46b6-a60c-010ce9067301","subtype":"Figure","type":"Plot"}],"root_ids":["91033825-e7ef-46b6-a60c-010ce9067301"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"df2b5b8b-e717-460a-a51b-cee4babce194","elementid":"394e12de-f4f5-42bf-bb21-21e910ff0742","modelid":"91033825-e7ef-46b6-a60c-010ce9067301"}];
                
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
