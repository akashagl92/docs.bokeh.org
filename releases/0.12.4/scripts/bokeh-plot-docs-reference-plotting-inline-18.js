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
      };var element = document.getElementById("29483d62-fc97-4233-b06c-ccf59dbb4961");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '29483d62-fc97-4233-b06c-ccf59dbb4961' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"58c33623-afe6-4313-8a4b-0c7e9fac7a14":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"b3625d68-acac-4866-b3ee-47f50bf7cc5b","type":"Title"},{"attributes":{"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"}},"id":"6ad94805-cc4d-43c9-8807-c8bef37ef887","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"23fe94b8-5410-41b3-8b17-0f84e071fd1f","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"93e089b3-2bdc-4362-a2e3-17da2a08fde8","type":"Rect"},{"attributes":{"callback":null},"id":"04807519-538a-47a0-8780-ef72b2707dc9","type":"DataRange1d"},{"attributes":{"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"}},"id":"e06a5ca9-22b2-4e14-a0e5-4fdc2a3be9b4","type":"SaveTool"},{"attributes":{},"id":"a4a2d5d4-2964-4fc8-a795-c4bec9a803a0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"}},"id":"b53489e4-3d25-45ab-a08e-447e285233f2","type":"PanTool"},{"attributes":{},"id":"eb7bb3bc-e328-4bb6-91b1-f2eb58aade3b","type":"BasicTicker"},{"attributes":{},"id":"443cf57a-b5bd-43ac-ad3d-b2c51775bb61","type":"BasicTickFormatter"},{"attributes":{},"id":"d53d5538-d07c-4736-9820-d6a5b45db2a4","type":"ToolEvents"},{"attributes":{"formatter":{"id":"443cf57a-b5bd-43ac-ad3d-b2c51775bb61","type":"BasicTickFormatter"},"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4421811-a003-435a-81d5-87fc960e96b1","type":"BasicTicker"}},"id":"6fe6104a-4743-4834-b3e8-193f8d9b5e73","type":"LinearAxis"},{"attributes":{"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"}},"id":"15e6b0f1-7f1e-4023-a949-51a461105bae","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4421811-a003-435a-81d5-87fc960e96b1","type":"BasicTicker"}},"id":"ebda0034-a627-4eca-a7ca-7ce9f663b071","type":"Grid"},{"attributes":{"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"}},"id":"b13618d1-bc13-492b-add5-d064e9ae1c4b","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"a4a2d5d4-2964-4fc8-a795-c4bec9a803a0","type":"BasicTickFormatter"},"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb7bb3bc-e328-4bb6-91b1-f2eb58aade3b","type":"BasicTicker"}},"id":"ae279ca4-8f32-4528-b6db-d793e44b4c49","type":"LinearAxis"},{"attributes":{},"id":"b4421811-a003-435a-81d5-87fc960e96b1","type":"BasicTicker"},{"attributes":{"below":[{"id":"ae279ca4-8f32-4528-b6db-d793e44b4c49","type":"LinearAxis"}],"left":[{"id":"6fe6104a-4743-4834-b3e8-193f8d9b5e73","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ae279ca4-8f32-4528-b6db-d793e44b4c49","type":"LinearAxis"},{"id":"dfa0718a-c417-4f99-b5aa-6a6019d1a460","type":"Grid"},{"id":"6fe6104a-4743-4834-b3e8-193f8d9b5e73","type":"LinearAxis"},{"id":"ebda0034-a627-4eca-a7ca-7ce9f663b071","type":"Grid"},{"id":"e4966d4f-a737-4cf3-bc28-20509c72c3c9","type":"BoxAnnotation"},{"id":"c09d3466-c5fa-48a9-b818-0800428ee211","type":"GlyphRenderer"}],"title":{"id":"b3625d68-acac-4866-b3ee-47f50bf7cc5b","type":"Title"},"tool_events":{"id":"d53d5538-d07c-4736-9820-d6a5b45db2a4","type":"ToolEvents"},"toolbar":{"id":"569f7672-3973-4dfc-b3b5-7dfde017c0d5","type":"Toolbar"},"x_range":{"id":"04807519-538a-47a0-8780-ef72b2707dc9","type":"DataRange1d"},"y_range":{"id":"095af533-d282-4b01-a973-ac83d9258e28","type":"DataRange1d"}},"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"23fe94b8-5410-41b3-8b17-0f84e071fd1f","type":"ColumnDataSource"},"glyph":{"id":"93e089b3-2bdc-4362-a2e3-17da2a08fde8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"7a0fe313-5a48-4fff-bf33-dde8a6030bc6","type":"Rect"},"selection_glyph":null},"id":"c09d3466-c5fa-48a9-b818-0800428ee211","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb7bb3bc-e328-4bb6-91b1-f2eb58aade3b","type":"BasicTicker"}},"id":"dfa0718a-c417-4f99-b5aa-6a6019d1a460","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e4966d4f-a737-4cf3-bc28-20509c72c3c9","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"e4966d4f-a737-4cf3-bc28-20509c72c3c9","type":"BoxAnnotation"},"plot":{"id":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6","subtype":"Figure","type":"Plot"}},"id":"c82fb55a-505c-47cd-9204-da8f7441f7f6","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a0fe313-5a48-4fff-bf33-dde8a6030bc6","type":"Rect"},{"attributes":{"callback":null},"id":"095af533-d282-4b01-a973-ac83d9258e28","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b53489e4-3d25-45ab-a08e-447e285233f2","type":"PanTool"},{"id":"b13618d1-bc13-492b-add5-d064e9ae1c4b","type":"WheelZoomTool"},{"id":"c82fb55a-505c-47cd-9204-da8f7441f7f6","type":"BoxZoomTool"},{"id":"e06a5ca9-22b2-4e14-a0e5-4fdc2a3be9b4","type":"SaveTool"},{"id":"15e6b0f1-7f1e-4023-a949-51a461105bae","type":"ResetTool"},{"id":"6ad94805-cc4d-43c9-8807-c8bef37ef887","type":"HelpTool"}]},"id":"569f7672-3973-4dfc-b3b5-7dfde017c0d5","type":"Toolbar"}],"root_ids":["b86c5dcc-28e1-4cfa-850d-43571fe45ad6"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"58c33623-afe6-4313-8a4b-0c7e9fac7a14","elementid":"29483d62-fc97-4233-b06c-ccf59dbb4961","modelid":"b86c5dcc-28e1-4cfa-850d-43571fe45ad6"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
