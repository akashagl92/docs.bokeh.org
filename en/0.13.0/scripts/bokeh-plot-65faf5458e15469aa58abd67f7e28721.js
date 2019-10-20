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
      };var element = document.getElementById("5c9e285c-6e93-4bec-876b-55b4b6c3bde7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5c9e285c-6e93-4bec-876b-55b4b6c3bde7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"acaa93d7-b17f-4952-b039-d90511783cac":{"roots":{"references":[{"attributes":{"plot":{"id":"709a5959-c425-4136-be75-533513356de3","subtype":"Figure","type":"Plot"},"ticker":{"id":"68b8309a-48af-4536-8c5c-be6bcede731f","type":"BasicTicker"}},"id":"02613805-ab25-44fc-a214-0ce5f04ba2df","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"d1c1d85b-92d0-45a8-95ab-7239735fb703","type":"Selection"},"selection_policy":{"id":"3ac6b2b7-bb2c-4d4c-8176-9b9b200952cf","type":"UnionRenderers"}},"id":"fdaab3fa-def5-42b4-bf9d-b1d234ab82df","type":"ColumnDataSource"},{"attributes":{},"id":"bd9078eb-533b-46ff-ba33-4dc2ece2af59","type":"ResetTool"},{"attributes":{},"id":"cee019ce-4ee2-4810-96ce-c7adb4ebc567","type":"HelpTool"},{"attributes":{"data_source":{"id":"fdaab3fa-def5-42b4-bf9d-b1d234ab82df","type":"ColumnDataSource"},"glyph":{"id":"25239f69-c7b6-4492-a8d7-9fc03376e746","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b00d66c1-ad81-4122-8f18-386961a6ae4e","type":"Circle"},"selection_glyph":null,"view":{"id":"06e1736b-bf0d-4d6c-9df2-4967c69b0893","type":"CDSView"}},"id":"e96fe120-1a62-4e78-9bcc-a3d015d21623","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6476994a-2d95-4d2a-ae98-078c699aaf3e","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"4fde8e7e-d628-4f22-9d25-15f3255f73ce","type":"LinearAxis"}],"left":[{"id":"1ffeb019-d226-475c-91db-b904c3eac482","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"4fde8e7e-d628-4f22-9d25-15f3255f73ce","type":"LinearAxis"},{"id":"02613805-ab25-44fc-a214-0ce5f04ba2df","type":"Grid"},{"id":"1ffeb019-d226-475c-91db-b904c3eac482","type":"LinearAxis"},{"id":"f20d472e-6754-4ea0-ab4f-3c9941a37e0d","type":"Grid"},{"id":"6476994a-2d95-4d2a-ae98-078c699aaf3e","type":"BoxAnnotation"},{"id":"e96fe120-1a62-4e78-9bcc-a3d015d21623","type":"GlyphRenderer"}],"title":{"id":"66c33fbb-a469-42d2-85d5-08bbfcb22cd4","type":"Title"},"toolbar":{"id":"34581d57-0d09-4673-b65d-936852d7a300","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"e9d37a70-65df-4391-8721-1c676d8bbde4","type":"DataRange1d"},"x_scale":{"id":"f7350f45-d2ce-4d3e-af0e-d4dfddc589fd","type":"LinearScale"},"y_range":{"id":"65945642-a444-4757-87c9-0004efc29ec8","type":"DataRange1d"},"y_scale":{"id":"d015339d-4f69-45fc-96bc-c10ba3adf43e","type":"LinearScale"}},"id":"709a5959-c425-4136-be75-533513356de3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e5393797-7f43-4b68-b8ed-a610a9ebadfe","type":"PanTool"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"66c33fbb-a469-42d2-85d5-08bbfcb22cd4","type":"Title"},{"attributes":{"source":{"id":"fdaab3fa-def5-42b4-bf9d-b1d234ab82df","type":"ColumnDataSource"}},"id":"06e1736b-bf0d-4d6c-9df2-4967c69b0893","type":"CDSView"},{"attributes":{"callback":null},"id":"e9d37a70-65df-4391-8721-1c676d8bbde4","type":"DataRange1d"},{"attributes":{},"id":"3ac6b2b7-bb2c-4d4c-8176-9b9b200952cf","type":"UnionRenderers"},{"attributes":{},"id":"28c09382-5521-410d-8c1b-c563b34562fa","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b00d66c1-ad81-4122-8f18-386961a6ae4e","type":"Circle"},{"attributes":{},"id":"413a6fce-c20f-4452-bba8-a14b65ca325b","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"6476994a-2d95-4d2a-ae98-078c699aaf3e","type":"BoxAnnotation"}},"id":"1428caa7-72ec-4625-8d4e-f6bc254d910e","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e5393797-7f43-4b68-b8ed-a610a9ebadfe","type":"PanTool"},{"id":"28c09382-5521-410d-8c1b-c563b34562fa","type":"WheelZoomTool"},{"id":"1428caa7-72ec-4625-8d4e-f6bc254d910e","type":"BoxZoomTool"},{"id":"3cf0fb97-1575-448d-8189-409ba9a80973","type":"SaveTool"},{"id":"bd9078eb-533b-46ff-ba33-4dc2ece2af59","type":"ResetTool"},{"id":"cee019ce-4ee2-4810-96ce-c7adb4ebc567","type":"HelpTool"}]},"id":"34581d57-0d09-4673-b65d-936852d7a300","type":"Toolbar"},{"attributes":{},"id":"3cf0fb97-1575-448d-8189-409ba9a80973","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"709a5959-c425-4136-be75-533513356de3","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea0b5b6d-10e9-4dc7-8a89-8535f2fa09c7","type":"BasicTicker"}},"id":"f20d472e-6754-4ea0-ab4f-3c9941a37e0d","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"25239f69-c7b6-4492-a8d7-9fc03376e746","type":"Circle"},{"attributes":{},"id":"ea0b5b6d-10e9-4dc7-8a89-8535f2fa09c7","type":"BasicTicker"},{"attributes":{},"id":"f7350f45-d2ce-4d3e-af0e-d4dfddc589fd","type":"LinearScale"},{"attributes":{"callback":null},"id":"65945642-a444-4757-87c9-0004efc29ec8","type":"DataRange1d"},{"attributes":{},"id":"d015339d-4f69-45fc-96bc-c10ba3adf43e","type":"LinearScale"},{"attributes":{"formatter":{"id":"ca3106ba-6c4e-4131-8a3e-cc5270c28fb1","type":"BasicTickFormatter"},"plot":{"id":"709a5959-c425-4136-be75-533513356de3","subtype":"Figure","type":"Plot"},"ticker":{"id":"68b8309a-48af-4536-8c5c-be6bcede731f","type":"BasicTicker"}},"id":"4fde8e7e-d628-4f22-9d25-15f3255f73ce","type":"LinearAxis"},{"attributes":{},"id":"68b8309a-48af-4536-8c5c-be6bcede731f","type":"BasicTicker"},{"attributes":{"formatter":{"id":"413a6fce-c20f-4452-bba8-a14b65ca325b","type":"BasicTickFormatter"},"plot":{"id":"709a5959-c425-4136-be75-533513356de3","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea0b5b6d-10e9-4dc7-8a89-8535f2fa09c7","type":"BasicTicker"}},"id":"1ffeb019-d226-475c-91db-b904c3eac482","type":"LinearAxis"},{"attributes":{},"id":"d1c1d85b-92d0-45a8-95ab-7239735fb703","type":"Selection"},{"attributes":{},"id":"ca3106ba-6c4e-4131-8a3e-cc5270c28fb1","type":"BasicTickFormatter"}],"root_ids":["709a5959-c425-4136-be75-533513356de3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"acaa93d7-b17f-4952-b039-d90511783cac","roots":{"709a5959-c425-4136-be75-533513356de3":"5c9e285c-6e93-4bec-876b-55b4b6c3bde7"}}];
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