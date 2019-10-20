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
      };var element = document.getElementById("9c039ff3-9c52-4aef-b758-40eb21564c38");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9c039ff3-9c52-4aef-b758-40eb21564c38' but no matching script tag was found. ")
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
                    var docs_json = {"85d54472-9a42-421f-bd70-e907bcfeef8c":{"roots":{"references":[{"attributes":{},"id":"0069e74b-888d-4b47-8d70-e476604dfb58","type":"BasicTicker"},{"attributes":{},"id":"4f070e63-73f2-41ff-969e-08d39ac47a48","type":"BasicTickFormatter"},{"attributes":{},"id":"51e59bd4-bf96-4495-9641-351779b116bf","type":"PanTool"},{"attributes":{"below":[{"id":"a2053a40-1c3d-467c-8a11-be10c609d666","type":"LinearAxis"}],"left":[{"id":"80d93407-8516-49f6-a456-ec5ceb027d56","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a2053a40-1c3d-467c-8a11-be10c609d666","type":"LinearAxis"},{"id":"781f465e-c261-42af-94d2-22441312dde2","type":"Grid"},{"id":"80d93407-8516-49f6-a456-ec5ceb027d56","type":"LinearAxis"},{"id":"781b3256-5b65-4887-987b-6ed2065d69e9","type":"Grid"},{"id":"c5596ea2-f2c2-43b1-b8ed-b24310e2c336","type":"BoxAnnotation"},{"id":"867803c6-10bc-4148-a164-9ffd66680e2b","type":"GlyphRenderer"}],"title":{"id":"df45e307-69fe-41ed-b1bc-cd95142ab80a","type":"Title"},"toolbar":{"id":"5a2be34b-97ab-4929-b733-a06619d135bb","type":"Toolbar"},"x_range":{"id":"419ccea0-cd0f-4c5e-bf08-33c72fdf94c4","type":"DataRange1d"},"x_scale":{"id":"7bb09ec0-dca3-4085-b8a7-09f1ce81f554","type":"LinearScale"},"y_range":{"id":"47dd078a-d0e9-4ccf-82bd-e49cb7c1aa45","type":"DataRange1d"},"y_scale":{"id":"add63548-e955-4d57-8cdc-f7b4adda4459","type":"LinearScale"}},"id":"d1f9b8c0-0ba0-4437-b943-2d627954bc56","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"4f070e63-73f2-41ff-969e-08d39ac47a48","type":"BasicTickFormatter"},"plot":{"id":"d1f9b8c0-0ba0-4437-b943-2d627954bc56","subtype":"Figure","type":"Plot"},"ticker":{"id":"0069e74b-888d-4b47-8d70-e476604dfb58","type":"BasicTicker"}},"id":"80d93407-8516-49f6-a456-ec5ceb027d56","type":"LinearAxis"},{"attributes":{},"id":"3c0e2c4d-4633-4dd1-8dc4-42cc04187f03","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"51e59bd4-bf96-4495-9641-351779b116bf","type":"PanTool"},{"id":"fb5ee5d6-f4ef-4cf7-98e6-563533c06106","type":"WheelZoomTool"},{"id":"67a41dbc-5ed0-4ace-9e4b-99ef78ba4f53","type":"BoxZoomTool"},{"id":"0c6b2c93-0234-4da0-9b7c-10a7de7d8a00","type":"SaveTool"},{"id":"92ecb6e1-6db9-4c30-999c-97f8cb503d0c","type":"ResetTool"},{"id":"e081ae29-7a08-4861-99ff-6cd76ab4fed6","type":"HelpTool"}]},"id":"5a2be34b-97ab-4929-b733-a06619d135bb","type":"Toolbar"},{"attributes":{},"id":"92ecb6e1-6db9-4c30-999c-97f8cb503d0c","type":"ResetTool"},{"attributes":{"callback":null},"id":"419ccea0-cd0f-4c5e-bf08-33c72fdf94c4","type":"DataRange1d"},{"attributes":{},"id":"fb5ee5d6-f4ef-4cf7-98e6-563533c06106","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d1f9b8c0-0ba0-4437-b943-2d627954bc56","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9955b91-3d2e-410b-a4d5-1c98d2102e3d","type":"BasicTicker"}},"id":"781f465e-c261-42af-94d2-22441312dde2","type":"Grid"},{"attributes":{},"id":"7bb09ec0-dca3-4085-b8a7-09f1ce81f554","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6ed2fa3-0544-4cc5-939a-fa6549ad91a6","type":"Circle"},{"attributes":{},"id":"0c6b2c93-0234-4da0-9b7c-10a7de7d8a00","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"d1f9b8c0-0ba0-4437-b943-2d627954bc56","subtype":"Figure","type":"Plot"},"ticker":{"id":"0069e74b-888d-4b47-8d70-e476604dfb58","type":"BasicTicker"}},"id":"781b3256-5b65-4887-987b-6ed2065d69e9","type":"Grid"},{"attributes":{"callback":null},"id":"47dd078a-d0e9-4ccf-82bd-e49cb7c1aa45","type":"DataRange1d"},{"attributes":{"overlay":{"id":"c5596ea2-f2c2-43b1-b8ed-b24310e2c336","type":"BoxAnnotation"}},"id":"67a41dbc-5ed0-4ace-9e4b-99ef78ba4f53","type":"BoxZoomTool"},{"attributes":{"source":{"id":"a30ac326-b3d4-4543-817d-651069cb08d5","type":"ColumnDataSource"}},"id":"a6a8ae53-10d1-48eb-bfcc-079d2f635a3a","type":"CDSView"},{"attributes":{},"id":"add63548-e955-4d57-8cdc-f7b4adda4459","type":"LinearScale"},{"attributes":{},"id":"e081ae29-7a08-4861-99ff-6cd76ab4fed6","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"df45e307-69fe-41ed-b1bc-cd95142ab80a","type":"Title"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"3c0e2c4d-4633-4dd1-8dc4-42cc04187f03","type":"BasicTickFormatter"},"plot":{"id":"d1f9b8c0-0ba0-4437-b943-2d627954bc56","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9955b91-3d2e-410b-a4d5-1c98d2102e3d","type":"BasicTicker"}},"id":"a2053a40-1c3d-467c-8a11-be10c609d666","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a30ac326-b3d4-4543-817d-651069cb08d5","type":"ColumnDataSource"},"glyph":{"id":"4730aac1-e844-4764-9ca9-a0a9a8002a48","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d6ed2fa3-0544-4cc5-939a-fa6549ad91a6","type":"Circle"},"selection_glyph":null,"view":{"id":"a6a8ae53-10d1-48eb-bfcc-079d2f635a3a","type":"CDSView"}},"id":"867803c6-10bc-4148-a164-9ffd66680e2b","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4730aac1-e844-4764-9ca9-a0a9a8002a48","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c5596ea2-f2c2-43b1-b8ed-b24310e2c336","type":"BoxAnnotation"},{"attributes":{},"id":"a9955b91-3d2e-410b-a4d5-1c98d2102e3d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a30ac326-b3d4-4543-817d-651069cb08d5","type":"ColumnDataSource"}],"root_ids":["d1f9b8c0-0ba0-4437-b943-2d627954bc56"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"85d54472-9a42-421f-bd70-e907bcfeef8c","elementid":"9c039ff3-9c52-4aef-b758-40eb21564c38","modelid":"d1f9b8c0-0ba0-4437-b943-2d627954bc56"}];
                
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
