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
      };var element = document.getElementById("0ee591ae-ecc8-4654-a81c-528c8366bfff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0ee591ae-ecc8-4654-a81c-528c8366bfff' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"c3f1d62c-faa5-49ef-938d-b19207de3296":{"roots":{"references":[{"attributes":{},"id":"c7823d90-130c-41b4-a890-441a03e6c2ca","type":"ResetTool"},{"attributes":{"source":{"id":"e9e2bdd1-be39-4355-927d-ff99a0c12e2f","type":"ColumnDataSource"}},"id":"89f577d9-bd11-4d94-a4ff-f402bb09428b","type":"CDSView"},{"attributes":{"end":{"id":"b88ce91d-c931-4ff7-88c8-d1950f050af8","type":"OpenHead"},"plot":{"id":"1015f2a3-110c-4360-b6a9-831433b77b97","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"d9b8b0b7-6def-42a0-8f7c-1f7a37cb3201","type":"Arrow"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"c342532f-eaec-4b79-b7fd-bee7b16fb69a","type":"NormalHead"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]}},"id":"e9e2bdd1-be39-4355-927d-ff99a0c12e2f","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"b88ce91d-c931-4ff7-88c8-d1950f050af8","type":"OpenHead"},{"attributes":{},"id":"7b944750-f075-4689-8f63-a1b6fefeb97e","type":"WheelZoomTool"},{"attributes":{},"id":"b3c812d2-2e53-432d-acd7-67183b60658a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1015f2a3-110c-4360-b6a9-831433b77b97","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3c812d2-2e53-432d-acd7-67183b60658a","type":"BasicTicker"}},"id":"ebfdaa32-69ca-4eb7-920b-f2a7ae35d56c","type":"Grid"},{"attributes":{"overlay":{"id":"5b9818cb-2c2f-46f1-afd1-d9cc01049676","type":"BoxAnnotation"}},"id":"6c1ef692-e3b4-4ba3-99e9-a45f6874b2d8","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"d5f6ec49-acaa-4a25-8307-3d183d386c65","type":"Circle"},{"attributes":{"data_source":{"id":"e9e2bdd1-be39-4355-927d-ff99a0c12e2f","type":"ColumnDataSource"},"glyph":{"id":"1e1f2c42-d930-4f28-9a0c-658680e57260","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d5f6ec49-acaa-4a25-8307-3d183d386c65","type":"Circle"},"selection_glyph":null,"view":{"id":"89f577d9-bd11-4d94-a4ff-f402bb09428b","type":"CDSView"}},"id":"d0803c97-03fd-49a2-8963-8bb975ddf93d","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"c2f82dac-3b61-4117-ace4-24490681b608","type":"DataRange1d"},{"attributes":{},"id":"5f32d5be-2fe6-4f29-8f8f-29ebdcc81a93","type":"LinearScale"},{"attributes":{"end":{"id":"c342532f-eaec-4b79-b7fd-bee7b16fb69a","type":"NormalHead"},"plot":{"id":"1015f2a3-110c-4360-b6a9-831433b77b97","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"54fd9db1-f6ec-437d-9e5b-dd0f9514cdd4","type":"Arrow"},{"attributes":{},"id":"9a63e25e-a2ce-4c21-b710-aa6ea1d5000d","type":"SaveTool"},{"attributes":{"plot":null,"size":35},"id":"880c5d91-ecc3-4375-b7f6-ccd798cfdb6c","type":"VeeHead"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5d39b55-cf38-48f7-9674-e4cd923ea0e7","type":"PanTool"},{"id":"7b944750-f075-4689-8f63-a1b6fefeb97e","type":"WheelZoomTool"},{"id":"6c1ef692-e3b4-4ba3-99e9-a45f6874b2d8","type":"BoxZoomTool"},{"id":"9a63e25e-a2ce-4c21-b710-aa6ea1d5000d","type":"SaveTool"},{"id":"c7823d90-130c-41b4-a890-441a03e6c2ca","type":"ResetTool"},{"id":"811df3d8-d3c2-4022-901e-b021c908cacf","type":"HelpTool"}]},"id":"60662f03-7e22-4e2b-ae32-8df3887a37d8","type":"Toolbar"},{"attributes":{},"id":"811df3d8-d3c2-4022-901e-b021c908cacf","type":"HelpTool"},{"attributes":{},"id":"7066d20f-8ecc-4a19-b978-0caba02df79c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e1f2c42-d930-4f28-9a0c-658680e57260","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5b9818cb-2c2f-46f1-afd1-d9cc01049676","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"35bbedbb-1fe3-4711-bfec-bc32023c7f76","type":"BasicTickFormatter"},"plot":{"id":"1015f2a3-110c-4360-b6a9-831433b77b97","subtype":"Figure","type":"Plot"},"ticker":{"id":"7066d20f-8ecc-4a19-b978-0caba02df79c","type":"BasicTicker"}},"id":"bd271c88-db0b-4c34-973e-ff51e65d2471","type":"LinearAxis"},{"attributes":{"formatter":{"id":"69fcf9c5-5d8b-481f-84b3-cfc01c0fdf99","type":"BasicTickFormatter"},"plot":{"id":"1015f2a3-110c-4360-b6a9-831433b77b97","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3c812d2-2e53-432d-acd7-67183b60658a","type":"BasicTicker"}},"id":"d7d9c795-6460-472a-931d-f6edf559e655","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"8fc3beb8-12dc-4465-9ae5-c8d7d435681f","type":"Title"},{"attributes":{},"id":"69fcf9c5-5d8b-481f-84b3-cfc01c0fdf99","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"bd271c88-db0b-4c34-973e-ff51e65d2471","type":"LinearAxis"}],"left":[{"id":"d7d9c795-6460-472a-931d-f6edf559e655","type":"LinearAxis"}],"renderers":[{"id":"bd271c88-db0b-4c34-973e-ff51e65d2471","type":"LinearAxis"},{"id":"27437eb3-e18e-46e1-b318-b7ecb74f99ee","type":"Grid"},{"id":"d7d9c795-6460-472a-931d-f6edf559e655","type":"LinearAxis"},{"id":"ebfdaa32-69ca-4eb7-920b-f2a7ae35d56c","type":"Grid"},{"id":"5b9818cb-2c2f-46f1-afd1-d9cc01049676","type":"BoxAnnotation"},{"id":"d0803c97-03fd-49a2-8963-8bb975ddf93d","type":"GlyphRenderer"},{"id":"d9b8b0b7-6def-42a0-8f7c-1f7a37cb3201","type":"Arrow"},{"id":"54fd9db1-f6ec-437d-9e5b-dd0f9514cdd4","type":"Arrow"},{"id":"99127f6c-8ac0-408c-b037-e7d378369bef","type":"Arrow"}],"title":{"id":"8fc3beb8-12dc-4465-9ae5-c8d7d435681f","type":"Title"},"toolbar":{"id":"60662f03-7e22-4e2b-ae32-8df3887a37d8","type":"Toolbar"},"x_range":{"id":"14609b2a-e08f-4b73-845a-6842cbc424df","type":"DataRange1d"},"x_scale":{"id":"5f32d5be-2fe6-4f29-8f8f-29ebdcc81a93","type":"LinearScale"},"y_range":{"id":"c2f82dac-3b61-4117-ace4-24490681b608","type":"DataRange1d"},"y_scale":{"id":"b22213da-5630-4ebb-b400-8e7c89b231d7","type":"LinearScale"}},"id":"1015f2a3-110c-4360-b6a9-831433b77b97","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"14609b2a-e08f-4b73-845a-6842cbc424df","type":"DataRange1d"},{"attributes":{},"id":"b5d39b55-cf38-48f7-9674-e4cd923ea0e7","type":"PanTool"},{"attributes":{"end":{"id":"880c5d91-ecc3-4375-b7f6-ccd798cfdb6c","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"1015f2a3-110c-4360-b6a9-831433b77b97","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"99127f6c-8ac0-408c-b037-e7d378369bef","type":"Arrow"},{"attributes":{},"id":"35bbedbb-1fe3-4711-bfec-bc32023c7f76","type":"BasicTickFormatter"},{"attributes":{},"id":"b22213da-5630-4ebb-b400-8e7c89b231d7","type":"LinearScale"},{"attributes":{"plot":{"id":"1015f2a3-110c-4360-b6a9-831433b77b97","subtype":"Figure","type":"Plot"},"ticker":{"id":"7066d20f-8ecc-4a19-b978-0caba02df79c","type":"BasicTicker"}},"id":"27437eb3-e18e-46e1-b318-b7ecb74f99ee","type":"Grid"}],"root_ids":["1015f2a3-110c-4360-b6a9-831433b77b97"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c3f1d62c-faa5-49ef-938d-b19207de3296","elementid":"0ee591ae-ecc8-4654-a81c-528c8366bfff","modelid":"1015f2a3-110c-4360-b6a9-831433b77b97"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
