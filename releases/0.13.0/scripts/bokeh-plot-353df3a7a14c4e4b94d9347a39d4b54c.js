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
      };var element = document.getElementById("395f7c93-f841-4965-b261-e2d90388c9bc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '395f7c93-f841-4965-b261-e2d90388c9bc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"98065ac4-3f65-4b0c-ab12-9182de759140":{"roots":{"references":[{"attributes":{"plot":{"id":"13f7efa4-6319-47de-8b55-4b29146c62da","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b6fb802-2599-4bd8-b395-22328133252a","type":"BasicTicker"}},"id":"de1f38e0-4c1c-496c-b54e-91a4bed2b5d7","type":"Grid"},{"attributes":{},"id":"1a71e86e-4936-49e1-bb1e-1b5318e7bb14","type":"UnionRenderers"},{"attributes":{},"id":"12e8d155-431e-4722-8a42-6a4f4a2362c2","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"99e4bc53-7a6b-4011-bb65-183622f01def","type":"Selection"},"selection_policy":{"id":"1a71e86e-4936-49e1-bb1e-1b5318e7bb14","type":"UnionRenderers"}},"id":"bc754552-597e-48e8-8f6c-1887eae14327","type":"ColumnDataSource"},{"attributes":{},"id":"1286bf2e-94ed-4dbf-b600-d5929c719bac","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"13f7efa4-6319-47de-8b55-4b29146c62da","subtype":"Figure","type":"Plot"},"ticker":{"id":"1286bf2e-94ed-4dbf-b600-d5929c719bac","type":"BasicTicker"}},"id":"03b17d0f-abd2-40ef-b1e8-85095236e889","type":"Grid"},{"attributes":{},"id":"a25546bd-9a8c-4ec4-a0d6-a9619256b8f2","type":"BasicTickFormatter"},{"attributes":{},"id":"72f1db58-c267-45b5-9eb9-0ee400567a74","type":"LinearScale"},{"attributes":{"callback":null},"id":"c4b1cdcb-c02a-4dd5-bc6a-a9c2b63b82c8","type":"DataRange1d"},{"attributes":{},"id":"824c0e37-0fa0-4852-8827-8a1cccd65c97","type":"WheelZoomTool"},{"attributes":{},"id":"f0b7b9cd-1655-44a1-b2d6-77851a965785","type":"LinearScale"},{"attributes":{"data_source":{"id":"bc754552-597e-48e8-8f6c-1887eae14327","type":"ColumnDataSource"},"glyph":{"id":"7bb5e707-34bb-480c-8aa1-bb3081f2efb1","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"989f259b-8440-4041-b046-e50e92558cf0","type":"Segment"},"selection_glyph":null,"view":{"id":"cbf7133a-9e88-40ea-8761-5be3cb8778f9","type":"CDSView"}},"id":"012cb33b-4269-493f-bbf9-ae8286f07541","type":"GlyphRenderer"},{"attributes":{},"id":"b7b8244d-ad90-4f48-99bb-91baf4684a7e","type":"ResetTool"},{"attributes":{"formatter":{"id":"727bb9c5-e54a-4180-877b-df75c9c590f3","type":"BasicTickFormatter"},"plot":{"id":"13f7efa4-6319-47de-8b55-4b29146c62da","subtype":"Figure","type":"Plot"},"ticker":{"id":"1286bf2e-94ed-4dbf-b600-d5929c719bac","type":"BasicTicker"}},"id":"cd53bcc7-e916-4a33-aa10-7225f585bdcf","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9ae9d0fb-b807-4811-8eb9-2fdf00d88784","type":"BoxAnnotation"},{"attributes":{},"id":"84afc8c5-06da-4b2c-8bc1-4192f4b4b304","type":"PanTool"},{"attributes":{"callback":null},"id":"59267028-b4ac-4386-a21f-27c78b4711ff","type":"DataRange1d"},{"attributes":{"overlay":{"id":"9ae9d0fb-b807-4811-8eb9-2fdf00d88784","type":"BoxAnnotation"}},"id":"391fb89e-364f-4bd1-8330-6a0240d5f461","type":"BoxZoomTool"},{"attributes":{"source":{"id":"bc754552-597e-48e8-8f6c-1887eae14327","type":"ColumnDataSource"}},"id":"cbf7133a-9e88-40ea-8761-5be3cb8778f9","type":"CDSView"},{"attributes":{"below":[{"id":"9476c0d2-ec1b-4df2-aa38-9b018a8c0746","type":"LinearAxis"}],"left":[{"id":"cd53bcc7-e916-4a33-aa10-7225f585bdcf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9476c0d2-ec1b-4df2-aa38-9b018a8c0746","type":"LinearAxis"},{"id":"de1f38e0-4c1c-496c-b54e-91a4bed2b5d7","type":"Grid"},{"id":"cd53bcc7-e916-4a33-aa10-7225f585bdcf","type":"LinearAxis"},{"id":"03b17d0f-abd2-40ef-b1e8-85095236e889","type":"Grid"},{"id":"9ae9d0fb-b807-4811-8eb9-2fdf00d88784","type":"BoxAnnotation"},{"id":"012cb33b-4269-493f-bbf9-ae8286f07541","type":"GlyphRenderer"}],"title":{"id":"f8f3e926-0190-432a-a9f5-4708e06528b2","type":"Title"},"toolbar":{"id":"707047ec-b1ba-49ae-931e-6c5312368bdb","type":"Toolbar"},"x_range":{"id":"59267028-b4ac-4386-a21f-27c78b4711ff","type":"DataRange1d"},"x_scale":{"id":"72f1db58-c267-45b5-9eb9-0ee400567a74","type":"LinearScale"},"y_range":{"id":"c4b1cdcb-c02a-4dd5-bc6a-a9c2b63b82c8","type":"DataRange1d"},"y_scale":{"id":"f0b7b9cd-1655-44a1-b2d6-77851a965785","type":"LinearScale"}},"id":"13f7efa4-6319-47de-8b55-4b29146c62da","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"99e4bc53-7a6b-4011-bb65-183622f01def","type":"Selection"},{"attributes":{},"id":"727bb9c5-e54a-4180-877b-df75c9c590f3","type":"BasicTickFormatter"},{"attributes":{},"id":"3b6fb802-2599-4bd8-b395-22328133252a","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7bb5e707-34bb-480c-8aa1-bb3081f2efb1","type":"Segment"},{"attributes":{"formatter":{"id":"a25546bd-9a8c-4ec4-a0d6-a9619256b8f2","type":"BasicTickFormatter"},"plot":{"id":"13f7efa4-6319-47de-8b55-4b29146c62da","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b6fb802-2599-4bd8-b395-22328133252a","type":"BasicTicker"}},"id":"9476c0d2-ec1b-4df2-aa38-9b018a8c0746","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"f8f3e926-0190-432a-a9f5-4708e06528b2","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"84afc8c5-06da-4b2c-8bc1-4192f4b4b304","type":"PanTool"},{"id":"824c0e37-0fa0-4852-8827-8a1cccd65c97","type":"WheelZoomTool"},{"id":"391fb89e-364f-4bd1-8330-6a0240d5f461","type":"BoxZoomTool"},{"id":"69a98d2d-a418-465a-997f-68382d141155","type":"SaveTool"},{"id":"b7b8244d-ad90-4f48-99bb-91baf4684a7e","type":"ResetTool"},{"id":"12e8d155-431e-4722-8a42-6a4f4a2362c2","type":"HelpTool"}]},"id":"707047ec-b1ba-49ae-931e-6c5312368bdb","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"989f259b-8440-4041-b046-e50e92558cf0","type":"Segment"},{"attributes":{},"id":"69a98d2d-a418-465a-997f-68382d141155","type":"SaveTool"}],"root_ids":["13f7efa4-6319-47de-8b55-4b29146c62da"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"98065ac4-3f65-4b0c-ab12-9182de759140","roots":{"13f7efa4-6319-47de-8b55-4b29146c62da":"395f7c93-f841-4965-b261-e2d90388c9bc"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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