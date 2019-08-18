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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("aa53a167-1789-49af-88a5-b87c9ee6821f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa53a167-1789-49af-88a5-b87c9ee6821f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"017611b5-9bde-4948-aba9-07751f5f230d":{"roots":{"references":[{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ce77c15-02e4-4392-b7a8-a9dd4b46975c","type":"BasicTicker"}},"id":"d952b81b-e11a-4690-a08f-b88868cc0f4b","type":"Grid"},{"attributes":{"formatter":{"id":"7d54594f-6057-44ff-a5e1-26302a7ec7f0","type":"BasicTickFormatter"},"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"},"ticker":{"id":"03881233-76dd-43a7-8aff-c42c2beb3b41","type":"BasicTicker"}},"id":"2344891d-fcc1-4a0e-8481-3d42e88cf308","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6ac3a9eb-a4a0-48ec-95f3-a60060b4b894","type":"PanTool"},{"id":"47701993-bb29-4710-b606-2bc783140967","type":"WheelZoomTool"},{"id":"cdfe44ae-086e-4705-81d1-69a56c4954e6","type":"BoxZoomTool"},{"id":"63d4d0ff-7c6e-4a7e-ad6e-612606f12074","type":"SaveTool"},{"id":"8e5d3819-a17f-4d3a-8d4f-2abd8f796950","type":"ResetTool"},{"id":"07aed6b9-a4cf-44ca-b903-b52b06efae38","type":"HelpTool"}]},"id":"35a9a379-b6f2-47ca-8ac9-1a9e3190868d","type":"Toolbar"},{"attributes":{"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"}},"id":"47701993-bb29-4710-b606-2bc783140967","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9300a287-780f-4dad-949e-feb20a15cdfa","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"}},"id":"8e5d3819-a17f-4d3a-8d4f-2abd8f796950","type":"ResetTool"},{"attributes":{},"id":"7d54594f-6057-44ff-a5e1-26302a7ec7f0","type":"BasicTickFormatter"},{"attributes":{},"id":"9ce77c15-02e4-4392-b7a8-a9dd4b46975c","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4c286e7-5259-4481-8271-a70df21a41b3","type":"Circle"},{"attributes":{},"id":"2afba7a8-3baf-4c65-a1fa-bd05e3c30426","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"07f7e76c-32ff-4631-911f-624240b085a7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"}},"id":"63d4d0ff-7c6e-4a7e-ad6e-612606f12074","type":"SaveTool"},{"attributes":{"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"}},"id":"07aed6b9-a4cf-44ca-b903-b52b06efae38","type":"HelpTool"},{"attributes":{},"id":"03881233-76dd-43a7-8aff-c42c2beb3b41","type":"BasicTicker"},{"attributes":{},"id":"53d406ec-406e-4870-ba68-b1ee33294633","type":"ToolEvents"},{"attributes":{"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"}},"id":"6ac3a9eb-a4a0-48ec-95f3-a60060b4b894","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"c9b2a654-d8d5-465e-9561-66e1752406cb","type":"Title"},{"attributes":{"formatter":{"id":"2afba7a8-3baf-4c65-a1fa-bd05e3c30426","type":"BasicTickFormatter"},"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ce77c15-02e4-4392-b7a8-a9dd4b46975c","type":"BasicTicker"}},"id":"0f8e62a0-9535-47c6-9389-132d423ab9f8","type":"LinearAxis"},{"attributes":{"below":[{"id":"2344891d-fcc1-4a0e-8481-3d42e88cf308","type":"LinearAxis"}],"left":[{"id":"0f8e62a0-9535-47c6-9389-132d423ab9f8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2344891d-fcc1-4a0e-8481-3d42e88cf308","type":"LinearAxis"},{"id":"8d412a7a-9dfe-46e9-b5de-121626ef8214","type":"Grid"},{"id":"0f8e62a0-9535-47c6-9389-132d423ab9f8","type":"LinearAxis"},{"id":"d952b81b-e11a-4690-a08f-b88868cc0f4b","type":"Grid"},{"id":"9300a287-780f-4dad-949e-feb20a15cdfa","type":"BoxAnnotation"},{"id":"3bcf34e6-f1a0-456e-8bb2-8034e51c5f0e","type":"GlyphRenderer"}],"title":{"id":"c9b2a654-d8d5-465e-9561-66e1752406cb","type":"Title"},"tool_events":{"id":"53d406ec-406e-4870-ba68-b1ee33294633","type":"ToolEvents"},"toolbar":{"id":"35a9a379-b6f2-47ca-8ac9-1a9e3190868d","type":"Toolbar"},"x_range":{"id":"acbe495b-0ed1-4087-aaa3-106680099f4e","type":"DataRange1d"},"y_range":{"id":"19aa7c96-8f60-427b-b51b-0e4e27c67d6d","type":"DataRange1d"}},"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"acbe495b-0ed1-4087-aaa3-106680099f4e","type":"DataRange1d"},{"attributes":{"data_source":{"id":"07f7e76c-32ff-4631-911f-624240b085a7","type":"ColumnDataSource"},"glyph":{"id":"c4c286e7-5259-4481-8271-a70df21a41b3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"41c059f1-be7a-4d2e-867f-73338727581d","type":"Circle"},"selection_glyph":null},"id":"3bcf34e6-f1a0-456e-8bb2-8034e51c5f0e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"},"ticker":{"id":"03881233-76dd-43a7-8aff-c42c2beb3b41","type":"BasicTicker"}},"id":"8d412a7a-9dfe-46e9-b5de-121626ef8214","type":"Grid"},{"attributes":{"overlay":{"id":"9300a287-780f-4dad-949e-feb20a15cdfa","type":"BoxAnnotation"},"plot":{"id":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f","subtype":"Figure","type":"Plot"}},"id":"cdfe44ae-086e-4705-81d1-69a56c4954e6","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"41c059f1-be7a-4d2e-867f-73338727581d","type":"Circle"},{"attributes":{"callback":null},"id":"19aa7c96-8f60-427b-b51b-0e4e27c67d6d","type":"DataRange1d"}],"root_ids":["efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"017611b5-9bde-4948-aba9-07751f5f230d","elementid":"aa53a167-1789-49af-88a5-b87c9ee6821f","modelid":"efc91e5e-34c3-4e57-8eb1-bdac4ac3a20f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
