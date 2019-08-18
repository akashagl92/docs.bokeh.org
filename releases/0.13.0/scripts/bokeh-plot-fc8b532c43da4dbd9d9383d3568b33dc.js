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
      };var element = document.getElementById("cf8d58b7-381b-4df1-bf41-9627cfb361d0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf8d58b7-381b-4df1-bf41-9627cfb361d0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7d1101ae-fbba-4c53-8af8-5fdcec43e901":{"roots":{"references":[{"attributes":{},"id":"9c8b8d27-70a2-4c91-a0b0-406d74b94ce9","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"1acd0bfd-4312-48b1-b2c7-961de8eab51d","type":"Selection"},"selection_policy":{"id":"870be3e1-006b-4b50-8358-2cbab264f0e5","type":"UnionRenderers"}},"id":"13045852-7003-4a64-94ef-403d218687fc","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"52cd67d8-4902-4d0b-9f32-7132bcae3443","type":"Circle"},{"attributes":{"plot":{"id":"05e20c15-fa3d-4045-b540-508720b7dfd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"136abe63-edeb-4cce-8724-317d3c9ae13e","type":"BasicTicker"}},"id":"57fabf24-1c1b-473c-b72d-e688c06943a2","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"05e20c15-fa3d-4045-b540-508720b7dfd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3e104aa-2345-42e2-b80a-c19b30809784","type":"BasicTicker"}},"id":"31c1a213-9954-4b9c-9dd7-c33a4b4a7148","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"1dc80c8e-93c1-41eb-8f3d-b87f030905c9","type":"Title"},{"attributes":{},"id":"78c8eb3c-11cf-455d-9230-c457d0abd045","type":"LinearScale"},{"attributes":{"callback":null},"id":"7da52b67-da9b-4bde-b15c-c5214b2a1c3b","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b74e156f-8d97-4614-9a88-f01ad6eda40b","type":"Circle"},{"attributes":{},"id":"870be3e1-006b-4b50-8358-2cbab264f0e5","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"9fbc8fd7-e30f-4a47-9e70-f9d5bdbef2db","type":"DataRange1d"},{"attributes":{},"id":"791d85c9-fe31-4462-8125-183aaee9fcbc","type":"HelpTool"},{"attributes":{},"id":"136abe63-edeb-4cce-8724-317d3c9ae13e","type":"BasicTicker"},{"attributes":{"source":{"id":"13045852-7003-4a64-94ef-403d218687fc","type":"ColumnDataSource"}},"id":"15bea6a2-5a39-4670-a6c2-052402557729","type":"CDSView"},{"attributes":{"formatter":{"id":"5ea4f23e-f4ac-40e7-a2ea-a4644f1df900","type":"BasicTickFormatter"},"plot":{"id":"05e20c15-fa3d-4045-b540-508720b7dfd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3e104aa-2345-42e2-b80a-c19b30809784","type":"BasicTicker"}},"id":"c41a2934-8190-4d8d-906d-4e0f49b24e8e","type":"LinearAxis"},{"attributes":{},"id":"b8fc38cc-0a83-4990-b9fa-d8fdb0ca5b2a","type":"WheelZoomTool"},{"attributes":{},"id":"d3e104aa-2345-42e2-b80a-c19b30809784","type":"BasicTicker"},{"attributes":{"below":[{"id":"68625428-e549-40de-aa03-a63d4191b531","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"c41a2934-8190-4d8d-906d-4e0f49b24e8e","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"68625428-e549-40de-aa03-a63d4191b531","type":"LinearAxis"},{"id":"57fabf24-1c1b-473c-b72d-e688c06943a2","type":"Grid"},{"id":"c41a2934-8190-4d8d-906d-4e0f49b24e8e","type":"LinearAxis"},{"id":"31c1a213-9954-4b9c-9dd7-c33a4b4a7148","type":"Grid"},{"id":"fe4bd545-6514-42f0-bc7a-e8a36ba979ca","type":"BoxAnnotation"},{"id":"646f69ee-a91f-4489-83d7-19a218efcf89","type":"GlyphRenderer"}],"title":{"id":"1dc80c8e-93c1-41eb-8f3d-b87f030905c9","type":"Title"},"toolbar":{"id":"430a41fd-b904-499e-98c3-51181174ecad","type":"Toolbar"},"x_range":{"id":"9fbc8fd7-e30f-4a47-9e70-f9d5bdbef2db","type":"DataRange1d"},"x_scale":{"id":"78c8eb3c-11cf-455d-9230-c457d0abd045","type":"LinearScale"},"y_range":{"id":"7da52b67-da9b-4bde-b15c-c5214b2a1c3b","type":"DataRange1d"},"y_scale":{"id":"9c8b8d27-70a2-4c91-a0b0-406d74b94ce9","type":"LinearScale"}},"id":"05e20c15-fa3d-4045-b540-508720b7dfd0","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"fe4bd545-6514-42f0-bc7a-e8a36ba979ca","type":"BoxAnnotation"}},"id":"0a827719-5dcc-4580-92a9-d11eaeed0700","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20a2c948-2eef-4709-84cb-106d5ad660b9","type":"PanTool"},{"id":"b8fc38cc-0a83-4990-b9fa-d8fdb0ca5b2a","type":"WheelZoomTool"},{"id":"0a827719-5dcc-4580-92a9-d11eaeed0700","type":"BoxZoomTool"},{"id":"06cf59aa-74b1-45ac-bf7a-ec0a267f72a2","type":"SaveTool"},{"id":"f16ca467-db53-4535-8468-892c9a0ae9f4","type":"ResetTool"},{"id":"791d85c9-fe31-4462-8125-183aaee9fcbc","type":"HelpTool"}]},"id":"430a41fd-b904-499e-98c3-51181174ecad","type":"Toolbar"},{"attributes":{"formatter":{"id":"5a41244d-203a-437c-816f-fb87ff9d4961","type":"BasicTickFormatter"},"plot":{"id":"05e20c15-fa3d-4045-b540-508720b7dfd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"136abe63-edeb-4cce-8724-317d3c9ae13e","type":"BasicTicker"}},"id":"68625428-e549-40de-aa03-a63d4191b531","type":"LinearAxis"},{"attributes":{},"id":"1acd0bfd-4312-48b1-b2c7-961de8eab51d","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fe4bd545-6514-42f0-bc7a-e8a36ba979ca","type":"BoxAnnotation"},{"attributes":{},"id":"f16ca467-db53-4535-8468-892c9a0ae9f4","type":"ResetTool"},{"attributes":{},"id":"06cf59aa-74b1-45ac-bf7a-ec0a267f72a2","type":"SaveTool"},{"attributes":{},"id":"5ea4f23e-f4ac-40e7-a2ea-a4644f1df900","type":"BasicTickFormatter"},{"attributes":{},"id":"20a2c948-2eef-4709-84cb-106d5ad660b9","type":"PanTool"},{"attributes":{"data_source":{"id":"13045852-7003-4a64-94ef-403d218687fc","type":"ColumnDataSource"},"glyph":{"id":"b74e156f-8d97-4614-9a88-f01ad6eda40b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52cd67d8-4902-4d0b-9f32-7132bcae3443","type":"Circle"},"selection_glyph":null,"view":{"id":"15bea6a2-5a39-4670-a6c2-052402557729","type":"CDSView"}},"id":"646f69ee-a91f-4489-83d7-19a218efcf89","type":"GlyphRenderer"},{"attributes":{},"id":"5a41244d-203a-437c-816f-fb87ff9d4961","type":"BasicTickFormatter"}],"root_ids":["05e20c15-fa3d-4045-b540-508720b7dfd0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7d1101ae-fbba-4c53-8af8-5fdcec43e901","roots":{"05e20c15-fa3d-4045-b540-508720b7dfd0":"cf8d58b7-381b-4df1-bf41-9627cfb361d0"}}];
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