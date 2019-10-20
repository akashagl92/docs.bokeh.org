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
      };var element = document.getElementById("a0a45f1d-7b72-425d-80b9-9f463d15c302");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0a45f1d-7b72-425d-80b9-9f463d15c302' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"00dc128d-d8bc-4ff8-97c8-d1ecfb77d4cd":{"roots":{"references":[{"attributes":{},"id":"fe8e105b-ab49-4880-b9f2-a5015480ae3d","type":"Selection"},{"attributes":{},"id":"9bd6abad-0109-443e-9836-d5429e1ed3ab","type":"BasicTicker"},{"attributes":{},"id":"2eb11e19-86ed-4c88-bf4c-dea415d4acd4","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e8422203-b92f-4d5f-87a6-c8b5c49dff07","type":"Rect"},{"attributes":{"plot":null,"text":"Box Edit Tool"},"id":"c8cc0821-2910-4465-a81c-81e07c4a163b","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"31cb6cd4-03bf-49c0-a738-6be16447a837","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bd6abad-0109-443e-9836-d5429e1ed3ab","type":"BasicTicker"}},"id":"b2f9e974-ca2a-40ab-a7a6-515b264f00b8","type":"Grid"},{"attributes":{"active_drag":{"id":"5411d533-97c1-4c74-8b12-dc700d66c4aa","type":"BoxEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"66e2fb08-12c0-4088-9b30-065af22be879","type":"PanTool"},{"id":"868613cc-4b07-42d6-8bc9-5cee6085d485","type":"WheelZoomTool"},{"id":"c4da0514-2c8c-49d6-ad24-bb211e9a0bca","type":"BoxZoomTool"},{"id":"3495e7a8-303e-4c2f-b6b8-024dcfc2344b","type":"SaveTool"},{"id":"542d060e-1b8d-4e5d-81e1-c467755fe232","type":"ResetTool"},{"id":"abce42e0-31bd-4d12-97ef-456f61d683b6","type":"HelpTool"},{"id":"5411d533-97c1-4c74-8b12-dc700d66c4aa","type":"BoxEditTool"}]},"id":"c9952ca4-f265-49bd-9971-00cd37a1a2b5","type":"Toolbar"},{"attributes":{"callback":null,"data":{"alpha":[0.5,0.5,0.5],"height":[2,1,1.5],"width":[2,1,2],"x":[5,2,8],"y":[5,7,8]},"selected":{"id":"fe8e105b-ab49-4880-b9f2-a5015480ae3d","type":"Selection"},"selection_policy":{"id":"02fc699b-f59c-4d63-b69b-6ea965542be7","type":"UnionRenderers"}},"id":"4cc07079-431f-455d-9162-01018bbd42a2","type":"ColumnDataSource"},{"attributes":{},"id":"460bd886-a46d-4d97-9727-7dfca234a54a","type":"BasicTickFormatter"},{"attributes":{},"id":"02fc699b-f59c-4d63-b69b-6ea965542be7","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"558a6fc6-8ef3-457c-879c-1db15bb132c2","type":"BoxAnnotation"},{"attributes":{},"id":"66e2fb08-12c0-4088-9b30-065af22be879","type":"PanTool"},{"attributes":{"data_source":{"id":"4cc07079-431f-455d-9162-01018bbd42a2","type":"ColumnDataSource"},"glyph":{"id":"7a4e0ee9-1262-428a-a9c6-a470afccb910","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e8422203-b92f-4d5f-87a6-c8b5c49dff07","type":"Rect"},"selection_glyph":null,"view":{"id":"063f9226-6023-4211-b9f0-8c9fffbaea7d","type":"CDSView"}},"id":"9b85d7e7-bbc5-43ec-8fae-c7ca1ceb8c67","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"a789987d-be63-4df9-8c3e-4214f6807015","type":"Range1d"},{"attributes":{},"id":"868613cc-4b07-42d6-8bc9-5cee6085d485","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"alpha"},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"field":"alpha"},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a4e0ee9-1262-428a-a9c6-a470afccb910","type":"Rect"},{"attributes":{"overlay":{"id":"558a6fc6-8ef3-457c-879c-1db15bb132c2","type":"BoxAnnotation"}},"id":"c4da0514-2c8c-49d6-ad24-bb211e9a0bca","type":"BoxZoomTool"},{"attributes":{},"id":"4a048151-183b-4574-826b-2c9bd56d6370","type":"LinearScale"},{"attributes":{},"id":"3495e7a8-303e-4c2f-b6b8-024dcfc2344b","type":"SaveTool"},{"attributes":{"callback":null,"end":10},"id":"f06a10d4-28ce-4fa8-8e7b-ceb497a9359a","type":"Range1d"},{"attributes":{"below":[{"id":"3e7dd81e-b283-4172-8b5e-0313c8b99535","type":"LinearAxis"}],"left":[{"id":"996eceb1-7251-4d20-9f5e-d95b0a4cb8f5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3e7dd81e-b283-4172-8b5e-0313c8b99535","type":"LinearAxis"},{"id":"0b51993c-ca9a-4d3e-b29d-9db9b8d10132","type":"Grid"},{"id":"996eceb1-7251-4d20-9f5e-d95b0a4cb8f5","type":"LinearAxis"},{"id":"b2f9e974-ca2a-40ab-a7a6-515b264f00b8","type":"Grid"},{"id":"558a6fc6-8ef3-457c-879c-1db15bb132c2","type":"BoxAnnotation"},{"id":"9b85d7e7-bbc5-43ec-8fae-c7ca1ceb8c67","type":"GlyphRenderer"}],"title":{"id":"c8cc0821-2910-4465-a81c-81e07c4a163b","type":"Title"},"toolbar":{"id":"c9952ca4-f265-49bd-9971-00cd37a1a2b5","type":"Toolbar"},"x_range":{"id":"a789987d-be63-4df9-8c3e-4214f6807015","type":"Range1d"},"x_scale":{"id":"4a048151-183b-4574-826b-2c9bd56d6370","type":"LinearScale"},"y_range":{"id":"f06a10d4-28ce-4fa8-8e7b-ceb497a9359a","type":"Range1d"},"y_scale":{"id":"27a255ee-87df-422f-b99c-a0ea402acf7a","type":"LinearScale"}},"id":"31cb6cd4-03bf-49c0-a738-6be16447a837","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"542d060e-1b8d-4e5d-81e1-c467755fe232","type":"ResetTool"},{"attributes":{},"id":"27a255ee-87df-422f-b99c-a0ea402acf7a","type":"LinearScale"},{"attributes":{},"id":"abce42e0-31bd-4d12-97ef-456f61d683b6","type":"HelpTool"},{"attributes":{"plot":{"id":"31cb6cd4-03bf-49c0-a738-6be16447a837","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a887dae-1fde-4345-9005-b0540729c4fe","type":"BasicTicker"}},"id":"0b51993c-ca9a-4d3e-b29d-9db9b8d10132","type":"Grid"},{"attributes":{"formatter":{"id":"460bd886-a46d-4d97-9727-7dfca234a54a","type":"BasicTickFormatter"},"plot":{"id":"31cb6cd4-03bf-49c0-a738-6be16447a837","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a887dae-1fde-4345-9005-b0540729c4fe","type":"BasicTicker"}},"id":"3e7dd81e-b283-4172-8b5e-0313c8b99535","type":"LinearAxis"},{"attributes":{"source":{"id":"4cc07079-431f-455d-9162-01018bbd42a2","type":"ColumnDataSource"}},"id":"063f9226-6023-4211-b9f0-8c9fffbaea7d","type":"CDSView"},{"attributes":{},"id":"0a887dae-1fde-4345-9005-b0540729c4fe","type":"BasicTicker"},{"attributes":{"empty_value":1,"renderers":[{"id":"9b85d7e7-bbc5-43ec-8fae-c7ca1ceb8c67","type":"GlyphRenderer"}]},"id":"5411d533-97c1-4c74-8b12-dc700d66c4aa","type":"BoxEditTool"},{"attributes":{"formatter":{"id":"2eb11e19-86ed-4c88-bf4c-dea415d4acd4","type":"BasicTickFormatter"},"plot":{"id":"31cb6cd4-03bf-49c0-a738-6be16447a837","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bd6abad-0109-443e-9836-d5429e1ed3ab","type":"BasicTicker"}},"id":"996eceb1-7251-4d20-9f5e-d95b0a4cb8f5","type":"LinearAxis"}],"root_ids":["31cb6cd4-03bf-49c0-a738-6be16447a837"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"00dc128d-d8bc-4ff8-97c8-d1ecfb77d4cd","roots":{"31cb6cd4-03bf-49c0-a738-6be16447a837":"a0a45f1d-7b72-425d-80b9-9f463d15c302"}}];
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