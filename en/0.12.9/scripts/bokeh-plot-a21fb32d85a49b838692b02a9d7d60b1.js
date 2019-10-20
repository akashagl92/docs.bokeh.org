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
      };var element = document.getElementById("bf67c378-255d-4979-be3c-bac32d071228");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf67c378-255d-4979-be3c-bac32d071228' but no matching script tag was found. ")
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
                    var docs_json = {"e86510d7-d8de-4981-957f-4c327a7d81b9":{"roots":{"references":[{"attributes":{},"id":"f1978312-5752-4333-b5ad-0bea48fe1d54","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"e71c8101-458e-430e-8f38-f77fc1f13553","type":"ColumnDataSource"}},"id":"f6f67200-f0cb-460d-8c76-a7c6e3ee5045","type":"CDSView"},{"attributes":{},"id":"f03317b6-566f-459f-ab3c-b8de3c3dd2ae","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"8809ab4c-f1b0-44ad-903c-f4a8365ede60","type":"LinearAxis"}],"left":[{"id":"af784b9c-f799-4d33-b846-07bc2b89b07b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8809ab4c-f1b0-44ad-903c-f4a8365ede60","type":"LinearAxis"},{"id":"acda87da-9a96-4935-9daf-54bb9a6161ac","type":"Grid"},{"id":"af784b9c-f799-4d33-b846-07bc2b89b07b","type":"LinearAxis"},{"id":"40c598fb-ed23-4d0c-9171-2e69b104449b","type":"Grid"},{"id":"a134f743-b73e-4827-a846-02b1253adc1e","type":"BoxAnnotation"},{"id":"1d0864b2-7fc9-4b24-9e1e-2496742bd627","type":"GlyphRenderer"}],"title":{"id":"8e352679-4283-42d5-8e50-bed05cef5680","type":"Title"},"toolbar":{"id":"a5ceeb29-5ce2-4478-88bc-d2a8515bdf58","type":"Toolbar"},"x_range":{"id":"b233b7c4-ea94-4138-8472-ab46480b5a14","type":"DataRange1d"},"x_scale":{"id":"972488d7-c60d-4c15-8a00-6977f092aad8","type":"LinearScale"},"y_range":{"id":"98a3a5f2-4ab6-44c6-bb08-0fae4acb78fa","type":"DataRange1d"},"y_scale":{"id":"18a073aa-481f-48f3-908c-0a52be21d3dc","type":"LinearScale"}},"id":"3cd18bf4-e390-4cb9-a19f-77f8e34b9a83","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"176c5b56-81f9-40da-8b67-f6dfc90176da","type":"PanTool"},{"attributes":{},"id":"b60b3ea8-f221-4c71-9a3e-409c24ceae98","type":"ResetTool"},{"attributes":{},"id":"08513d6c-6ed8-46a8-ae00-148810410c9f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0bde8d4e-b938-4156-b9ee-1eab8f708881","type":"Patch"},{"attributes":{"callback":null},"id":"b233b7c4-ea94-4138-8472-ab46480b5a14","type":"DataRange1d"},{"attributes":{},"id":"ac852dde-beee-4c13-8ea1-61da7b0893c6","type":"BasicTicker"},{"attributes":{},"id":"65ed6f93-e574-4068-97ab-a01d669f3290","type":"BasicTicker"},{"attributes":{"data_source":{"id":"e71c8101-458e-430e-8f38-f77fc1f13553","type":"ColumnDataSource"},"glyph":{"id":"0bde8d4e-b938-4156-b9ee-1eab8f708881","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9c753c98-79f2-4845-8ed9-af98aaa2379a","type":"Patch"},"selection_glyph":null,"view":{"id":"f6f67200-f0cb-460d-8c76-a7c6e3ee5045","type":"CDSView"}},"id":"1d0864b2-7fc9-4b24-9e1e-2496742bd627","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"f1978312-5752-4333-b5ad-0bea48fe1d54","type":"BasicTickFormatter"},"plot":{"id":"3cd18bf4-e390-4cb9-a19f-77f8e34b9a83","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac852dde-beee-4c13-8ea1-61da7b0893c6","type":"BasicTicker"}},"id":"8809ab4c-f1b0-44ad-903c-f4a8365ede60","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"e71c8101-458e-430e-8f38-f77fc1f13553","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"8e352679-4283-42d5-8e50-bed05cef5680","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a134f743-b73e-4827-a846-02b1253adc1e","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c753c98-79f2-4845-8ed9-af98aaa2379a","type":"Patch"},{"attributes":{"formatter":{"id":"08513d6c-6ed8-46a8-ae00-148810410c9f","type":"BasicTickFormatter"},"plot":{"id":"3cd18bf4-e390-4cb9-a19f-77f8e34b9a83","subtype":"Figure","type":"Plot"},"ticker":{"id":"65ed6f93-e574-4068-97ab-a01d669f3290","type":"BasicTicker"}},"id":"af784b9c-f799-4d33-b846-07bc2b89b07b","type":"LinearAxis"},{"attributes":{},"id":"adebe9f9-0093-4f25-9d9b-658a1d9505cb","type":"HelpTool"},{"attributes":{},"id":"972488d7-c60d-4c15-8a00-6977f092aad8","type":"LinearScale"},{"attributes":{},"id":"18a073aa-481f-48f3-908c-0a52be21d3dc","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"3cd18bf4-e390-4cb9-a19f-77f8e34b9a83","subtype":"Figure","type":"Plot"},"ticker":{"id":"65ed6f93-e574-4068-97ab-a01d669f3290","type":"BasicTicker"}},"id":"40c598fb-ed23-4d0c-9171-2e69b104449b","type":"Grid"},{"attributes":{"plot":{"id":"3cd18bf4-e390-4cb9-a19f-77f8e34b9a83","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac852dde-beee-4c13-8ea1-61da7b0893c6","type":"BasicTicker"}},"id":"acda87da-9a96-4935-9daf-54bb9a6161ac","type":"Grid"},{"attributes":{},"id":"3cf89eaf-39f8-49f7-8bc8-d5bbec25560a","type":"SaveTool"},{"attributes":{"overlay":{"id":"a134f743-b73e-4827-a846-02b1253adc1e","type":"BoxAnnotation"}},"id":"1a339125-54fd-46ca-bbad-aec103eb901b","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"176c5b56-81f9-40da-8b67-f6dfc90176da","type":"PanTool"},{"id":"f03317b6-566f-459f-ab3c-b8de3c3dd2ae","type":"WheelZoomTool"},{"id":"1a339125-54fd-46ca-bbad-aec103eb901b","type":"BoxZoomTool"},{"id":"3cf89eaf-39f8-49f7-8bc8-d5bbec25560a","type":"SaveTool"},{"id":"b60b3ea8-f221-4c71-9a3e-409c24ceae98","type":"ResetTool"},{"id":"adebe9f9-0093-4f25-9d9b-658a1d9505cb","type":"HelpTool"}]},"id":"a5ceeb29-5ce2-4478-88bc-d2a8515bdf58","type":"Toolbar"},{"attributes":{"callback":null},"id":"98a3a5f2-4ab6-44c6-bb08-0fae4acb78fa","type":"DataRange1d"}],"root_ids":["3cd18bf4-e390-4cb9-a19f-77f8e34b9a83"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e86510d7-d8de-4981-957f-4c327a7d81b9","elementid":"bf67c378-255d-4979-be3c-bac32d071228","modelid":"3cd18bf4-e390-4cb9-a19f-77f8e34b9a83"}];
                
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
