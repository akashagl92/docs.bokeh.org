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
      };var element = document.getElementById("fa9ea487-878c-46ab-b335-d49ebe792d7e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa9ea487-878c-46ab-b335-d49ebe792d7e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"28b83517-11d4-4326-9d88-4284b36117a0":{"roots":{"references":[{"attributes":{},"id":"3290c526-aa3b-47e9-9589-7f0189194c0f","type":"BasicTicker"},{"attributes":{},"id":"c30b7bd0-aa56-4033-a160-cbce5467be99","type":"BasicTickFormatter"},{"attributes":{},"id":"3b5ba65d-c3b8-45ce-9aa2-a0bc288e1885","type":"WheelZoomTool"},{"attributes":{},"id":"3a205d7e-ef10-45a3-906a-868a30812bf6","type":"BasicTickFormatter"},{"attributes":{},"id":"74dfebe8-3fc6-41dd-9a1c-a25eda67b8e1","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d0d65d50-93b7-4d11-93d0-dadcbb585ae1","type":"PanTool"},{"id":"3b5ba65d-c3b8-45ce-9aa2-a0bc288e1885","type":"WheelZoomTool"},{"id":"9403a676-bd77-48e4-a37f-1ebc11d92a98","type":"BoxZoomTool"},{"id":"17736a41-0a67-41ff-9abf-26f519d4a29f","type":"SaveTool"},{"id":"08b15157-95e6-462e-b556-091d8f28ac24","type":"ResetTool"},{"id":"9af89ec1-4756-4dbf-9a7c-069fc50d06ec","type":"HelpTool"}]},"id":"56c48f5f-c94f-4543-a97b-ca182218df7f","type":"Toolbar"},{"attributes":{},"id":"0d0d6ef1-1699-40c1-9a00-890a90d106d4","type":"LinearScale"},{"attributes":{"overlay":{"id":"38ada080-e87e-4434-b5bf-fb80732433bf","type":"BoxAnnotation"}},"id":"9403a676-bd77-48e4-a37f-1ebc11d92a98","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"9b175bf6-8fc4-455f-b6ed-60a56e4961a9","type":"LinearAxis"}],"left":[{"id":"215ae6e8-ca09-493e-8c6c-f37ee7014710","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9b175bf6-8fc4-455f-b6ed-60a56e4961a9","type":"LinearAxis"},{"id":"a06273df-b99e-4bae-adbb-d59267a0b19a","type":"Grid"},{"id":"215ae6e8-ca09-493e-8c6c-f37ee7014710","type":"LinearAxis"},{"id":"e1e2cb4e-3f2d-495c-acdc-780eaf5cd661","type":"Grid"},{"id":"38ada080-e87e-4434-b5bf-fb80732433bf","type":"BoxAnnotation"},{"id":"dad71a83-78a2-4077-a0d8-d4e5b950666a","type":"GlyphRenderer"}],"title":{"id":"acf1bfed-0f2b-4190-bf80-8d58e514d61d","type":"Title"},"toolbar":{"id":"56c48f5f-c94f-4543-a97b-ca182218df7f","type":"Toolbar"},"x_range":{"id":"510ec46f-d2e9-4685-bbe3-97035a742d87","type":"DataRange1d"},"x_scale":{"id":"74dfebe8-3fc6-41dd-9a1c-a25eda67b8e1","type":"LinearScale"},"y_range":{"id":"ffb0c19c-904d-42a1-aea4-b408fce6d9e4","type":"DataRange1d"},"y_scale":{"id":"0d0d6ef1-1699-40c1-9a00-890a90d106d4","type":"LinearScale"}},"id":"c2f75d9b-fd91-46f5-adef-d1fa456d3d5d","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"c2f75d9b-fd91-46f5-adef-d1fa456d3d5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"3290c526-aa3b-47e9-9589-7f0189194c0f","type":"BasicTicker"}},"id":"a06273df-b99e-4bae-adbb-d59267a0b19a","type":"Grid"},{"attributes":{},"id":"1b59143c-674e-4a5f-870e-ccebdcc87356","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"b87ccf06-c937-436e-bff7-5ae665996c10","type":"ColumnDataSource"},"glyph":{"id":"9572a376-cbc0-439b-8c79-2ea04c6542cd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0da9b8bc-7950-4a92-8422-0744fafac0a0","type":"Circle"},"selection_glyph":null,"view":{"id":"42787b90-d3cc-4f98-9b15-7e810a0b95ba","type":"CDSView"}},"id":"dad71a83-78a2-4077-a0d8-d4e5b950666a","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3a205d7e-ef10-45a3-906a-868a30812bf6","type":"BasicTickFormatter"},"plot":{"id":"c2f75d9b-fd91-46f5-adef-d1fa456d3d5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"3290c526-aa3b-47e9-9589-7f0189194c0f","type":"BasicTicker"}},"id":"9b175bf6-8fc4-455f-b6ed-60a56e4961a9","type":"LinearAxis"},{"attributes":{},"id":"d58b8dcb-a42b-4429-9646-911bb37aeea9","type":"BasicTicker"},{"attributes":{},"id":"600c909a-26a3-4cad-ac26-ab9947925e34","type":"Selection"},{"attributes":{},"id":"08b15157-95e6-462e-b556-091d8f28ac24","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"c2f75d9b-fd91-46f5-adef-d1fa456d3d5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d58b8dcb-a42b-4429-9646-911bb37aeea9","type":"BasicTicker"}},"id":"e1e2cb4e-3f2d-495c-acdc-780eaf5cd661","type":"Grid"},{"attributes":{},"id":"17736a41-0a67-41ff-9abf-26f519d4a29f","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"600c909a-26a3-4cad-ac26-ab9947925e34","type":"Selection"},"selection_policy":{"id":"1b59143c-674e-4a5f-870e-ccebdcc87356","type":"UnionRenderers"}},"id":"b87ccf06-c937-436e-bff7-5ae665996c10","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b87ccf06-c937-436e-bff7-5ae665996c10","type":"ColumnDataSource"}},"id":"42787b90-d3cc-4f98-9b15-7e810a0b95ba","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0da9b8bc-7950-4a92-8422-0744fafac0a0","type":"Circle"},{"attributes":{},"id":"d0d65d50-93b7-4d11-93d0-dadcbb585ae1","type":"PanTool"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"acf1bfed-0f2b-4190-bf80-8d58e514d61d","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"38ada080-e87e-4434-b5bf-fb80732433bf","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"510ec46f-d2e9-4685-bbe3-97035a742d87","type":"DataRange1d"},{"attributes":{},"id":"9af89ec1-4756-4dbf-9a7c-069fc50d06ec","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9572a376-cbc0-439b-8c79-2ea04c6542cd","type":"Circle"},{"attributes":{"formatter":{"id":"c30b7bd0-aa56-4033-a160-cbce5467be99","type":"BasicTickFormatter"},"plot":{"id":"c2f75d9b-fd91-46f5-adef-d1fa456d3d5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d58b8dcb-a42b-4429-9646-911bb37aeea9","type":"BasicTicker"}},"id":"215ae6e8-ca09-493e-8c6c-f37ee7014710","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ffb0c19c-904d-42a1-aea4-b408fce6d9e4","type":"DataRange1d"}],"root_ids":["c2f75d9b-fd91-46f5-adef-d1fa456d3d5d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"28b83517-11d4-4326-9d88-4284b36117a0","roots":{"c2f75d9b-fd91-46f5-adef-d1fa456d3d5d":"fa9ea487-878c-46ab-b335-d49ebe792d7e"}}];
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