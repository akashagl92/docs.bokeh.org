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
      };var element = document.getElementById("55d65704-ae62-4085-b19b-59e194dd9b9c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '55d65704-ae62-4085-b19b-59e194dd9b9c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"1a99ad63-46e9-4e82-b567-6d16b4a910c3":{"roots":{"references":[{"attributes":{"source":{"id":"bbf7bce5-57ff-46f0-8c2a-631705d429c4","type":"ColumnDataSource"}},"id":"86f746b0-1be5-4498-908e-cb3e53f0fa90","type":"CDSView"},{"attributes":{},"id":"6d38334a-2f6b-45e2-bd10-a344c1d1b6b2","type":"CategoricalTicker"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"24f7e31d-fd2f-49e7-8bf8-3a33a6291ebc","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"702e0bb4-1149-481d-952e-489cdb2761bd","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"42700d91-438e-402b-adb2-4665165d74f9","type":"VBar"},{"attributes":{"below":[{"id":"4c1d3247-27aa-46a7-8c06-a5e5c080c447","type":"CategoricalAxis"}],"left":[{"id":"1387bad8-fbfb-48e5-8a55-b221f3b2c34e","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"4c1d3247-27aa-46a7-8c06-a5e5c080c447","type":"CategoricalAxis"},{"id":"908793f1-cbd6-4e43-b324-acc78a3bba64","type":"Grid"},{"id":"1387bad8-fbfb-48e5-8a55-b221f3b2c34e","type":"LinearAxis"},{"id":"762473d9-ba23-4414-9ac2-2e9447fc9ea9","type":"Grid"},{"id":"5bb00b83-9b05-42ee-a771-91b9cfef1656","type":"BoxAnnotation"},{"id":"4f0661e9-93bb-4942-8ce6-8adf67384ab9","type":"Legend"},{"id":"5c6a4461-3a10-4123-863d-951bb9a8be0e","type":"GlyphRenderer"}],"title":{"id":"a0cb6b7e-423d-4057-9dc4-6ecf28713ae6","type":"Title"},"toolbar":{"id":"b07bf646-4955-426c-9530-c7ba7949b7a7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3003e9cb-8b78-4fba-8ffd-0a0d871d8c65","type":"FactorRange"},"x_scale":{"id":"136dbb5f-5a61-4610-a74f-89f4b76a44e8","type":"CategoricalScale"},"y_range":{"id":"fbad3d85-f093-460c-9f6d-e925967dfb74","type":"DataRange1d"},"y_scale":{"id":"143d0689-3674-46fe-9878-ff3a209f4adb","type":"LinearScale"}},"id":"e0a62570-96ab-4e92-a3c4-12e073ec8259","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a1529dfe-7340-45c4-894b-5b7bbb3b6b80","type":"BasicTicker"},{"attributes":{},"id":"2d5b3399-9e0a-4079-8f64-54c041c08fed","type":"CategoricalTickFormatter"},{"attributes":{"items":[{"id":"5f9626e7-9513-4323-8ca3-332fd1927cf2","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"e0a62570-96ab-4e92-a3c4-12e073ec8259","subtype":"Figure","type":"Plot"}},"id":"4f0661e9-93bb-4942-8ce6-8adf67384ab9","type":"Legend"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e0a62570-96ab-4e92-a3c4-12e073ec8259","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d38334a-2f6b-45e2-bd10-a344c1d1b6b2","type":"CategoricalTicker"}},"id":"908793f1-cbd6-4e43-b324-acc78a3bba64","type":"Grid"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"bbf7bce5-57ff-46f0-8c2a-631705d429c4","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"a0cb6b7e-423d-4057-9dc4-6ecf28713ae6","type":"Title"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"5c6a4461-3a10-4123-863d-951bb9a8be0e","type":"GlyphRenderer"}]},"id":"5f9626e7-9513-4323-8ca3-332fd1927cf2","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"908ca26c-e8ef-4bc6-9cfe-fdc4362652da","type":"PanTool"},{"id":"24fc6d9b-9582-45a9-9784-381e14478b1b","type":"WheelZoomTool"},{"id":"7aa7c5cf-698a-46d3-a033-1827609e3f9c","type":"BoxZoomTool"},{"id":"e60f9a5b-6312-4464-9a39-adbb1a6fbb97","type":"SaveTool"},{"id":"70328136-5137-4e7e-9676-6018babf22c7","type":"ResetTool"},{"id":"79ea2252-53ac-4114-970e-b13428ed7786","type":"HelpTool"}]},"id":"b07bf646-4955-426c-9530-c7ba7949b7a7","type":"Toolbar"},{"attributes":{},"id":"143d0689-3674-46fe-9878-ff3a209f4adb","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"e0a62570-96ab-4e92-a3c4-12e073ec8259","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1529dfe-7340-45c4-894b-5b7bbb3b6b80","type":"BasicTicker"}},"id":"762473d9-ba23-4414-9ac2-2e9447fc9ea9","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5bb00b83-9b05-42ee-a771-91b9cfef1656","type":"BoxAnnotation"},{"attributes":{},"id":"24fc6d9b-9582-45a9-9784-381e14478b1b","type":"WheelZoomTool"},{"attributes":{},"id":"908ca26c-e8ef-4bc6-9cfe-fdc4362652da","type":"PanTool"},{"attributes":{},"id":"e60f9a5b-6312-4464-9a39-adbb1a6fbb97","type":"SaveTool"},{"attributes":{},"id":"70328136-5137-4e7e-9676-6018babf22c7","type":"ResetTool"},{"attributes":{"formatter":{"id":"2d5b3399-9e0a-4079-8f64-54c041c08fed","type":"CategoricalTickFormatter"},"plot":{"id":"e0a62570-96ab-4e92-a3c4-12e073ec8259","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d38334a-2f6b-45e2-bd10-a344c1d1b6b2","type":"CategoricalTicker"}},"id":"4c1d3247-27aa-46a7-8c06-a5e5c080c447","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"b7181c42-76a2-431d-b424-9664d82efaf3","type":"BasicTickFormatter"},"plot":{"id":"e0a62570-96ab-4e92-a3c4-12e073ec8259","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1529dfe-7340-45c4-894b-5b7bbb3b6b80","type":"BasicTicker"}},"id":"1387bad8-fbfb-48e5-8a55-b221f3b2c34e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"bbf7bce5-57ff-46f0-8c2a-631705d429c4","type":"ColumnDataSource"},"glyph":{"id":"702e0bb4-1149-481d-952e-489cdb2761bd","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42700d91-438e-402b-adb2-4665165d74f9","type":"VBar"},"selection_glyph":null,"view":{"id":"86f746b0-1be5-4498-908e-cb3e53f0fa90","type":"CDSView"}},"id":"5c6a4461-3a10-4123-863d-951bb9a8be0e","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":9,"start":0},"id":"fbad3d85-f093-460c-9f6d-e925967dfb74","type":"DataRange1d"},{"attributes":{},"id":"79ea2252-53ac-4114-970e-b13428ed7786","type":"HelpTool"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"24f7e31d-fd2f-49e7-8bf8-3a33a6291ebc","type":"CategoricalColorMapper"},{"attributes":{},"id":"b7181c42-76a2-431d-b424-9664d82efaf3","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"3003e9cb-8b78-4fba-8ffd-0a0d871d8c65","type":"FactorRange"},{"attributes":{"overlay":{"id":"5bb00b83-9b05-42ee-a771-91b9cfef1656","type":"BoxAnnotation"}},"id":"7aa7c5cf-698a-46d3-a033-1827609e3f9c","type":"BoxZoomTool"},{"attributes":{},"id":"136dbb5f-5a61-4610-a74f-89f4b76a44e8","type":"CategoricalScale"}],"root_ids":["e0a62570-96ab-4e92-a3c4-12e073ec8259"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"1a99ad63-46e9-4e82-b567-6d16b4a910c3","elementid":"55d65704-ae62-4085-b19b-59e194dd9b9c","modelid":"e0a62570-96ab-4e92-a3c4-12e073ec8259"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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