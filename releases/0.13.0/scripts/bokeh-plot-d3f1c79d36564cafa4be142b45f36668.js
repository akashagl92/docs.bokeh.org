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
      };var element = document.getElementById("37974555-6a11-4fb5-b756-ce2a63413d99");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '37974555-6a11-4fb5-b756-ce2a63413d99' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9f5b4a8b-ca20-420b-8f9a-76d6f9fde2e7":{"roots":{"references":[{"attributes":{"callback":null},"id":"7af6e408-1b76-46b1-a216-f4ae70f01d43","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"02079a32-360c-4d82-b3fa-088989f15652","type":"PanTool"},{"id":"9e010277-432b-4955-ab17-c4772a18cc7b","type":"WheelZoomTool"},{"id":"dc882166-5bac-4ffc-baf8-a17b2a376d4c","type":"BoxZoomTool"},{"id":"58e3924a-5303-41c8-b024-46a2c5a6a9c5","type":"SaveTool"},{"id":"4b0d6b0e-4fef-4a14-b8ec-8b1c5e7810da","type":"ResetTool"},{"id":"b34c57f6-5103-4630-b371-67a4c751f2b2","type":"HelpTool"}]},"id":"62d1f99a-428e-47bb-abea-f154c27950ff","type":"Toolbar"},{"attributes":{"callback":null},"id":"5aa697b4-ac7e-4339-8f57-44b8f80fc213","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d104eb6b-154d-4a26-b2f8-40e094ab4cfa","type":"BasicTickFormatter"},"plot":{"id":"a961dc0a-c3dd-4e22-9008-eeb54bb5a7bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"844ee6a9-8c08-485d-84ed-dd95f560b700","type":"BasicTicker"}},"id":"8538e9e1-fda9-48e9-a799-2ffac4749c1b","type":"LinearAxis"},{"attributes":{},"id":"02079a32-360c-4d82-b3fa-088989f15652","type":"PanTool"},{"attributes":{},"id":"0815e5c7-6767-4f5f-a54d-66e1078fb460","type":"LinearScale"},{"attributes":{"plot":{"id":"a961dc0a-c3dd-4e22-9008-eeb54bb5a7bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c8c99c2-4ecf-4544-9ffa-0f6e41ab8752","type":"BasicTicker"}},"id":"38fd4694-4e7a-4c09-8f7b-246b7419310f","type":"Grid"},{"attributes":{"source":{"id":"09e6e6d2-f269-4723-b5d5-f410d854fded","type":"ColumnDataSource"}},"id":"46ddf573-a0f7-4f63-9f3d-2a3f32949779","type":"CDSView"},{"attributes":{},"id":"ea5268b8-2c8d-42f1-8829-d7f3438b1eb9","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e34869d8-eb75-4017-964c-dfdb806c73f9","type":"LinearAxis"}],"left":[{"id":"8538e9e1-fda9-48e9-a799-2ffac4749c1b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e34869d8-eb75-4017-964c-dfdb806c73f9","type":"LinearAxis"},{"id":"38fd4694-4e7a-4c09-8f7b-246b7419310f","type":"Grid"},{"id":"8538e9e1-fda9-48e9-a799-2ffac4749c1b","type":"LinearAxis"},{"id":"c8987db3-b52d-4a66-8c5d-4f49cefc28f5","type":"Grid"},{"id":"deea2bcd-0d43-4c2c-9aaf-fd3db23a904b","type":"BoxAnnotation"},{"id":"510ef552-0b75-446f-9655-dd8ab0b147e8","type":"GlyphRenderer"}],"title":{"id":"05b43c49-3ea4-4f2a-8cd6-a362d0332336","type":"Title"},"toolbar":{"id":"62d1f99a-428e-47bb-abea-f154c27950ff","type":"Toolbar"},"x_range":{"id":"5aa697b4-ac7e-4339-8f57-44b8f80fc213","type":"DataRange1d"},"x_scale":{"id":"851648fa-af04-4df6-9afe-e316fe1a0a72","type":"LinearScale"},"y_range":{"id":"7af6e408-1b76-46b1-a216-f4ae70f01d43","type":"DataRange1d"},"y_scale":{"id":"0815e5c7-6767-4f5f-a54d-66e1078fb460","type":"LinearScale"}},"id":"a961dc0a-c3dd-4e22-9008-eeb54bb5a7bb","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f383a205-c67c-45a8-8968-b6f1f27bcd46","type":"Circle"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"05b43c49-3ea4-4f2a-8cd6-a362d0332336","type":"Title"},{"attributes":{},"id":"1c8c99c2-4ecf-4544-9ffa-0f6e41ab8752","type":"BasicTicker"},{"attributes":{"data_source":{"id":"09e6e6d2-f269-4723-b5d5-f410d854fded","type":"ColumnDataSource"},"glyph":{"id":"96d6c3d4-eeb6-4fad-9a4a-7ebe0769844a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f383a205-c67c-45a8-8968-b6f1f27bcd46","type":"Circle"},"selection_glyph":null,"view":{"id":"46ddf573-a0f7-4f63-9f3d-2a3f32949779","type":"CDSView"}},"id":"510ef552-0b75-446f-9655-dd8ab0b147e8","type":"GlyphRenderer"},{"attributes":{},"id":"cdba84b7-cea8-41d2-960a-15bbde66e6ce","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"b37f101c-2c90-43ea-9918-b8def58f3f00","type":"Selection"},"selection_policy":{"id":"cdba84b7-cea8-41d2-960a-15bbde66e6ce","type":"UnionRenderers"}},"id":"09e6e6d2-f269-4723-b5d5-f410d854fded","type":"ColumnDataSource"},{"attributes":{},"id":"d104eb6b-154d-4a26-b2f8-40e094ab4cfa","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"96d6c3d4-eeb6-4fad-9a4a-7ebe0769844a","type":"Circle"},{"attributes":{},"id":"844ee6a9-8c08-485d-84ed-dd95f560b700","type":"BasicTicker"},{"attributes":{"overlay":{"id":"deea2bcd-0d43-4c2c-9aaf-fd3db23a904b","type":"BoxAnnotation"}},"id":"dc882166-5bac-4ffc-baf8-a17b2a376d4c","type":"BoxZoomTool"},{"attributes":{},"id":"9e010277-432b-4955-ab17-c4772a18cc7b","type":"WheelZoomTool"},{"attributes":{},"id":"851648fa-af04-4df6-9afe-e316fe1a0a72","type":"LinearScale"},{"attributes":{},"id":"b37f101c-2c90-43ea-9918-b8def58f3f00","type":"Selection"},{"attributes":{},"id":"4b0d6b0e-4fef-4a14-b8ec-8b1c5e7810da","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"deea2bcd-0d43-4c2c-9aaf-fd3db23a904b","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"a961dc0a-c3dd-4e22-9008-eeb54bb5a7bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"844ee6a9-8c08-485d-84ed-dd95f560b700","type":"BasicTicker"}},"id":"c8987db3-b52d-4a66-8c5d-4f49cefc28f5","type":"Grid"},{"attributes":{},"id":"58e3924a-5303-41c8-b024-46a2c5a6a9c5","type":"SaveTool"},{"attributes":{"formatter":{"id":"ea5268b8-2c8d-42f1-8829-d7f3438b1eb9","type":"BasicTickFormatter"},"plot":{"id":"a961dc0a-c3dd-4e22-9008-eeb54bb5a7bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c8c99c2-4ecf-4544-9ffa-0f6e41ab8752","type":"BasicTicker"}},"id":"e34869d8-eb75-4017-964c-dfdb806c73f9","type":"LinearAxis"},{"attributes":{},"id":"b34c57f6-5103-4630-b371-67a4c751f2b2","type":"HelpTool"}],"root_ids":["a961dc0a-c3dd-4e22-9008-eeb54bb5a7bb"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"9f5b4a8b-ca20-420b-8f9a-76d6f9fde2e7","roots":{"a961dc0a-c3dd-4e22-9008-eeb54bb5a7bb":"37974555-6a11-4fb5-b756-ce2a63413d99"}}];
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