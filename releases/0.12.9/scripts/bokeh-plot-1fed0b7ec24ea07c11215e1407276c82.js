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
      };var element = document.getElementById("e992ea2f-1c8c-4330-bf45-ed55290d199f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e992ea2f-1c8c-4330-bf45-ed55290d199f' but no matching script tag was found. ")
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
                    var docs_json = {"28c5ed3f-8e03-422c-b5f1-c53761a360ad":{"roots":{"references":[{"attributes":{"callback":null},"id":"6cf81e71-ca77-4fce-9b1d-c90f4b069b7b","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ad479f10-ad6e-467b-b2b9-b1acda1f4f62","type":"BoxAnnotation"},{"attributes":{},"id":"9f9422d3-b53d-405f-870e-3f6221ed1cd4","type":"WheelZoomTool"},{"attributes":{"format":"0.0%"},"id":"0f80d7e9-6baa-45c5-acab-0e266fe1d586","type":"NumeralTickFormatter"},{"attributes":{"callback":null},"id":"cb5b6fd8-b880-4153-8fd2-6aa85b71a3d1","type":"DataRange1d"},{"attributes":{},"id":"02b8dc40-387f-4048-97d6-9c65fe1ba6cd","type":"LinearScale"},{"attributes":{"data_source":{"id":"95282dfa-0068-416f-b4ae-f4460103715c","type":"ColumnDataSource"},"glyph":{"id":"bc97647d-c665-4d80-8839-fa19dc8f42ef","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94465978-2262-41be-ae8e-ab646b5ad751","type":"Circle"},"selection_glyph":null,"view":{"id":"0bc591e8-cbc1-421b-8bfc-670842cf3c02","type":"CDSView"}},"id":"d4e9170b-2341-41fc-a94c-177bdb13d19e","type":"GlyphRenderer"},{"attributes":{},"id":"b04bab08-f1d3-4989-b6fb-d90b5a998191","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc97647d-c665-4d80-8839-fa19dc8f42ef","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"95282dfa-0068-416f-b4ae-f4460103715c","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"0f80d7e9-6baa-45c5-acab-0e266fe1d586","type":"NumeralTickFormatter"},"plot":{"id":"33cace21-77e1-486f-a4f3-b30a6e0b8ea3","subtype":"Figure","type":"Plot"},"ticker":{"id":"c738e9d1-bf84-4157-bae0-13be666f5929","type":"BasicTicker"}},"id":"b6c29b0c-e68b-4155-a1d5-557fdacfab5d","type":"LinearAxis"},{"attributes":{"format":"$0.00"},"id":"dddbef14-3052-45b2-a026-c2103245ec88","type":"NumeralTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"33cace21-77e1-486f-a4f3-b30a6e0b8ea3","subtype":"Figure","type":"Plot"},"ticker":{"id":"5df42552-d045-47d2-8ec0-223f5cf97674","type":"BasicTicker"}},"id":"f5445c2d-d8e5-45f6-ae6c-f5cc72833974","type":"Grid"},{"attributes":{},"id":"47ce8608-675b-40e0-9ccb-3e819e6c1cf8","type":"HelpTool"},{"attributes":{},"id":"c738e9d1-bf84-4157-bae0-13be666f5929","type":"BasicTicker"},{"attributes":{},"id":"5df42552-d045-47d2-8ec0-223f5cf97674","type":"BasicTicker"},{"attributes":{"plot":{"id":"33cace21-77e1-486f-a4f3-b30a6e0b8ea3","subtype":"Figure","type":"Plot"},"ticker":{"id":"c738e9d1-bf84-4157-bae0-13be666f5929","type":"BasicTicker"}},"id":"4b33d5fa-0053-40dd-a5f3-9d398ea589df","type":"Grid"},{"attributes":{"overlay":{"id":"ad479f10-ad6e-467b-b2b9-b1acda1f4f62","type":"BoxAnnotation"}},"id":"21f0c49a-1c5f-4d08-802d-6a134fc02875","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"dddbef14-3052-45b2-a026-c2103245ec88","type":"NumeralTickFormatter"},"plot":{"id":"33cace21-77e1-486f-a4f3-b30a6e0b8ea3","subtype":"Figure","type":"Plot"},"ticker":{"id":"5df42552-d045-47d2-8ec0-223f5cf97674","type":"BasicTicker"}},"id":"6a5d4fc9-1845-4850-a307-f50104020472","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"94465978-2262-41be-ae8e-ab646b5ad751","type":"Circle"},{"attributes":{"source":{"id":"95282dfa-0068-416f-b4ae-f4460103715c","type":"ColumnDataSource"}},"id":"0bc591e8-cbc1-421b-8bfc-670842cf3c02","type":"CDSView"},{"attributes":{},"id":"ed61d7cf-e897-4aa6-a695-d789ee320c75","type":"SaveTool"},{"attributes":{"below":[{"id":"b6c29b0c-e68b-4155-a1d5-557fdacfab5d","type":"LinearAxis"}],"left":[{"id":"6a5d4fc9-1845-4850-a307-f50104020472","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b6c29b0c-e68b-4155-a1d5-557fdacfab5d","type":"LinearAxis"},{"id":"4b33d5fa-0053-40dd-a5f3-9d398ea589df","type":"Grid"},{"id":"6a5d4fc9-1845-4850-a307-f50104020472","type":"LinearAxis"},{"id":"f5445c2d-d8e5-45f6-ae6c-f5cc72833974","type":"Grid"},{"id":"ad479f10-ad6e-467b-b2b9-b1acda1f4f62","type":"BoxAnnotation"},{"id":"d4e9170b-2341-41fc-a94c-177bdb13d19e","type":"GlyphRenderer"}],"title":{"id":"481fa2b5-ce13-4ab0-a896-64940d3f03f3","type":"Title"},"toolbar":{"id":"32ed9bed-3360-43a3-b7f1-2c6c52b80809","type":"Toolbar"},"x_range":{"id":"6cf81e71-ca77-4fce-9b1d-c90f4b069b7b","type":"DataRange1d"},"x_scale":{"id":"02b8dc40-387f-4048-97d6-9c65fe1ba6cd","type":"LinearScale"},"y_range":{"id":"cb5b6fd8-b880-4153-8fd2-6aa85b71a3d1","type":"DataRange1d"},"y_scale":{"id":"b04bab08-f1d3-4989-b6fb-d90b5a998191","type":"LinearScale"}},"id":"33cace21-77e1-486f-a4f3-b30a6e0b8ea3","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"481fa2b5-ce13-4ab0-a896-64940d3f03f3","type":"Title"},{"attributes":{},"id":"c0c57599-d0fe-4702-bcaf-1d9809806558","type":"ResetTool"},{"attributes":{},"id":"917dab29-2d92-489d-ab85-1077f831b1e8","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"917dab29-2d92-489d-ab85-1077f831b1e8","type":"PanTool"},{"id":"9f9422d3-b53d-405f-870e-3f6221ed1cd4","type":"WheelZoomTool"},{"id":"21f0c49a-1c5f-4d08-802d-6a134fc02875","type":"BoxZoomTool"},{"id":"ed61d7cf-e897-4aa6-a695-d789ee320c75","type":"SaveTool"},{"id":"c0c57599-d0fe-4702-bcaf-1d9809806558","type":"ResetTool"},{"id":"47ce8608-675b-40e0-9ccb-3e819e6c1cf8","type":"HelpTool"}]},"id":"32ed9bed-3360-43a3-b7f1-2c6c52b80809","type":"Toolbar"}],"root_ids":["33cace21-77e1-486f-a4f3-b30a6e0b8ea3"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"28c5ed3f-8e03-422c-b5f1-c53761a360ad","elementid":"e992ea2f-1c8c-4330-bf45-ed55290d199f","modelid":"33cace21-77e1-486f-a4f3-b30a6e0b8ea3"}];
                
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
