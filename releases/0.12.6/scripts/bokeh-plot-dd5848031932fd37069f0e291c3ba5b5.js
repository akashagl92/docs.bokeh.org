(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("3f543241-8db2-44d0-a7da-92712b2ae904");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3f543241-8db2-44d0-a7da-92712b2ae904' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"7d15db84-cf54-4275-995c-f4929124a325":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b104662c-5461-4348-82a1-6465fc9225c1","type":"PanTool"},{"id":"6b2da19b-3127-454e-b44e-a3500c2d232f","type":"WheelZoomTool"},{"id":"f1309042-9a28-498b-9550-041d183626f5","type":"BoxZoomTool"},{"id":"c69391a3-e3d3-4889-bd89-8a5097edd978","type":"SaveTool"},{"id":"e3ace53d-c3cf-4540-86b1-4d10b60a78fe","type":"ResetTool"},{"id":"52b43911-2a0b-4a38-b622-8709e1e7fe19","type":"HelpTool"}]},"id":"4e557934-e30e-456a-97cf-8b8219185326","type":"Toolbar"},{"attributes":{"below":[{"id":"3d903589-29b7-4d6b-8626-3da6c07fe454","type":"LinearAxis"}],"left":[{"id":"29187ea2-71d6-4095-ae79-b1ee903222f8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3d903589-29b7-4d6b-8626-3da6c07fe454","type":"LinearAxis"},{"id":"d0905bbf-7439-4b82-8029-bcef09ee525c","type":"Grid"},{"id":"29187ea2-71d6-4095-ae79-b1ee903222f8","type":"LinearAxis"},{"id":"1557229d-d4ae-4d00-a243-95fb054fb9a4","type":"Grid"},{"id":"03438a84-79aa-4429-b12c-39167f6a8ed5","type":"BoxAnnotation"},{"id":"f8b879e3-2818-4583-8cb3-20b20865cc3a","type":"GlyphRenderer"}],"title":{"id":"f4bfba63-5c58-4730-99d1-5b8fb85631d3","type":"Title"},"tool_events":{"id":"7b59aea1-bc5b-42e5-9bfe-81e7593c5c36","type":"ToolEvents"},"toolbar":{"id":"4e557934-e30e-456a-97cf-8b8219185326","type":"Toolbar"},"x_range":{"id":"43ae3acc-ba6b-4734-ab58-7b2a1480daab","type":"DataRange1d"},"x_scale":{"id":"0b2f6c15-5a3e-4102-8762-51ce909334d2","type":"LinearScale"},"y_range":{"id":"896c2d63-f8d4-4f95-9992-01a74d1bf8b0","type":"DataRange1d"},"y_scale":{"id":"d9c07636-3f61-4fe1-8263-c82cdea26d9b","type":"LinearScale"}},"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"}},"id":"e3ace53d-c3cf-4540-86b1-4d10b60a78fe","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"3cc90e15-16ec-4688-903e-dcce98f26c68","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4f478b33-04d8-463c-8828-5d11533bab51","type":"BasicTickFormatter"},"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa76796c-52c9-484a-b68f-209b5e756b9c","type":"BasicTicker"}},"id":"3d903589-29b7-4d6b-8626-3da6c07fe454","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8144b533-7ded-45e3-9116-fac8f0e45ffa","type":"Circle"},{"attributes":{},"id":"4f478b33-04d8-463c-8828-5d11533bab51","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"03438a84-79aa-4429-b12c-39167f6a8ed5","type":"BoxAnnotation"},{"attributes":{},"id":"943d620f-b93e-4e1f-a6fa-8be2224dcb9d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"}},"id":"6b2da19b-3127-454e-b44e-a3500c2d232f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"}},"id":"52b43911-2a0b-4a38-b622-8709e1e7fe19","type":"HelpTool"},{"attributes":{},"id":"3e1f3a83-028e-4990-ba81-31a03322226c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"943d620f-b93e-4e1f-a6fa-8be2224dcb9d","type":"BasicTickFormatter"},"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e1f3a83-028e-4990-ba81-31a03322226c","type":"BasicTicker"}},"id":"29187ea2-71d6-4095-ae79-b1ee903222f8","type":"LinearAxis"},{"attributes":{},"id":"aa76796c-52c9-484a-b68f-209b5e756b9c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"03438a84-79aa-4429-b12c-39167f6a8ed5","type":"BoxAnnotation"},"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"}},"id":"f1309042-9a28-498b-9550-041d183626f5","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e1f3a83-028e-4990-ba81-31a03322226c","type":"BasicTicker"}},"id":"1557229d-d4ae-4d00-a243-95fb054fb9a4","type":"Grid"},{"attributes":{"callback":null},"id":"43ae3acc-ba6b-4734-ab58-7b2a1480daab","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3cc90e15-16ec-4688-903e-dcce98f26c68","type":"ColumnDataSource"},"glyph":{"id":"8144b533-7ded-45e3-9116-fac8f0e45ffa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7d24fec2-61a4-4521-91bc-8294c54b4564","type":"Circle"},"selection_glyph":null},"id":"f8b879e3-2818-4583-8cb3-20b20865cc3a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa76796c-52c9-484a-b68f-209b5e756b9c","type":"BasicTicker"}},"id":"d0905bbf-7439-4b82-8029-bcef09ee525c","type":"Grid"},{"attributes":{},"id":"d9c07636-3f61-4fe1-8263-c82cdea26d9b","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d24fec2-61a4-4521-91bc-8294c54b4564","type":"Circle"},{"attributes":{"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"}},"id":"b104662c-5461-4348-82a1-6465fc9225c1","type":"PanTool"},{"attributes":{"callback":null},"id":"896c2d63-f8d4-4f95-9992-01a74d1bf8b0","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"f4bfba63-5c58-4730-99d1-5b8fb85631d3","type":"Title"},{"attributes":{"plot":{"id":"68d90a29-930b-4dfa-90cc-741ce8705df7","subtype":"Figure","type":"Plot"}},"id":"c69391a3-e3d3-4889-bd89-8a5097edd978","type":"SaveTool"},{"attributes":{},"id":"0b2f6c15-5a3e-4102-8762-51ce909334d2","type":"LinearScale"},{"attributes":{},"id":"7b59aea1-bc5b-42e5-9bfe-81e7593c5c36","type":"ToolEvents"}],"root_ids":["68d90a29-930b-4dfa-90cc-741ce8705df7"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"7d15db84-cf54-4275-995c-f4929124a325","elementid":"3f543241-8db2-44d0-a7da-92712b2ae904","modelid":"68d90a29-930b-4dfa-90cc-741ce8705df7"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
