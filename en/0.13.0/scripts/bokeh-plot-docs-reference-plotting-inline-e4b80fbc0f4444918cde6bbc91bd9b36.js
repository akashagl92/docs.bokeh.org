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
      };var element = document.getElementById("d8d67a70-0b7a-41f7-be3b-79e59e3569b8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8d67a70-0b7a-41f7-be3b-79e59e3569b8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"285755b1-e776-429c-96c7-81968d566161":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"44386f33-68fb-4c76-bbfb-d532caf5e06e","type":"Oval"},{"attributes":{"data_source":{"id":"172b8a6b-2d57-44a2-9c17-50ef177b59ab","type":"ColumnDataSource"},"glyph":{"id":"44386f33-68fb-4c76-bbfb-d532caf5e06e","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5311effe-c00a-4b90-85f4-7a6a29b07199","type":"Oval"},"selection_glyph":null,"view":{"id":"bfee2e27-79d4-4949-877b-357a686f4fbb","type":"CDSView"}},"id":"30053517-9514-4b32-ac09-df77cb4eaf64","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"9a460f08-f75f-44c1-a181-63a0ed6b0013","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4f60412-ca75-4c94-a4f1-8f6a9ec07a2d","type":"BasicTicker"}},"id":"35df6566-dfed-40da-95d0-e3eb01219af6","type":"Grid"},{"attributes":{"below":[{"id":"14ccf0a7-047c-4f52-a86f-9209e2d61d56","type":"LinearAxis"}],"left":[{"id":"d0383e53-78f2-4405-b062-be6b3bd8f605","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14ccf0a7-047c-4f52-a86f-9209e2d61d56","type":"LinearAxis"},{"id":"3862567e-71c6-4ed9-ae91-2b0702e037e1","type":"Grid"},{"id":"d0383e53-78f2-4405-b062-be6b3bd8f605","type":"LinearAxis"},{"id":"35df6566-dfed-40da-95d0-e3eb01219af6","type":"Grid"},{"id":"89f02bc7-a50a-4f5a-b044-eda9bb432116","type":"BoxAnnotation"},{"id":"30053517-9514-4b32-ac09-df77cb4eaf64","type":"GlyphRenderer"}],"title":{"id":"0e48f6e6-e727-4723-9038-5672df254504","type":"Title"},"toolbar":{"id":"c29a417f-712c-4310-86e2-4ecd50f7b957","type":"Toolbar"},"x_range":{"id":"6167c5cc-8e69-4d32-a82b-76f5112f0821","type":"DataRange1d"},"x_scale":{"id":"f912e2b0-caf4-430d-8c37-27b6677f107c","type":"LinearScale"},"y_range":{"id":"fdcf7dc4-a149-4b2c-ba15-7119bdaba6c9","type":"DataRange1d"},"y_scale":{"id":"8e40950c-58ee-4274-a653-c3a9c128b06d","type":"LinearScale"}},"id":"9a460f08-f75f-44c1-a181-63a0ed6b0013","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3a93f72e-00e4-473b-82b3-290bc245f28e","type":"PanTool"},{"attributes":{},"id":"b4f60412-ca75-4c94-a4f1-8f6a9ec07a2d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3a93f72e-00e4-473b-82b3-290bc245f28e","type":"PanTool"},{"id":"67117a86-fb43-4a47-861f-89396771c3f7","type":"WheelZoomTool"},{"id":"24ac3f59-05e6-442c-9b71-aa451b94a348","type":"BoxZoomTool"},{"id":"d7a1e552-e1f1-4347-a606-ab6c20c2961c","type":"SaveTool"},{"id":"a5abd723-cda6-4612-a7ea-b085a3572e47","type":"ResetTool"},{"id":"0e6426d9-03d0-47e8-a882-27b61c265775","type":"HelpTool"}]},"id":"c29a417f-712c-4310-86e2-4ecd50f7b957","type":"Toolbar"},{"attributes":{},"id":"bc777aad-efa3-4e41-87ca-49a2bfa89a4a","type":"BasicTickFormatter"},{"attributes":{},"id":"0e6426d9-03d0-47e8-a882-27b61c265775","type":"HelpTool"},{"attributes":{"formatter":{"id":"bc777aad-efa3-4e41-87ca-49a2bfa89a4a","type":"BasicTickFormatter"},"plot":{"id":"9a460f08-f75f-44c1-a181-63a0ed6b0013","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4f60412-ca75-4c94-a4f1-8f6a9ec07a2d","type":"BasicTicker"}},"id":"d0383e53-78f2-4405-b062-be6b3bd8f605","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6167c5cc-8e69-4d32-a82b-76f5112f0821","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"0e48f6e6-e727-4723-9038-5672df254504","type":"Title"},{"attributes":{},"id":"d173b6af-b0c4-4f64-9fa6-76acb5808fe3","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"6927659c-a8e1-49ba-8d4f-f340a04ca92f","type":"Selection"},"selection_policy":{"id":"65430a55-c05f-4323-8c9b-c46ffcac6cbc","type":"UnionRenderers"}},"id":"172b8a6b-2d57-44a2-9c17-50ef177b59ab","type":"ColumnDataSource"},{"attributes":{},"id":"cdbb6bd0-8c2f-4eaf-a646-d236ee4fc4ef","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9a460f08-f75f-44c1-a181-63a0ed6b0013","subtype":"Figure","type":"Plot"},"ticker":{"id":"d173b6af-b0c4-4f64-9fa6-76acb5808fe3","type":"BasicTicker"}},"id":"3862567e-71c6-4ed9-ae91-2b0702e037e1","type":"Grid"},{"attributes":{},"id":"a5abd723-cda6-4612-a7ea-b085a3572e47","type":"ResetTool"},{"attributes":{"formatter":{"id":"cdbb6bd0-8c2f-4eaf-a646-d236ee4fc4ef","type":"BasicTickFormatter"},"plot":{"id":"9a460f08-f75f-44c1-a181-63a0ed6b0013","subtype":"Figure","type":"Plot"},"ticker":{"id":"d173b6af-b0c4-4f64-9fa6-76acb5808fe3","type":"BasicTicker"}},"id":"14ccf0a7-047c-4f52-a86f-9209e2d61d56","type":"LinearAxis"},{"attributes":{},"id":"65430a55-c05f-4323-8c9b-c46ffcac6cbc","type":"UnionRenderers"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5311effe-c00a-4b90-85f4-7a6a29b07199","type":"Oval"},{"attributes":{"callback":null},"id":"fdcf7dc4-a149-4b2c-ba15-7119bdaba6c9","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"89f02bc7-a50a-4f5a-b044-eda9bb432116","type":"BoxAnnotation"},{"attributes":{},"id":"f912e2b0-caf4-430d-8c37-27b6677f107c","type":"LinearScale"},{"attributes":{"source":{"id":"172b8a6b-2d57-44a2-9c17-50ef177b59ab","type":"ColumnDataSource"}},"id":"bfee2e27-79d4-4949-877b-357a686f4fbb","type":"CDSView"},{"attributes":{"overlay":{"id":"89f02bc7-a50a-4f5a-b044-eda9bb432116","type":"BoxAnnotation"}},"id":"24ac3f59-05e6-442c-9b71-aa451b94a348","type":"BoxZoomTool"},{"attributes":{},"id":"67117a86-fb43-4a47-861f-89396771c3f7","type":"WheelZoomTool"},{"attributes":{},"id":"8e40950c-58ee-4274-a653-c3a9c128b06d","type":"LinearScale"},{"attributes":{},"id":"6927659c-a8e1-49ba-8d4f-f340a04ca92f","type":"Selection"},{"attributes":{},"id":"d7a1e552-e1f1-4347-a606-ab6c20c2961c","type":"SaveTool"}],"root_ids":["9a460f08-f75f-44c1-a181-63a0ed6b0013"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"285755b1-e776-429c-96c7-81968d566161","roots":{"9a460f08-f75f-44c1-a181-63a0ed6b0013":"d8d67a70-0b7a-41f7-be3b-79e59e3569b8"}}];
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