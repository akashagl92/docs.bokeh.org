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
      };var element = document.getElementById("428e7404-bc2c-4a0b-9e1f-cfd219a91f33");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '428e7404-bc2c-4a0b-9e1f-cfd219a91f33' but no matching script tag was found. ")
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
                    var docs_json = {"618a40ef-7b03-419e-8571-365846364cd5":{"roots":{"references":[{"attributes":{},"id":"b522f6f3-4431-4005-ba8d-ff548b2f581d","type":"ResetTool"},{"attributes":{},"id":"329f76f8-01ee-4049-8e81-bb37d6da5178","type":"HelpTool"},{"attributes":{"data_source":{"id":"d6eaee5d-4f88-46fd-b80b-1ea0749e5055","type":"ColumnDataSource"},"glyph":{"id":"301f5c12-5f52-4cff-a3ab-4baff0a18571","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9385e8cd-f903-4179-bed9-86bca4e476bb","type":"Rect"},"selection_glyph":null,"view":{"id":"1ea146db-d8ae-4956-aa29-aaf41feeb8d5","type":"CDSView"}},"id":"c9475a99-6c66-4119-8eb2-383617c3647a","type":"GlyphRenderer"},{"attributes":{},"id":"924b0f1c-7ea0-496d-80f7-f602dbfa73fe","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"335d96ef-a66b-45c8-9cde-ae34aceaae85","type":"Title"},{"attributes":{"plot":{"id":"24d00b3c-fd5e-4e92-923d-667269ab1419","subtype":"Figure","type":"Plot"},"ticker":{"id":"811e02f0-215f-4256-b6a7-7453c3773438","type":"BasicTicker"}},"id":"af843064-b5bf-43c0-ae3b-9088e809e3dc","type":"Grid"},{"attributes":{},"id":"bee2a08b-6db5-4765-9790-815366e1f4a7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"bee2a08b-6db5-4765-9790-815366e1f4a7","type":"BasicTickFormatter"},"plot":{"id":"24d00b3c-fd5e-4e92-923d-667269ab1419","subtype":"Figure","type":"Plot"},"ticker":{"id":"811e02f0-215f-4256-b6a7-7453c3773438","type":"BasicTicker"}},"id":"be9bf634-07bc-4e36-a40a-6a70a9af97d1","type":"LinearAxis"},{"attributes":{},"id":"811e02f0-215f-4256-b6a7-7453c3773438","type":"BasicTicker"},{"attributes":{"formatter":{"id":"158d535e-bf16-4a5f-8f45-f0a76e5c17b8","type":"BasicTickFormatter"},"plot":{"id":"24d00b3c-fd5e-4e92-923d-667269ab1419","subtype":"Figure","type":"Plot"},"ticker":{"id":"fbbbb5e9-4126-4090-9b7f-ed680d08f440","type":"BasicTicker"}},"id":"9c58b633-c647-4ce8-b17d-ba9503741255","type":"LinearAxis"},{"attributes":{"callback":null},"id":"25d56f50-4792-4a80-a05f-dfd2fad7dadd","type":"DataRange1d"},{"attributes":{},"id":"fbbbb5e9-4126-4090-9b7f-ed680d08f440","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d6eaee5d-4f88-46fd-b80b-1ea0749e5055","type":"ColumnDataSource"},{"attributes":{},"id":"cb9d8f96-a6a6-4710-bc2e-15aafe21cc6b","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"24d00b3c-fd5e-4e92-923d-667269ab1419","subtype":"Figure","type":"Plot"},"ticker":{"id":"fbbbb5e9-4126-4090-9b7f-ed680d08f440","type":"BasicTicker"}},"id":"e81a7d32-a546-437d-bccb-841e1e99edc0","type":"Grid"},{"attributes":{"source":{"id":"d6eaee5d-4f88-46fd-b80b-1ea0749e5055","type":"ColumnDataSource"}},"id":"1ea146db-d8ae-4956-aa29-aaf41feeb8d5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9385e8cd-f903-4179-bed9-86bca4e476bb","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a15d1e91-c1a8-4017-afa8-4bacbfe27315","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"28de8b23-5d31-4c4a-96de-c8f784dfbab0","type":"PanTool"},{"id":"121ba9f8-c9dc-4163-bbf4-045b0c9ef74d","type":"WheelZoomTool"},{"id":"196c84b8-4333-4799-a1d3-973da9788184","type":"BoxZoomTool"},{"id":"c76301e6-acfe-4b52-8430-d6c39fe1c695","type":"SaveTool"},{"id":"b522f6f3-4431-4005-ba8d-ff548b2f581d","type":"ResetTool"},{"id":"329f76f8-01ee-4049-8e81-bb37d6da5178","type":"HelpTool"}]},"id":"93e431cf-f2de-4d00-acdc-d9ee3387e409","type":"Toolbar"},{"attributes":{},"id":"28de8b23-5d31-4c4a-96de-c8f784dfbab0","type":"PanTool"},{"attributes":{},"id":"158d535e-bf16-4a5f-8f45-f0a76e5c17b8","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"301f5c12-5f52-4cff-a3ab-4baff0a18571","type":"Rect"},{"attributes":{},"id":"121ba9f8-c9dc-4163-bbf4-045b0c9ef74d","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"be9bf634-07bc-4e36-a40a-6a70a9af97d1","type":"LinearAxis"}],"left":[{"id":"9c58b633-c647-4ce8-b17d-ba9503741255","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"be9bf634-07bc-4e36-a40a-6a70a9af97d1","type":"LinearAxis"},{"id":"af843064-b5bf-43c0-ae3b-9088e809e3dc","type":"Grid"},{"id":"9c58b633-c647-4ce8-b17d-ba9503741255","type":"LinearAxis"},{"id":"e81a7d32-a546-437d-bccb-841e1e99edc0","type":"Grid"},{"id":"a15d1e91-c1a8-4017-afa8-4bacbfe27315","type":"BoxAnnotation"},{"id":"c9475a99-6c66-4119-8eb2-383617c3647a","type":"GlyphRenderer"}],"title":{"id":"335d96ef-a66b-45c8-9cde-ae34aceaae85","type":"Title"},"toolbar":{"id":"93e431cf-f2de-4d00-acdc-d9ee3387e409","type":"Toolbar"},"x_range":{"id":"c2a07348-d509-45d1-9cbe-8f7d200ea537","type":"DataRange1d"},"x_scale":{"id":"cb9d8f96-a6a6-4710-bc2e-15aafe21cc6b","type":"LinearScale"},"y_range":{"id":"25d56f50-4792-4a80-a05f-dfd2fad7dadd","type":"DataRange1d"},"y_scale":{"id":"924b0f1c-7ea0-496d-80f7-f602dbfa73fe","type":"LinearScale"}},"id":"24d00b3c-fd5e-4e92-923d-667269ab1419","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"a15d1e91-c1a8-4017-afa8-4bacbfe27315","type":"BoxAnnotation"}},"id":"196c84b8-4333-4799-a1d3-973da9788184","type":"BoxZoomTool"},{"attributes":{},"id":"c76301e6-acfe-4b52-8430-d6c39fe1c695","type":"SaveTool"},{"attributes":{"callback":null},"id":"c2a07348-d509-45d1-9cbe-8f7d200ea537","type":"DataRange1d"}],"root_ids":["24d00b3c-fd5e-4e92-923d-667269ab1419"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"618a40ef-7b03-419e-8571-365846364cd5","elementid":"428e7404-bc2c-4a0b-9e1f-cfd219a91f33","modelid":"24d00b3c-fd5e-4e92-923d-667269ab1419"}];
                
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
