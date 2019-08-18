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
      };var element = document.getElementById("4ea965c4-9731-402e-b82a-0d6b88626844");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4ea965c4-9731-402e-b82a-0d6b88626844' but no matching script tag was found. ")
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
                    var docs_json = {"00a09ab3-f4ef-4f8d-97ec-78fc14af011b":{"roots":{"references":[{"attributes":{"formatter":{"id":"dddd883e-c446-4726-ab2d-5d7296e653d5","type":"BasicTickFormatter"},"plot":{"id":"065ec823-3959-4978-85dd-4ba20be14d2d","subtype":"Figure","type":"Plot"},"ticker":{"id":"245a97c1-a971-4655-9236-850c6db73c1a","type":"BasicTicker"}},"id":"0a66ef67-21ce-4b55-80f4-e09115bba0f7","type":"LinearAxis"},{"attributes":{},"id":"5d139f35-b862-4b50-b540-dc3628c0448e","type":"SaveTool"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"6ef04c1f-d62c-4c19-b78c-1881e96489cd","type":"HBar"},{"attributes":{},"id":"245a97c1-a971-4655-9236-850c6db73c1a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"129a368c-28a9-4e91-afd3-499cfbef8410","type":"BasicTickFormatter"},"plot":{"id":"065ec823-3959-4978-85dd-4ba20be14d2d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c74ed14-d155-4756-a133-651cf80a71fc","type":"BasicTicker"}},"id":"54de4dd1-3747-4a6e-a134-ca5110411d4e","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"bf351f59-917d-4ca7-8af6-f55c0e6c73eb","type":"Title"},{"attributes":{},"id":"9c74ed14-d155-4756-a133-651cf80a71fc","type":"BasicTicker"},{"attributes":{},"id":"dddd883e-c446-4726-ab2d-5d7296e653d5","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7793afb4-d543-4ac5-80cb-e67f5583a42e","type":"ColumnDataSource"},"glyph":{"id":"6ef04c1f-d62c-4c19-b78c-1881e96489cd","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1135ea9d-50b4-4197-aa97-e0023d504292","type":"HBar"},"selection_glyph":null,"view":{"id":"22456e62-465f-42b5-9679-642a83f8dba3","type":"CDSView"}},"id":"1baa1ac3-9119-41ec-8258-dd118385f2d6","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"1135ea9d-50b4-4197-aa97-e0023d504292","type":"HBar"},{"attributes":{"below":[{"id":"0a66ef67-21ce-4b55-80f4-e09115bba0f7","type":"LinearAxis"}],"left":[{"id":"54de4dd1-3747-4a6e-a134-ca5110411d4e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0a66ef67-21ce-4b55-80f4-e09115bba0f7","type":"LinearAxis"},{"id":"247c4a95-8faf-4930-a304-174751ae4501","type":"Grid"},{"id":"54de4dd1-3747-4a6e-a134-ca5110411d4e","type":"LinearAxis"},{"id":"60166190-f89b-4a64-99e1-977c9596367e","type":"Grid"},{"id":"8cf130a7-4a45-4ec6-800c-4aa1bd0ff37a","type":"BoxAnnotation"},{"id":"1baa1ac3-9119-41ec-8258-dd118385f2d6","type":"GlyphRenderer"}],"title":{"id":"bf351f59-917d-4ca7-8af6-f55c0e6c73eb","type":"Title"},"toolbar":{"id":"7d508e68-b804-4032-b422-6fdd7405281f","type":"Toolbar"},"x_range":{"id":"0daa245f-b738-48bb-ab7d-0e8a970e7342","type":"DataRange1d"},"x_scale":{"id":"57ad603a-98aa-4af1-94b6-b762b9a144c7","type":"LinearScale"},"y_range":{"id":"6b776427-ab8d-4fc3-8483-f0cbf0d3adc5","type":"DataRange1d"},"y_scale":{"id":"61ff3a0f-915b-401e-9c37-b18e3f54ef2d","type":"LinearScale"}},"id":"065ec823-3959-4978-85dd-4ba20be14d2d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"94be5977-868b-42ae-9e2f-0ceb5e1799e4","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"94be5977-868b-42ae-9e2f-0ceb5e1799e4","type":"PanTool"},{"id":"094866cf-f7a5-42ea-a973-11ac22036639","type":"WheelZoomTool"},{"id":"57937e7f-f9a1-40c4-a961-fdcb649c5696","type":"BoxZoomTool"},{"id":"5d139f35-b862-4b50-b540-dc3628c0448e","type":"SaveTool"},{"id":"78708b75-2a02-4a9f-b7b8-bd31f1a046a5","type":"ResetTool"},{"id":"c081bbd0-f895-44d4-941a-cd600df1dee8","type":"HelpTool"}]},"id":"7d508e68-b804-4032-b422-6fdd7405281f","type":"Toolbar"},{"attributes":{"overlay":{"id":"8cf130a7-4a45-4ec6-800c-4aa1bd0ff37a","type":"BoxAnnotation"}},"id":"57937e7f-f9a1-40c4-a961-fdcb649c5696","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"0daa245f-b738-48bb-ab7d-0e8a970e7342","type":"DataRange1d"},{"attributes":{},"id":"094866cf-f7a5-42ea-a973-11ac22036639","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]}},"id":"7793afb4-d543-4ac5-80cb-e67f5583a42e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"065ec823-3959-4978-85dd-4ba20be14d2d","subtype":"Figure","type":"Plot"},"ticker":{"id":"245a97c1-a971-4655-9236-850c6db73c1a","type":"BasicTicker"}},"id":"247c4a95-8faf-4930-a304-174751ae4501","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8cf130a7-4a45-4ec6-800c-4aa1bd0ff37a","type":"BoxAnnotation"},{"attributes":{},"id":"57ad603a-98aa-4af1-94b6-b762b9a144c7","type":"LinearScale"},{"attributes":{"callback":null},"id":"6b776427-ab8d-4fc3-8483-f0cbf0d3adc5","type":"DataRange1d"},{"attributes":{},"id":"129a368c-28a9-4e91-afd3-499cfbef8410","type":"BasicTickFormatter"},{"attributes":{},"id":"61ff3a0f-915b-401e-9c37-b18e3f54ef2d","type":"LinearScale"},{"attributes":{},"id":"c081bbd0-f895-44d4-941a-cd600df1dee8","type":"HelpTool"},{"attributes":{"source":{"id":"7793afb4-d543-4ac5-80cb-e67f5583a42e","type":"ColumnDataSource"}},"id":"22456e62-465f-42b5-9679-642a83f8dba3","type":"CDSView"},{"attributes":{},"id":"78708b75-2a02-4a9f-b7b8-bd31f1a046a5","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"065ec823-3959-4978-85dd-4ba20be14d2d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c74ed14-d155-4756-a133-651cf80a71fc","type":"BasicTicker"}},"id":"60166190-f89b-4a64-99e1-977c9596367e","type":"Grid"}],"root_ids":["065ec823-3959-4978-85dd-4ba20be14d2d"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"00a09ab3-f4ef-4f8d-97ec-78fc14af011b","elementid":"4ea965c4-9731-402e-b82a-0d6b88626844","modelid":"065ec823-3959-4978-85dd-4ba20be14d2d"}];
                
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
