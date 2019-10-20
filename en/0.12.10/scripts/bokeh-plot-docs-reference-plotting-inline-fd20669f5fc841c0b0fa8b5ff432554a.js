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
      };var element = document.getElementById("d8d89556-fb95-463c-8118-8706c25476ea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8d89556-fb95-463c-8118-8706c25476ea' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"9db3776f-5182-4cb5-86fa-1632f1578c4b":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1c52b437-2d50-4533-a8e5-b3dff7f3c55f","type":"Segment"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fbd331bb-380d-451e-bc67-7d7fef7553c4","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c8fc3e44-b9a9-49ef-af8d-1a2777c4e296","type":"PanTool"},{"id":"0499f9b8-e7f1-4fd0-8fb0-80e236647f88","type":"WheelZoomTool"},{"id":"39f860f2-ca20-41c5-a9a8-e3d4885747ac","type":"BoxZoomTool"},{"id":"7692a944-a2cd-4e61-9a64-14032cc49212","type":"SaveTool"},{"id":"3c54104b-fa05-4381-a0e6-e266f9534d9a","type":"ResetTool"},{"id":"34b47608-4639-4884-93fc-af0842bbf910","type":"HelpTool"}]},"id":"03bdc182-7674-4b36-a47a-a5f48393cdb5","type":"Toolbar"},{"attributes":{},"id":"c8fc3e44-b9a9-49ef-af8d-1a2777c4e296","type":"PanTool"},{"attributes":{"source":{"id":"667d710f-3706-4519-8019-57e081799a51","type":"ColumnDataSource"}},"id":"cafb2506-e771-473e-9083-307f0c064c7c","type":"CDSView"},{"attributes":{},"id":"0499f9b8-e7f1-4fd0-8fb0-80e236647f88","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"6ccc426c-8e4a-40a5-bdb3-3a5d0b771254","type":"DataRange1d"},{"attributes":{"overlay":{"id":"fbd331bb-380d-451e-bc67-7d7fef7553c4","type":"BoxAnnotation"}},"id":"39f860f2-ca20-41c5-a9a8-e3d4885747ac","type":"BoxZoomTool"},{"attributes":{},"id":"b9071b35-bb9b-4ec1-ad1f-889a4387590c","type":"BasicTicker"},{"attributes":{},"id":"7692a944-a2cd-4e61-9a64-14032cc49212","type":"SaveTool"},{"attributes":{"data_source":{"id":"667d710f-3706-4519-8019-57e081799a51","type":"ColumnDataSource"},"glyph":{"id":"0af10685-cc33-46d3-8140-104e0f78d9ed","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1c52b437-2d50-4533-a8e5-b3dff7f3c55f","type":"Segment"},"selection_glyph":null,"view":{"id":"cafb2506-e771-473e-9083-307f0c064c7c","type":"CDSView"}},"id":"c4477855-bd6c-41be-9a02-c03c52185b41","type":"GlyphRenderer"},{"attributes":{},"id":"3c54104b-fa05-4381-a0e6-e266f9534d9a","type":"ResetTool"},{"attributes":{"formatter":{"id":"81975d62-5b4c-41f7-a86c-3d53be4368a4","type":"BasicTickFormatter"},"plot":{"id":"76f6cefc-b798-4765-8faa-b56608d7ccdc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9071b35-bb9b-4ec1-ad1f-889a4387590c","type":"BasicTicker"}},"id":"37cb04c6-2014-420e-b2aa-31a9e2b95b6e","type":"LinearAxis"},{"attributes":{},"id":"34b47608-4639-4884-93fc-af0842bbf910","type":"HelpTool"},{"attributes":{"callback":null},"id":"856987d6-7a98-430a-9d76-4e9ac977e9ed","type":"DataRange1d"},{"attributes":{},"id":"81975d62-5b4c-41f7-a86c-3d53be4368a4","type":"BasicTickFormatter"},{"attributes":{},"id":"1f97b014-dd97-48f2-b564-8800236dfead","type":"LinearScale"},{"attributes":{},"id":"74f71d0e-0f71-49b2-8a33-aa3507bda674","type":"BasicTickFormatter"},{"attributes":{},"id":"e576764f-1c08-4c1b-9bf5-ec2561575b03","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"cdadf8b4-55fc-40f4-9bf8-84a3c504ba94","type":"Title"},{"attributes":{"plot":{"id":"76f6cefc-b798-4765-8faa-b56608d7ccdc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9071b35-bb9b-4ec1-ad1f-889a4387590c","type":"BasicTicker"}},"id":"fa920d51-21c4-4d13-bc54-649ac4ae8c68","type":"Grid"},{"attributes":{"formatter":{"id":"74f71d0e-0f71-49b2-8a33-aa3507bda674","type":"BasicTickFormatter"},"plot":{"id":"76f6cefc-b798-4765-8faa-b56608d7ccdc","subtype":"Figure","type":"Plot"},"ticker":{"id":"68c3ea6d-3784-40b2-8bd2-c38f9b69861c","type":"BasicTicker"}},"id":"34fc5253-73f9-4c16-909e-f9bb3c55f563","type":"LinearAxis"},{"attributes":{},"id":"68c3ea6d-3784-40b2-8bd2-c38f9b69861c","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0af10685-cc33-46d3-8140-104e0f78d9ed","type":"Segment"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"667d710f-3706-4519-8019-57e081799a51","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"37cb04c6-2014-420e-b2aa-31a9e2b95b6e","type":"LinearAxis"}],"left":[{"id":"34fc5253-73f9-4c16-909e-f9bb3c55f563","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"37cb04c6-2014-420e-b2aa-31a9e2b95b6e","type":"LinearAxis"},{"id":"fa920d51-21c4-4d13-bc54-649ac4ae8c68","type":"Grid"},{"id":"34fc5253-73f9-4c16-909e-f9bb3c55f563","type":"LinearAxis"},{"id":"bf367987-c2a2-4f2c-8c47-910ce03a6351","type":"Grid"},{"id":"fbd331bb-380d-451e-bc67-7d7fef7553c4","type":"BoxAnnotation"},{"id":"c4477855-bd6c-41be-9a02-c03c52185b41","type":"GlyphRenderer"}],"title":{"id":"cdadf8b4-55fc-40f4-9bf8-84a3c504ba94","type":"Title"},"toolbar":{"id":"03bdc182-7674-4b36-a47a-a5f48393cdb5","type":"Toolbar"},"x_range":{"id":"6ccc426c-8e4a-40a5-bdb3-3a5d0b771254","type":"DataRange1d"},"x_scale":{"id":"1f97b014-dd97-48f2-b564-8800236dfead","type":"LinearScale"},"y_range":{"id":"856987d6-7a98-430a-9d76-4e9ac977e9ed","type":"DataRange1d"},"y_scale":{"id":"e576764f-1c08-4c1b-9bf5-ec2561575b03","type":"LinearScale"}},"id":"76f6cefc-b798-4765-8faa-b56608d7ccdc","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"76f6cefc-b798-4765-8faa-b56608d7ccdc","subtype":"Figure","type":"Plot"},"ticker":{"id":"68c3ea6d-3784-40b2-8bd2-c38f9b69861c","type":"BasicTicker"}},"id":"bf367987-c2a2-4f2c-8c47-910ce03a6351","type":"Grid"}],"root_ids":["76f6cefc-b798-4765-8faa-b56608d7ccdc"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"9db3776f-5182-4cb5-86fa-1632f1578c4b","elementid":"d8d89556-fb95-463c-8118-8706c25476ea","modelid":"76f6cefc-b798-4765-8faa-b56608d7ccdc"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
