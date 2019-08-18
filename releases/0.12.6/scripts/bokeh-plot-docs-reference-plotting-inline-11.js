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
      };var element = document.getElementById("4f357286-d11c-42cd-b593-84c2e35d9bcc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4f357286-d11c-42cd-b593-84c2e35d9bcc' but no matching script tag was found. ")
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
                var docs_json = {"c364da1d-1597-4362-9fab-366b7e842dfb":{"roots":{"references":[{"attributes":{"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"}},"id":"5c0547e6-d3b7-429e-bf67-2a4219097a2c","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"line"},"id":"fa6cd982-e55d-462d-b5da-74e59c137b0a","type":"Title"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e1b1fe8-9152-4ae1-8fda-b7c81a60b6e0","type":"Line"},{"attributes":{},"id":"0dcf8e39-0629-4750-82d6-fa81323a8a0c","type":"LinearScale"},{"attributes":{"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"}},"id":"7efed5d6-8a99-46cc-b06d-eb9bddd631ac","type":"HelpTool"},{"attributes":{"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"}},"id":"8fac1a39-b423-4f89-896d-2bb812d93d15","type":"ResetTool"},{"attributes":{"data_source":{"id":"a815c14c-7359-4326-81fb-040c56d10b4d","type":"ColumnDataSource"},"glyph":{"id":"3e1b1fe8-9152-4ae1-8fda-b7c81a60b6e0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3014e984-17f5-4eb0-8d3b-869c0c55ddf3","type":"Line"},"selection_glyph":null},"id":"0a669bfc-669d-42ae-b492-d2ba87781564","type":"GlyphRenderer"},{"attributes":{},"id":"a43cbf03-9b4a-4129-811c-8839b4db8327","type":"LinearScale"},{"attributes":{"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"}},"id":"eb1e3e66-1776-4736-923e-b5e7a4cc57d4","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3014e984-17f5-4eb0-8d3b-869c0c55ddf3","type":"Line"},{"attributes":{"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"}},"id":"70b7694d-93ac-42f1-b873-1697eed61c61","type":"PanTool"},{"attributes":{"formatter":{"id":"2a0e8437-8423-4e8d-ba76-dc713e7fcda8","type":"BasicTickFormatter"},"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"},"ticker":{"id":"58a8fdef-6114-4d96-9c8c-b0fd159e2b74","type":"BasicTicker"}},"id":"653b6a1a-ba64-403a-8baf-17a18cbc3be7","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ab06d55-8780-45ad-9994-42c854bcb745","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"b9c9ef76-bede-4255-90a2-350c3695139b","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"a815c14c-7359-4326-81fb-040c56d10b4d","type":"ColumnDataSource"},{"attributes":{},"id":"a5201bff-c8b6-4f52-92e7-2f7449ed1edd","type":"BasicTicker"},{"attributes":{"overlay":{"id":"3ab06d55-8780-45ad-9994-42c854bcb745","type":"BoxAnnotation"},"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"}},"id":"979ee2d5-cf31-420a-a400-d97d5f090b52","type":"BoxZoomTool"},{"attributes":{},"id":"58a8fdef-6114-4d96-9c8c-b0fd159e2b74","type":"BasicTicker"},{"attributes":{"below":[{"id":"653b6a1a-ba64-403a-8baf-17a18cbc3be7","type":"LinearAxis"}],"left":[{"id":"abf53b1d-f6c3-4998-a40d-8edc6b93db28","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"653b6a1a-ba64-403a-8baf-17a18cbc3be7","type":"LinearAxis"},{"id":"befad4d2-cd2d-4916-b1a7-24a72c7a6683","type":"Grid"},{"id":"abf53b1d-f6c3-4998-a40d-8edc6b93db28","type":"LinearAxis"},{"id":"8977e8fe-036f-4c0c-a0c9-2a9c3e349100","type":"Grid"},{"id":"3ab06d55-8780-45ad-9994-42c854bcb745","type":"BoxAnnotation"},{"id":"0a669bfc-669d-42ae-b492-d2ba87781564","type":"GlyphRenderer"}],"title":{"id":"fa6cd982-e55d-462d-b5da-74e59c137b0a","type":"Title"},"tool_events":{"id":"3b13d4c1-de1b-44d2-a771-f838ae69b74e","type":"ToolEvents"},"toolbar":{"id":"59f2ab4b-29ba-49d4-ad01-57d583545f90","type":"Toolbar"},"x_range":{"id":"bc1c7cd3-e8f4-497f-b3d3-b3fe11b63af3","type":"DataRange1d"},"x_scale":{"id":"a43cbf03-9b4a-4129-811c-8839b4db8327","type":"LinearScale"},"y_range":{"id":"b9c9ef76-bede-4255-90a2-350c3695139b","type":"DataRange1d"},"y_scale":{"id":"0dcf8e39-0629-4750-82d6-fa81323a8a0c","type":"LinearScale"}},"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"},"ticker":{"id":"58a8fdef-6114-4d96-9c8c-b0fd159e2b74","type":"BasicTicker"}},"id":"befad4d2-cd2d-4916-b1a7-24a72c7a6683","type":"Grid"},{"attributes":{},"id":"2a0e8437-8423-4e8d-ba76-dc713e7fcda8","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70b7694d-93ac-42f1-b873-1697eed61c61","type":"PanTool"},{"id":"5c0547e6-d3b7-429e-bf67-2a4219097a2c","type":"WheelZoomTool"},{"id":"979ee2d5-cf31-420a-a400-d97d5f090b52","type":"BoxZoomTool"},{"id":"eb1e3e66-1776-4736-923e-b5e7a4cc57d4","type":"SaveTool"},{"id":"8fac1a39-b423-4f89-896d-2bb812d93d15","type":"ResetTool"},{"id":"7efed5d6-8a99-46cc-b06d-eb9bddd631ac","type":"HelpTool"}]},"id":"59f2ab4b-29ba-49d4-ad01-57d583545f90","type":"Toolbar"},{"attributes":{},"id":"3b13d4c1-de1b-44d2-a771-f838ae69b74e","type":"ToolEvents"},{"attributes":{"formatter":{"id":"e5d649dd-aa7a-46fd-9d77-71183bee4511","type":"BasicTickFormatter"},"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5201bff-c8b6-4f52-92e7-2f7449ed1edd","type":"BasicTicker"}},"id":"abf53b1d-f6c3-4998-a40d-8edc6b93db28","type":"LinearAxis"},{"attributes":{"callback":null},"id":"bc1c7cd3-e8f4-497f-b3d3-b3fe11b63af3","type":"DataRange1d"},{"attributes":{},"id":"e5d649dd-aa7a-46fd-9d77-71183bee4511","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"776b04a7-4226-42e6-9891-5274649e9267","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5201bff-c8b6-4f52-92e7-2f7449ed1edd","type":"BasicTicker"}},"id":"8977e8fe-036f-4c0c-a0c9-2a9c3e349100","type":"Grid"}],"root_ids":["776b04a7-4226-42e6-9891-5274649e9267"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"c364da1d-1597-4362-9fab-366b7e842dfb","elementid":"4f357286-d11c-42cd-b593-84c2e35d9bcc","modelid":"776b04a7-4226-42e6-9891-5274649e9267"}];
                
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
