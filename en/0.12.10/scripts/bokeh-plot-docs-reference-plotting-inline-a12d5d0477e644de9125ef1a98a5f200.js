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
      };var element = document.getElementById("cefdc0a8-b169-4c8a-a3aa-d0c8c7566820");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cefdc0a8-b169-4c8a-a3aa-d0c8c7566820' but no matching script tag was found. ")
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
                    var docs_json = {"97344a73-46e3-494c-8a48-55147d58017c":{"roots":{"references":[{"attributes":{"below":[{"id":"f935f95a-ea61-4801-be0b-dde7344b9b05","type":"LinearAxis"}],"left":[{"id":"59769bba-b25d-43ff-b182-8fbd426554fb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f935f95a-ea61-4801-be0b-dde7344b9b05","type":"LinearAxis"},{"id":"43512d2a-a0af-4b16-a1be-92ce5789c9b6","type":"Grid"},{"id":"59769bba-b25d-43ff-b182-8fbd426554fb","type":"LinearAxis"},{"id":"784075ab-b885-4510-a3b8-3f5fca696050","type":"Grid"},{"id":"7a99a067-609c-4197-a7f5-a28de5b7ef62","type":"BoxAnnotation"},{"id":"b61146df-e684-4ae6-a5bb-fa5127b99bdf","type":"GlyphRenderer"}],"title":{"id":"47ac37af-5195-44e0-a6c5-7714c388b36f","type":"Title"},"toolbar":{"id":"2c3500b7-321c-4ecc-85f2-c15c73cddaec","type":"Toolbar"},"x_range":{"id":"b8fe9f9b-070a-4ece-be37-8702d1f29e99","type":"DataRange1d"},"x_scale":{"id":"e07282c9-17c3-49f8-b4ba-796276b2d874","type":"LinearScale"},"y_range":{"id":"9ed88d78-da00-47a7-b6c5-7f8ab1f3dc88","type":"DataRange1d"},"y_scale":{"id":"37b13b61-9587-4129-a7b9-72b5b1489983","type":"LinearScale"}},"id":"dae6f11b-86eb-4aa4-b2be-3c766e9bc030","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2807d7f7-c0a1-4c29-b2b4-e01421dac82e","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2807d7f7-c0a1-4c29-b2b4-e01421dac82e","type":"PanTool"},{"id":"e71a7845-9a46-4fa6-a23d-d2aed7afebf2","type":"WheelZoomTool"},{"id":"d983ace9-fd20-44ed-a223-82d7ce3078c7","type":"BoxZoomTool"},{"id":"6c7058c5-b140-4108-b931-c611b056df2c","type":"SaveTool"},{"id":"d11197e0-ac14-4f55-a9b1-ab3a9c720df3","type":"ResetTool"},{"id":"586ffdc2-2ccd-4cf4-bb51-9ac10a4bcc6d","type":"HelpTool"}]},"id":"2c3500b7-321c-4ecc-85f2-c15c73cddaec","type":"Toolbar"},{"attributes":{"source":{"id":"69be867c-2df4-4809-8218-e27e6508bb6d","type":"ColumnDataSource"}},"id":"27a3681f-d2ed-499e-a49e-8550ff30ad28","type":"CDSView"},{"attributes":{"callback":null},"id":"b8fe9f9b-070a-4ece-be37-8702d1f29e99","type":"DataRange1d"},{"attributes":{},"id":"e71a7845-9a46-4fa6-a23d-d2aed7afebf2","type":"WheelZoomTool"},{"attributes":{},"id":"a4133b99-1750-4e53-968f-e87136f3dc0e","type":"BasicTicker"},{"attributes":{"overlay":{"id":"7a99a067-609c-4197-a7f5-a28de5b7ef62","type":"BoxAnnotation"}},"id":"d983ace9-fd20-44ed-a223-82d7ce3078c7","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a5a44c0-54f0-487c-a94c-a00e1800ea9c","type":"Patch"},{"attributes":{},"id":"6c7058c5-b140-4108-b931-c611b056df2c","type":"SaveTool"},{"attributes":{"formatter":{"id":"dd911e17-3443-403f-b0df-5e6cd0a4229b","type":"BasicTickFormatter"},"plot":{"id":"dae6f11b-86eb-4aa4-b2be-3c766e9bc030","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4133b99-1750-4e53-968f-e87136f3dc0e","type":"BasicTicker"}},"id":"f935f95a-ea61-4801-be0b-dde7344b9b05","type":"LinearAxis"},{"attributes":{},"id":"d11197e0-ac14-4f55-a9b1-ab3a9c720df3","type":"ResetTool"},{"attributes":{"callback":null},"id":"9ed88d78-da00-47a7-b6c5-7f8ab1f3dc88","type":"DataRange1d"},{"attributes":{},"id":"586ffdc2-2ccd-4cf4-bb51-9ac10a4bcc6d","type":"HelpTool"},{"attributes":{},"id":"e07282c9-17c3-49f8-b4ba-796276b2d874","type":"LinearScale"},{"attributes":{},"id":"dd911e17-3443-403f-b0df-5e6cd0a4229b","type":"BasicTickFormatter"},{"attributes":{},"id":"37b13b61-9587-4129-a7b9-72b5b1489983","type":"LinearScale"},{"attributes":{},"id":"da0af5e5-bb22-4afd-bfc0-7e6f9d227f40","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dae6f11b-86eb-4aa4-b2be-3c766e9bc030","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4133b99-1750-4e53-968f-e87136f3dc0e","type":"BasicTicker"}},"id":"43512d2a-a0af-4b16-a1be-92ce5789c9b6","type":"Grid"},{"attributes":{"formatter":{"id":"da0af5e5-bb22-4afd-bfc0-7e6f9d227f40","type":"BasicTickFormatter"},"plot":{"id":"dae6f11b-86eb-4aa4-b2be-3c766e9bc030","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a032b26-6388-42e9-911a-02eb66b899ce","type":"BasicTicker"}},"id":"59769bba-b25d-43ff-b182-8fbd426554fb","type":"LinearAxis"},{"attributes":{},"id":"8a032b26-6388-42e9-911a-02eb66b899ce","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"47ac37af-5195-44e0-a6c5-7714c388b36f","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"dae6f11b-86eb-4aa4-b2be-3c766e9bc030","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a032b26-6388-42e9-911a-02eb66b899ce","type":"BasicTicker"}},"id":"784075ab-b885-4510-a3b8-3f5fca696050","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"01494d07-b748-40a2-b656-296b152e9894","type":"Patch"},{"attributes":{"data_source":{"id":"69be867c-2df4-4809-8218-e27e6508bb6d","type":"ColumnDataSource"},"glyph":{"id":"0a5a44c0-54f0-487c-a94c-a00e1800ea9c","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"01494d07-b748-40a2-b656-296b152e9894","type":"Patch"},"selection_glyph":null,"view":{"id":"27a3681f-d2ed-499e-a49e-8550ff30ad28","type":"CDSView"}},"id":"b61146df-e684-4ae6-a5bb-fa5127b99bdf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"69be867c-2df4-4809-8218-e27e6508bb6d","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7a99a067-609c-4197-a7f5-a28de5b7ef62","type":"BoxAnnotation"}],"root_ids":["dae6f11b-86eb-4aa4-b2be-3c766e9bc030"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"97344a73-46e3-494c-8a48-55147d58017c","elementid":"cefdc0a8-b169-4c8a-a3aa-d0c8c7566820","modelid":"dae6f11b-86eb-4aa4-b2be-3c766e9bc030"}];
                
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
